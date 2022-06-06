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