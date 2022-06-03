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
        // this._onChange();
    }
    

    const _onCreated = e => {
        // if (e.layerType === "marker") {
        //     Do marker specific actions
        // } else {
        // }
        console.log('--> _onCreated')
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
        console.log("_onDrawStart", e)
        
    };




    return (
        <FeatureGroup>
            <EditControl
                position="bottomleft"
                onDrawStart={_onDrawStart}
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
                    },
                    circlemarker: false,
                    circle: false,
                }}
            />
        </FeatureGroup>
    )
}


export { DrawTools, draw_list }