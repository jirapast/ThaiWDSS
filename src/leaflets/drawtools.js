import React, { useState } from "react";
import { Map, TileLayer, Marker, Popup, FeatureGroup, Circle } from "react-leaflet";
import L from 'leaflet'

import EditControl from './react_leaflet_draw.js' // import { EditControl } from "react-leaflet-draw";

var draw_list = []

const DrawTools = () => {

    const _onEdited = e => {
        let numEdited = 0;
        e.layers.eachLayer(layer => {
            numEdited += 1;
        });
        // console.log(`_onEdited: edited ${numEdited} layers`, e)
        // this._onChange();
    }
    

    const _onCreated = e => {
        if (e.layerType === "marker") {
            // Do marker specific actions
            // console.log("_onCreated: marker created", e);
        } else {
            // console.log("_onCreated: something else created:", e.layerType, e)
        }
        // console.log("geojson", e.layer.toGeoJSON());
        // console.log("coords", e.layer.getLatLngs());
        draw_list.push(e.layer)
    }

    const _onDeleted = e => {
        let numDeleted = 0;
        e.layers.eachLayer(layer => {
            numDeleted += 1;
        });
        // console.log(`onDeleted: removed ${numDeleted} layers`, e);
        draw_list = []
        // this._onChange();
    };

    const _onMounted = drawControl => {
        // console.log("_onMounted", drawControl);
    };

    const _onEditStart = e => {
        // console.log("_onEditStart", e);
    };

    const _onEditStop = e => {
        // console.log("_onEditStop", e);
    };

    const _onDeleteStart = e => {
        // console.log("_onDeleteStart", e);
    };

    const _onDeleteStop = e => {
        // console.log("_onDeleteStop", e);
    };

    const _onDrawStart = e => {
        // console.log("_onDrawStart", e);
    };

    /*onEdited	function	hook to leaflet-draw's draw:edited event
onCreated	function	hook to leaflet-draw's draw:created event
onDeleted	function	hook to leaflet-draw's draw:deleted event
onMounted	function	hook to leaflet-draw's draw:mounted event
onEditStart	function	hook to leaflet-draw's draw:editstart event
onEditStop	function	hook to leaflet-draw's draw:editstop event
onDeleteStart	function	hook to leaflet-draw's draw:deletestart event
onDeleteStop	function	hook to leaflet-draw's draw:deletestop event
onDrawStart	function	hook to leaflet-draw's draw:drawstart event
onDrawStop	function	hook to leaflet-draw's draw:drawstop event
onDrawVertex	function	hook to leaflet-draw's draw:drawvertex event
onEditMove	function	hook to leaflet-draw's draw:editmove event
onEditResize	function	hook to leaflet-draw's draw:editresize event
onEditVertex	function	hook to leaflet-draw's draw:editvertex event*/

    return (
        <FeatureGroup>
            <EditControl
                onDrawStart={_onDrawStart}
                position="bottomleft"
                onEdited={_onEdited}
                onCreated={_onCreated}
                onDeleted={_onDeleted}
                draw={{
                    polyline: {
                        icon: new L.DivIcon({
                            iconSize: new L.Point(8, 8),
                            className: "leaflet-div-icon leaflet-editing-icon"
                        }),
                        shapeOptions: {
                            guidelineDistance: 10,
                            color: "navy",
                            weight: 3
                        }
                    },
                    rectangle: {
                        icon: new L.DivIcon({
                            iconSize: new L.Point(8, 8),
                            className: "leaflet-div-icon leaflet-editing-icon"
                        }),
                        shapeOptions: {
                            guidelineDistance: 10,
                            color: "navy",
                            weight: 3
                        }
                    },
                    // circlemarker: {
                    //     icon: new L.DivIcon({
                    //         iconSize: new L.Point(8, 8),
                    //         className: "leaflet-div-icon leaflet-editing-icon"
                    //     }),
                    //     shapeOptions: {
                    //         guidelineDistance: 10,
                    //         color: "navy",
                    //         weight: 3
                    //     }
                    // },
                    // circle: {
                    //     icon: new L.DivIcon({
                    //         iconSize: new L.Point(8, 8),
                    //         className: "leaflet-div-icon leaflet-editing-icon"
                    //     }),
                    //     shapeOptions: {
                    //         guidelineDistance: 10,
                    //         color: "navy",
                    //         weight: 3
                    //     }
                    // },
                    polygon: {
                        icon: new L.DivIcon({
                            iconSize: new L.Point(8, 8),
                            className: "leaflet-div-icon leaflet-editing-icon"
                        }),
                        shapeOptions: {
                            guidelineDistance: 10,
                            color: "navy",
                            weight: 3
                        }
                    }
                }}
            />
        </FeatureGroup>
    )
}


export { DrawTools, draw_list }