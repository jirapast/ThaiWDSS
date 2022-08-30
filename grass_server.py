# from curses import A_ALTCHARSET
from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware

import os
import sys
import json
import time
import shutil
import pyproj
import geopandas
import subprocess
import numpy as np
# import osmnx
import pandas

import grass.script as gs
import grass.script.setup as gsetup
from grass import script
from grass.pygrass.modules.shortcuts import raster as r, vector as v, general as g, display as d
from grass.pygrass.modules import Module as run_command

from google.cloud import storage

import configparser

config = configparser.ConfigParser()
config.read('config.ini')

import ee
ee.Initialize()

app = FastAPI()

# origins = [
#     config['CLOUD']['APP_ENGINE_URL'],
#     "http://localhost:3000",
#     "https://localhost:3000",
#     "http://localhost:8080",
#     "https://localhost:8080"
# ]

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



pwd = config['CLOUD']['COMPUTE_ENGINE_1_PWD']
google_cloud_storage_key_json = config['CLOUD']['GOOGLE_CLOUD_STORAGE_KEY']
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = (pwd + google_cloud_storage_key_json)

FOLDER = config['CLOUD']['COMPUTE_ENGINE_1_FOLDER']

storage_client = storage.Client()
bucket_name = config['CLOUD']['GOOGLE_CLOUD_BUCKET_NAME']

# /home/g6272018621/gcp-app5-95896060279a.json
aoi = None

EPSG = "EPSG: 5070"

LNG1 = 98.717804
LNG2 = 98.722298
LAT1 = 18.850111
LAT2 = 18.850967

WIND_DIR = 90 + 90
WIND_SPE = 400

ACTIVE_FIRES = [('98.717804', '18.850111'), ('98.722298', '18.850967'), ('98.716827', '18.852194')]
active_fire_image = ee.Image(0)
FIRE_BREAK = [ ]




# def delete_from_gcloud_storage(bucket_name, blob_name):
    # """Deletes a blob from the bucket."""
    # bucket_name = "your-bucket-name"
    # blob_name = "your-object-name"
    # storage_client = storage.Client()
    # bucket = storage.Client().bucket(bucket_name)
    # storage.Client().bucket(bucket_name).blob(blob_name).delete()
    # blob.delete()
    # print(f"Blob {blob_name} deleted.")


def delete_file(FILE):
    if os.path.exists(FILE) == True:
        os.remove(FILE)
        while os.path.exists(FILE) == True:
            time.sleep(0.1)
    if os.path.exists(FILE) == False:
        pass
    return


def delete_folder(DIR):
    if os.path.exists(DIR):
        try:
            shutil.rmtree(DIR)
        except OSError as e:
            print("Error: %s - %s." % (e.filename, e.strerror))
        while os.path.exists(DIR) == True:
            time.sleep(0.1)
    else:
        return


def wait_4_ready(FILE):
    while os.path.exists(FILE) == False:
        time.sleep(0.1)
    if os.path.exists(FILE) == False:
        raise Exception
    return


def clear_work_space(dir):
    if os.path.exists(dir) == False:
        os.mkdir(dir)
    else:
        delete_folder(dir)
        os.mkdir(dir)
    wait_4_ready(dir)


def clear_cloud_storage():
    files = ['active_fire', 'dem', 'dir', 'evi', 'fue', 'init_image', 'spe']
    for file in files:
        if storage.Client().bucket(bucket_name).blob(file + '.tif').exists():
            storage.Client().bucket(bucket_name).blob(file + '.tif').delete()
    for file in files:
        while storage.Client().bucket(bucket_name).blob(file + '.tif').exists():
            time.sleep(0.1)



def export_image_to_cloud(image, aoi, desc, epsg='EPSG:4326'):
    if storage.Client().bucket(bucket_name).blob(desc + '.tif').exists():
        storage.Client().bucket(bucket_name).blob(desc + '.tif').delete()
    while storage.Client().bucket(bucket_name).blob(desc + '.tif').exists():
        time.sleep(0.1)
    task = ee.batch.Export.image.toCloudStorage(region=aoi, image=image, description=desc, bucket=bucket_name, fileNamePrefix=desc, scale=30, maxPixels=1e12, crs=epsg)
    task.start(); task.status()
    c = 0
    while storage.Client().bucket(bucket_name).blob(desc + '.tif').exists()==False:
        time.sleep(0.1)
        c += 0.1
        if c==0.1 * 10 * 5: return 'time out - export_image_to_cloud'


def export_fc_to_cloud(fc, desc):
    if storage.Client().bucket(bucket_name).blob(desc).exists():
        storage.Client().bucket(bucket_name).blob(desc).delete()
    task = ee.batch.Export.image.toCloudStorage(collection=fc, description=desc, bucket=bucket_name, fileNamePrefix=desc,fileFormat='GeoJSON')
    task.start(); task.status()
    while storage.Client().bucket(bucket_name).blob(desc).exists()==False:
        time.sleep(0.1)


def download_from_gcloud_storage(gcloud_file_name: str, destination_file_name: str):
    while True:
        if gcloud_file_name in [blob.name for blob in storage_client.list_blobs(bucket_name)]:
            break
        else:
            time.sleep(0.1)

    for blob in storage_client.list_blobs(bucket_name):
        if gcloud_file_name == blob.name:
            blob.download_to_filename(pwd + destination_file_name)
            while True:
                if os.path.exists(pwd + destination_file_name):
                    return 1
                else:
                    time.sleep(0.1)



def convert_land_cover_to_fuel_model(lc):
    def change_ee_image_pixel_value(img, value_a, value_b):
        _mask = lc.eq(value_a)
        new_img = _mask.multiply(value_b).add(img.multiply(_mask.Not()))
        return new_img
    lc = change_ee_image_pixel_value(lc, 0, 3)
    lc = change_ee_image_pixel_value(lc, 20, 3)
    lc = change_ee_image_pixel_value(lc, 30, 6)
    lc = change_ee_image_pixel_value(lc, 40, 4)
    lc = change_ee_image_pixel_value(lc, 50, 6)
    lc = change_ee_image_pixel_value(lc, 60, 1)
    lc = change_ee_image_pixel_value(lc, 70, 0)
    lc = change_ee_image_pixel_value(lc, 80, 0)
    lc = change_ee_image_pixel_value(lc, 90, 0)  # <<<<<urban
    lc = change_ee_image_pixel_value(lc, 100, 6)
    lc = change_ee_image_pixel_value(lc, 200, 0)
    lc = change_ee_image_pixel_value(lc, 111, 6)
    lc = change_ee_image_pixel_value(lc, 112, 6)
    lc = change_ee_image_pixel_value(lc, 113, 6)
    lc = change_ee_image_pixel_value(lc, 114, 6)
    lc = change_ee_image_pixel_value(lc, 115, 6)
    lc = change_ee_image_pixel_value(lc, 116, 6)
    lc = change_ee_image_pixel_value(lc, 121, 5)
    lc = change_ee_image_pixel_value(lc, 122, 5)
    lc = change_ee_image_pixel_value(lc, 123, 5)
    lc = change_ee_image_pixel_value(lc, 124, 5)
    lc = change_ee_image_pixel_value(lc, 125, 5)
    lc = change_ee_image_pixel_value(lc, 126, 5)
    return lc


LC = ee.Image("COPERNICUS/Landcover/100m/Proba-V-C3/Global/2019").select('discrete_classification')
FUE = convert_land_cover_to_fuel_model(LC)


@app.get("/test")
async def test():
    print(1111111111)
    return 123


@app.get("/aoi")
async def aoi(lng1:float=LNG1, lng2:float=LNG2, lat1:float=LAT1, lat2:float=LAT2):
    print('def aoi')
    global aoi, LNG1, LNG2, LAT1, LAT2
    LNG1, LNG2, LAT1, LAT2 = lng1, lng2, lat1, lat2
    aoi = ee.Geometry.Rectangle([LNG1, LAT2, LNG2, LAT1])
    return '/aoi done!'


@app.get('/weather')
async def weather(wind_dir:float=WIND_DIR, wind_spe:float=WIND_SPE):
    print('def weather')
    global WIND_DIR, WIND_SPE 
    # WIND_DIR = wind_dir + 90 # wind direction offset in GRASS GIS
    WIND_DIR = wind_dir + 90 # wind direction offset in GRASS GIS
    WIND_SPE = wind_spe
    return '/weather done!'


@app.get("/active_fires")
async def active_fires(features_collection: str = ''):
    print('def active_fire')
    global ACTIVE_FIRES
    if features_collection != '':
        ACTIVE_FIRES = ee.FeatureCollection(json.loads(features_collection))
    return '/active_fires done!'




@app.get("/grass_1")
async def step_1():
    print(11111)
    clear_work_space(dir=FOLDER)
    clear_cloud_storage()
    return 1


# ACTIVE_FIRES = [('98.717804', '18.850111'), ('98.722298', '18.850967'), ('98.716827', '18.852194')]
# DATE = '2021-03-28'
# lng1, lng2 = 98.717804, 98.722298
# lat1, lat2 = 18.850111, 18.850967

@app.get("/grass_2")
async def step_2(
    # ACTIVE_FIRES: list = [('98.717804', '18.850111'),('98.722298', '18.850967'), ('98.716827', '18.852194')]
): 
    print(2222)
    # AOI = [lng1, lat2, lng2, lat1]
    # AOI = [LNG1, LAT2, LNG2, LAT1]

    # POINTS = []
    # for lng1, lat1 in ACTIVE_FIRES:
    #     lng1, lat1 = float(lng1), float(lat1)
    #     if EPSG == 'EPSG:5070':
    #         lng1, lat1 = pyproj.Transformer.from_crs('EPSG:4326', 'EPSG:5070', always_xy=True).transform(lng1, lat1)
    #     POINTS.append(lng1)
    #     POINTS.append(lat1)

    # delete_file(FOLDER + '/source.txt')
    # f = open(FOLDER + '/source.txt', 'a')
    # for n in range(0, len(POINTS), 2):
    #     f.write(str(POINTS[n]) + ',' + str(POINTS[n+1]) + '\n')
    # f.close()
    # wait_4_ready(FOLDER + '/source.txt')

    # global aoi
    # aoi = ee.Geometry.Rectangle([LNG1, LAT2, LNG2, LAT1])
    export_image_to_cloud(ee.Image(0), aoi, 'init_image', EPSG)
    download_from_gcloud_storage("init_image.tif", "/grass_folder/init_image.tif")
    return {"message": "step_2 done"}


@app.get("/grass_3")
async def step_3():
    print(3333)
    script.setup.init("/usr/lib/grass78", pwd + "/grassdata", "LOCATION5", "PERMANENT")
    script.set_raise_on_error(True)
    script.set_capture_stderr(True)
    clear_work_space(pwd + '/grassdata/')
    delete_folder(pwd + '/grassdata/')
    subprocess.check_call(["grass", '-c', pwd + '/grass_folder/init_image.tif', '-e', pwd + '/grassdata/'])
    subprocess.check_call(["mkdir", pwd + '/grassdata/LOCATION5'])
    subprocess.check_call(["mv", pwd + "/grassdata/PERMANENT", pwd + "/grassdata/LOCATION5"])
    script.run_command('g.region', flags='w')
    return {"message": "step_3 done"}


@app.get("/grass_4")
async def step_4():
    print(444)
    # global aoi
    dir = ee.Image(WIND_DIR)
    export_image_to_cloud(dir, aoi, 'dir', EPSG)
    download_from_gcloud_storage("dir.tif", "/grass_folder/dir.tif")
    return {"message": "step_4 done"}


@app.get("/grass_5")
async def step_5():
    print(555)
    # global aoi
    spe = ee.Image(WIND_SPE)
    export_image_to_cloud(spe, aoi, 'spe', EPSG)
    download_from_gcloud_storage("spe.tif", "/grass_folder/spe.tif")
    return {"message": "step_5 done"}


@app.get("/grass_6")
async def step_6():
    print(6666)
    global active_fire_image
    mask = ee.Image.constant(1).clip(ACTIVE_FIRES.geometry()).mask()
    active_fire_image = ee.Image(0).add(mask)
    export_image_to_cloud(active_fire_image, aoi, 'active_fire', EPSG)
    download_from_gcloud_storage("active_fire.tif", "/grass_folder/active_fire.tif")
    return 1


@app.get("/grass_7")
async def step_7():
    print(777)
    # global aoi
    # aoi = ee.Geometry.Rectangle([LNG1, LAT2, LNG2, LAT1])
    # lc = ee.Image("COPERNICUS/Landcover/100m/Proba-V-C3/Global/2019").select('discrete_classification')
    # fue = convert_land_cover_to_fuel_model(lc)
    global LC, FUE
    FUE = convert_land_cover_to_fuel_model(LC)
    export_image_to_cloud(FUE, aoi, 'fue', EPSG)
    delete_file('/home/g6272018621/grass_folder/fue.tif')
    download_from_gcloud_storage("fue.tif", "/grass_folder/fue.tif")
    return 1


@app.get("/grass_8")
async def step_8():
    
    print(888)
    # global aoi
    # aoi = ee.Geometry.Rectangle([LNG1, LAT2, LNG2, LAT1])
    
    dem = ee.Image('NASA/NASADEM_HGT/001').select('elevation')

    
    export_image_to_cloud(dem, aoi, 'dem', EPSG)
    

    
    download_from_gcloud_storage("dem.tif", "/grass_folder/dem.tif")

    return {"message": "step_8 done"}


@app.get("/grass_9")
async def step_9():
    print(999)
    
    evi = ee.ImageCollection('LANDSAT/LC08/C01/T1_32DAY_EVI').filterDate('2021-01-01', '2022-01-01').select('EVI').mean()
    export_image_to_cloud(evi, aoi, 'evi', EPSG)
    download_from_gcloud_storage("evi.tif", "/grass_folder/evi.tif")
    
    return {"message": "step_9 done"}


@app.get("/grass_10")
# async def step_6( wind_dir: float = 90.0, wind_spe: float = 200.0, H: int = 8):
async def step_6(H: int = 8):
    print('10_10')
    # script.run_command('v.to.rast', input='source', output='source', type='point', use='cat')
    script.run_command('r.import', input=pwd + '/grass_folder' + '/active_fire.tif', output='source', resolution='estimate')

    script.run_command('r.import', input=pwd + '/grass_folder' + '/fue.tif', output='fuel', resolution='estimate')
    script.run_command('r.import', input=pwd + '/grass_folder' + '/evi.tif', output='evi', resolution='estimate')
    script.run_command('r.import', input=pwd + '/grass_folder' + '/dem.tif', output='dem', resolution='estimate')

    global WIND_DIR, WIND_SPE
    script.run_command('r.mapcalc.simple', expression=WIND_SPE, output='wind_speed_x')
    script.run_command('r.mapcalc.simple', expression=WIND_DIR, output='wind_dir_x')
    script.run_command('r.mapcalc.simple', expression='20', output='moisture_100h_x')

    script.run_command('r.slope.aspect', elevation='dem', slope='slope_x', aspect='aspect_x')
    script.run_command('r.mapcalc', expression='moisture_10h_x = moisture_100h_x - 1')
    script.run_command('r.mapcalc', expression='moisture_1h_x = moisture_10h_x - 2')
    script.run_command('r.mapcalc', expression='lfm_x = (417.602 * evi) + 6.78061')
    script.run_command('r.rescale', input='lfm_x', output='lfm_x_scaled', to=(0, 100))

    script.run_command('r.ros',model='fuel',moisture_1h='moisture_1h_x',moisture_live='lfm_x_scaled',velocity='wind_speed_x',direction='wind_dir_x',elevation='dem',slope='slope_x',aspect='aspect_x',base_ros='out_base_ros',max_ros='out_max_ros',direction_ros='out_dir_ros',spotting_distance='out_spotting',)
    script.run_command('r.spread',flags='s',base_ros='out_base_ros',max_ros='out_max_ros',direction_ros='out_dir_ros',start='source',spotting_distance='out_spotting',wind_speed='wind_speed_x',fuel_moisture='moisture_1h_x',output='spread1',lag=60*H*3)

    script.run_command('r.mapcalc', expression='test1 = if( if(spread1 >   0)               && if(spread1 <= ' + str(60*H) + '), 100, null())')
    script.run_command('r.mapcalc', expression='test2 = if( if(spread1 > ' +str(60*H) + ') && if(spread1 <= ' + str(60*H*2) + '), 100, null())')
    script.run_command('r.mapcalc', expression='test3 = if( if(spread1 > ' +str(60*H*2) + ') && if(spread1 <= ' + str(60*H*3) + '), 100, null())')

    script.run_command('r.to.vect', flags='s', input='test1', output='test1', type='area')
    script.run_command('r.to.vect', flags='s', input='test2', output='test2', type='area')
    script.run_command('r.to.vect', flags='s', input='test3', output='test3', type='area')

    delete_file(pwd + '/grass_folder' + '/test1.geojson')
    delete_file(pwd + '/grass_folder' + '/test2.geojson')
    delete_file(pwd + '/grass_folder' + '/test3.geojson')

    script.run_command('v.out.ogr', input='test1', output=pwd + '/grass_folder' + '/test1.geojson', type='area', format='GeoJSON')
    script.run_command('v.out.ogr', input='test2', output=pwd + '/grass_folder' + '/test2.geojson', type='area', format='GeoJSON')
    script.run_command('v.out.ogr', input='test3', output=pwd + '/grass_folder' + '/test3.geojson', type='area', format='GeoJSON')

    wait_4_ready(pwd + '/grass_folder' + '/test1.geojson')
    wait_4_ready(pwd + '/grass_folder' + '/test2.geojson')
    wait_4_ready(pwd + '/grass_folder' + '/test3.geojson')

    return 1


@app.get("/grass_11")
async def step_7():
    print('11_11')
    g1 = geopandas.read_file(pwd + '/grass_folder' + '/test1.geojson')
    g2 = geopandas.read_file(pwd + '/grass_folder' + '/test2.geojson')
    g3 = geopandas.read_file(pwd + '/grass_folder' + '/test3.geojson')

    g1 = geopandas.GeoDataFrame(g1, crs=5070)
    g2 = geopandas.GeoDataFrame(g2, crs=5070)
    g3 = geopandas.GeoDataFrame(g3, crs=5070)

    if g1.empty==False:
        g1.to_crs(4326).to_file(pwd + '/grass_folder' + '/test11.geojson')
        wait_4_ready(pwd + '/grass_folder' + '/test11.geojson')
    
    if g2.empty==False:
        g2.to_crs(4326).to_file(pwd + '/grass_folder' + '/test22.geojson')
        wait_4_ready(pwd + '/grass_folder' + '/test22.geojson')
    
    if g3.empty==False:
        g3.to_crs(4326).to_file(pwd + '/grass_folder' + '/test33.geojson')
        wait_4_ready(pwd + '/grass_folder' + '/test33.geojson')
    return 1


@app.get("/grass_12a")
async def step_12a():
    print('12a_12a')
    if os.path.exists(pwd + '/grass_folder' + '/test11.geojson'):
        return FileResponse(pwd + '/grass_folder' + '/test11.geojson')
    else:
        return 0


@app.get("/grass_12b")
async def step_12b():
    print('12b_12b')
    if os.path.exists(pwd + '/grass_folder' + '/test22.geojson'):
        return FileResponse(pwd + '/grass_folder' + '/test22.geojson')
    else:
        return 0


@app.get("/grass_12c")
async def step_12c():
    print('12c_12c')
    if os.path.exists(pwd + '/grass_folder' + '/test33.geojson'):
        return FileResponse(pwd + '/grass_folder' + '/test33.geojson')
    else:
        return 0


@app.get("/fire_break")
async def fire_break(features_collection: str):
    print('def fire_break')
    global FIRE_BREAK, FUE, LC
    FIRE_BREAK = ee.FeatureCollection(json.loads(features_collection))
    # mask = ee.Image(0).clip(FIRE_BREAK.geometry()).mask().Not()
    # FUE = FUE.multiply(mask)
    # export_image_to_cloud(FUE, aoi, 'fue_break', EPSG)
    mask1 = ee.Image(1).clip(FIRE_BREAK.geometry()).mask().Not()
    mask2 = ee.Image(1).clip(FIRE_BREAK.geometry()).mask().multiply(200)
    LC = LC.multiply(mask1)
    LC = LC.add(mask2)
    return 1


@app.get("/edit_land_cover")
async def land_cover(landcover_collection: str=''):
    print('def land_cover')

    def edit_land_cover(X, H, geo):
        return (X.multiply(X.clip(geo).mask().Not())).add(X.clip(geo).mask().multiply(ee.Image(H)))

    global LC
    x = LC
    x = ee.Image(10)
    fc = ee.FeatureCollection(json.loads(landcover_collection))
    for feat in fc.getInfo()['features']:
        geometry = feat['geometry']
        value = feat['properties']['value']
        x = edit_land_cover(x, value, geometry)
        
    # export_image_to_cloud(x, aoi, 'land_cover', EPSG)
    LC = x
    return 1





# sudo lsof -t -i tcp:8000 | xargs kill -9

@app.get('/get_land_cover')
async def get_land_cover():
    print('def get_land_cover')
    global aoi, LC
    x = LC
    x1 = x.eq(0).multiply(1) # unknows
    x2 = x.eq(20).Or(x.eq(30)).multiply(2) # shrub, herb veg
    x3 = x.eq(40).multiply(3) # Cultivated and managed vegetation 
    x4 = x.eq(50).multiply(4) # Urban 
    x5 = x.eq(60).multiply(5) # Bare / sparse vegetation
    x6 = x.eq(70).Or(x.eq(80)).Or(x.eq(90)).Or(x.eq(200)).multiply(6) # water
    x7 = x.gt(99).And(x.lt(120)).multiply(7)  # closed forest
    x8 = x.gt(120).And(x.lt(130)).multiply(8)  # open forest
    
    x = x1.add(x2).add(x3).add(x4).add(x5).add(x6).add(x7).add(x8)

    m = x.updateMask(x.eq(1).Or(x.eq(2)).Or(x.eq(3)).Or(x.eq(4)).Or(x.eq(5)).Or(x.eq(6)))

    v = m.addBands(x).reduceToVectors(geoemtry=aoi, scale=30, eightConnected=False, labelProperty='value', reducer=ee.Reducer.first())

    export_fc_to_cloud(v, 'land_cover.geojson')
    download_from_gcloud_storage("land_cover.geojson", "/grass_folder/land_cover.geojson")

    if os.path.exists(pwd + '/grass_folder' + '/land_cover.geojson'):
        return FileResponse(pwd + '/grass_folder' + '/land_cover.geojson')
    else:
        return 0
        




@app.get("/damage_assess")
async def fire_break(assess_fire, assess_build):
    print('def damage assess')

    # global FIRE_BREAK, FUE, LC
    # FIRE_BREAK = ee.FeatureCollection(json.loads(features_collection))
    # mask = ee.Image(0).clip(FIRE_BREAK.geometry()).mask().Not()
    # FUE = FUE.multiply(mask)
    # export_image_to_cloud(FUE, aoi, 'fue_break', EPSG)
    # mask1 = ee.Image(1).clip(FIRE_BREAK.geometry()).mask().Not()
    # mask2 = ee.Image(1).clip(FIRE_BREAK.geometry()).mask().multiply(200)
    # LC = LC.multiply(mask1)
    # LC = LC.add(mask2)
    # s = '{"type":"FeatureCollection","features":[{"type":"Feature","properties":{"value":1},"geometry":{"type":"Polygon","coordinates":[[[98.948109,14.199648],[98.948109,15.071725],[99.90923,15.071725],[99.90923,14.199648],[98.948109,14.199648]]]}},{"type":"Feature","properties":{"value":1},"geometry":{"type":"Polygon","coordinates":[[[99.349034,12.456305],[99.349034,13.169059],[100.425489,13.169059],[100.425489,12.456305],[99.349034,12.456305]]]}}]}'

    # g1 = geopandas.GeoDataFrame.from_features(x["features"])
    # g2 = geopandas.GeoDataFrame.from_features(x["features"])
    # return FileResponse(pwd + '/grass_folder' + '/test33.geojson')
    
    b = geopandas.read_file(pwd + '/grass_folder' + '/build_clean.geojson')

    f11 = geopandas.read_file(pwd + '/grass_folder' + '/test11.geojson')
    f22 = geopandas.read_file(pwd + '/grass_folder' + '/test22.geojson')
    f33 = geopandas.read_file(pwd + '/grass_folder' + '/test33.geojson')

    i11 = b.intersection(f11)
    i22 = b.intersection(f22)
    i33 = b.intersection(f33)

    ii = i11
    ii = i22.merge(ii)
    ii = i33.merge(ii)

    ii.to_file(pwd + '/grass_folder' + '/intersect.geojson', driver='GeoJSON')
    
    return FileResponse(pwd + '/grass_folder' + '/intersection.geojson')

    # return { 'damage_assess': 1 }




# @app.get("/osm")
# async def fire_break():
#     print('def damage assess')

#     place_name = ['Nauru', 'Lakeba Island']

#     tags = {'building': True}

#     gdfs = []
#     # for i in place_name:

#     center_point = (lng, lat)
#     gdf = osmnx.geometries_from_point(center_point, tags)
#     gdf["island_name"] = i 
#     gdfs.append(gdf)

#     gdf = pd.concat(gdfs)
#     print(gdf)



#     g = osmnx.geometries_from_bbox(LAT2, LAT1, LNG1, LNG2, {'building':True}
#     lat = list(g['geometry'][0].exterior.coords.xy[1])
#     lng = list(g['geometry'][0].exterior.coords.xy[1])

#     len = len(list(g['geometry'][0].exterior.coords.xy[1]))
#     lat_lng = []
#     for n in range(len):

#         lat_lng.append(())



# LAT1 = 13.67904572441988
# LAT2 = 13.688613076421147
# LNG1 = 100.56691792687728
# LNG2 = 100.58313337940535
# LAT1 = 13.659819496593691
# LAT2 = 13.711295593479461
# LNG1 = 100.53990383393324
# LNG2 = 100.6005087268114
