import geopandas 
import json


s = '{"type":"FeatureCollection","features":[{"type":"Feature","properties":{"value":1},"geometry":{"type":"Polygon","coordinates":[[[98.948109,14.199648],[98.948109,15.071725],[99.90923,15.071725],[99.90923,14.199648],[98.948109,14.199648]]]}},{"type":"Feature","properties":{"value":1},"geometry":{"type":"Polygon","coordinates":[[[99.349034,12.456305],[99.349034,13.169059],[100.425489,13.169059],[100.425489,12.456305],[99.349034,12.456305]]]}}]}'
x = json.loads(s)

g1 = geopandas.GeoDataFrame.from_features(x["features"])
g2 = geopandas.GeoDataFrame.from_features(x["features"])

g12 = g1.merge(g2)
print(g1.head())
print(g2.head())
print(g12.head())


# 2021-04-01
# lat,lon,brightness,scan,track,acq_date,acq_time,satellite,instrument,confidence,version,bright_t31,frp,daynight,type
18.8556,98.8953,313.7,1,1,2021-04-01,1541,Terra,MODIS,86,6.03,296.1,10,N,0
18.85127,98.89941,313.5,0.44,0.46,2021-04-01,1924,1,VIIRS,n,2.0NRT,293.5,2.1,N
18.85197,98.89569, 333.6, 0.44, 0.46, 2021-04-01, 1924, 1, VIIRS, n, 2.0NRT, 294.3, 2.1, N
18.85533,98.90103,311.3,0.44,0.46,2021-04-01,1924,1,VIIRS,n,2.0NRT,294.6,2.1,N
18.85604,98.89729,316.4,0.44,0.46,2021-04-01,1924,1,VIIRS,n,2.0NRT,295.1,2.1,N
18.853554,98.904602,308.56,0.47,0.48,2021-04-01,1830,N,VIIRS,n,1,293.4,1.74,N,0
18.854134,98.899841,318.14,0.47,0.48,2021-04-01,1830,N,VIIRS,n,1,294.81,1.74,N,0

18.842318902943624, 98.900653229319
