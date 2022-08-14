import * as React from 'react';
// import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useState, useRef, useMemo } from "react";

// import { styled, createTheme, ThemeProvider, alpha } from '@mui/material/styles';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
// import Badge from '@mui/material/Badge';
// import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import NotificationsIcon from '@mui/icons-material/Notifications';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import TablePagination from '@mui/material/TablePagination';
// import Autocomplete from '@mui/material/Autocomplete';
// import InputBase from '@mui/material/InputBase';
// import SearchIcon from '@mui/icons-material/Search';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import ListSubheader from '@mui/material/ListSubheader';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import PeopleIcon from '@mui/icons-material/People';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
// import * as React from 'react';
// import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Switch from '@mui/material/Switch';
import WifiIcon from '@mui/icons-material/Wifi';
import BluetoothIcon from '@mui/icons-material/Bluetooth';

// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
// import Brightness1RoundedIcon from '@mui/icons-material/Brightness1Rounded';
// import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
// import ChangeHistoryRoundedIcon from '@mui/icons-material/ChangeHistoryRounded';
// import NoiseControlOffRoundedIcon from '@mui/icons-material/NoiseControlOffRounded';
// import Wifi1BarRoundedIcon from '@mui/icons-material/Wifi1BarRounded';
// import ShowChartRoundedIcon from '@mui/icons-material/ShowChartRounded';
// import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import InputLabel from '@mui/material/InputLabel';
// import { FixedSizeList } from 'react-window';

// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';
// import SwipeableDrawer from '@mui/material/SwipeableDrawer';
// import TextareaAutosize from '@mui/material/TextareaAutosize';
// import FormLabel from '@mui/material/FormLabel';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormHelperText from '@mui/material/FormHelperText';
// import Checkbox from '@mui/material/Checkbox';
// import ListItem from '@mui/material/ListItem';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import { useState, Component } from 'react';
// import { zhCN } from '@mui/material/locale';

import FormControl from '@mui/material/FormControl';
// import { MapContainer, TileLayer } from 'react-leaflet';
// import { MapContainer, TileLayer, useMap, } from 'https://cdn.esm.sh/react-leaflet'
// import { MapContainer, TileLayer, useMap, Map, FeatureGroup, LayerGroup, ZoomControl} from 'react-leaflet'
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet'

// import { Map, TileLayer } from "react-leaflet";
import L from 'leaflet'

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
// import { useLeafletContext } from '@react-leaflet/core';
// import InputAdornment from '@mui/material/InputAdornment';
// or
// import { InputAdornment } from '@mui/material';

// import * as locales from '@mui/material/locale';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import PeopleIcon from '@mui/icons-material/People';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import LayersIcon from '@mui/icons-material/Layers';
// import AssignmentIcon from '@mui/icons-material/Assignment';
import axios from 'axios';

import CommentIcon from '@mui/icons-material/Comment';

import { useLeafletContext } from '@react-leaflet/core';

// import { EditControl } from "react-leaflet-draw"
// import { FeatureGroup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
// import 'leaflet-draw/dist/leaflet.draw.css';


// import LogIn from './LogIn.js'
// import Search from './Search.js'

// import EditControl from './EditControl.js'

import { DrawTools, draw_list } from './leaflets/drawtools.js'
// import { DrawTools, draw_list, Person } from './leaflets/drawtools.js'
// import { DrawTools, Person } from './leaflets/drawtools.js'



// import test from './leaflets/drawtools.js'
import config from './config.json'
import { PersonRemoveAlt1TwoTone } from '@mui/icons-material';




const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}))


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
)

// -----------------------------------------------------

var collection = {
    "type": "FeatureCollection",
    "features": []
}

// const onCreated = (e) => {
//     collection.features.push(e.layer.toGeoJSON())
//     console.log('----draw create----')
//     console.log(collection)
// }

// const onDeleted = (e) => {
//     collection = {
//         "type": "FeatureCollection",
//         "features": []
//     };
// }

// const on_submit_vector = (e) => {
//     console.log(4444)
//     console.log(e.target.value)
    // console.log(collection)
    // const Http = new XMLHttpRequest();
    // const url = 'http://127.0.0.1:8000';
    // Http.open("GET", url);
    // Http.send();

    // Http.onreadystatechange = (e) => {
    //     console.log(444455)
    //     console.log(Http.responseText)
    // }
    // console.log(4444)
// }


const mainListItems = (
    <React.Fragment>
        <ListItemButton>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />

        </ListItemButton>
    </React.Fragment>
);

const secondaryListItems = (
    <React.Fragment>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Log In" />
            

        </ListItemButton>
    </React.Fragment>
);

const mdTheme = createTheme()

// -----------------------------------------------------



// global variables
var [ g_lat, g_lon ] = [ 13.7525438, 100.4934734 ]

var [ lng1, lng2 ] = [ 0.0, 0.0 ]
var [ lat1, lat2 ] = [ 0.0, 0.0 ]

// geometry draw
// var candidate_geojson = []
var layer_aoi = []

// landcover ordered list
// var land_cover_list = []
var all_pick_land_cover = []


var show_aoi = false
var tmp_aoi = []

var show_build = false 
var tmp_build = 0

// var show_fire = []
var show_fire = [false, false, false]

var list_fire_pred_layer = [ ]
var save_list_fire_pred_layer = []


export default function DashboardContent() {

    const [open, setOpen] = useState(true)
    const toggleDrawer = () => {
        setOpen(!open)
    }

    
    //
    const [map, setMap] = useState(null)

    const MapComponent = useMemo(() => (
        
            <MapContainer center={[g_lat, g_lon]} zoom={8} zoomControl={false} minZoom={5} maxZoom={18} scrollWheelZoom={false} ref={setMap}>
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <ZoomControl position="bottomleft" />
                <DrawTools />
            </MapContainer>
        
    ), [])

    // 
    const value_wind_spe = useRef()
    const value_wind_dir = useRef()
    

    // 
    function MapSearch({ map }) {

        // const [position, setPosition] = useState(() => map.getCenter())
        const value_search = useRef()

        const submit_search_A = () => {
            const Nominatim = require('nominatim-geocoder')
            const geocoder = new Nominatim()
            // var s = 'Bangkok, Thailand'
            // var s = value_search.current.value
            var s = '18.858594937279616, 98.90703141689299'
            if (tmp_aoi.length > 0) {
                map.removeLayer(tmp_aoi.pop())
                tmp_aoi = []
            }
            geocoder.search({ q: s })
                .then((res) => {
                    if (typeof (res[0]) == 'undefined') {
                        let rec = L.rectangle(L.latLng(g_lat, g_lon).toBounds(4000))
                        // rec.addTo(map)
                        layer_aoi.push(rec)
                        map.fitBounds(rec.getBounds())
                        lat2 = rec.getBounds()._northEast.lat
                        lng2 = rec.getBounds()._northEast.lng
                        lat1 = rec.getBounds()._southWest.lat
                        lng1 = rec.getBounds()._southWest.lng
                        axios.get('https://' + config.GCP_EXT_IP + '/aoi', { params: { 'lng1': lng1, 'lng2': lng2, 'lat1': lat1, 'lat2': lat2 } }).then(res => { console.log('input aoi', res.data) })
                        console.log('location not found then use default coordinates', lng1, lng2, lat1, lat2)
                        tmp_aoi.push(rec)
                        console.log('tmp_aoi', tmp_aoi)
                    } else {
                        g_lat = res[0].lat
                        g_lon = res[0].lon
                        console.log('location found', g_lat, g_lon)
                        let rec = L.rectangle(L.latLng(g_lat, g_lon).toBounds(4000))
                        rec.addTo(map)
                        layer_aoi.push(rec)
                        map.fitBounds(rec.getBounds())
                        lat2 = rec.getBounds()._northEast.lat
                        lng2 = rec.getBounds()._northEast.lng
                        lat1 = rec.getBounds()._southWest.lat
                        lng1 = rec.getBounds()._southWest.lng
                        axios.get('https://' + config.GCP_EXT_IP + '/aoi', { params: { 'lng1': lng1, 'lng2': lng2, 'lat1': lat1, 'lat2': lat2 } }).then(res => { console.log('input aoi', res.data) })
                        console.log('location found')
                        console.log(lng1, lng2, lat1, lat2)
                        // map.setView([lat, lon], 15)
                        tmp_aoi.push(rec)
                        console.log('tmp_aoi', tmp_aoi)
                    }
                }).catch((error) => { console.log(error) })

                axios.get('http://api.weatherapi.com/v1/current.json?key=' + config.WEATHER_API_KEY + '&q=' + g_lat + ',' + g_lon + '&aqi=no')
                    .then(res => {
                        if (res.data.location.country !== 'Thailand') {
                            console.log('wrong coordinates')
                            alert('wrong coordinates')
                        } else {
                            console.log(res.data.location.country === 'Thailand', res.data.location.region)
                            value_wind_spe.current.value = res.data.current.wind_kph
                            value_wind_dir.current.value = res.data.current.wind_degree
                            axios.get('https://' + config.GCP_EXT_IP + '/weather', { params: { 'wind_dir': res.data.current.wind_degree, 'wind_spe': res.data.current.wind_kph } }).then(res => { console.log('input weather', res.data) })
                        }
                    }).catch(err => console.log(err.data))
            
        }

        
        

        const submit_aoi = () => {
            console.log('submit_aoi')
            tmp_aoi.pop()

            if (draw_list.length > 0) {
                lat2 = draw_list[0]._bounds._northEast.lat
                lat1 = draw_list[0]._bounds._southWest.lat
                lng2 = draw_list[0]._bounds._northEast.lng
                lng1 = draw_list[0]._bounds._southWest.lng
                axios.get('https://' + config.GCP_EXT_IP + '/aoi', { params: { 'lng1': lng1, 'lng2': lng2, 'lat1': lat1, 'lat2': lat2 } }).then(res => { console.log('input aoi', res.data) })
                console.log('location not found then use default coordinates', lng1, lng2, lat1, lat2)
            } else {
                console.log('draw_list empty')
            }

            axios.get('http://api.weatherapi.com/v1/current.json?key=' + config.WEATHER_API_KEY + '&q=' + g_lat + ',' + g_lon + '&aqi=no')
                .then(res => {
                    if (res.data.location.country !== 'Thailand') {
                        console.log('wrong coordinates')
                        alert('wrong coordinates')
                    } else {
                        console.log(res.data.location.country === 'Thailand', res.data.location.region)
                        value_wind_spe.current.value = res.data.current.wind_kph
                        value_wind_dir.current.value = res.data.current.wind_degree
                        axios.get('https://' + config.GCP_EXT_IP + '/weather', { params: { 'wind_dir': res.data.current.wind_degree, 'wind_spe': res.data.current.wind_kph } }).then(res => { console.log('input weather', res.data) })
                    }
                }).catch(err => console.log(err.data))

            var aoi = draw_list.pop()
            tmp_aoi.push(aoi)
            console.log(32131231, draw_list.length)
        }
        
        const click_show_aoi = (e) => {
            show_aoi = !show_aoi
            console.log('click_show_aoi', show_aoi)
            if (show_aoi) { 
                tmp_aoi[0].addTo(map) 
            } else { 
                map.removeLayer(tmp_aoi[0])
            }
        }
        // var show_fire = [false, false, false]
        // var list_fire_pred_layer = [1, 1, 1]

        const save = (e) => {
            console.log('save')
            console.log(list_fire_pred_layer)

            save_list_fire_pred_layer.push(list_fire_pred_layer[0])
            save_list_fire_pred_layer.push(list_fire_pred_layer[1])
            save_list_fire_pred_layer.push(list_fire_pred_layer[2])
            console.log('save_list_fire_pred_layer.length', save_list_fire_pred_layer.length)
        }

        const list = (e) => {
            console.log('--- list ---')
            
        }


        


        const click_show_fire = (e) => {    
            show_fire[0] = !show_fire[0]
            show_fire[1] = !show_fire[1]
            show_fire[2] = !show_fire[2]

            if (show_fire[0] == true) { list_fire_pred_layer[0].addTo(map) } else { map.removeLayer(list_fire_pred_layer[0]) }
            if (show_fire[1] == true) { list_fire_pred_layer[1].addTo(map) } else { map.removeLayer(list_fire_pred_layer[1]) }
            if (show_fire[2] == true) { list_fire_pred_layer[2].addTo(map) } else { map.removeLayer(list_fire_pred_layer[2]) }
        }


        
        

        // const submit_search_B = useCallback((lat, lon) => {
        //     let rec = L.rectangle(L.latLng(g_lat, g_lon).toBounds(4000))
        //     rec.addTo(map)
        //     layer_aoi.push(rec)
        //     map.fitBounds(rec.getBounds())
        //     lat2 = rec.getBounds()._northEast.lat
        //     lng2 = rec.getBounds()._northEast.lng
        //     lat1 = rec.getBounds()._southWest.lat
        //     lng1 = rec.getBounds()._southWest.lng
        //     axios.get('https://' + config.GCP_EXT_IP + '/aoi', { params: { 'lng1': lng1,  'lng2': lng2, 'lat1': lat1, 'lat2': lat2 } }).then(res => { console.log('input aoi', res.data) })
            // map.setView([lat, lon], 15)
        // }, [map])

        return (
            <div>
                <TextField label="Search field" type="search" inputRef={value_search} />
                <Button type="submit" variant="contained" sx={{ ml: 2, mr: 1 }} onClick={submit_search_A} >Search_A</Button>
                {/* <Button type="submit" variant="contained" sx={{ ml: 2, mr: 1 }} onClick={submit_search_B} >Search_B</Button> */}
                {/* <Button type="submit" variant="contained" sx={{ ml: 2, mr: 1 }} onClick={submit_geometry}>     </Button> */}
                {/* <Button type="submit" variant="contained" sx={{ ml: 2, mr: 1 }} onClick={submit_aoi}>submit_aoi</Button> */}
                <Button type="submit" variant="contained" sx={{ ml: 2, mr: 1 }} onClick={submit_aoi}>submit_aoi</Button>
                
                <Button type="submit" variant="contained" sx={{ ml: 2, mr: 1 }} onClick={click_show_aoi}>click_show_aoi</Button>
                
                <Button type="submit" variant="contained" sx={{ ml: 2, mr: 1 }} onClick={click_show_fire}>click_show_fire</Button>

                <Button type="submit" variant="contained" sx={{ ml: 2, mr: 1 }} onClick={save}>save</Button>
                
                <Button type="submit" variant="contained" sx={{ ml: 2, mr: 1 }} onClick={list}>list</Button>
                
                
                
            </div>
        )
    }

    var layers = []

    const submit_geometry = () => {
        console.log(1231231232131, 'layer', layers)
        for (let n = 0; n < layers.length; n++) {
            var layer = layers[n]
            map.removeLayer(layer)
        }
        map.eachLayer(function(layer) {
            var layers = [];
            map.eachLayer(function (layer) {
                if (layer instanceof L.TileLayer)
                    layers.push(layer);
            })
            layers = []
            console.log(1231231232131, 'layer', layers)
        })
    }


    


    // const submit_weather = () => {
        // value_wind_spe.current.value = res.data.current.wind_kph
        // // value_wind_dir.current.value = res.data.current.wind_degree
        // console.log(222222)
        // console.log(444444, value_wind_spe.current.value)
        // console.log(444444, value_wind_dir.current.value)
        // axios.get('https://' + config.GCP_EXT_IP + '/weather', { params: { 'wind_dir': value_wind_spe.current.value, 'wind_spe': value_wind_spe.current.value } }).then(res => { console.log('input weather sent') })
        // console.log(555555)
        // axios.get('https://' + config.GCP_EXT_IP + '/weather', { params: { 'wind_dir': res.data.current.wind_degree, 'wind_spe': res.data.current.wind_kph } }).then(res => { console.log('input weather', res.data) })
        // axios.get('http://api.weatherapi.com/v1/current.json?key=' + config.WEATHER_API_KEY + '&q=' + g_lat + ',' + g_lon + '&aqi=no')
        //     .then(res => {
        //         if (res.data.location.country !== 'Thailand') {
        //             console.log('wrong coordinates')
        //             alert('wrong coordinates')
        //         } else {
        //             console.log(res.data.location.country == 'Thailand', res.data.location.region)
        //             value_wind_spe.current.value = res.data.current.wind_kph
        //             value_wind_dir.current.value = res.data.current.wind_degree
        //             axios.get('https://' + config.GCP_EXT_IP + '/weather', { params: { 'wind_dir': res.data.current.wind_degree, 'wind_spe': res.data.current.wind_kph } }).then(res => { console.log('input weather', res.data) })
        //         }
        //     }).catch(err => console.log(err.data))
    // }


    const __get_axios_FIRMS = async(url) => {
        var _lat = []
        var _lon = []
        var _lat_lon = []
        await axios.get(url)
            .then(res => {
                var __ = res.data.split('\n')
                if (__.length > 1) {
                    for (let i = 1; i < __.length; i++) {
                        _lat.push(__[i].split(',')[0])
                        _lon.push(__[i].split(',')[1])
                    }
                }
                if (_lat.length!==_lon.length) { console.error('firms lat lon not the same size') }
                else {
                    for (let i = 0; i < _lat.length; i++) {
                        _lat_lon.push([_lat[i], _lon[i]])
                    }
                }
            }).catch(err => console.log(err.data))
        return _lat_lon
    }


    const _get_axios_FIRMS = async(url) => {
        var x0 = await __get_axios_FIRMS(url[0])
        var x1 = await __get_axios_FIRMS(url[1])
        var x2 = await __get_axios_FIRMS(url[2])
        var x3 = await __get_axios_FIRMS(url[3])
        var x4 = await __get_axios_FIRMS(url[4])
        return [x0, x1, x2, x3, x4]
    }


    const import_hotspot = () => {
        console.log('import hotspot')
        // let rad = 1000000 // m^2
        // let rec = L.rectangle(L.latLng(g_lat, g_lon).toBounds(rad))

        // var lat1 = rec._bounds._southWest.lat
        // var lat2 = rec._bounds._northEast.lat
        // var lng1 = rec._bounds._southWest.lng
        // var lng2 = rec._bounds._northEast.lng

        var _aoi = lng1 + ',' + lat1 + ',' + lng2 + ',' + lat2

        var _today = new Date()
        _today = _today.getFullYear() + '-' + String(_today.getMonth() + 1).padStart(2, '0') + '-' + String(_today.getDate()).padStart(2, '0')
        
        // _today = '2021-03-25'
        // y1 = 18.854483124484304
        // x1 = 98.71290241522325
        // y2 = 18.839681563180076
        // x2 = 98.72890781246448
        // 18.839681563180076,98.72890781246448
        // date1, date2 = '2021-03-25', '2021-03-26'
        // date3, date4 = '2021-03-30', '2021-03-31'
        var url = [
            'http://firms.modaps.eosdis.nasa.gov/api/area/csv/' + config.FIRM_API_KEY + '/MODIS_NRT/' + _aoi + '/1/' + _today,
            'http://firms.modaps.eosdis.nasa.gov/api/area/csv/' + config.FIRM_API_KEY + '/MODIS_SP/' + _aoi + '/1/' + _today,
            'http://firms.modaps.eosdis.nasa.gov/api/area/csv/' + config.FIRM_API_KEY + '/VIIRS_NOAA20_NRT/' + _aoi + '/1/' + _today,
            'http://firms.modaps.eosdis.nasa.gov/api/area/csv/' + config.FIRM_API_KEY + '/VIIRS_SNPP_NRT/' + _aoi + '/1/' + _today,
            'http://firms.modaps.eosdis.nasa.gov/api/area/csv/' + config.FIRM_API_KEY + '/VIIRS_SNPP_SP/' + _aoi + '/1/' + _today
        ]

        var features_collection = {
            "type": "FeatureCollection",
            "features": [ ]
        }

        var feat = {
            "type": "Feature",
            "properties": { "value": 1 },
            "geometry": { "type": "Point", "coordinates": [ ] }
        }

        _get_axios_FIRMS(url)
            .then((_res) => {
                var feats = []
                for (let i = 0; i < _res.length; i++) {
                    if (_res[i].length > 0) {
                        for (let j = 0; j < _res[i].length; j++) {
                            feat.geometry.coordinates = [ parseFloat(_res[i][j][0]), parseFloat(_res[i][j][1]) ]
                            feats.push(feat)
                        }
                    }
                }
                features_collection.features = feats
                if (features_collection.features.length===0) {
                    alert('hotspot data: empty array')
                } else{
                    axios.get('https://' + config.GCP_EXT_IP + '/active_fires', { params: { 'features_collection': features_collection } }).then(res => { console.log('input draw list', res.data) })
                }
            })
    }


    const submit_hotspot = () => {
        console.log('submit_hotspot', draw_list.length)
        if (draw_list.length > 0) {
            collection = []

            for (let n = 0; n < draw_list.length; n++) {
                var geojson = draw_list[n].toGeoJSON()
                geojson.properties.value = 1
                collection.push(JSON.stringify(geojson))
            }

            var fc = JSON.stringify({
                type: 'FeatureCollection',
                features: collection.map(JSON.parse)
            })
            // console.log(fc)
            axios.get('https://' + config.GCP_EXT_IP + '/active_fires', { params: { 'features_collection': fc } }).then(res => { console.log('input draw list', res.data) })

            // var candy = []
            // for (let n = 0; n < draw_list.length; n++) {
            //     if (typeof(draw_list[n]._latlng) !== 'undefined') { // a point
            //             // candy.push([[ draw_list[n]._latlng.lng, draw_list[n]._latlng.lat ]])
            //         geojson_point.geometry.coordinates = [
            //             draw_list[n]._latlng.lng, 
            //             draw_list[n]._latlng.lat
            //         ]
            //     }
                // console.log(11111, geojson_point)
            //     else { // points
            //         var _candy = []
            //         if (draw_list[n]._latlngs.length==1) {
            //             for (let m = 0; m < draw_list[n]._latlngs[0].length; m++) {
            //                 _candy.push([draw_list[n]._latlngs[0][m].lng, draw_list[n]._latlngs[0][m].lat])
            //             }
            //         } else {
            //             for (let m = 0; m < draw_list[n]._latlngs.length; m++) {
            //                 _candy.push([draw_list[n]._latlngs[m].lng, draw_list[n]._latlngs[m].lat])
            //             }
            //         }
            //         candy.push(_candy)
            //     }
            // }
            // console.log(1111, geojson)

            // candy = JSON.stringify(candy)
            // console.log(candy)
            
        }
        
    }



    var list_fire_break = []

    const submit_fire_break = () => {
        if (draw_list.length > 0) {
            collection = []
            for (let n = 0; n < draw_list.length; n++) {
                var geojson = draw_list[n].toGeoJSON()
                geojson.properties.value = 1
                collection.push(JSON.stringify(geojson))
            }
            var fc = JSON.stringify({
                type: 'FeatureCollection',
                features: collection.map(JSON.parse)
            })
            axios.get('https://' + config.GCP_EXT_IP + '/fire_break', { params: { 'features_collection': fc } })
                .then(res => { console.log('--> submit_fire_break', res.data) })
            
            list_fire_break.push(fc)
            console.log(list_fire_break.length)
        }
    }


    const submit_weather = (event) => {
        var spe = parseInt(parseFloat(value_wind_spe.current.value) * 54.6807)
        var dir = parseInt(value_wind_dir.current.value)
        console.log('--submit weather', spe, dir)
        axios.get('https://' + config.GCP_EXT_IP + '/weather', { params: { 'wind_dir': dir, 'wind_spe': spe } }).then(res => { console.log('input weather sent') })
    }



    const [ landcover, setLandCover ] = React.useState(0)


    const handle_change_Land_cover = (event) => {
        setLandCover(event.target.value)
    }

    const submit_land_cover = () => {
        all_pick_land_cover.push(landcover)
        console.log(333, all_pick_land_cover.length, )
        console.log(333, all_pick_land_cover)
    }

    const reset_land_cover = () => {
        all_pick_land_cover = []
        console.log(333, 'reset all_picl_land_cover', all_pick_land_cover)
    }


    // const value_land_cover_list = useRef('')
    
    const submit_all_land_cover = () => {
        
        collection = []
        if (draw_list.length > 0) {
            for (let n = 0; n < draw_list.length; n++) {
                var geojson = draw_list[n].toGeoJSON()
                geojson.properties.value = 1
                collection.push(JSON.stringify(geojson))
            }
        } else {
            console.log('submit_all_land_cover draw_list.length !> 0')
            return
        }

        console.log(5555555)
        console.log('collection.length', collection.length)
        console.log('all_pick_land_cover.length', all_pick_land_cover.length)
        console.log(5555555)

        
        if (all_pick_land_cover.length !== collection.length) {
            alert('all_pick_land_cover.length !== collection.length')
            return 
        }
        
        var landcover_collection = {
            type: 'FeatureCollection',
            features: collection.map(JSON.parse)
        }

        // var input_lc_list = value_land_cover_list.current.value
        // var input_lc_list = JSON.stringify(all_pick_land_cover)
        var ret_lc_list = []


        for (let n = 0; n < all_pick_land_cover.length; n++) {
            console.log(777, n, all_pick_land_cover[n])
            if (all_pick_land_cover.length <= collection.length) {
                ret_lc_list.push(parseInt(all_pick_land_cover[n]))
            }
        }

        
        

        // if (input_lc_list !== '') {
        //     for (let n = 0; n < input_lc_list.split(',').length; n++) {
        //         if (n < collection.length) {
        //             ret_lc_list.push(parseInt(input_lc_list.split(',')[n]))
        //         }
        //     }
        // }
        
        console.log(777777, collection.length, all_pick_land_cover.length)
        console.log(312312313, all_pick_land_cover)
        console.log(312312313, ret_lc_list)

        for (let i = 0; i < landcover_collection.features.length; i++) {
            landcover_collection.features[i].properties.value = ret_lc_list[i]
        }

        landcover_collection = JSON.stringify(landcover_collection)
        console.log('asdfsadfa', landcover_collection)

        
        
        axios.get('https://' + config.GCP_EXT_IP + '/edit_land_cover', { params: { 'landcover_collection': landcover_collection } }).then(res => { console.log('submit landcover_collection', res.data) })
        
    }
    
    
    

    // // geometry draw
    // var candidate_geojson = []
    // var layer_aoi = []
    // var test11 = 0
    // var test22 = 0
    // var test33 = 0

    

    const damage_assess = () => {
        console.log('--> damage_assess')
        var which_fire_pred = 1
        axios.get('https://' + config.GCP_EXT_IP + '/damage_assess', { params: which_fire_pred })
            .then(res => { 
                console.log('--> damage_assess', res.data)
                // var layer = L.geoJSON(res.data, { fillColor: 'red', weight: 2, opacity: 1, color: 'red', fillOpacity: 0.7 })
                // layer.addTo(map)
            })
    }


    

    const start_fire_pred = () => {
        // console.log(draw_list)
        // for (let i = 0; i < draw_list.length; i++) {
            //     candidate_geojson.push(draw_list[i].toGeoJSON())
            // }
        // console.los('tmp_')
        // https://34.142.209.147/grass_5
        

        axios.get('https://' + config.GCP_EXT_IP + '/grass_1').then(res => { 
            console.log('--> grass_1', res.data)
            axios.get('https://' + config.GCP_EXT_IP + '/grass_2').then(res => {
                console.log('--> grass_2', res.data)
                axios.get('https://' + config.GCP_EXT_IP + '/grass_3').then(res => {
                    console.log('--> grass_3', res.data)
                    axios.get('https://' + config.GCP_EXT_IP + '/grass_4').then(res => {
                        console.log('--> grass_4', res.data)
                        axios.get('https://' + config.GCP_EXT_IP + '/grass_5').then(res => {
                            console.log('--> grass_5', res.data)
                            axios.get('https://' + config.GCP_EXT_IP + '/grass_6').then(res => {
                                console.log('--> grass_6', res.data)
                                axios.get('https://' + config.GCP_EXT_IP + '/grass_7').then(res => {
                                    console.log('--> grass_7', res.data)
                                    axios.get('https://' + config.GCP_EXT_IP + '/grass_8').then(res => {
                                        console.log('--> grass_8', res.data)
                                        axios.get('https://' + config.GCP_EXT_IP + '/grass_9').then(res => {
                                            console.log('--> grass_9', res.data)
                                            axios.get('https://' + config.GCP_EXT_IP + '/grass_10').then(res => {
                                                console.log('--> grass_10', res.data)
                                                axios.get('https://' + config.GCP_EXT_IP + '/grass_11').then(res => {
                                                    console.log('--> grass_11', res.data)
                                                    axios.get('https://' + config.GCP_EXT_IP + '/grass_12a')
                                                        .then(res => { 
                                                            if (res.data !== 0) { 
                                                                console.log('--> grass_12a', res.data)
                                                                var layer = L.geoJSON(res.data, { fillColor: 'red', weight: 2, opacity: 1, color: 'red', fillOpacity: 0.7 })
                                                                list_fire_pred_layer.push(layer)
                                                                layer.addTo(map)
                                                                show_fire[0] = true
                                                                layers.push(layer)
                                                            }})
                                                    axios.get('https://' + config.GCP_EXT_IP + '/grass_12b')
                                                        .then(res => {
                                                            console.log('--> grass_12b', res.data)
                                                            if (res.data !== 0) {
                                                                var layer = L.geoJSON(res.data, { fillColor: 'orange', weight: 2, opacity: 1, color: 'orange', fillOpacity: 0.7 })
                                                                list_fire_pred_layer.push(layer)
                                                                layer.addTo(map)
                                                                show_fire[1] = true
                                                                layers.push(layer)
                                                            }})
                                                    axios.get('https://' + config.GCP_EXT_IP + '/grass_12c')
                                                        .then(res => {
                                                            console.log('--> grass_12c', res.data)
                                                            if (res.data !== 0) {
                                                                var layer = L.geoJSON(res.data, { fillColor: 'yellow', weight: 2, opacity: 1, color: 'yellow', fillOpacity: 0.7 })
                                                                list_fire_pred_layer.push(layer)
                                                                layer.addTo(map)
                                                                show_fire[2] = true
                                                                layers.push(layer)
                                                            }})
                                                })
                                            })  
                                        })
                                    })    
                                })
                            })
                        })
                    })
                })
            })
        })

        
        

        
// axios.get('https://' + config.GCP_EXT_IP + '/grass_8a').then(res => { test11 = res.data; if (test11 !== 0) { L.geoJSON(res.data, { fillColor: 'red', weight: 2, opacity: 1, color: 'red', fillOpacity: 0.7 }).addTo(map) } })
                                    // axios.get('https://' + config.GCP_EXT_IP + '/grass_8b').then(res => { test22 = res.data; if (test22 !== 0) { L.geoJSON(res.data, { fillColor: 'orange', weight: 2, opacity: 1, color: 'orange', fillOpacity: 0.7 }).addTo(map) } })
                                    // axios.get('https://' + config.GCP_EXT_IP + '/grass_8c').then(res => { test33 = res.data; console.log('answer  --> ', test33); if (test33 !== 0) { L.geoJSON(res.data, { fillColor: 'yellow', weight: 2, opacity: 1, color: 'yellow', fillOpacity: 0.7 }).addTo(map) } })
                                    
                                    
                                    
        
                                    // axios.get('https://' + GCP_EXT_IP + '/grass_8a')
                                    //     .then(res => {
                                        //         console.log(312312312)
                // let geometry = L.geoJSON(JSON.parse(res.data)).addTo(map)
                //         console.log(312312312)
                //     }).catch(err => console.log(err.data))
        
            
    }

    // show_aoi = !show_aoi
    // console.log('click_show_aoi', show_aoi)
    // if (show_aoi) {
    //     tmp_aoi[0].addTo(map)
    // } else {
    //     map.removeLayer(tmp_aoi[0])
    // }
    // var show_build = false
    // var tmp_build = 0


    const start_build = () => {
        console.log('start_build')

        path_build = 'https://' + config.GCP_EXT_IP + '/aodsdsd
        
        axios.get(path_build, { params: { 'lng1': lng1, 'lng2': lng2, 'lat1': lat1, 'lat2': lat2 } }).then(res => { console.log('start build', res.data) })
        

        // --> return geojson of detected buildings --> x



        // if (tmp_build==0) {
        //     var x = {
        //         "type": "FeatureCollection",
        //         "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
        //         "features": [
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.885107040405273, 18.838993615016321], [98.885053396224961, 18.838978383974954], [98.885042667388916, 18.838958075919805], [98.885053396224961, 18.838907305781937], [98.885074853897095, 18.838907305781937], [98.88509094715117, 18.838932690850871], [98.885128498077393, 18.838942844878446], [98.885133862495408, 18.838988538002532], [98.885107040405273, 18.838993615016321]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.885166049003601, 18.835861049414248], [98.885160684585557, 18.835805200533756], [98.885182142257676, 18.835774737508032], [98.885096311569214, 18.835713811456586], [98.885064125061035, 18.835729042969447], [98.885053396224961, 18.835713811456586], [98.885064125061035, 18.835693502772763], [98.885123133659363, 18.835708734285632], [98.885133862495408, 18.835729042969447], [98.885171413421631, 18.835703657114674], [98.88518750667572, 18.835713811456586], [98.88519287109375, 18.835855972243294], [98.885166049003601, 18.835861049414248]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.88519287109375, 18.838490987193527], [98.88519823551178, 18.838465601731649], [98.88518750667572, 18.838455447546895], [98.885155320167527, 18.838465601731649], [98.885166049003601, 18.838501141378277], [98.88519823551178, 18.838506218470652], [98.88519287109375, 18.838490987193527]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.88519287109375, 18.837907121570382], [98.885155320167527, 18.837917275755132], [98.885144591331482, 18.837993432140756], [98.885096311569214, 18.837988355048385], [98.88508021831511, 18.838023894695006], [98.885107040405273, 18.838039125972134], [98.885107040405273, 18.838064511434009], [98.885128498077393, 18.838094973988262], [98.885155320167527, 18.838110205265384], [98.885203599929795, 18.838110205265384], [98.885219693183899, 18.838140667819641], [98.885176777839646, 18.838140667819641], [98.885144591331482, 18.838166053281512], [98.885144591331482, 18.838206670020515], [98.885123133659363, 18.838211747112886], [98.885096311569214, 18.838257440944268], [98.885123133659363, 18.838267595129018], [98.885149955749512, 18.838252363851893], [98.885176777839646, 18.838328520237521], [98.88519823551178, 18.838348828607018], [98.885262608528137, 18.838358982791771], [98.885294795036316, 18.838343751514646], [98.885305523872361, 18.838308211868018], [98.885273337364197, 18.838242209667143], [98.88519823551178, 18.838226978390015], [98.885155320167527, 18.838237132574765], [98.885160684585557, 18.838211747112886], [98.885225057601915, 18.838206670020515], [98.885241150856018, 18.838186361651012], [98.885273337364197, 18.838206670020515], [98.885316252708435, 18.838206670020515], [98.88533234596251, 18.838186361651012], [98.885316252708435, 18.838135590727266], [98.885251879692063, 18.838079742711137], [98.885251879692063, 18.838054357249259], [98.885230422019944, 18.838034048879756], [98.885230422019944, 18.838003586325506], [98.885257244110093, 18.838003586325506], [98.885267972946181, 18.838008663417884], [98.885262608528137, 18.838049280156888], [98.885337710380554, 18.838105128173012], [98.885337710380554, 18.838125436542512], [98.885364532470703, 18.838140667819641], [98.885380625724778, 18.838186361651012], [98.885423541069017, 18.838206670020515], [98.885423541069017, 18.838232055482393], [98.885466456413269, 18.838318366052771], [98.885504007339463, 18.838318366052771], [98.885514736175537, 18.83818128455864], [98.885504007339463, 18.838166053281512], [98.88543963432312, 18.838155899096765], [98.885418176651001, 18.838135590727266], [98.885402083396897, 18.838084819803509], [98.885418176651001, 18.838079742711137], [98.88543963432312, 18.838115282357762], [98.885498642921434, 18.838130513634887], [98.885541558265686, 18.838079742711137], [98.885546922683702, 18.838034048879756], [98.885605931282043, 18.838039125972134], [98.885589838027968, 18.837988355048385], [98.885530829429626, 18.837978200863638], [98.885461091995239, 18.837927429939882], [98.885380625724778, 18.837957892494135], [98.885348439216628, 18.837927429939882], [98.885310888290391, 18.837937584124631], [98.885305523872361, 18.837881736108503], [98.885278701782212, 18.837856350646629], [98.885305523872361, 18.83785127355425], [98.88533234596251, 18.837891890293253], [98.885364532470703, 18.837891890293253], [98.885402083396897, 18.837861427739], [98.885396718978868, 18.83783096518475], [98.885359168052659, 18.837805579722875], [98.885353803634629, 18.837785271353379], [98.885316252708435, 18.83783096518475], [98.885310888290391, 18.837810656815254], [98.885267972946181, 18.837790348445754], [98.885257244110093, 18.837749731706751], [98.885225057601915, 18.837739577521997], [98.885171413421631, 18.837749731706751], [98.885155320167527, 18.837790348445754], [98.885171413421631, 18.837836042277129], [98.885225057601915, 18.837891890293253], [98.885225057601915, 18.837907121570382], [98.88519287109375, 18.837907121570382]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.885117769241333, 18.837932507032257], [98.885096311569214, 18.837902044478003], [98.885112404823289, 18.837871581923757], [98.885133862495408, 18.837891890293253], [98.885128498077393, 18.837932507032257], [98.885117769241333, 18.837932507032257]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.901672363281236, 18.846512551704709], [98.901758193969727, 18.846507474848124], [98.901720643043504, 18.846411014573043], [98.90168309211731, 18.846431321999376], [98.90168309211731, 18.846461783138878], [98.90166699886322, 18.846466859995459], [98.901672363281236, 18.846512551704709]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.901672363281236, 18.84359335421718], [98.901672363281236, 18.843517200189336], [98.901693820953355, 18.843517200189336], [98.901709914207458, 18.843557815670856], [98.901672363281236, 18.84359335421718]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.901908397674561, 18.843486738578196], [98.901892304420457, 18.843461353902246], [98.901903033256531, 18.84344612309668], [98.90192985534668, 18.84344612309668], [98.901940584182725, 18.843456276967057], [98.901935219764695, 18.843486738578196], [98.901908397674561, 18.843486738578196]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.904418945312486, 18.841506733854207], [98.90442967414856, 18.841527041594965], [98.904456496238708, 18.841527041594965], [98.904467225074754, 18.841496579983826], [98.904494047164903, 18.841476272243067], [98.904445767402649, 18.841445810631924], [98.904402852058411, 18.841486426113448], [98.904418945312486, 18.841506733854207]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.904118537902818, 18.841410272085596], [98.904107809066758, 18.84135442579851], [98.904123902320862, 18.841349348863325], [98.904150724410997, 18.841364579668895], [98.904150724410997, 18.841400118215223], [98.904118537902818, 18.841410272085596]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.903941512107849, 18.841359502733706], [98.903925418853746, 18.841344271928136], [98.903925418853746, 18.841318887252186], [98.903979063034043, 18.841313810316997], [98.903979063034043, 18.84135442579851], [98.903941512107849, 18.841359502733706]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.901672363281236, 18.856828326753842], [98.901688456535339, 18.856792790959386], [98.901672363281236, 18.856757255164933], [98.901624083518982, 18.856757255164933], [98.901554346084595, 18.85672679591255], [98.901511430740356, 18.856736948996677], [98.901522159576416, 18.856777561333196], [98.901543617248535, 18.856792790959386], [98.901559710502625, 18.856848632922098], [98.9015758037567, 18.856858786006228], [98.901565074920654, 18.856868939090354], [98.90157043933867, 18.856899398342744], [98.901613354682922, 18.856889245258611], [98.901650905609117, 18.856904474884811], [98.901672363281236, 18.856884168716551], [98.901672363281236, 18.856838479837965], [98.901726007461548, 18.856843556380031], [98.901709914207458, 18.856813097127642], [98.901672363281236, 18.856828326753842]], [[98.901640176773057, 18.856843556380031], [98.901640176773057, 18.856838479837965], [98.901645541191101, 18.856838479837965], [98.901645541191101, 18.856843556380031], [98.901640176773057, 18.856843556380031]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.901672363281236, 18.856696336660157], [98.901672363281236, 18.856635418155385], [98.901656270027161, 18.856620188529188], [98.901618719100938, 18.856620188529188], [98.901543617248535, 18.856655724323645], [98.901559710502625, 18.856691260118097], [98.9015758037567, 18.856691260118097], [98.901597261428819, 18.856665877407774], [98.901624083518982, 18.856696336660157], [98.901618719100938, 18.856711566286354], [98.901661634445176, 18.856736948996677], [98.90168309211731, 18.856716642828424], [98.901672363281236, 18.856696336660157]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.902412652969346, 18.856681107033967], [98.902380466461167, 18.856645571239511], [98.902380466461167, 18.856615111987129], [98.90242874622345, 18.856589729276802], [98.902471661567688, 18.856594805818865], [98.902482390403733, 18.856635418155385], [98.902460932731614, 18.856635418155385], [98.902460932731614, 18.856670953949834], [98.902412652969346, 18.856681107033967]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.902106881141677, 18.856417126846608], [98.902085423469529, 18.856396820678352], [98.902090787887559, 18.856371437968029], [98.90205860137938, 18.856366361425962], [98.90206396579741, 18.856351131799769], [98.902096152305603, 18.856346055257706], [98.902122974395752, 18.856366361425962], [98.902133703231797, 18.856412050304542], [98.902106881141677, 18.856417126846608]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.901672363281236, 18.856122687406863], [98.901624083518982, 18.856071921986217], [98.901629447937012, 18.856056692360024], [98.901613354682922, 18.856036386191764], [98.901597261428819, 18.856036386191764], [98.901602625846863, 18.856082075070344], [98.901554346084595, 18.856082075070344], [98.901527523994432, 18.856051615817954], [98.901489973068237, 18.856061768902087], [98.901484608650208, 18.856076998528277], [98.901522159576416, 18.85611253432273], [98.901473879814134, 18.8561176108648], [98.901468515396104, 18.856153146659246], [98.901484608650208, 18.856168376285442], [98.901489973068237, 18.856208988621962], [98.901532888412476, 18.856234371332285], [98.901532888412476, 18.856280060210864], [98.901591897010789, 18.856310519463253], [98.901597261428819, 18.856361284883899], [98.901618719100938, 18.856381591052155], [98.901650905609117, 18.856381591052155], [98.901661634445176, 18.856361284883899], [98.90167772769928, 18.856361284883899], [98.901693820953355, 18.856391744136285], [98.901736736297593, 18.856412050304542], [98.901763558387742, 18.856376514510089], [98.901827931404114, 18.856361284883899], [98.901838660240159, 18.856412050304542], [98.901903033256531, 18.856417126846608], [98.90192985534668, 18.85634097871564], [98.901913762092576, 18.856229294790218], [98.901903033256531, 18.856219141706088], [98.901849389076233, 18.856224218248155], [98.901833295822144, 18.856208988621962], [98.901806473731995, 18.856224218248155], [98.901795744895921, 18.856178529369572], [98.901806473731995, 18.856148070117186], [98.901822566986084, 18.856188682453698], [98.901849389076233, 18.856198835537832], [98.901903033256531, 18.856188682453698], [98.901913762092576, 18.856158223201312], [98.901892304420457, 18.856153146659246], [98.901881575584412, 18.856178529369572], [98.901865482330322, 18.856142993575123], [98.901779651641846, 18.856137917033053], [98.901726007461548, 18.85611253432273], [98.901672363281236, 18.856122687406863]], [[98.901672363281236, 18.856274983668797], [98.901672363281236, 18.856259754042608], [98.901699185371399, 18.856254677500541], [98.901795744895921, 18.856264830584674], [98.90181183815001, 18.856244524416411], [98.901844024658189, 18.856249600958474], [98.901838660240159, 18.856264830584674], [98.901763558387742, 18.856290213294994], [98.901736736297593, 18.856274983668797], [98.901672363281236, 18.856274983668797]], [[98.901892304420457, 18.856325749089443], [98.901892304420457, 18.856315596005313], [98.901903033256531, 18.856315596005313], [98.901903033256531, 18.856325749089443], [98.901892304420457, 18.856325749089443]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.901672363281236, 18.856051615817954], [98.901650905609117, 18.856051615817954], [98.901650905609117, 18.856061768902087], [98.901656270027161, 18.85608715161241], [98.90167772769928, 18.85609730469654], [98.901693820953355, 18.856061768902087], [98.901672363281236, 18.856051615817954]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.902278542518602, 18.856066845444154], [98.902251720428467, 18.856021156565571], [98.902214169502244, 18.856046539275894], [98.902187347412109, 18.856046539275894], [98.902208805084229, 18.855950084976666], [98.902316093444824, 18.855950084976666], [98.902337551116929, 18.855965314602862], [98.902342915534973, 18.856051615817954], [98.902278542518602, 18.856066845444154]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.902396559715271, 18.856000850397312], [98.902391195297241, 18.855985620771122], [98.902407288551316, 18.855970391144925], [98.90242874622345, 18.855975467686985], [98.90242874622345, 18.856000850397312], [98.902396559715271, 18.856000850397312]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.902096152305603, 18.855924702266343], [98.902047872543335, 18.855879013387764], [98.902053236961365, 18.855843477593311], [98.902090787887559, 18.855818094882988], [98.902144432067871, 18.8558587072195], [98.902128338813782, 18.855919625724276], [98.902096152305603, 18.855924702266343]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.90217125415802, 18.855833324509177], [98.902160525321946, 18.855813018340921], [98.902187347412109, 18.855782559088532], [98.902192711830125, 18.855828247967121], [98.90217125415802, 18.855833324509177]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.902321457862854, 18.855848554135374], [98.902300000190735, 18.855818094882988], [98.90230536460875, 18.855752099836145], [98.902342915534973, 18.855807941798854], [98.902342915534973, 18.855838401051244], [98.902321457862854, 18.855848554135374]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.902101516723633, 18.855747023294082], [98.902074694633484, 18.855711487499629], [98.902031779289246, 18.8557013344155], [98.90202641487123, 18.85567087516311], [98.902042508125305, 18.85565564553692], [98.902139067649827, 18.85566579862105], [98.902144432067871, 18.855711487499629], [98.902101516723633, 18.855747023294082]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.901854753494263, 18.855061690115363], [98.901822566986084, 18.85505153703123], [98.90181720256804, 18.85503630740504], [98.901849389076233, 18.855031230862974], [98.901854753494263, 18.855061690115363]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.901672363281236, 18.854736791423232], [98.901790380477891, 18.854696179086709], [98.901795744895921, 18.85465049020813], [98.901779651641846, 18.854640337124], [98.901672363281236, 18.85465049020813], [98.901597261428819, 18.854675872918452], [98.9015758037567, 18.854696179086709], [98.9015758037567, 18.854787556843874], [98.901548981666551, 18.854792633385941], [98.901543617248535, 18.854818016096267], [98.901602625846863, 18.854833245722453], [98.901607990264893, 18.854802786470071], [98.901661634445176, 18.854787556843874], [98.901645541191101, 18.854762174133555], [98.901672363281236, 18.854736791423232]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.902181982994065, 18.854797709928], [98.90216588973999, 18.854772327217681], [98.902112245559678, 18.854777403759744], [98.902085423469529, 18.854731714881165], [98.902047872543335, 18.854726638339098], [98.902031779289246, 18.854675872918452], [98.902074694633484, 18.854645413666066], [98.902096152305603, 18.854645413666066], [98.902128338813782, 18.854675872918452], [98.902198076248169, 18.854680949460519], [98.902214169502244, 18.854716485254972], [98.902257084846482, 18.854746944507355], [98.902262449264512, 18.854777403759744], [98.902181982994065, 18.854797709928]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "MultiPolygon", "coordinates": [[[[98.902203440666185, 18.85462510749781], [98.902230262756348, 18.854630184039873], [98.902235627174363, 18.854614954413677], [98.902230262756348, 18.854589571703354], [98.902192711830125, 18.854559112450971], [98.902198076248169, 18.854533729740645], [98.902117609977708, 18.854523576656518], [98.902117609977708, 18.854554035908905], [98.90217661857605, 18.854569265535098], [98.90217661857605, 18.854594648245421], [98.902203440666185, 18.85462510749781]]], [[[98.902203440666185, 18.85462510749781], [98.902181982994065, 18.85462510749781], [98.90217661857605, 18.85463526058194], [98.902203440666185, 18.854645413666066], [98.902203440666185, 18.85462510749781]]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.901672363281236, 18.854554035908905], [98.901640176773057, 18.854503270488255], [98.901586532592773, 18.854508347030322], [98.901618719100938, 18.854589571703354], [98.901645541191101, 18.854599724787487], [98.90166699886322, 18.854630184039873], [98.90168309211731, 18.85462003095574], [98.90168309211731, 18.854559112450971], [98.901672363281236, 18.854554035908905]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.90205860137938, 18.854569265535098], [98.902047872543335, 18.854559112450971], [98.902053236961365, 18.854528653198582], [98.902069330215454, 18.854513423572385], [98.902090787887559, 18.854518500114452], [98.902101516723633, 18.854559112450971], [98.90205860137938, 18.854569265535098]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.902224898338318, 18.854503270488255], [98.902214169502244, 18.854467734693806], [98.902230262756348, 18.854462658151743], [98.902246356010437, 18.854498193946196], [98.902224898338318, 18.854503270488255]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.901672363281236, 18.854909393853426], [98.90168309211731, 18.854944929647875], [98.901747465133667, 18.854960159274071], [98.901720643043504, 18.854990618526461], [98.901731371879578, 18.855021077778844], [98.901774287223816, 18.855031230862974], [98.901790380477891, 18.855016001236784], [98.90178501605989, 18.854975388900264], [98.90181720256804, 18.854950006189942], [98.901806473731995, 18.854909393853426], [98.90181720256804, 18.854904317311362], [98.901822566986084, 18.854843398806587], [98.901876211166382, 18.854889087685169], [98.901854753494263, 18.854904317311362], [98.901854753494263, 18.854950006189942], [98.901935219764695, 18.854960159274071], [98.902031779289246, 18.854950006189942], [98.902042508125305, 18.854929700021685], [98.902101516723633, 18.854919546937552], [98.902117609977708, 18.854904317311362], [98.902101516723633, 18.854812939554197], [98.90206396579741, 18.854797709928], [98.901988863945007, 18.854797709928], [98.901972770690918, 18.854767250675618], [98.901988863945007, 18.854701255628775], [98.901983499526963, 18.854665719834326], [98.901967406272888, 18.854665719834326], [98.901956677436829, 18.854691102544649], [98.901903033256531, 18.854675872918452], [98.90192449092865, 18.854640337124], [98.901999592781067, 18.854640337124], [98.902004957199082, 18.85460480132955], [98.901978135108948, 18.854564188993031], [98.901881575584412, 18.854559112450971], [98.901860117912278, 18.854472811235873], [98.901833295822144, 18.854442351983483], [98.901736736297593, 18.854457581609676], [98.901715278625474, 18.854477887777932], [98.901790380477891, 18.854559112450971], [98.901768922805772, 18.854579418619227], [98.901774287223816, 18.854599724787487], [98.901876211166382, 18.854574342077164], [98.901849389076233, 18.854594648245421], [98.901849389076233, 18.85462003095574], [98.901881575584412, 18.854675872918452], [98.901854753494263, 18.854696179086709], [98.901860117912278, 18.854721561797032], [98.901827931404114, 18.854726638339098], [98.90181183815001, 18.854746944507355], [98.901758193969727, 18.854731714881165], [98.901688456535339, 18.854757097591484], [98.901699185371399, 18.854818016096267], [98.90166699886322, 18.85484847534865], [98.901672363281236, 18.854909393853426]], [[98.901892304420457, 18.854746944507355], [98.901881575584412, 18.854736791423232], [98.901913762092576, 18.854736791423232], [98.901908397674561, 18.854746944507355], [98.901892304420457, 18.854746944507355]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.901897668838501, 18.854518500114452], [98.901876211166382, 18.854503270488255], [98.901865482330322, 18.854467734693806], [98.901897668838501, 18.854442351983483], [98.90192985534668, 18.85443727544142], [98.901945948600769, 18.854457581609676], [98.901945948600769, 18.854508347030322], [98.901897668838501, 18.854518500114452]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.902101516723633, 18.854310361889805], [98.90205860137938, 18.85429513202768], [98.902010321617112, 18.85430020864839], [98.902004957199082, 18.854366203852518], [98.902042508125305, 18.854386510020774], [98.902053236961365, 18.85441696927316], [98.902031779289246, 18.854442351983483], [98.902037143707261, 18.854467734693806], [98.902010321617112, 18.854488040862066], [98.902031779289246, 18.854488040862066], [98.902037143707261, 18.854472811235873], [98.902101516723633, 18.854488040862066], [98.902128338813782, 18.85444742852555], [98.90217661857605, 18.854457581609676], [98.902192711830125, 18.854442351983483], [98.902224898338318, 18.854452505067613], [98.902251720428467, 18.854442351983483], [98.902246356010437, 18.854350974226318], [98.902230262756348, 18.854330668058065], [98.902203440666185, 18.854340821142188], [98.902203440666185, 18.85437635693664], [98.902192711830125, 18.85437635693664], [98.902192711830125, 18.854356050768384], [98.902160525321946, 18.854320514973931], [98.902101516723633, 18.854310361889805]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.901903033256531, 18.854310361889805], [98.901876211166382, 18.854279902165555], [98.901849389076233, 18.854279902165555], [98.901838660240159, 18.85430020864839], [98.901779651641846, 18.854279902165555], [98.90178501605989, 18.854315438431868], [98.90181720256804, 18.854320514973931], [98.901844024658189, 18.854401739646967], [98.901940584182725, 18.85441696927316], [98.901951313018799, 18.854366203852518], [98.901903033256531, 18.854310361889805]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.904418945312486, 18.840988881434626], [98.904354572296143, 18.841004112475986], [98.904343843460083, 18.841075190669002], [98.904359936714172, 18.841151345875812], [98.904365301132202, 18.841161499903386], [98.90442967414856, 18.841151345875812], [98.904440402984605, 18.841207193027468], [98.904456496238708, 18.841217347055039], [98.904531598091125, 18.841202116013683], [98.904542326927171, 18.841176730944742], [98.904520869255052, 18.841136114834448], [98.904547691345201, 18.841125960806878], [98.904531598091125, 18.841024420531134], [98.904510140419006, 18.841004112475986], [98.904467225074754, 18.841009189489775], [98.904418945312486, 18.840988881434626]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.904236555099487, 18.841090421710366], [98.904199004173265, 18.841044728586279], [98.904220461845384, 18.840999035462197], [98.904247283935533, 18.840999035462197], [98.904268741607652, 18.841029497544923], [98.904241919517531, 18.841065036641432], [98.904252648353562, 18.841090421710366], [98.904236555099487, 18.841090421710366]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.904300928115831, 18.840999035462197], [98.904268741607652, 18.8409584193519], [98.904263377189636, 18.84092795726918], [98.904290199279785, 18.840892418172672], [98.904338479042053, 18.840887341158883], [98.904376029968248, 18.840943188310543], [98.904376029968248, 18.840973650393266], [98.904300928115831, 18.840999035462197]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.904418945312486, 18.840887341158883], [98.904402852058411, 18.840887341158883], [98.904392123222337, 18.840907649214035], [98.90442430973053, 18.840912726227817], [98.90442967414856, 18.840953342338114], [98.904467225074754, 18.840973650393266], [98.904483318328872, 18.840933034282969], [98.904461860656724, 18.840917803241606], [98.904461860656724, 18.840861956089945], [98.904440402984605, 18.840861956089945], [98.904418945312486, 18.840887341158883]], [[98.904440402984605, 18.840943188310543], [98.904440402984605, 18.840922880255391], [98.904456496238708, 18.840917803241606], [98.904451131820665, 18.840943188310543], [98.904440402984605, 18.840943188310543]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.904370665550218, 18.840882264145097], [98.904338479042053, 18.840831494007226], [98.904274106025682, 18.840821339979655], [98.904252648353562, 18.840740107759057], [98.904258012771606, 18.840699491648763], [98.904284834861755, 18.840704568662549], [98.904300928115831, 18.840689337621196], [98.904295563697801, 18.840643644497106], [98.904311656951904, 18.840618259428169], [98.904343843460083, 18.840587797345449], [98.904386758804321, 18.840577643317875], [98.904397487640367, 18.840608105400594], [98.904381394386292, 18.840618259428169], [98.904381394386292, 18.840648721510892], [98.90440821647644, 18.840699491648763], [98.904392123222337, 18.840750261786635], [98.904418945312486, 18.840811185952081], [98.904418945312486, 18.840861956089945], [98.904397487640367, 18.840882264145097], [98.904370665550218, 18.840882264145097]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.904279470443726, 18.840506565124862], [98.904231190681443, 18.840476103042132], [98.904220461845384, 18.840450717973201], [98.904279470443726, 18.840399947835326], [98.904333114624023, 18.840389793807752], [98.904322385787964, 18.840506565124862], [98.904279470443726, 18.840506565124862]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.90192449092865, 18.854259595682723], [98.901903033256531, 18.854249442441308], [98.901897668838501, 18.854229135958473], [98.901790380477891, 18.854229135958473], [98.901763558387742, 18.854198676234226], [98.901704549789443, 18.854218982717061], [98.901704549789443, 18.85416313988927], [98.901720643043504, 18.854147910027145], [98.901833295822144, 18.854158063268564], [98.901908397674561, 18.854137756785729], [98.902004957199082, 18.854137756785729], [98.902053236961365, 18.854158063268564], [98.902085423469529, 18.854224059337767], [98.902053236961365, 18.854259595682723], [98.902021050453186, 18.854259595682723], [98.901988863945007, 18.854224059337767], [98.90192449092865, 18.854259595682723]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.902181982994065, 18.854224059337767], [98.90217125415802, 18.854168216509976], [98.902155160903916, 18.854152986647854], [98.902160525321946, 18.854132680165019], [98.902181982994065, 18.854142833406438], [98.902192711830125, 18.854173293130682], [98.902224898338318, 18.854188522992811], [98.902219533920288, 18.854224059337767], [98.902181982994065, 18.854224059337767]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.901865482330322, 18.854132680165019], [98.901833295822144, 18.854117450302898], [98.901833295822144, 18.854102220440772], [98.901892304420457, 18.854112373682192], [98.901886940002441, 18.854132680165019], [98.901865482330322, 18.854132680165019]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.901913762092576, 18.854041300992275], [98.901903033256531, 18.85402099450944], [98.901908397674561, 18.854000688026613], [98.90192449092865, 18.853995611405903], [98.90192449092865, 18.853970228302366], [98.901962041854844, 18.853965151681656], [98.901978135108948, 18.853980381543778], [98.902010321617112, 18.853980381543778], [98.90202641487123, 18.854000688026613], [98.902015686035142, 18.854026071130153], [98.901951313018799, 18.854015917888738], [98.901935219764695, 18.854000688026613], [98.901935219764695, 18.854036224371566], [98.901913762092576, 18.854041300992275]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.901672363281236, 18.853904232233159], [98.901640176773057, 18.853873772508912], [98.901645541191101, 18.853949921819531], [98.90167772769928, 18.853934691957406], [98.901672363281236, 18.853904232233159]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.913436532020555, 18.845507334101239], [98.913415074348435, 18.84548702667491], [98.913382887840257, 18.845492103531495], [98.913388252258301, 18.84547687296174], [98.913345336914062, 18.845466719248577], [98.913334608078003, 18.845436258109078], [98.913372159004197, 18.845415950682746], [98.913420438766479, 18.845426104395912], [98.913425803184509, 18.845441334965663], [98.913463354110704, 18.845431181252497], [98.913490176200867, 18.845456565535411], [98.913490176200867, 18.84547687296174], [98.913474082946777, 18.845497180388072], [98.913436532020555, 18.845507334101239]], [[98.91339898109436, 18.845481949818328], [98.91340970993042, 18.845481949818328], [98.91340970993042, 18.84547687296174], [98.91339898109436, 18.84547687296174], [98.91339898109436, 18.845481949818328]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.913500905036926, 18.84540579696958], [98.913479447364807, 18.845375335830081], [98.91340434551239, 18.845385489543247], [98.913356065750122, 18.845365182116915], [98.913339972496019, 18.84531441355108], [98.913350701332092, 18.845304259837913], [98.913452625274658, 18.84531441355108], [98.913474082946777, 18.845349951547163], [98.913522362709045, 18.845344874690582], [98.913554549217224, 18.845365182116915], [98.91355991363524, 18.84540579696958], [98.913527727127089, 18.845395643256413], [98.913500905036926, 18.84540579696958]], [[98.913474082946777, 18.845365182116915], [98.913474082946777, 18.84536010526033], [98.913479447364807, 18.84536010526033], [98.913479447364807, 18.845365182116915], [98.913474082946777, 18.845365182116915]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.913189768791185, 18.845390566399828], [98.913125395774841, 18.845334720977412], [98.913130760192871, 18.845309336694502], [98.91315221786499, 18.845294106124747], [98.913221955299363, 18.845294106124747], [98.913232684135437, 18.845380412686662], [98.913189768791185, 18.845390566399828]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.913028836250291, 18.845349951547163], [98.912959098815918, 18.84526872184184], [98.912953734397874, 18.845238260702338], [98.912969827651963, 18.845223030132587], [98.913039565086351, 18.845223030132587], [98.913077116012573, 18.84526872184184], [98.913087844848633, 18.845334720977412], [98.913071751594529, 18.845349951547163], [98.913028836250291, 18.845349951547163]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.91291081905365, 18.845141800427253], [98.912883996963515, 18.845136723570672], [98.912883996963515, 18.845116416144336], [98.912900090217576, 18.845126569857502], [98.912894725799546, 18.845111339287755], [98.91291081905365, 18.845111339287755], [98.912937641143799, 18.845126569857502], [98.912937641143799, 18.845141800427253], [98.91291081905365, 18.845141800427253]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.913002014160156, 18.845177338423337], [98.912985920906067, 18.84515195414042], [98.912991285324082, 18.845116416144336], [98.912932276725769, 18.84510626243117], [98.912921547889695, 18.845085955004837], [98.912932276725769, 18.84505041700876], [98.91290545463562, 18.845009802156095], [98.912873268127427, 18.845004725299511], [98.912830352783189, 18.844969187303427], [98.912824988365173, 18.844989494729763], [98.912792801856995, 18.845004725299511], [98.912755250930772, 18.844979341016597], [98.912755250930772, 18.844953956733679], [98.912696242332444, 18.844948879877094], [98.912680149078355, 18.844933649307343], [98.912680149078355, 18.844887957598093], [98.912760615348816, 18.844887957598093], [98.912771344184861, 18.844857496458598], [98.912744522094727, 18.844837189032265], [98.912690877914429, 18.84485241960202], [98.91266942024231, 18.844821958462518], [98.91266942024231, 18.8447965741796], [98.912739157676697, 18.844806727892767], [98.912808895111084, 18.8447965741796], [98.912862539291382, 18.844750882470354], [98.912867903709412, 18.844730575044018], [98.912916183471665, 18.844710267617685], [98.912943005561814, 18.84471534447427], [98.912975192069993, 18.844750882470354], [98.913012742996216, 18.844745805613769], [98.913039565086351, 18.844761036183517], [98.913066387176514, 18.844806727892767], [98.913071751594529, 18.844867650171761], [98.913061022758484, 18.844872727028346], [98.913055658340454, 18.844928572450762], [98.912996649742112, 18.844969187303427], [98.913028836250291, 18.845004725299511], [98.913034200668335, 18.84505041700876], [98.913044929504395, 18.84505041700876], [98.913044929504395, 18.844989494729763], [98.913055658340454, 18.844979341016597], [98.913087844848633, 18.844999648442929], [98.913093209266648, 18.845040263295594], [98.913061022758484, 18.845055493865338], [98.913077116012573, 18.845111339287755], [98.913071751594529, 18.84515195414042], [98.91305029392241, 18.845172261566752], [98.913002014160156, 18.845177338423337]], [[98.912959098815918, 18.844821958462518], [98.912996649742112, 18.844832112175684], [98.913002014160156, 18.84484226588885], [98.912964463233962, 18.844847342745428], [98.912948369979844, 18.844816881605933], [98.912959098815918, 18.844821958462518]], [[98.912728428840623, 18.844821958462518], [98.912728428840623, 18.844816881605933], [98.912733793258667, 18.844816881605933], [98.912733793258667, 18.844821958462518], [98.912728428840623, 18.844821958462518]], [[98.912932276725769, 18.844801651036185], [98.912943005561814, 18.844801651036185], [98.912937641143799, 18.844786420466434], [98.912921547889695, 18.844786420466434], [98.912932276725769, 18.844801651036185]], [[98.912814259529114, 18.844969187303427], [98.912808895111084, 18.844959033590264], [98.912824988365173, 18.844959033590264], [98.912824988365173, 18.844964110446842], [98.912814259529114, 18.844969187303427]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.912674784660325, 18.84471534447427], [98.912680149078355, 18.844684883334772], [98.912712335586548, 18.844684883334772], [98.912712335586548, 18.84471534447427], [98.912674784660325, 18.84471534447427]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.91265869140625, 18.84460873048603], [98.912642598152175, 18.844573192489943], [98.912690877914429, 18.844563038776776], [98.912706971168504, 18.844537654493859], [98.912701606750474, 18.844517347067523], [98.912653326988206, 18.844502116497775], [98.912599682807908, 18.84446150164511], [98.912583589553833, 18.844405656222698], [98.912481665611267, 18.844385348796365], [98.912438750267029, 18.844410733079282], [98.912385106086717, 18.844420886792449], [98.912385106086717, 18.84447165535828], [98.91240119934082, 18.844491962784609], [98.912444114685059, 18.844502116497775], [98.912497758865342, 18.844491962784609], [98.912513852119446, 18.844512270210942], [98.912540674209609, 18.844512270210942], [98.912605047225938, 18.844573192489943], [98.912567496299744, 18.84460873048603], [98.912535309791565, 18.844578269346524], [98.912438750267029, 18.844563038776776], [98.912433385848985, 18.844623961055774], [98.912476301193223, 18.844644268482103], [98.912492394447327, 18.84466965276502], [98.91255140304564, 18.844674729621602], [98.912572860717759, 18.844629037912359], [98.912594318389893, 18.844695037047934], [98.912647962570176, 18.844684883334772], [98.91265869140625, 18.844720421330852], [98.91265869140625, 18.844659499051858], [98.91266942024231, 18.844654422195273], [98.91265869140625, 18.84460873048603]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.915356993675218, 18.838694070888533], [98.915335536003099, 18.838688993796158], [98.915319442749023, 18.838663608334279], [98.915340900421157, 18.838607760318151], [98.915405273437486, 18.838633145780026], [98.915399909019456, 18.838683916703783], [98.915356993675218, 18.838694070888533]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.915340900421157, 18.838562066486777], [98.915314078330994, 18.838526526840152], [98.915319442749023, 18.838470678824024], [98.915276527404771, 18.838475755916399], [98.915244340896606, 18.838445293362145], [98.915265798568726, 18.838399599530771], [98.91530871391295, 18.838389445346021], [98.915362358093262, 18.838399599530771], [98.915373086929321, 18.838440216269774], [98.915405273437486, 18.838465601731649], [98.915405273437486, 18.838531603932527], [98.915340900421157, 18.838562066486777]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.920286893844604, 18.853909308853869], [98.920233249664307, 18.853863619267493], [98.920233249664307, 18.853843312784658], [98.920329809188843, 18.853812853060415], [98.920345902442918, 18.853883925750324], [98.920286893844604, 18.853909308853869]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.920512199401841, 18.853924538715987], [98.920490741729722, 18.853894078991743], [98.920431733131409, 18.853894078991743], [98.920367360115037, 18.853853466026077], [98.920367360115037, 18.85378746995687], [98.920356631279006, 18.853762086853333], [98.920329809188843, 18.853762086853333], [98.920308351516724, 18.853701167404836], [98.920286893844604, 18.853711320646251], [98.920270800590501, 18.85379254657758], [98.920227885246277, 18.853802699818999], [98.920184969902039, 18.853762086853333], [98.920147418975816, 18.853751933611914], [98.920147418975816, 18.853675784301295], [98.920206427574158, 18.853630094714923], [98.920233249664307, 18.853630094714923], [98.920260071754456, 18.853655477818464], [98.920260071754456, 18.853619941473507], [98.92029225826262, 18.853594558369963], [98.920313715934739, 18.853594558369963], [98.920361995697021, 18.853645324577045], [98.92039954662323, 18.853655477818464], [98.92039954662323, 18.853706244025545], [98.920431733131409, 18.853746856991208], [98.920528292655945, 18.85379254657758], [98.920539021492004, 18.853833159543242], [98.920522928237901, 18.853848389405371], [98.920522928237901, 18.853873772508912], [98.92054438591002, 18.85388900237103], [98.92054438591002, 18.853914385474575], [98.920512199401841, 18.853924538715987]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.920608758926377, 18.853493025955803], [98.920571208000183, 18.853457489610847], [98.920571208000183, 18.853416876645184], [98.920587301254258, 18.85339149354164], [98.920619487762451, 18.85338641692093], [98.920667767524705, 18.853467642852266], [98.92065167427063, 18.853493025955803], [98.920608758926377, 18.853493025955803]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.92040491104126, 18.853579328507838], [98.920345902442918, 18.853533638921466], [98.920361995697021, 18.853462566231556], [98.920394182205186, 18.853437183128012], [98.920394182205186, 18.85338641692093], [98.920437097549453, 18.85338641692093], [98.920474648475647, 18.853421953265894], [98.920480012893677, 18.853457489610847], [98.920496106147766, 18.853406723403769], [98.92053365707396, 18.853396570162349], [98.920555114746094, 18.853437183128012], [98.92053365707396, 18.853503179197219], [98.920512199401841, 18.853508255817932], [98.920485377311692, 18.853493025955803], [98.920447826385484, 18.853538715542175], [98.920426368713379, 18.853538715542175], [98.920458555221558, 18.8535539454043], [98.920458555221558, 18.853569175266426], [98.92040491104126, 18.853579328507838]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.920437097549453, 18.853305190989605], [98.920437097549453, 18.853269654644649], [98.920480012893677, 18.853254424782527], [98.920485377311692, 18.853274731265358], [98.920469284057603, 18.853305190989605], [98.920437097549453, 18.853305190989605]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.920276165008545, 18.853447336369427], [98.920238614082336, 18.853432106507309], [98.920211791992188, 18.853396570162349], [98.920211791992188, 18.853340727334558], [98.920243978500352, 18.853300114368896], [98.920243978500352, 18.853274731265358], [98.920222520828233, 18.853259501403233], [98.920243978500352, 18.853249348161814], [98.920260071754456, 18.853254424782527], [98.920260071754456, 18.85328488450677], [98.920276165008545, 18.853300114368896], [98.920297622680664, 18.853300114368896], [98.920329809188843, 18.85332549747244], [98.920319080352783, 18.853432106507309], [98.920276165008545, 18.853447336369427]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.920662403106675, 18.853137662506235], [98.92064094543457, 18.85312243264412], [98.92064094543457, 18.853005670367825], [98.920657038688645, 18.852985363884997], [98.920721411705017, 18.852959980781453], [98.920748233795166, 18.852990440505707], [98.920742869377122, 18.8530513599542], [98.920775055885315, 18.853081819678451], [98.920769691467285, 18.853117356023407], [98.920737504959092, 18.853137662506235], [98.920710682868943, 18.853127509264823], [98.920662403106675, 18.853137662506235]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.918532729148865, 18.838287903498518], [98.918532729148865, 18.838252363851893], [98.918570280075059, 18.83826251803664], [98.918570280075059, 18.83827267222139], [98.91854882240294, 18.83827267222139], [98.91854882240294, 18.838287903498518], [98.918532729148865, 18.838287903498518]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.918709754943848, 18.838084819803509], [98.918699026107774, 18.838074665618759], [98.918704390525818, 18.838034048879756], [98.918758034706116, 18.838044203064509], [98.918752670288072, 18.838079742711137], [98.918709754943848, 18.838084819803509]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.918800950050354, 18.83827267222139], [98.918768763542161, 18.838242209667143], [98.91865611076355, 18.838252363851893], [98.918607831001282, 18.838196515835769], [98.918505907058716, 18.838196515835769], [98.918511271476746, 18.838237132574765], [98.918495178222642, 18.838257440944268], [98.918425440788269, 18.838237132574765], [98.918414711952209, 18.838140667819641], [98.918452262878404, 18.838130513634887], [98.918500542640672, 18.838166053281512], [98.918489813804626, 18.838074665618759], [98.918473720550523, 18.838069588526388], [98.918457627296448, 18.838105128173012], [98.918414711952209, 18.838115282357762], [98.91839325428009, 18.838049280156888], [98.918414711952209, 18.837993432140756], [98.918398618698106, 18.837978200863638], [98.918371796607957, 18.838003586325506], [98.918280601501451, 18.837993432140756], [98.918259143829331, 18.837927429939882], [98.918269872665405, 18.837886813200882], [98.91829669475554, 18.837886813200882], [98.9183074235916, 18.837907121570382], [98.918430805206285, 18.837896967385632], [98.918446898460388, 18.837957892494135], [98.918511271476746, 18.83798327795601], [98.918505907058716, 18.838008663417884], [98.918527364730821, 18.838013740510256], [98.918522000312791, 18.838059434341638], [98.918564915657058, 18.838049280156888], [98.918543457984939, 18.837998509233135], [98.918559551239014, 18.837947738309381], [98.918581008911133, 18.837942661217006], [98.918597102165208, 18.83796296958651], [98.91864001750946, 18.837978200863638], [98.918688297271729, 18.838089896895887], [98.918677568435655, 18.838110205265384], [98.918650746345506, 18.838115282357762], [98.918650746345506, 18.838130513634887], [98.918688297271729, 18.838140667819641], [98.918741941452012, 18.838211747112886], [98.918774127960191, 18.83818128455864], [98.918838500976548, 18.838196515835769], [98.918843865394578, 18.838247286759522], [98.918800950050354, 18.83827267222139]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.918350338935838, 18.837866504831378], [98.918355703353868, 18.837836042277129], [98.918387889862061, 18.837795425538129], [98.918420076370225, 18.837810656815254], [98.918420076370225, 18.837861427739], [98.918350338935838, 18.837866504831378]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.918452262878404, 18.837836042277129], [98.918436169624329, 18.837780194261004], [98.918489813804626, 18.837775117168629], [98.918500542640672, 18.837810656815254], [98.918484449386597, 18.83783096518475], [98.918452262878404, 18.837836042277129]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.91865611076355, 18.837820811], [98.91864001750946, 18.837764962983876], [98.91855418682097, 18.837770040076254], [98.918532729148865, 18.837734500429626], [98.918559551239014, 18.837709114967751], [98.918586373329163, 18.837709114967751], [98.918602466583238, 18.837729423337247], [98.918618559837327, 18.837724346244876], [98.918618559837327, 18.837709114967751], [98.91864001750946, 18.837709114967751], [98.91864538192749, 18.837754808799126], [98.918682932853699, 18.837759885891501], [98.918699026107774, 18.837780194261004], [98.918688297271729, 18.837810656815254], [98.91865611076355, 18.837820811]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.918323516845703, 18.837815733907625], [98.918275237083421, 18.837800502630504], [98.918237686157227, 18.837693883690623], [98.918243050575256, 18.837663421136373], [98.918291330337524, 18.837663421136373], [98.918355703353868, 18.837638035674498], [98.918446898460388, 18.837688806598251], [98.918462991714492, 18.837658344043998], [98.918468356132507, 18.837693883690623], [98.918452262878404, 18.837704037875373], [98.918441534042358, 18.837749731706751], [98.918355703353868, 18.837810656815254], [98.918323516845703, 18.837815733907625]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.918194770812988, 18.837709114967751], [98.918178677558885, 18.837683729505873], [98.918189406394958, 18.837648189859248], [98.918205499649034, 18.837673575321123], [98.918232321739183, 18.837678652413494], [98.918216228485107, 18.837709114967751], [98.918194770812988, 18.837709114967751]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.918414711952209, 18.83764311276687], [98.918387889862061, 18.837612650212623], [98.918387889862061, 18.83759234184312], [98.91840398311615, 18.83758218765837], [98.918436169624329, 18.83759234184312], [98.918441534042358, 18.837607573120248], [98.918441534042358, 18.837627881489748], [98.918414711952209, 18.83764311276687]], [[98.918425440788269, 18.837607573120248], [98.918425440788269, 18.837602496027877], [98.918430805206285, 18.837602496027877], [98.918430805206285, 18.837607573120248], [98.918425440788269, 18.837607573120248]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.918253779411302, 18.837566956381245], [98.918226957321153, 18.837551725104124], [98.918226957321153, 18.837511108365117], [98.918210864067063, 18.837495877087992], [98.918221592903151, 18.837470491626114], [98.918253779411302, 18.837490799995614], [98.918312788009644, 18.837500954180371], [98.918275237083421, 18.837536493826995], [98.918269872665405, 18.837566956381245], [98.918253779411302, 18.837566956381245]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.918151855468736, 18.837429874887118], [98.918151855468736, 18.837414643609989], [98.918076753616319, 18.837414643609989], [98.9180552959442, 18.837465414533742], [98.918103575706482, 18.837521262549867], [98.918167948722839, 18.837536493826995], [98.918194770812988, 18.837526339642245], [98.918184041976929, 18.837500954180371], [98.918205499649034, 18.837480645810864], [98.918210864067063, 18.837440029071868], [98.918151855468736, 18.837429874887118]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.918575644493089, 18.837516185457496], [98.918559551239014, 18.837495877087992], [98.918511271476746, 18.837506031272746], [98.918500542640672, 18.837470491626114], [98.918597102165208, 18.837470491626114], [98.918607831001282, 18.837506031272746], [98.918575644493089, 18.837516185457496]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.910174965858445, 18.831880522086887], [98.910148143768296, 18.831865290338317], [98.910148143768296, 18.831850058589747], [98.910185694694519, 18.831834826841177], [98.910201787948608, 18.831860213088795], [98.910174965858445, 18.831880522086887]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.909858465194702, 18.831855135839273], [98.909917473793016, 18.831850058589747], [98.909928202629075, 18.831829749591655], [98.909928202629075, 18.831885599336417], [98.909960389137268, 18.831921140083082], [98.909997940063462, 18.831926217332605], [98.910008668899536, 18.831910985584035], [98.909981846809387, 18.831905908334509], [98.909981846809387, 18.831885599336417], [98.910040855407701, 18.831880522086887], [98.910078406333923, 18.831850058589747], [98.91005158424376, 18.831834826841177], [98.910040855407701, 18.831809440593556], [98.910014033317566, 18.831804363344038], [98.909997940063462, 18.831773899846894], [98.90992283821106, 18.831789131595468], [98.909906744956956, 18.831768822597368], [98.909837007522583, 18.831763745347846], [98.909831643104539, 18.831844981340225], [98.909858465194702, 18.831855135839273]], [[98.909928202629075, 18.831829749591655], [98.909928202629075, 18.831819595092607], [98.909933567047119, 18.831819595092607], [98.909933567047119, 18.831829749591655], [98.909928202629075, 18.831829749591655]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.91154825687407, 18.831773899846894], [98.911532163619995, 18.831763745347846], [98.911526799201951, 18.831707895603088], [98.911591172218309, 18.831733281850706], [98.911585807800293, 18.831768822597368], [98.91154825687407, 18.831773899846894]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.910073041915879, 18.831809440593556], [98.910024762153625, 18.831784054345938], [98.91005158424376, 18.83171297285261], [98.909960389137268, 18.831672354856419], [98.909987211227417, 18.831662200357375], [98.909981846809387, 18.831646968608805], [98.909997940063462, 18.831631736860231], [98.910078406333923, 18.831636814109757], [98.910115957260118, 18.831667277606897], [98.910164237022414, 18.831667277606897], [98.910142779350267, 18.831768822597368], [98.910105228424072, 18.831804363344038], [98.910073041915879, 18.831809440593556]], [[98.910083770751967, 18.831743436349754], [98.910062313079834, 18.831728204601184], [98.910110592842102, 18.831728204601184], [98.910099864006028, 18.831743436349754], [98.910083770751967, 18.831743436349754]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.911263942718506, 18.831768822597368], [98.911215662956238, 18.831763745347846], [98.911199569702134, 18.831743436349754], [98.911221027374268, 18.831677432105945], [98.9113014936447, 18.831652045858327], [98.9113014936447, 18.831611427862139], [98.911328315734849, 18.831580964364996], [98.911419510841355, 18.83157588711547], [98.911440968513489, 18.831616505111658], [98.911440968513489, 18.831677432105945], [98.911457061767564, 18.831723127351658], [98.911403417587266, 18.831758668098324], [98.911333680152893, 18.831743436349754], [98.911290764808655, 18.831768822597368], [98.911263942718506, 18.831768822597368]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.909912109375, 18.831652045858327], [98.909944295883179, 18.831662200357375], [98.909971117973313, 18.831646968608805], [98.909981846809387, 18.831611427862139], [98.909960389137268, 18.831580964364996], [98.909933567047119, 18.83157588711547], [98.909912109375, 18.831601273363088], [98.909869194030762, 18.83160635061261], [98.909885287284851, 18.831636814109757], [98.909912109375, 18.831652045858327]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.910094499587998, 18.831520037370716], [98.910094499587998, 18.831484496624046], [98.910110592842102, 18.831469264875473], [98.910126686096191, 18.83151496012119], [98.910094499587998, 18.831520037370716]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.910105228424072, 18.831641891359279], [98.910056948661804, 18.831616505111658], [98.910062313079834, 18.83157588711547], [98.910078406333923, 18.831560655366903], [98.910142779350267, 18.831565732616426], [98.910142779350267, 18.83153019186976], [98.910174965858445, 18.831454033126906], [98.910196423530564, 18.831443878627859], [98.910244703292847, 18.831454033126906], [98.910287618637085, 18.831504805622142], [98.910266160964966, 18.831616505111658], [98.910207152366638, 18.831636814109757], [98.910148143768296, 18.831596196113569], [98.910142779350267, 18.831631736860231], [98.910105228424072, 18.831641891359279]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.910094499587998, 18.831428646879289], [98.910078406333923, 18.831372797134527], [98.910083770751967, 18.831357565385957], [98.910110592842102, 18.831357565385957], [98.910121321678147, 18.831418492380241], [98.910094499587998, 18.831428646879289]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.910217881202684, 18.831382951633572], [98.910191059112535, 18.831357565385957], [98.910196423530564, 18.831332179138339], [98.910266160964966, 18.831342333637384], [98.910260796546936, 18.831382951633572], [98.910217881202684, 18.831382951633572]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.910040855407701, 18.831063084913584], [98.909971117973313, 18.830966617172631], [98.909987211227417, 18.830920921926921], [98.910056948661804, 18.830936153675491], [98.910094499587998, 18.830961539923116], [98.910078406333923, 18.831052930414533], [98.910040855407701, 18.831063084913584]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.910121321678147, 18.831012312418348], [98.910105228424072, 18.830956462673587], [98.910078406333923, 18.830941230925013], [98.910067677497864, 18.830915844677399], [98.910132050514221, 18.830915844677399], [98.910164237022414, 18.830936153675491], [98.910180330276489, 18.830971694422161], [98.910174965858445, 18.830997080669778], [98.910121321678147, 18.831012312418348]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.911156654357896, 18.849061094244316], [98.911140561103821, 18.849035710354482], [98.911145925521836, 18.849015403242614], [98.911178112030015, 18.849025556798548], [98.911156654357896, 18.849061094244316]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.91115128993988, 18.8489392515731], [98.911076188087449, 18.848873253459523], [98.911086916923523, 18.848852946347659], [98.911135196685777, 18.848827562457817], [98.911172747612, 18.848832639235784], [98.911210298538208, 18.848883407015457], [98.911199569702134, 18.8489392515731], [98.91115128993988, 18.8489392515731]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.910276889801025, 18.848827562457817], [98.910271525382981, 18.848807255345953], [98.910292983055101, 18.848776794678148], [98.910309076309204, 18.848792025012049], [98.910309076309204, 18.848817408901883], [98.910276889801025, 18.848827562457817]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.91116201877594, 18.84875141078831], [98.911135196685777, 18.848731103676442], [98.911145925521836, 18.848705719786604], [98.911183476448045, 18.848715873342538], [98.911183476448045, 18.84875141078831], [98.91116201877594, 18.84875141078831]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.911596536636353, 18.84882248567985], [98.911585807800293, 18.848771717900181], [98.911569714546189, 18.848756487566277], [98.911575078964233, 18.848726026898476], [98.91154825687407, 18.848705719786604], [98.911553621292114, 18.848639721673024], [98.911580443382263, 18.848614337783193], [98.911677002906799, 18.848629568117094], [98.911725282669053, 18.848695566230667], [98.911725282669053, 18.848771717900181], [98.911682367324829, 18.848797101790016], [98.911650180816636, 18.848792025012049], [98.911623358726487, 18.84882248567985], [98.911596536636353, 18.84882248567985]], [[98.911591172218309, 18.848756487566277], [98.911591172218309, 18.848736180454409], [98.911596536636353, 18.848736180454409], [98.911601901054368, 18.84875141078831], [98.911591172218309, 18.848756487566277]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.910185694694519, 18.848670182340832], [98.910169601440415, 18.848654952006928], [98.910174965858445, 18.848634644895057], [98.910223245620713, 18.848639721673024], [98.910217881202684, 18.848660028784895], [98.910185694694519, 18.848670182340832]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.910260796546936, 18.848761564344244], [98.910239338874803, 18.848746334010343], [98.910228610038757, 18.848680335896766], [98.910260796546936, 18.848639721673024], [98.910282254219055, 18.848634644895057], [98.910266160964966, 18.848614337783193], [98.910271525382981, 18.84856357000352], [98.910287618637085, 18.848548339669616], [98.910319805145249, 18.848548339669616], [98.910335898399353, 18.84856357000352], [98.910330533981323, 18.848583877115388], [98.910368084907532, 18.848568646781487], [98.91040027141571, 18.848599107449285], [98.910389542579637, 18.848629568117094], [98.91041100025177, 18.848700643008634], [98.910405635833754, 18.848710796564571], [98.910351991653442, 18.848710796564571], [98.910330533981323, 18.848746334010343], [98.910260796546936, 18.848761564344244]], [[98.910341262817369, 18.848685412674733], [98.910346627235413, 18.848685412674733], [98.910346627235413, 18.848680335896766], [98.910341262817369, 18.848680335896766], [98.910341262817369, 18.848685412674733]], [[98.91029834747313, 18.848639721673024], [98.910292983055101, 18.848629568117094], [98.910325169563293, 18.848609261005226], [98.910325169563293, 18.848649875228961], [98.91029834747313, 18.848639721673024]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.911698460578904, 18.848553416447583], [98.911687731742845, 18.848543262891649], [98.911698460578904, 18.848517879001811], [98.911752104759216, 18.848512802223844], [98.911762833595262, 18.848522955779778], [98.911762833595262, 18.848538186113682], [98.911698460578904, 18.848553416447583]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.911226391792283, 18.848538186113682], [98.911204934120164, 18.84850264866791], [98.911204934120164, 18.848467111222138], [98.911221027374268, 18.848431573776363], [98.911253213882446, 18.848426496998396], [98.911285400390625, 18.848456957666201], [98.911285400390625, 18.848528032557748], [98.911226391792283, 18.848538186113682]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.910443186759935, 18.848456957666201], [98.910416364669786, 18.848451880888238], [98.910389542579637, 18.848416343442462], [98.910394906997666, 18.848350345328889], [98.910437822341905, 18.848345268550922], [98.910448551177979, 18.848370652440757], [98.910475373268127, 18.84838080599669], [98.910486102104201, 18.848451880888238], [98.910443186759935, 18.848456957666201]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.909912109375, 18.848264040103444], [98.909879922866807, 18.848253886547507], [98.909826278686509, 18.848274193659378], [98.909820914268479, 18.848330038217021], [98.909837007522583, 18.848355422106856], [98.909906744956956, 18.848360498884819], [98.90992283821106, 18.848350345328889], [98.909938931465149, 18.848279270437345], [98.909912109375, 18.848264040103444]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.909912109375, 18.847817283642318], [98.909853100776658, 18.847812206864351], [98.909858465194702, 18.847857897866056], [98.909869194030762, 18.84786805142199], [98.90992283821106, 18.847862974644023], [98.909933567047119, 18.847883281755895], [98.909955024719224, 18.847883281755895], [98.909965753555298, 18.847959433425402], [98.909976482391343, 18.847969586981336], [98.910024762153625, 18.847964510203369], [98.910014033317566, 18.848005124427107], [98.910083770751967, 18.848030508316945], [98.910067677497864, 18.847908665645726], [98.909992575645433, 18.847862974644023], [98.909976482391343, 18.847832513976222], [98.909912109375, 18.847817283642318]], [[98.909960389137268, 18.847878204977928], [98.909960389137268, 18.84786805142199], [98.909976482391343, 18.84786805142199], [98.909976482391343, 18.847878204977928], [98.909960389137268, 18.847878204977928]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.922947645187364, 18.855884089929827], [98.922931551933289, 18.855863783761571], [98.922931551933289, 18.855833324509177], [98.922958374023438, 18.855813018340921], [98.922979831695542, 18.855813018340921], [98.923033475875854, 18.85586886030363], [98.923022747039781, 18.855884089929827], [98.922947645187364, 18.855884089929827]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.922743797302246, 18.855884089929827], [98.922711610794067, 18.8558587072195], [98.922727704048143, 18.855823171425051], [98.922786712646484, 18.855823171425051], [98.922818899154663, 18.855853630677441], [98.922743797302246, 18.855884089929827]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.922513127326965, 18.855528731985306], [98.922502398490892, 18.855523655443243], [98.922502398490892, 18.855472890022597], [98.922534584999084, 18.855462736938467], [98.922561407089219, 18.855477966564656], [98.92255067825316, 18.855503349274983], [98.922561407089219, 18.855523655443243], [98.922513127326965, 18.855528731985306]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.922427296638475, 18.855574420863885], [98.922352194786072, 18.855528731985306], [98.922379016876206, 18.855457660396397], [98.922336101531968, 18.855462736938467], [98.922325372695923, 18.855442430770207], [98.922336101531968, 18.855401818433688], [98.922421932220459, 18.855401818433688], [98.922421932220459, 18.855386588807498], [98.922443389892578, 18.855376435723368], [98.92249166965486, 18.855437354228144], [98.92249166965486, 18.855472890022597], [98.922480940818772, 18.855538885069432], [98.922454118728638, 18.855569344321822], [98.922427296638475, 18.855574420863885]], [[98.922341465950012, 18.855422124601951], [98.922341465950012, 18.855417048059884], [98.922346830368042, 18.855417048059884], [98.922346830368042, 18.855422124601951], [98.922341465950012, 18.855422124601951]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.9222878217697, 18.855081996283619], [98.922223448753357, 18.855076919741553], [98.922196626663208, 18.855041383947107], [98.922201991081238, 18.855010924694717], [98.922277092933655, 18.854985541984394], [98.922309279441819, 18.854990618526461], [98.922341465950012, 18.855021077778844], [98.922346830368042, 18.855056613573296], [98.922330737113953, 18.855076919741553], [98.9222878217697, 18.855081996283619]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.922218084335313, 18.854970312358198], [98.922191262245178, 18.854950006189942], [98.922142982482896, 18.854950006189942], [98.922142982482896, 18.854889087685169], [98.922180533409104, 18.854878934601039], [98.922191262245178, 18.854909393853426], [98.922207355499253, 18.854914470395489], [98.922191262245178, 18.854878934601039], [98.922196626663208, 18.854823092638327], [98.922218084335313, 18.854792633385941], [98.922244906425476, 18.854792633385941], [98.922314643859849, 18.854863704974843], [98.922320008277893, 18.854944929647875], [98.922218084335313, 18.854970312358198]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.922636508941636, 18.854843398806587], [98.922615051269531, 18.854823092638327], [98.922615051269531, 18.854792633385941], [98.922684788703918, 18.854782480301811], [98.922690153121948, 18.854828169180394], [98.922636508941636, 18.854843398806587]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.921874761581421, 18.854884011143099], [98.921853303909302, 18.854863704974843], [98.921831846237183, 18.854792633385941], [98.921831846237183, 18.854777403759744], [98.921858668327332, 18.854762174133555], [98.921896219253526, 18.854767250675618], [98.921933770179749, 18.854833245722453], [98.921917676925645, 18.854878934601039], [98.921874761581421, 18.854884011143099]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.922416567802429, 18.854767250675618], [98.922379016876206, 18.854741867965295], [98.922384381294236, 18.854716485254972], [98.922411203384399, 18.854701255628775], [98.922443389892578, 18.854726638339098], [98.922438025474534, 18.854767250675618], [98.922416567802429, 18.854767250675618]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.9222878217697, 18.854772327217681], [98.922207355499253, 18.854686026002586], [98.922218084335313, 18.85462510749781], [98.922293186187744, 18.854640337124], [98.92230391502379, 18.854706332170842], [98.922330737113953, 18.854736791423232], [98.922330737113953, 18.854762174133555], [98.9222878217697, 18.854772327217681]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.921746015548706, 18.854665719834326], [98.921751379966722, 18.854645413666066], [98.921729922294617, 18.854640337124], [98.921729922294617, 18.854609877871617], [98.921762108802781, 18.854594648245421], [98.921778202056885, 18.85460480132955], [98.921772837638841, 18.854645413666066], [98.921767473220825, 18.854665719834326], [98.921746015548706, 18.854665719834326]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.922003507614136, 18.854919546937552], [98.921965956687913, 18.854899240769296], [98.921955227851868, 18.854843398806587], [98.921928405761733, 18.854818016096267], [98.921923041343689, 18.854782480301811], [98.922030329704285, 18.854757097591484], [98.922030329704285, 18.854746944507355], [98.921987414360032, 18.854721561797032], [98.921976685523987, 18.854696179086709], [98.921949863433838, 18.854701255628775], [98.921912312507615, 18.854736791423232], [98.921858668327332, 18.854691102544649], [98.921853303909302, 18.85465049020813], [98.921896219253526, 18.85463526058194], [98.921933770179749, 18.854665719834326], [98.921992778778062, 18.854614954413677], [98.922051787376404, 18.85463526058194], [98.922062516212449, 18.854609877871617], [98.92214834690094, 18.854554035908905], [98.922180533409104, 18.85462003095574], [98.922121524810791, 18.854670796376386], [98.922051787376404, 18.85465049020813], [98.922057151794434, 18.854701255628775], [98.922083973884568, 18.854716485254972], [98.922121524810791, 18.854691102544649], [98.922175168991089, 18.854686026002586], [98.922207355499253, 18.854741867965295], [98.922191262245178, 18.854828169180394], [98.922110795974731, 18.854823092638327], [98.922110795974731, 18.854858628432776], [98.922089338302612, 18.854889087685169], [98.922046422958374, 18.854914470395489], [98.922003507614136, 18.854919546937552]], [[98.92204105854033, 18.854767250675618], [98.922062516212449, 18.854762174133555], [98.922057151794434, 18.854741867965295], [98.9220356941223, 18.854752021049421], [98.92204105854033, 18.854767250675618]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.921933770179749, 18.854630184039873], [98.921831846237183, 18.854584495161294], [98.921826481819153, 18.854554035908905], [98.921805024147034, 18.854533729740645], [98.921729922294617, 18.854523576656518], [98.921708464622498, 18.854482964319999], [98.921729922294617, 18.854442351983483], [98.92179429531096, 18.854442351983483], [98.921815752983079, 18.854508347030322], [98.921874761581421, 18.854482964319999], [98.921874761581421, 18.854472811235873], [98.921831846237183, 18.854467734693806], [98.921831846237183, 18.854432198899353], [98.921853303909302, 18.85441696927316], [98.921880125999451, 18.854432198899353], [98.921885490417466, 18.854467734693806], [98.921949863433838, 18.854477887777932], [98.922014236450181, 18.854523576656518], [98.922019600868211, 18.854488040862066], [98.922067880630493, 18.854482964319999], [98.922073245048523, 18.854543882824775], [98.922030329704285, 18.854548959366841], [98.92200887203218, 18.854594648245421], [98.921971321105957, 18.854599724787487], [98.921933770179749, 18.854630184039873]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.922582864761338, 18.854706332170842], [98.922588229179382, 18.854675872918452], [98.922566771507263, 18.854670796376386], [98.922539949417114, 18.85463526058194], [98.922502398490892, 18.854640337124], [98.922470211982727, 18.854594648245421], [98.922459483146653, 18.854543882824775], [98.922411203384399, 18.854518500114452], [98.922405838966355, 18.854442351983483], [98.92238974571228, 18.854422045815227], [98.922368288040161, 18.854427122357286], [98.92238974571228, 18.854452505067613], [98.922373652458191, 18.854538806282708], [98.922421932220459, 18.854548959366841], [98.922443389892578, 18.854594648245421], [98.922411203384399, 18.854584495161294], [98.922368288040161, 18.854599724787487], [98.922352194786072, 18.854543882824775], [98.922325372695923, 18.854528653198582], [98.922277092933655, 18.854548959366841], [98.922239542007432, 18.854538806282708], [98.922223448753357, 18.854574342077164], [98.922185897827134, 18.854574342077164], [98.922164440155015, 18.854548959366841], [98.922169804573059, 18.854523576656518], [98.922191262245178, 18.854508347030322], [98.922228813171373, 18.854513423572385], [98.922228813171373, 18.854498193946196], [98.922201991081238, 18.854482964319999], [98.922159075736985, 18.854513423572385], [98.922159075736985, 18.854482964319999], [98.922201991081238, 18.854452505067613], [98.92214834690094, 18.854422045815227], [98.922142982482896, 18.854386510020774], [98.922218084335313, 18.854401739646967], [98.922298550605774, 18.854371280394577], [98.922320008277893, 18.854391586562837], [98.922325372695923, 18.854361127310451], [98.922373652458191, 18.854335744600128], [98.922379016876206, 18.854310361889805], [98.922405838966355, 18.854310361889805], [98.922432661056519, 18.854330668058065], [98.922443389892578, 18.85440681618903], [98.922464847564697, 18.854427122357286], [98.922480940818772, 18.854381433478711], [98.922448754310594, 18.854340821142188], [98.922459483146653, 18.854310361889805], [98.922625780105577, 18.854315438431868], [98.922663331031799, 18.854371280394577], [98.922668695449829, 18.854533729740645], [98.922609686851501, 18.854528653198582], [98.922577500343309, 18.854493117404129], [98.92255067825316, 18.854488040862066], [98.92252922058104, 18.854452505067613], [98.922470211982727, 18.854442351983483], [98.922480940818772, 18.854482964319999], [98.92252922058104, 18.854477887777932], [98.922545313835144, 18.854513423572385], [98.922647237777696, 18.854554035908905], [98.922663331031799, 18.85462510749781], [98.922593593597412, 18.854675872918452], [98.922604322433457, 18.854706332170842], [98.922582864761338, 18.854706332170842]], [[98.922513127326965, 18.854381433478711], [98.922534584999084, 18.854381433478711], [98.922534584999084, 18.854371280394577], [98.922518491744995, 18.854371280394577], [98.922513127326965, 18.854381433478711]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.922293186187744, 18.854335744600128], [98.922271728515625, 18.854315438431868], [98.922218084335313, 18.854310361889805], [98.922357559204087, 18.854310361889805], [98.922325372695923, 18.854335744600128], [98.922293186187744, 18.854335744600128]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.920962810516357, 18.853112279402701], [98.920941352844238, 18.853097049540573], [98.920957446098313, 18.853010746988538], [98.921059370040879, 18.853015823609244], [98.921059370040879, 18.85305643657491], [98.92103254795073, 18.853107202781988], [98.920989632606506, 18.853097049540573], [98.920962810516357, 18.853112279402701]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.897305727005005, 18.846725776379341], [98.897294998168945, 18.846715622823403], [98.897300362586961, 18.84665977826576], [98.897348642349229, 18.846644547931859], [98.897348642349229, 18.846695315711536], [98.897332549095168, 18.846700392489502], [98.897327184677124, 18.846725776379341], [98.897305727005005, 18.846725776379341]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.897461295127869, 18.846710546045436], [98.897434473037734, 18.846675008599661], [98.897413015365615, 18.846669931821694], [98.897418379783616, 18.846644547931859], [98.897402286529541, 18.846639471153892], [98.897402286529541, 18.846624240819988], [98.897413015365615, 18.846614087264054], [98.897520303726182, 18.846619164042021], [98.897536396980286, 18.846649624709826], [98.897520303726182, 18.846700392489502], [98.897461295127869, 18.846710546045436]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.897364735603318, 18.846573473040312], [98.89731109142302, 18.846563319484378], [98.897289633750901, 18.846512551704709], [98.897348642349229, 18.846512551704709], [98.897386193275437, 18.846553165928444], [98.897380828857422, 18.846573473040312], [98.897364735603318, 18.846573473040312]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.916488885879517, 18.845212876419421], [98.916499614715576, 18.845141800427253], [98.916580080986009, 18.845157030997004], [98.916580080986009, 18.845212876419421], [98.916488885879517, 18.845212876419421]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.916590809822083, 18.845111339287755], [98.916542530059814, 18.845080878148259], [98.916553258895874, 18.845055493865338], [98.916585445404039, 18.84506057072193], [98.916601538658142, 18.845091031861422], [98.916590809822083, 18.845111339287755]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.916762471199036, 18.845177338423337], [98.916724920272813, 18.845167184710171], [98.916703462600694, 18.845111339287755], [98.916687369346619, 18.845111339287755], [98.916660547256456, 18.845080878148259], [98.91664445400238, 18.845080878148259], [98.916628360748277, 18.84505041700876], [98.916671276092544, 18.845040263295594], [98.916692733764648, 18.84510626243117], [98.916698098182678, 18.845080878148259], [98.91675174236299, 18.845091031861422], [98.916746377944946, 18.845070724435093], [98.916778564453111, 18.845065647578508], [98.916778564453111, 18.845177338423337], [98.916762471199036, 18.845177338423337]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.916177749633789, 18.859173654108567], [98.916161656379685, 18.859148271791508], [98.916124105453491, 18.859133042401272], [98.916113376617417, 18.859107660084213], [98.916161656379685, 18.859041666059863], [98.916258215904222, 18.859077201303744], [98.916268944740295, 18.859107660084213], [98.916252851486206, 18.859163501181747], [98.916177749633789, 18.859173654108567]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.918060660362244, 18.849705835847047], [98.918039202690125, 18.849675375650992], [98.918092846870422, 18.849670298951651], [98.918092846870422, 18.849700759147701], [98.918060660362244, 18.849705835847047]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.917931914329515, 18.849680452350334], [98.917899727821364, 18.849655068853622], [98.917899727821364, 18.849609378559538], [98.917937278747544, 18.849604301860197], [98.917974829673767, 18.849634762056255], [98.917974829673767, 18.849665222252309], [98.917931914329515, 18.849680452350334]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.918023109436035, 18.849609378559538], [98.918001651763916, 18.849583995062829], [98.918007016181932, 18.849558611566117], [98.917964100837693, 18.849599225160858], [98.917910456657395, 18.849589071762171], [98.917899727821364, 18.849604301860197], [98.917883634567247, 18.849599225160858], [98.91790509223938, 18.849528151370063], [98.91789436340332, 18.849512921272037], [98.91790509223938, 18.849472307677299], [98.917958736419664, 18.849462154278616], [98.918001651763916, 18.849487537775321], [98.918017745018005, 18.849543381468091], [98.918049931526184, 18.849553534866775], [98.918071389198303, 18.849578918363488], [98.918049931526184, 18.849604301860197], [98.918023109436035, 18.849609378559538]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.917985558509812, 18.837627881489748], [98.917926549911499, 18.83758218765837], [98.917921185493469, 18.837546648011745], [98.917964100837693, 18.837556802196495], [98.917980194091811, 18.837526339642245], [98.918007016181932, 18.837526339642245], [98.918033838272081, 18.837597418935498], [98.917985558509812, 18.837627881489748]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.894044160842881, 18.845751023217233], [98.894022703170762, 18.845725638934319], [98.894022703170762, 18.845674870368487], [98.894038796424866, 18.845674870368487], [98.894060254096985, 18.845639332372407], [98.893979787826524, 18.845634255515822], [98.893958330154405, 18.84561394808949], [98.893947601318345, 18.845654562942155], [98.89393150806427, 18.84565963979874], [98.89392077922821, 18.845634255515822], [98.893872499465942, 18.845598717519739], [98.893872499465942, 18.84556825638024], [98.893899321556077, 18.845547948953911], [98.89394223690033, 18.845553025810492], [98.893952965736375, 18.845537795240741], [98.893995881080627, 18.845537795240741], [98.894017338752747, 18.845558102667074], [98.894022703170762, 18.845593640663154], [98.894087076187134, 18.845578410093406], [98.894049525260925, 18.845527641527571], [98.894038796424866, 18.845471796105162], [98.894060254096985, 18.84545148867883], [98.894108533859253, 18.845446411822248], [98.894146084785447, 18.845497180388072], [98.894135355949402, 18.845547948953911], [98.894151449203491, 18.845588563806572], [98.894119262695298, 18.84561394808949], [98.894103169441209, 18.84561394808949], [98.894097805023179, 18.845588563806572], [98.894087076187134, 18.845588563806572], [98.894070982933044, 18.845629178659241], [98.894097805023179, 18.845649486085573], [98.894162178039551, 18.84565963979874], [98.8941890001297, 18.845705331507983], [98.89417290687561, 18.845730715790904], [98.894108533859253, 18.845751023217233], [98.894044160842881, 18.845751023217233]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.89432311058043, 18.84547687296174], [98.894328474998474, 18.845431181252497], [98.894371390342712, 18.845456565535411], [98.894366025924668, 18.84547687296174], [98.89432311058043, 18.84547687296174]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.894591331481919, 18.84545148867883], [98.89458596706389, 18.845385489543247], [98.894612789154039, 18.845355028403745], [98.894639611244187, 18.845355028403745], [98.894655704498291, 18.845375335830081], [98.894661068916307, 18.845441334965663], [98.894591331481919, 18.84545148867883]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.894264101982117, 18.845431181252497], [98.894221186637864, 18.845410873826165], [98.894242644309983, 18.845375335830081], [98.894269466400132, 18.845370258973496], [98.894307017326355, 18.845415950682746], [98.894264101982117, 18.845431181252497]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.893872499465942, 18.845466719248577], [98.893829584121704, 18.845446411822248], [98.89382421970366, 18.845400720112998], [98.893851041793823, 18.845375335830081], [98.893888592720032, 18.845370258973496], [98.893958330154405, 18.845426104395912], [98.893963694572449, 18.845375335830081], [98.89392077922821, 18.84536010526033], [98.893904685974107, 18.845319490407665], [98.893915414810181, 18.845289029268169], [98.89394223690033, 18.84526872184184], [98.894017338752747, 18.84526872184184], [98.894038796424866, 18.845283952411584], [98.894038796424866, 18.845319490407665], [98.894017338752747, 18.845319490407665], [98.894011974334717, 18.845334720977412], [98.894022703170762, 18.845344874690582], [98.89408171176909, 18.845334720977412], [98.894113898277283, 18.845365182116915], [98.894113898277283, 18.845415950682746], [98.894097805023179, 18.845426104395912], [98.894022703170762, 18.845431181252497], [98.894006609916673, 18.84545148867883], [98.893958330154405, 18.845466719248577], [98.893926143646226, 18.845456565535411], [98.893872499465942, 18.845466719248577]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.893985152244568, 18.845197645849669], [98.893952965736375, 18.845172261566752], [98.893952965736375, 18.845146877283835], [98.893979787826524, 18.845126569857502], [98.894017338752747, 18.845126569857502], [98.894060254096985, 18.845197645849669], [98.893985152244568, 18.845197645849669]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.893432617187486, 18.845136723570672], [98.893432617187486, 18.84510626243117], [98.893389701843248, 18.845111339287755], [98.893368244171128, 18.845172261566752], [98.893373608589172, 18.845212876419421], [98.893432617187486, 18.845207799562836], [98.893432617187486, 18.845162107853589], [98.893448710441589, 18.845212876419421], [98.893513083457933, 18.845207799562836], [98.893518447875977, 18.845167184710171], [98.893502354621887, 18.84515195414042], [98.893480896949754, 18.845136723570672], [98.893432617187486, 18.845136723570672]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.894575238227844, 18.845329644120831], [98.8945698738098, 18.845299182981332], [98.894516229629502, 18.845294106124747], [98.894510865211473, 18.845273798698418], [98.894467949867234, 18.845273798698418], [98.89443576335907, 18.845253491272086], [98.89443039894104, 18.845228106989172], [98.894446492195115, 18.845212876419421], [98.894516229629502, 18.845212876419421], [98.894521594047532, 18.845263644985252], [98.894537687301636, 18.845243337558919], [98.894602060317993, 18.845263644985252], [98.894623517990112, 18.845228106989172], [98.894537687301636, 18.845212876419421], [98.894510865211473, 18.845192568993088], [98.894500136375413, 18.845162107853589], [98.894467949867234, 18.845192568993088], [98.894419670104966, 18.845192568993088], [98.894398212432847, 18.845172261566752], [98.894419670104966, 18.845131646714091], [98.894462585449219, 18.845131646714091], [98.894494771957397, 18.84515195414042], [98.894489407539353, 18.845101185574592], [98.894500136375413, 18.845091031861422], [98.894548416137695, 18.845101185574592], [98.89456450939177, 18.845126569857502], [98.894580602645874, 18.845126569857502], [98.894596695899963, 18.845101185574592], [98.894623517990112, 18.845101185574592], [98.894650340080261, 18.845192568993088], [98.89467179775238, 18.845182415279922], [98.894714713096619, 18.845192568993088], [98.894714713096619, 18.845212876419421], [98.894687891006456, 18.845212876419421], [98.894693255424485, 18.845273798698418], [98.894618153572068, 18.845273798698418], [98.894618153572068, 18.845319490407665], [98.894575238227844, 18.845329644120831]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.893641829490662, 18.845162107853589], [98.893598914146423, 18.845116416144336], [98.893604278564439, 18.845070724435093], [98.893652558326721, 18.845070724435093], [98.893663287162781, 18.845101185574592], [98.89367401599884, 18.845101185574592], [98.893684744834886, 18.845065647578508], [98.893743753433228, 18.84506057072193], [98.893754482269273, 18.845070724435093], [98.893749117851257, 18.845116416144336], [98.89367401599884, 18.845111339287755], [98.893668651580811, 18.845141800427253], [98.893641829490662, 18.845162107853589]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.893840312957764, 18.845299182981332], [98.893781304359422, 18.845263644985252], [98.893775939941392, 18.845243337558919], [98.893792033195496, 18.845228106989172], [98.893792033195496, 18.845167184710171], [98.89383494853972, 18.845126569857502], [98.893808126449585, 18.845111339287755], [98.893802762031541, 18.845080878148259], [98.893818855285645, 18.845065647578508], [98.893867135047913, 18.84506057072193], [98.893883228301988, 18.845070724435093], [98.893893957138062, 18.845116416144336], [98.893861770629883, 18.845146877283835], [98.89394223690033, 18.845182415279922], [98.893958330154405, 18.845202722706254], [98.893958330154405, 18.845243337558919], [98.893926143646226, 18.845258568128671], [98.893883228301988, 18.845253491272086], [98.893872499465942, 18.845294106124747], [98.893840312957764, 18.845299182981332]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.893631100654588, 18.845040263295594], [98.893604278564439, 18.844989494729763], [98.893615007400498, 18.844974264160012], [98.893641829490662, 18.844979341016597], [98.893652558326721, 18.845009802156095], [98.893647193908706, 18.845040263295594], [98.893631100654588, 18.845040263295594]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.893770575523376, 18.845035186439009], [98.893722295761108, 18.845019955869262], [98.893722295761108, 18.844989494729763], [98.893743753433228, 18.844974264160012], [98.893738389015184, 18.844948879877094], [98.893749117851257, 18.844938726163928], [98.893775939941392, 18.844953956733679], [98.893802762031541, 18.845014879012677], [98.893797397613525, 18.845035186439009], [98.893770575523376, 18.845035186439009]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.893861770629883, 18.845035186439009], [98.89382421970366, 18.845014879012677], [98.893792033195496, 18.844928572450762], [98.89383494853972, 18.844908265024429], [98.893910050392151, 18.844908265024429], [98.893958330154405, 18.844964110446842], [98.8939368724823, 18.844994571586344], [98.893915414810181, 18.844994571586344], [98.893888592720032, 18.845030109582428], [98.893861770629883, 18.845035186439009]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.89519214630127, 18.83112908915739], [98.89519214630127, 18.831103702909772], [98.895213603973389, 18.831088471161202], [98.895218968391418, 18.831124011907868], [98.89519214630127, 18.83112908915739]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.894661068916307, 18.831124011907868], [98.894634246826186, 18.831118934658345], [98.894634246826186, 18.831103702909772], [98.894612789154039, 18.831093548410728], [98.894623517990112, 18.831073239412632], [98.894698619842515, 18.83109862566025], [98.894698619842515, 18.831118934658345], [98.894661068916307, 18.831124011907868]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.89456450939177, 18.831058007664062], [98.894532322883606, 18.831002157919301], [98.894532322883606, 18.830946308174543], [98.894580602645874, 18.830946308174543], [98.894639611244187, 18.830986926170731], [98.894634246826186, 18.831042775915495], [98.89456450939177, 18.831058007664062]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.88584196567534, 18.8396282417397], [98.88584196567534, 18.839602856670766], [98.885879516601562, 18.839607933684547], [98.885874152183533, 18.8396282417397], [98.88584196567534, 18.8396282417397]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.885482549667358, 18.839526701463956], [98.885444998741136, 18.83948100833987], [98.885471820831299, 18.83948100833987], [98.885471820831299, 18.839460700284729], [98.885498642921434, 18.839460700284729], [98.885514736175537, 18.839470854312303], [98.885514736175537, 18.839516547436386], [98.885482549667358, 18.839526701463956]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.885793685913086, 18.839526701463956], [98.885761499404907, 18.839516547436386], [98.885745406150804, 18.839491162367445], [98.885772228240967, 18.839450546257151], [98.885852694511414, 18.839486085353659], [98.88584733009337, 18.839516547436386], [98.885793685913086, 18.839526701463956]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.885520100593553, 18.839435315215795], [98.885487914085388, 18.839425161188217], [98.885493278503418, 18.839394699105497], [98.885546922683702, 18.839420084174431], [98.885546922683702, 18.839435315215795], [98.885520100593553, 18.839435315215795]], [[98.885514736175537, 18.839415007160643], [98.885514736175537, 18.839409930146854], [98.885525465011582, 18.839409930146854], [98.885525465011582, 18.839415007160643], [98.885514736175537, 18.839415007160643]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.885402083396897, 18.839318543898688], [98.885375261306748, 18.839298235843543], [98.885375261306748, 18.83928300480218], [98.885407447814941, 18.83928300480218], [98.885412812232971, 18.839318543898688], [98.885402083396897, 18.839318543898688]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.885573744773851, 18.8393540829952], [98.885557651519775, 18.839303312857325], [98.885514736175537, 18.839303312857325], [98.885482549667358, 18.839272850774606], [98.885482549667358, 18.839232234664312], [98.885504007339463, 18.839217003622945], [98.885498642921434, 18.8391966955678], [98.885563015937805, 18.839211926609163], [98.88557910919188, 18.839267773760817], [98.885648846626268, 18.839272850774606], [98.885638117790222, 18.839247465705672], [98.885616660118103, 18.839237311678097], [98.885616660118103, 18.8391966955678], [98.885638117790222, 18.8391966955678], [98.885675668716416, 18.839252542719461], [98.885659575462341, 18.839272850774606], [98.885670304298401, 18.839318543898688], [98.885643482208238, 18.839338851953837], [98.885573744773851, 18.8393540829952]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.885959982872009, 18.839242388691886], [98.885906338691711, 18.839191618554015], [98.885906338691711, 18.839171310498866], [98.885927796363831, 18.839151002443717], [98.885965347290025, 18.839145925429928], [98.885976076126099, 18.839176387512648], [98.886002898216248, 18.839186541540222], [98.886035084724426, 18.839176387512648], [98.886040449142442, 18.839130694388569], [98.886142373085008, 18.83914084841614], [98.886137008666978, 18.839166233485081], [98.886110186576829, 18.839186541540222], [98.886104822158813, 18.839222080636734], [98.886083364486694, 18.839222080636734], [98.886045813560472, 18.839186541540222], [98.886045813560472, 18.839227157650519], [98.885997533798204, 18.839211926609163], [98.885959982872009, 18.839242388691886]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.885418176651001, 18.839059616195549], [98.885402083396897, 18.839044385154185], [98.885369896888733, 18.839044385154185], [98.88533234596251, 18.839003769043895], [98.88533234596251, 18.838983460988747], [98.88543963432312, 18.838978383974954], [98.88545036315918, 18.839044385154185], [98.885418176651001, 18.839059616195549]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.88619601726532, 18.839049462167978], [98.886137008666978, 18.839039308140404], [98.886126279830933, 18.839008846057681], [98.886094093322754, 18.839003769043895], [98.886067271232591, 18.839003769043895], [98.886056542396545, 18.839034231126615], [98.886040449142442, 18.838998692030103], [98.886078000068665, 18.838993615016321], [98.88608872890471, 18.838978383974954], [98.886174559593201, 18.838973306961172], [98.886255025863662, 18.838998692030103], [98.886249661445618, 18.839024077099037], [98.88619601726532, 18.839049462167978]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.885986804962144, 18.839069770223123], [98.885959982872009, 18.839029154112829], [98.885986804962144, 18.839008846057681], [98.885986804962144, 18.838978383974954], [98.886024355888367, 18.838968229947383], [98.886035084724426, 18.839003769043895], [98.886013627052307, 18.839008846057681], [98.886018991470323, 18.839049462167978], [98.885986804962144, 18.839069770223123]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.885509371757507, 18.838902228768152], [98.885461091995239, 18.838897151754363], [98.885412812232971, 18.838866689671644], [98.885402083396897, 18.838826073561346], [98.885418176651001, 18.838790534464838], [98.885466456413269, 18.838780380437264], [98.885482549667358, 18.838820996547561], [98.885525465011582, 18.83884130460271], [98.885530829429626, 18.838876843699214], [98.885509371757507, 18.838902228768152]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.885605931282043, 18.838871766685429], [98.885563015937805, 18.83884130460271], [98.885563015937805, 18.838826073561346], [98.885541558265686, 18.838820996547561], [98.885546922683702, 18.838780380437264], [98.885611295700073, 18.838785457451053], [98.885648846626268, 18.838820996547561], [98.885648846626268, 18.838861612657855], [98.885605931282043, 18.838871766685429]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.88568639755249, 18.83884130460271], [98.885659575462341, 18.838826073561346], [98.885648846626268, 18.838800688492412], [98.885659575462341, 18.83875499536833], [98.885697126388536, 18.83875499536833], [98.885745406150804, 18.838785457451053], [98.885734677314758, 18.838836227588921], [98.88568639755249, 18.83884130460271]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.886362314224229, 18.838815919533772], [98.88633012771605, 18.838785457451053], [98.88633012771605, 18.838760072382115], [98.886346220970154, 18.838749918354541], [98.886383771896348, 18.83875499536833], [98.886394500732422, 18.838780380437264], [98.886389136314378, 18.838810842519983], [98.886362314224229, 18.838815919533772]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.886228203773499, 18.838780380437264], [98.886212110519395, 18.838749918354541], [98.886244297027574, 18.838739764326963], [98.886255025863662, 18.838765149395904], [98.886228203773499, 18.838780380437264]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.88608872890471, 18.838770226409689], [98.886072635650635, 18.838760072382115], [98.886072635650635, 18.838714379258032], [98.886120915412889, 18.838714379258032], [98.886120915412889, 18.83875499536833], [98.88608872890471, 18.838770226409689]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.885487914085388, 18.838714379258032], [98.885471820831299, 18.838673762519036], [98.885391354560852, 18.838668685426654], [98.885375261306748, 18.838683916703783], [98.885380625724778, 18.838734687313181], [98.885412812232971, 18.838749918354541], [98.885482549667358, 18.838734687313181], [98.885487914085388, 18.838714379258032]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.88559520244597, 18.838714379258032], [98.885600566863999, 18.838704225073283], [98.88569176197052, 18.838714379258032], [98.885713219642639, 18.838699147980908], [98.885750770568848, 18.838749918354541], [98.885804414749146, 18.83875499536833], [98.885799050331102, 18.838775303423478], [98.885777592658982, 18.838785457451053], [98.885793685913086, 18.838861612657855], [98.885863423347459, 18.838861612657855], [98.885863423347459, 18.838836227588921], [98.88584196567534, 18.838810842519983], [98.885858058929443, 18.838790534464838], [98.885927796363831, 18.838800688492412], [98.885938525199876, 18.838836227588921], [98.886008262634277, 18.83884130460271], [98.886040449142442, 18.838810842519983], [98.886029720306396, 18.83875499536833], [98.88594925403595, 18.838729610299392], [98.88593316078186, 18.838704225073283], [98.885879516601562, 18.838688993796158], [98.885874152183533, 18.838643299964776], [98.885825872421265, 18.83860268322578], [98.885820508003221, 18.83858237485628], [98.885782957077026, 18.838587451948651], [98.885772228240967, 18.83862299159528], [98.885718584060655, 18.838617914502901], [98.885707855224609, 18.838668685426654], [98.88569176197052, 18.838643299964776], [98.88569176197052, 18.838587451948651], [98.885664939880357, 18.838567143579148], [98.885611295700073, 18.838607760318151], [98.885611295700073, 18.838663608334279], [98.885536193847656, 18.838638222872405], [98.885520100593553, 18.838658531241904], [98.885525465011582, 18.838714379258032], [98.885541558265686, 18.838729610299392], [98.88559520244597, 18.838714379258032]], [[98.885702490806565, 18.838688993796158], [98.885702490806565, 18.838678839611408], [98.885707855224609, 18.838678839611408], [98.885707855224609, 18.838688993796158], [98.885702490806565, 18.838688993796158]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.886512517929063, 18.836084444936226], [98.886480331420884, 18.836043827568595], [98.886453509330735, 18.836033673226687], [98.88644278049469, 18.835977824346188], [98.886474967002854, 18.835952438491418], [98.886550068855271, 18.835972747175234], [98.886560797691331, 18.835937206978556], [98.88658225536345, 18.835937206978556], [98.886614441871643, 18.835982901517141], [98.886614441871643, 18.836013364542865], [98.886592984199524, 18.836028596055726], [98.886566162109375, 18.836023518884772], [98.886566162109375, 18.836079367765272], [98.886512517929063, 18.836084444936226]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.886394500732422, 18.83600321020096], [98.886373043060303, 18.835982901517141], [98.886373043060303, 18.835962592833329], [98.886415958404541, 18.835947361320464], [98.886426687240601, 18.835987978688095], [98.886394500732422, 18.83600321020096]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.885294795036316, 18.835952438491418], [98.885246515274062, 18.835906743952833], [98.885246515274062, 18.835835663559479], [98.885326981544495, 18.835855972243294], [98.885348439216628, 18.835886435269021], [98.885343074798584, 18.83594228414951], [98.885294795036316, 18.835952438491418]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.885525465011582, 18.835927052636652], [98.885514736175537, 18.835921975465698], [98.885525465011582, 18.835896589610925], [98.885455727577195, 18.835871203756156], [98.88545036315918, 18.835845817901387], [98.885461091995239, 18.835835663559479], [98.885509371757507, 18.835840740730433], [98.885536193847656, 18.835871203756156], [98.885530829429626, 18.835891512439975], [98.885546922683702, 18.835921975465698], [98.885525465011582, 18.835927052636652]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.885536193847656, 18.835795046191848], [98.885520100593553, 18.835759505995171], [98.885525465011582, 18.835739197311351], [98.885584473609924, 18.835734120140401], [98.88559520244597, 18.83578489184994], [98.885536193847656, 18.835795046191848]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.886276483535767, 18.835744274482309], [98.886271119117737, 18.83571888862754], [98.886276483535767, 18.835693502772763], [98.886287212371812, 18.835693502772763], [98.886292576789856, 18.835744274482309], [98.886276483535767, 18.835744274482309]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.885766863822923, 18.835764583166124], [98.885756134986877, 18.835754428824217], [98.885702490806565, 18.835759505995171], [98.88568103313446, 18.835739197311351], [98.885616660118103, 18.835749351653263], [98.885600566863999, 18.835693502772763], [98.885632753372192, 18.835652885405132], [98.885750770568848, 18.835663039747043], [98.885799050331102, 18.835703657114674], [98.885793685913086, 18.835754428824217], [98.885766863822923, 18.835764583166124]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.885321617126451, 18.835729042969447], [98.885289430618286, 18.835713811456586], [98.885305523872361, 18.835703657114674], [98.885305523872361, 18.835678271259901], [98.885343074798584, 18.835683348430855], [98.885364532470703, 18.835703657114674], [98.885359168052659, 18.835723965798493], [98.885321617126451, 18.835729042969447]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.886024355888367, 18.835703657114674], [98.885959982872009, 18.835652885405132], [98.885959982872009, 18.835576727840824], [98.885992169380188, 18.835536110473193], [98.886029720306396, 18.835551341986058], [98.886072635650635, 18.835627499550366], [98.886061906814561, 18.83569857994372], [98.886024355888367, 18.835703657114674]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.885487914085388, 18.835607190866547], [98.885471820831299, 18.835591959353689], [98.885477185249314, 18.835566573498919], [98.885525465011582, 18.835551341986058], [98.885536193847656, 18.835561496327966], [98.885530829429626, 18.835602113695597], [98.885487914085388, 18.835607190866547]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.886115550994873, 18.835617345208455], [98.886072635650635, 18.835591959353689], [98.886072635650635, 18.835551341986058], [98.886147737503052, 18.835556419157012], [98.886158466339111, 18.835607190866547], [98.886115550994873, 18.835617345208455]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.886238932609544, 18.835607190866547], [98.886228203773499, 18.835586882182735], [98.88617992401123, 18.835597036524643], [98.886163830757127, 18.835531033302239], [98.886174559593201, 18.835505647447469], [98.88619601726532, 18.835505647447469], [98.886222839355469, 18.835541187644147], [98.886271119117737, 18.835561496327966], [98.886271119117737, 18.835581805011785], [98.886238932609544, 18.835607190866547]], [[98.88617992401123, 18.835541187644147], [98.886174559593201, 18.835531033302239], [98.88619601726532, 18.835531033302239], [98.886190652847276, 18.835541187644147], [98.88617992401123, 18.835541187644147]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.886287212371812, 18.835536110473193], [98.886244297027574, 18.835505647447469], [98.886244297027574, 18.835480261592696], [98.886265754699693, 18.835465030079838], [98.886292576789856, 18.835465030079838], [98.886319398879991, 18.835505647447469], [98.886314034461975, 18.835536110473193], [98.886287212371812, 18.835536110473193]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.88568639755249, 18.835424412712207], [98.885670304298401, 18.835383795344576], [98.885707855224609, 18.835368563831711], [98.885729312896729, 18.83538887251553], [98.885723948478685, 18.835414258370299], [98.88568639755249, 18.835424412712207]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.886485695838914, 18.835551341986058], [98.886410593986497, 18.835480261592696], [98.886421322822571, 18.835459952908884], [98.886453509330735, 18.835449798566977], [98.886373043060303, 18.835459952908884], [98.886308670043931, 18.835449798566977], [98.886308670043931, 18.835424412712207], [98.886346220970154, 18.835399026857434], [98.886362314224229, 18.835338100805988], [98.886410593986497, 18.83532794646408], [98.886432051658616, 18.835373641002665], [98.886501789093018, 18.835409181199342], [98.886501789093018, 18.835454875737931], [98.886528611183152, 18.835541187644147], [98.886485695838914, 18.835551341986058]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.885487914085388, 18.835531033302239], [98.885461091995239, 18.835525956131285], [98.885444998741136, 18.835500570276515], [98.885380625724778, 18.835495493105562], [98.885359168052659, 18.835470107250792], [98.885369896888733, 18.835434567054115], [98.885402083396897, 18.835429489883161], [98.885434269905076, 18.835393949686484], [98.885471820831299, 18.83538887251553], [98.885466456413269, 18.835348255147895], [98.885477185249314, 18.835343177976942], [98.885498642921434, 18.835353332318846], [98.885520100593553, 18.835429489883161], [98.885509371757507, 18.835449798566977], [98.885477185249314, 18.835449798566977], [98.885471820831299, 18.835434567054115], [98.885455727577195, 18.835434567054115], [98.885455727577195, 18.835449798566977], [98.885514736175537, 18.835475184421746], [98.885530829429626, 18.835495493105562], [98.885520100593553, 18.835525956131285], [98.885487914085388, 18.835531033302239]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.885380625724778, 18.83532794646408], [98.885364532470703, 18.835302560609311], [98.885391354560852, 18.835282251925499], [98.885412812232971, 18.835297483438357], [98.885412812232971, 18.835317792122169], [98.885380625724778, 18.83532794646408]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.88543963432312, 18.835317792122169], [98.885418176651001, 18.835292406267403], [98.885418176651001, 18.835251788899772], [98.885461091995239, 18.83524163455786], [98.885504007339463, 18.835292406267403], [98.885493278503418, 18.835307637780264], [98.88543963432312, 18.835317792122169]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.885294795036316, 18.835338100805988], [98.885289430618286, 18.835307637780264], [98.885267972946181, 18.835302560609311], [98.885273337364197, 18.835256866070726], [98.885284066200242, 18.835256866070726], [98.885294795036316, 18.835307637780264], [98.885310888290391, 18.835287329096449], [98.885326981544495, 18.835297483438357], [98.885326981544495, 18.83532794646408], [98.885294795036316, 18.835338100805988]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.885911703109755, 18.835272097583587], [98.885911703109755, 18.83523655738691], [98.885943889617906, 18.835231480215956], [98.885943889617906, 18.835272097583587], [98.885911703109755, 18.835272097583587]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.886598348617554, 18.835404104028388], [98.886576890945449, 18.835383795344576], [98.886501789093018, 18.835378718173619], [98.886485695838914, 18.835358409489807], [98.886458873748779, 18.835358409489807], [98.886453509330735, 18.835338100805988], [98.886410593986497, 18.835307637780264], [98.886410593986497, 18.835292406267403], [98.88644814491272, 18.835231480215956], [98.886517882347107, 18.835261943241679], [98.886528611183152, 18.835206094361183], [98.886635899543762, 18.835226403045002], [98.88668954372406, 18.835170554164506], [98.886705636978135, 18.835170554164506], [98.886727094650254, 18.835206094361183], [98.886721730232239, 18.835231480215956], [98.88670027256012, 18.83523655738691], [98.88670027256012, 18.835261943241679], [98.886662721633897, 18.835282251925499], [98.886684179306016, 18.835317792122169], [98.886630535125718, 18.835353332318846], [98.886625170707688, 18.835393949686484], [98.886598348617554, 18.835404104028388]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.886029720306396, 18.835358409489807], [98.885997533798204, 18.835353332318846], [98.885943889617906, 18.835302560609311], [98.885959982872009, 18.83524163455786], [98.885938525199876, 18.835145168309733], [98.885954618453979, 18.835129936796875], [98.885970711708055, 18.835135013967829], [98.885997533798204, 18.835195940019275], [98.886045813560472, 18.835211171532137], [98.886110186576829, 18.835292406267403], [98.886110186576829, 18.835338100805988], [98.886029720306396, 18.835358409489807]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.885359168052659, 18.835195940019275], [98.885343074798584, 18.835160399822598], [98.885300159454331, 18.835160399822598], [98.885310888290391, 18.835135013967829], [98.885364532470703, 18.835150245480687], [98.885369896888733, 18.835190862848318], [98.885359168052659, 18.835195940019275]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.885788321495042, 18.835155322651641], [98.885766863822923, 18.835150245480687], [98.885777592658982, 18.835109628113056], [98.885804414749146, 18.835135013967829], [98.885788321495042, 18.835155322651641]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.885697126388536, 18.835145168309733], [98.885697126388536, 18.835069010745425], [98.885750770568848, 18.835058856403521], [98.885761499404907, 18.83508424225829], [98.885740041732774, 18.835089319429244], [98.885740041732774, 18.835129936796875], [98.885697126388536, 18.835145168309733]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.886024355888367, 18.835109628113056], [98.886013627052307, 18.835104550942102], [98.886024355888367, 18.835094396600198], [98.886013627052307, 18.835069010745425], [98.886040449142442, 18.835048702061609], [98.886067271232591, 18.83508424225829], [98.886024355888367, 18.835109628113056]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.886614441871643, 18.835089319429244], [98.886603713035569, 18.835079165087333], [98.886598348617554, 18.835038547719702], [98.886619806289673, 18.835038547719702], [98.886635899543762, 18.835063933574471], [98.886635899543762, 18.83508424225829], [98.886614441871643, 18.835089319429244]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.886464238166795, 18.835119782454964], [98.88643741607666, 18.835099473771148], [98.88643741607666, 18.835069010745425], [98.886474967002854, 18.835033470548748], [98.886566162109375, 18.835033470548748], [98.886566162109375, 18.835109628113056], [98.886539340019226, 18.835079165087333], [98.886528611183152, 18.83511470528401], [98.886464238166795, 18.835119782454964]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.886115550994873, 18.835109628113056], [98.886078000068665, 18.835079165087333], [98.886078000068665, 18.835038547719702], [98.886104822158813, 18.835008084693978], [98.886153101921096, 18.835008084693978], [98.886169195175171, 18.835018239035886], [98.886185288429246, 18.835079165087333], [98.886142373085008, 18.835109628113056], [98.886115550994873, 18.835109628113056]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.885959982872009, 18.835099473771148], [98.885900974273682, 18.835074087916379], [98.885863423347459, 18.835038547719702], [98.885863423347459, 18.835013161864932], [98.885895609855638, 18.834972544497301], [98.88594925403595, 18.834977621668255], [98.885970711708055, 18.83499793035207], [98.885981440544128, 18.835038547719702], [98.885959982872009, 18.835099473771148]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.885997533798204, 18.835003007523024], [98.885992169380188, 18.834972544497301], [98.886018991470323, 18.834952235813486], [98.886029720306396, 18.834992853181117], [98.885997533798204, 18.835003007523024]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.885761499404907, 18.834916695616808], [98.885729312896729, 18.834896386932986], [98.885745406150804, 18.834850692394401], [98.885766863822923, 18.834850692394401], [98.885788321495042, 18.834881155420124], [98.885782957077026, 18.834911618445854], [98.885761499404907, 18.834916695616808]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "MultiPolygon", "coordinates": [[[[98.885874152183533, 18.834820229368678], [98.885895609855638, 18.834774534830093], [98.885836601257324, 18.834698377265784], [98.885804414749146, 18.83469330009483], [98.885734677314758, 18.834713608778646], [98.885723948478685, 18.834738994633415], [98.885740041732774, 18.834759303317234], [98.885788321495042, 18.834754226146284], [98.885809779167175, 18.83481007502677], [98.885874152183533, 18.834820229368678]]], [[[98.885874152183533, 18.834820229368678], [98.88584196567534, 18.834850692394401], [98.88584196567534, 18.834881155420124], [98.885879516601562, 18.834926849958716], [98.885954618453979, 18.834916695616808], [98.885992169380188, 18.834886232591078], [98.885992169380188, 18.834860846736309], [98.886040449142442, 18.834891309762032], [98.886067271232591, 18.834891309762032], [98.886078000068665, 18.83487607824917], [98.886078000068665, 18.834820229368678], [98.886018991470323, 18.834794843513912], [98.885997533798204, 18.834794843513912], [98.885970711708055, 18.834825306539631], [98.885874152183533, 18.834820229368678]]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.886287212371812, 18.835033470548748], [98.886271119117737, 18.834977621668255], [98.886244297027574, 18.834967467326347], [98.886233568191543, 18.834942081471581], [98.88617992401123, 18.834901464103947], [98.886169195175171, 18.834815152197724], [98.886244297027574, 18.834804997855816], [98.886281847953782, 18.834820229368678], [98.886297941207886, 18.834784689172], [98.886394500732422, 18.834784689172], [98.886405229568467, 18.834789766342954], [98.886405229568467, 18.834825306539631], [98.886383771896348, 18.83487100107822], [98.886566162109375, 18.834865923907266], [98.886566162109375, 18.834947158642532], [98.886544704437256, 18.834952235813486], [98.886528611183152, 18.834977621668255], [98.886474967002854, 18.834992853181117], [98.886458873748779, 18.835013161864932], [98.886421322822571, 18.835013161864932], [98.886410593986497, 18.834982698839209], [98.886362314224229, 18.834972544497301], [98.886362314224229, 18.83499793035207], [98.886335492134094, 18.835028393377794], [98.886287212371812, 18.835033470548748]], [[98.88633012771605, 18.834901464103947], [98.886292576789856, 18.834896386932986], [98.886292576789856, 18.834911618445854], [98.886238932609544, 18.834911618445854], [98.886233568191543, 18.83487607824917], [98.886281847953782, 18.834855769565355], [98.886319398879991, 18.834881155420124], [98.886373043060303, 18.83487607824917], [98.886351585388184, 18.834896386932986], [98.886356949806213, 18.834952235813486], [98.88633012771605, 18.834901464103947]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.886727094650254, 18.834815152197724], [98.88669490814209, 18.834799920684866], [98.886678814888, 18.834769457659139], [98.886721730232239, 18.834774534830093], [98.886727094650254, 18.834749148975323], [98.886743187904358, 18.834749148975323], [98.886737823486328, 18.834804997855816], [98.886764645576477, 18.834815152197724], [98.886727094650254, 18.834815152197724]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.885970711708055, 18.838714379258032], [98.885938525199876, 18.838699147980908], [98.885922431945787, 18.838653454149526], [98.885922431945787, 18.838617914502901], [98.885938525199876, 18.838607760318151], [98.885965347290025, 18.83861283741053], [98.885970711708055, 18.838643299964776], [98.886008262634277, 18.838668685426654], [98.886002898216248, 18.838704225073283], [98.885970711708055, 18.838714379258032]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.885230422019944, 18.838536681024898], [98.885230422019944, 18.838501141378277], [98.885241150856018, 18.838485910101149], [98.885262608528137, 18.838485910101149], [98.885262608528137, 18.838521449747777], [98.885230422019944, 18.838536681024898]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.886056542396545, 18.838562066486777], [98.886035084724426, 18.838546835209648], [98.886045813560472, 18.838511295563027], [98.886008262634277, 18.838506218470652], [98.885986804962144, 18.838485910101149], [98.885986804962144, 18.838465601731649], [98.886013627052307, 18.838445293362145], [98.886051177978516, 18.838445293362145], [98.886056542396545, 18.838465601731649], [98.886104822158813, 18.838480833008774], [98.88608872890471, 18.838511295563027], [98.88608872890471, 18.838556989394398], [98.886056542396545, 18.838562066486777]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.886206746101365, 18.838480833008774], [98.886158466339111, 18.838470678824024], [98.886158466339111, 18.838460524639274], [98.88617992401123, 18.838460524639274], [98.886174559593201, 18.838445293362145], [98.886228203773499, 18.838445293362145], [98.886228203773499, 18.838480833008774], [98.886206746101365, 18.838480833008774]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "MultiPolygon", "coordinates": [[[[98.88644814491272, 18.838394522438392], [98.886485695838914, 18.838419907900274], [98.886496424675002, 18.838445293362145], [98.886539340019226, 18.838440216269774], [98.886555433273301, 18.838414830807896], [98.886555433273301, 18.838379291161271], [98.886528611183152, 18.838374214068892], [98.886496424675002, 18.838333597329896], [98.88644814491272, 18.838353905699396], [98.88644814491272, 18.838394522438392]]], [[[98.88644814491272, 18.838394522438392], [98.886410593986497, 18.838384368253642], [98.886389136314378, 18.838404676623149], [98.886399865150452, 18.838455447546895], [98.886383771896348, 18.838455447546895], [98.886303305625916, 18.838364059884142], [98.886281847953782, 18.838358982791771], [98.886265754699693, 18.838384368253642], [98.886265754699693, 18.838419907900274], [98.886287212371812, 18.838445293362145], [98.886297941207886, 18.838496064285902], [98.886356949806213, 18.838541758117277], [98.886410593986497, 18.838546835209648], [98.886389136314378, 18.838628068687655], [98.88643741607666, 18.838688993796158], [98.886507153511033, 18.838597606133401], [98.886501789093018, 18.838572220671526], [98.886474967002854, 18.838567143579148], [98.88644278049469, 18.838536681024898], [98.88644278049469, 18.838501141378277], [98.886469602584839, 18.838470678824024], [98.88644814491272, 18.838394522438392]]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.886104822158813, 18.838394522438392], [98.88608872890471, 18.838374214068892], [98.886094093322754, 18.838353905699396], [98.886153101921096, 18.838358982791771], [98.886153101921096, 18.838338674422271], [98.886169195175171, 18.838343751514646], [98.886142373085008, 18.838394522438392], [98.886104822158813, 18.838394522438392]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.886061906814561, 18.838338674422271], [98.886040449142442, 18.838303134775646], [98.886104822158813, 18.838277749313768], [98.886120915412889, 18.838313288960396], [98.886094093322754, 18.838338674422271], [98.886061906814561, 18.838338674422271]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.885611295700073, 18.838328520237521], [98.885541558265686, 18.838313288960396], [98.885541558265686, 18.838237132574765], [98.885611295700073, 18.838232055482393], [98.885643482208238, 18.83826251803664], [98.885643482208238, 18.838318366052771], [98.885611295700073, 18.838328520237521]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.885385990142822, 18.838323443145146], [98.885310888290391, 18.83827267222139], [98.885305523872361, 18.838232055482393], [98.885321617126451, 18.838211747112886], [98.885348439216628, 18.838211747112886], [98.885434269905076, 18.838267595129018], [98.885423541069017, 18.838313288960396], [98.885385990142822, 18.838323443145146]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.886045813560472, 18.838257440944268], [98.886035084724426, 18.838237132574765], [98.886002898216248, 18.838242209667143], [98.885970711708055, 18.83820159292814], [98.885997533798204, 18.838150822004391], [98.886072635650635, 18.838145744912016], [98.886104822158813, 18.83818128455864], [98.886115550994873, 18.838242209667143], [98.886045813560472, 18.838257440944268]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.88557910919188, 18.838186361651012], [98.885546922683702, 18.838176207466262], [98.885563015937805, 18.838089896895887], [98.885632753372192, 18.838049280156888], [98.885697126388536, 18.838059434341638], [98.885713219642639, 18.838018817602634], [98.885734677314758, 18.838089896895887], [98.885723948478685, 18.838135590727266], [98.885643482208238, 18.838186361651012], [98.88557910919188, 18.838186361651012]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.885922431945787, 18.838034048879756], [98.885900974273682, 18.83798327795601], [98.885900974273682, 18.837957892494135], [98.885922431945787, 18.837937584124631], [98.885970711708055, 18.837957892494135], [98.886029720306396, 18.83795281540176], [98.886056542396545, 18.83798327795601], [98.886035084724426, 18.838013740510256], [98.885981440544128, 18.838008663417884], [98.88594925403595, 18.838018817602634], [98.88594925403595, 18.838034048879756], [98.885922431945787, 18.838034048879756]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.885530829429626, 18.837881736108503], [98.885525465011582, 18.837861427739], [98.885498642921434, 18.837856350646629], [98.885498642921434, 18.8378411193695], [98.885466456413269, 18.837861427739], [98.88543963432312, 18.837836042277129], [98.885412812232971, 18.837836042277129], [98.885402083396897, 18.837825888092379], [98.885407447814941, 18.837795425538129], [98.885428905487061, 18.837790348445754], [98.88545036315918, 18.837805579722875], [98.885477185249314, 18.837775117168629], [98.88557910919188, 18.837775117168629], [98.885589838027968, 18.837805579722875], [98.885573744773851, 18.837871581923757], [98.885530829429626, 18.837881736108503]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.887488842010484, 18.837115095159856], [98.887478113174438, 18.837089709697977], [98.887510299682603, 18.837069401328485], [98.887515664100633, 18.837094786790356], [98.887494206428514, 18.837094786790356], [98.887510299682603, 18.837115095159856], [98.887488842010484, 18.837115095159856]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.887376189231873, 18.83695262820385], [98.887370824813829, 18.836871394725847], [98.887408375740051, 18.836861240541097], [98.887445926666246, 18.836896780187725], [98.887456655502319, 18.836927242741972], [98.88745129108429, 18.836937396926722], [98.887397646903977, 18.83693231983435], [98.887376189231873, 18.83695262820385]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.887553215026855, 18.83695262820385], [98.887537121772752, 18.83693231983435], [98.887478113174438, 18.836917088557225], [98.887478113174438, 18.836896780187725], [98.887526392936707, 18.836881548910601], [98.887558579444871, 18.836886626002975], [98.887580037117004, 18.83691201146485], [98.887580037117004, 18.836937396926722], [98.887574672698975, 18.83695262820385], [98.887553215026855, 18.83695262820385]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.887939453125, 18.837003399127603], [98.887869715690613, 18.836957705296221], [98.887826800346375, 18.836983090758103], [98.887842893600464, 18.837044015866603], [98.887821435928345, 18.837054170051353], [98.88780534267427, 18.837018630404732], [98.887789249420152, 18.837013553312353], [98.887816071510301, 18.836967859480978], [98.887821435928345, 18.836906934372475], [98.887778520584092, 18.836876471818222], [98.887703418731675, 18.836876471818222], [98.887692689895616, 18.836891703095347], [98.887671232223511, 18.836891703095347], [98.887660503387437, 18.836866317633472], [98.887633681297288, 18.836866317633472], [98.887622952461243, 18.836896780187725], [98.887660503387437, 18.836937396926722], [98.887660503387437, 18.836957705296221], [98.8876873254776, 18.836957705296221], [98.887681961059556, 18.836978013665725], [98.88769805431366, 18.836983090758103], [98.887703418731675, 18.837008476219975], [98.887655138969421, 18.837018630404732], [98.887628316879272, 18.836998322035225], [98.887601494789124, 18.836998322035225], [98.887596130371094, 18.836967859480978], [98.887580037117004, 18.836967859480978], [98.887563943862915, 18.836998322035225], [98.88759076595305, 18.837008476219975], [98.88759076595305, 18.837033861681853], [98.887537121772752, 18.837033861681853], [98.887526392936707, 18.837054170051353], [98.887537121772752, 18.837089709697977], [98.887585401535034, 18.837125249344606], [98.887633681297288, 18.837115095159856], [98.887649774551392, 18.837094786790356], [98.887681961059556, 18.837099863882727], [98.887703418731675, 18.837079555513228], [98.887757062911973, 18.837135403529352], [98.88783752918242, 18.837140480621731], [98.887858986854539, 18.837125249344606], [98.887875080108643, 18.837150634806481], [98.887912631034837, 18.837155711898859], [98.887971639633179, 18.837084632605606], [98.887971639633179, 18.837059247143731], [98.88795018196106, 18.837044015866603], [98.887939453125, 18.837003399127603]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.887939453125, 18.836881548910601], [98.887901902198777, 18.836881548910601], [98.887875080108643, 18.836835855079219], [98.887848258018494, 18.836835855079219], [98.887821435928345, 18.836896780187725], [98.887864351272583, 18.83693231983435], [98.887966275215149, 18.83693231983435], [98.887955546379075, 18.8369221656496], [98.887966275215149, 18.836906934372475], [98.887939453125, 18.836881548910601]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.887735605239854, 18.836851086356347], [98.8876873254776, 18.836835855079219], [98.887681961059556, 18.836795238340223], [98.88769805431366, 18.836774929970716], [98.887740969657884, 18.836769852878344], [98.887778520584092, 18.836800315432601], [98.88780534267427, 18.836800315432601], [98.887794613838196, 18.836846009263972], [98.887735605239854, 18.836851086356347]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.887939453125, 18.836759698693594], [98.887917995452881, 18.836764775785966], [98.887917995452881, 18.836805392524973], [98.88794481754303, 18.836810469617348], [98.887982368469224, 18.836856163448722], [98.887993097305298, 18.836825700894469], [98.888019919395447, 18.836805392524973], [98.888014554977417, 18.836764775785966], [98.887998461723328, 18.836739390324091], [98.887939453125, 18.836759698693594]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.887821435928345, 18.836805392524973], [98.887810707092271, 18.836764775785966], [98.887842893600464, 18.836764775785966], [98.887848258018494, 18.836790161247844], [98.887821435928345, 18.836805392524973]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.887746334075928, 18.836708927769841], [98.887735605239854, 18.836683542307966], [98.887757062911973, 18.836653079753713], [98.887773156166077, 18.836653079753713], [98.887778520584092, 18.836693696492716], [98.887767791748047, 18.836708927769841], [98.887746334075928, 18.836708927769841]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.909735083580017, 18.831748513599276], [98.909692168235779, 18.831733281850706], [98.909692168235779, 18.831662200357375], [98.909740447998047, 18.831682509355467], [98.909756541252122, 18.831707895603088], [98.909751176834092, 18.831743436349754], [98.909735083580017, 18.831748513599276]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.909815549850464, 18.831723127351658], [98.909740447998047, 18.831667277606897], [98.909751176834092, 18.831641891359279], [98.909794092178345, 18.831621582361187], [98.909837007522583, 18.831626659610709], [98.909874558448777, 18.831677432105945], [98.909863829612732, 18.831707895603088], [98.909815549850464, 18.831723127351658]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.909541964530945, 18.831723127351658], [98.909509778022752, 18.831707895603088], [98.909515142440796, 18.831672354856419], [98.909541964530945, 18.831652045858327], [98.909541964530945, 18.831621582361187], [98.909574151039109, 18.831601273363088], [98.909617066383362, 18.831601273363088], [98.909643888473511, 18.831652045858327], [98.909600973129287, 18.831707895603088], [98.909541964530945, 18.831723127351658]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.909676074981675, 18.831641891359279], [98.909654617309556, 18.831616505111658], [98.9096599817276, 18.831535269119279], [98.909686803817735, 18.831494651123091], [98.909718990325928, 18.831489573873569], [98.909751176834092, 18.831596196113569], [98.909713625907898, 18.83160635061261], [98.909697532653794, 18.831636814109757], [98.909676074981675, 18.831641891359279]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.909584879875169, 18.831565732616426], [98.909515142440796, 18.83154542361833], [98.909509778022752, 18.83151496012119], [98.909466862678528, 18.831494651123091], [98.909466862678528, 18.831464187625951], [98.909499049186721, 18.831438801378336], [98.909595608711243, 18.831433724128811], [98.909638524055481, 18.831474342124999], [98.909649252891526, 18.831535269119279], [98.909622430801392, 18.831565732616426], [98.909584879875169, 18.831565732616426]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.909847736358628, 18.831479419374524], [98.909831643104539, 18.831459110376429], [98.909788727760315, 18.831448955877381], [98.909777998924241, 18.831428646879289], [98.909815549850464, 18.831388028883094], [98.909885287284851, 18.831403260631667], [98.909896016120896, 18.831469264875473], [98.909847736358628, 18.831479419374524]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.909397125244141, 18.831357565385957], [98.909364938735948, 18.831342333637384], [98.909354209899888, 18.831322024639295], [98.909407854080186, 18.831311870140244], [98.90942394733429, 18.831357565385957], [98.909397125244141, 18.831357565385957]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.90955269336699, 18.831261097645008], [98.909499049186721, 18.83125094314596], [98.909477591514573, 18.831210325149769], [98.909493684768677, 18.831200170650725], [98.90955269336699, 18.831205247900247], [98.909574151039109, 18.83123571139739], [98.909574151039109, 18.831256020395482], [98.90955269336699, 18.831261097645008]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.909649252891526, 18.831271252144052], [98.909627795219407, 18.831215402399291], [98.909606337547288, 18.831210325149769], [98.909606337547288, 18.831190016151673], [98.909622430801392, 18.831190016151673], [98.909633159637437, 18.831215402399291], [98.90967071056366, 18.831200170650725], [98.909697532653794, 18.831215402399291], [98.909697532653794, 18.831245865896431], [98.909649252891526, 18.831271252144052]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.907197713851915, 18.859503624230342], [98.907170891761766, 18.85947824191328], [98.907176256179795, 18.859452859596221], [98.907203078269958, 18.859447783132808], [98.907267451286302, 18.859468088986461], [98.907267451286302, 18.859498547766933], [98.907197713851915, 18.859503624230342]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.908399343490586, 18.859508700693755], [98.908367156982422, 18.859493471303519], [98.908351063728333, 18.859452859596221], [98.908351063728333, 18.859427477279162], [98.908367156982422, 18.859412247888926], [98.908399343490586, 18.859412247888926], [98.908436894416809, 18.859457936059638], [98.908436894416809, 18.859498547766933], [98.908399343490586, 18.859508700693755]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.907760977745042, 18.859508700693755], [98.907739520072923, 18.859473165449874], [98.907744884490967, 18.859417324352339], [98.907777070999146, 18.859412247888926], [98.90781462192534, 18.859427477279162], [98.907857537269578, 18.859422400815749], [98.907895088195801, 18.859493471303519], [98.907884359359727, 18.859508700693755], [98.907760977745042, 18.859508700693755]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.907337188720703, 18.859452859596221], [98.90731573104857, 18.859427477279162], [98.907326459884644, 18.859417324352339], [98.9073210954666, 18.859386865571867], [98.907380104064941, 18.859427477279162], [98.907374739646897, 18.859447783132808], [98.907337188720703, 18.859452859596221]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.90716552734375, 18.859310718620687], [98.90716552734375, 18.859275183376806], [98.907133340835571, 18.859285336303628], [98.907149434089646, 18.859300565693864], [98.907144069671631, 18.859325948010927], [98.90716552734375, 18.85933102447434], [98.907176256179795, 18.859320871547517], [98.90716552734375, 18.859310718620687]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.907224535942078, 18.859341177401163], [98.907197713851915, 18.85933102447434], [98.907192349433885, 18.859290412767042], [98.907245993614197, 18.859280259840222], [98.907283544540419, 18.859336100937753], [98.907224535942078, 18.859341177401163]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.908093571662903, 18.859341177401163], [98.908066749572754, 18.859320871547517], [98.90805602073668, 18.859290412767042], [98.908013105392442, 18.859275183376806], [98.908018469810486, 18.859239648132924], [98.908072113990784, 18.859239648132924], [98.908082842826829, 18.859275183376806], [98.908131122589111, 18.859265030449983], [98.90816330909729, 18.859280259840222], [98.908157944679246, 18.859320871547517], [98.908120393753052, 18.859320871547517], [98.908109664916992, 18.859341177401163], [98.908093571662903, 18.859341177401163]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.907294273376451, 18.859305642157281], [98.907288908958435, 18.859275183376806], [98.907240629196153, 18.85925487752316], [98.907262086868286, 18.859188883498806], [98.907305002212524, 18.859199036425636], [98.907310366630554, 18.85925487752316], [98.907337188720703, 18.859244724596333], [98.907364010810866, 18.85925487752316], [98.907342553138719, 18.859295489230458], [98.907294273376451, 18.859305642157281]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.908222317695618, 18.859163501181747], [98.908211588859558, 18.859138118864688], [98.908238410949707, 18.859122889474449], [98.908249139785752, 18.859148271791508], [98.908222317695618, 18.859163501181747]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.90830278396605, 18.859148271791508], [98.908281326293931, 18.859117813011036], [98.908249139785752, 18.859102583620803], [98.908238410949707, 18.859041666059863], [98.908286690711975, 18.859067048376922], [98.908292055130005, 18.85903658959645], [98.908361792564392, 18.859006130815981], [98.90841007232666, 18.859046742523276], [98.90841543674469, 18.859127965937862], [98.908388614654541, 18.859133042401272], [98.908361792564392, 18.85909750715739], [98.908351063728333, 18.85911273654763], [98.908329606056199, 18.859107660084213], [98.90830278396605, 18.859148271791508]], [[98.908329606056199, 18.85909750715739], [98.908329606056199, 18.85909243069398], [98.908334970474229, 18.85909243069398], [98.908334970474229, 18.85909750715739], [98.908329606056199, 18.85909750715739]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.907610774040208, 18.859082277767158], [98.907600045204163, 18.859072124840335], [98.907610774040208, 18.859016283742804], [98.907626867294326, 18.859001054352568], [98.907659053802476, 18.859001054352568], [98.907680511474609, 18.85903658959645], [98.90767514705658, 18.859061971913508], [98.907610774040208, 18.859082277767158]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.908227682113633, 18.859006130815981], [98.908190131187439, 18.858970595572096], [98.908206224441514, 18.858935060328211], [98.908233046531677, 18.858935060328211], [98.908265233039856, 18.858960442645269], [98.908265233039856, 18.858995977889151], [98.908227682113633, 18.859006130815981]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.90816330909729, 18.859275183376806], [98.908115029335022, 18.859219342279278], [98.908082842826829, 18.859219342279278], [98.908045291900635, 18.859193959962219], [98.907997012138367, 18.859193959962219], [98.907975554466248, 18.859173654108567], [98.907927274703965, 18.859178730571983], [98.907884359359727, 18.859239648132924], [98.907852172851562, 18.859224418742691], [98.907852172851562, 18.859193959962219], [98.907819986343384, 18.859234571669514], [98.907755613327026, 18.859234571669514], [98.907707333564773, 18.859199036425636], [98.907685875892625, 18.859178730571983], [98.907691240310655, 18.859138118864688], [98.907766342163072, 18.859127965937862], [98.907787799835205, 18.859107660084213], [98.907857537269578, 18.85909243069398], [98.907857537269578, 18.859082277767158], [98.907723426818848, 18.859102583620803], [98.907691240310655, 18.85909243069398], [98.907696604728699, 18.858960442645269], [98.907680511474609, 18.85894013679162], [98.907707333564773, 18.858924907401388], [98.907723426818848, 18.858879219230683], [98.90780389308928, 18.858884295694093], [98.907830715179443, 18.858914754474565], [98.907905817031846, 18.858914754474565], [98.907943367958069, 18.858899525084329], [98.907975554466248, 18.858914754474565], [98.908082842826829, 18.858914754474565], [98.908125758171067, 18.858929983864801], [98.90817403793335, 18.858995977889151], [98.908206224441514, 18.859001054352568], [98.908200860023484, 18.859107660084213], [98.908179402351365, 18.859143195328105], [98.908227682113633, 18.859183807035397], [98.908227682113633, 18.859199036425636], [98.908190131187439, 18.859265030449983], [98.90816330909729, 18.859275183376806]], [[98.908104300498948, 18.859138118864688], [98.908093571662903, 18.859117813011036], [98.908088207244873, 18.859051818986686], [98.908120393753052, 18.859072124840335], [98.908125758171067, 18.859122889474449], [98.90816867351532, 18.859148271791508], [98.908120393753052, 18.859178730571983], [98.908104300498948, 18.859138118864688]], [[98.907980918884263, 18.859127965937862], [98.907932639121995, 18.859067048376922], [98.90792191028595, 18.858995977889151], [98.907884359359727, 18.858980748498915], [98.907884359359727, 18.858950289718447], [98.907964825630188, 18.858970595572096], [98.907970190048218, 18.859046742523276], [98.908007740974412, 18.859077201303744], [98.908002376556382, 18.859122889474449], [98.907980918884263, 18.859127965937862]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.907390832900987, 18.859077201303744], [98.907342553138719, 18.859021360206214], [98.907337188720703, 18.858955366181856], [98.907385468482971, 18.858935060328211], [98.907428383827209, 18.858869066303861], [98.907482028007507, 18.85887414276727], [98.907524943351746, 18.858813225206326], [98.907567858695984, 18.858813225206326], [98.907578587532043, 18.858838607523385], [98.907600045204163, 18.858848760450208], [98.907583951950059, 18.859061971913508], [98.907471299171434, 18.859041666059863], [98.907428383827209, 18.859011207279387], [98.90740692615509, 18.859072124840335], [98.907390832900987, 18.859077201303744]], [[98.907417654991136, 18.858995977889151], [98.90741229057312, 18.858975672035506], [98.907428383827209, 18.858970595572096], [98.907433748245239, 18.858985824962328], [98.907417654991136, 18.858995977889151]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.90742301940918, 18.858711695938091], [98.907401561737061, 18.858696466547851], [98.907358646392822, 18.858706619474674], [98.907353281974792, 18.858655854840556], [98.907455205917358, 18.858630472523497], [98.907471299171434, 18.858686313621028], [98.907455205917358, 18.858706619474674], [98.90742301940918, 18.858711695938091]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.907954096794128, 18.858843683986795], [98.907868266105652, 18.858828454596559], [98.907830715179443, 18.858808148742913], [98.907809257507324, 18.858777689962444], [98.907712697982774, 18.858787842889267], [98.907685875892625, 18.858752307645386], [98.907680511474609, 18.858696466547851], [98.907664418220506, 18.858671084230792], [98.907669782638536, 18.858630472523497], [98.907696604728699, 18.858625396060088], [98.907718062400804, 18.858645701913733], [98.907755613327026, 18.858640625450324], [98.907782435417161, 18.858711695938091], [98.907819986343384, 18.858706619474674], [98.907836079597459, 18.85873707825515], [98.907868266105652, 18.85873707825515], [98.907889723777771, 18.858762460572208], [98.907895088195801, 18.858742154718563], [98.907868266105652, 18.858716772401504], [98.907868266105652, 18.858686313621028], [98.907878994941697, 18.858671084230792], [98.90792191028595, 18.858671084230792], [98.907954096794128, 18.858706619474674], [98.907964825630188, 18.858742154718563], [98.907997012138367, 18.858762460572208], [98.907997012138367, 18.858823378133149], [98.907986283302293, 18.858838607523385], [98.907954096794128, 18.858843683986795]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.908147215843201, 18.858869066303861], [98.908131122589111, 18.858833531059975], [98.90815258026123, 18.858803072279503], [98.908066749572754, 18.858782766425858], [98.908072113990784, 18.858721848864917], [98.908039927482605, 18.858716772401504], [98.908045291900635, 18.858706619474674], [98.908013105392442, 18.858681237157615], [98.908018469810486, 18.858666007767383], [98.907980918884263, 18.858660931303969], [98.907975554466248, 18.858640625450324], [98.907959461212144, 18.858640625450324], [98.907964825630188, 18.858625396060088], [98.907986283302293, 18.858620319596678], [98.908002376556382, 18.858640625450324], [98.908013105392442, 18.858620319596678], [98.908023834228516, 18.858650778377147], [98.908093571662903, 18.858650778377147], [98.908125758171067, 18.858706619474674], [98.90816330909729, 18.858696466547851], [98.908200860023484, 18.858706619474674], [98.908200860023484, 18.85873707825515], [98.908179402351365, 18.858752307645386], [98.90817403793335, 18.858782766425858], [98.908195495605469, 18.858818301669736], [98.908227682113633, 18.858813225206326], [98.908227682113633, 18.858848760450208], [98.908200860023484, 18.858858913377034], [98.908195495605469, 18.858833531059975], [98.908184766769395, 18.858858913377034], [98.908147215843201, 18.858869066303861]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.908147215843201, 18.858615243133265], [98.908136487007127, 18.858605090206442], [98.908141851425171, 18.858559402035731], [98.908179402351365, 18.858539096182088], [98.908190131187439, 18.858549249108911], [98.908184766769395, 18.858594937279616], [98.90816867351532, 18.858615243133265], [98.908147215843201, 18.858615243133265]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.908098936080933, 18.858564478499147], [98.908077478408799, 18.858539096182088], [98.908082842826829, 18.858518790328436], [98.90806138515471, 18.858518790328436], [98.90806138515471, 18.85849848447479], [98.90816867351532, 18.858513713865023], [98.908125758171067, 18.858559402035731], [98.908098936080933, 18.858564478499147]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.908034563064561, 18.858483255084554], [98.907997012138367, 18.858442643377263], [98.907997012138367, 18.858417261060197], [98.908018469810486, 18.858391878743138], [98.908115029335022, 18.858432490450436], [98.908098936080933, 18.858462949230908], [98.908034563064561, 18.858483255084554]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.90791118144989, 18.858625396060088], [98.907777070999146, 18.858544172645495], [98.907787799835205, 18.858523866791852], [98.907777070999146, 18.858468025694318], [98.907793164253221, 18.858452796304086], [98.907841444015489, 18.858462949230908], [98.907846808433533, 18.85849848447479], [98.907878994941697, 18.858534019718672], [98.907878994941697, 18.858564478499147], [98.907895088195801, 18.858564478499147], [98.90792191028595, 18.858528943255259], [98.907900452613831, 18.858518790328436], [98.907900452613831, 18.858478178621144], [98.907878994941697, 18.858473102157731], [98.907868266105652, 18.858442643377263], [98.907895088195801, 18.858366496426079], [98.907943367958069, 18.858361419962669], [98.907970190048218, 18.858386802279732], [98.907964825630188, 18.858452796304086], [98.907986283302293, 18.858518790328436], [98.907970190048218, 18.858544172645495], [98.907943367958069, 18.858554325572324], [98.907938003540025, 18.858615243133265], [98.90791118144989, 18.858625396060088]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.907460570335374, 18.85849848447479], [98.907369375228868, 18.858478178621144], [98.907353281974792, 18.858442643377263], [98.907358646392822, 18.858381725816315], [98.907390832900987, 18.858376649352902], [98.907471299171434, 18.858402031669961], [98.907487392425537, 18.858488331547964], [98.907460570335374, 18.85849848447479]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.907310366630554, 18.85834111410902], [98.907267451286302, 18.858300502401729], [98.907288908958435, 18.858229431913959], [98.9073210954666, 18.858234508377372], [98.907342553138719, 18.858270043621257], [98.907337188720703, 18.858320808255375], [98.907310366630554, 18.85834111410902]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.907439112663255, 18.858295425938316], [98.907417654991136, 18.858254814231017], [98.907449841499314, 18.858244661304198], [98.907465934753418, 18.85827512008467], [98.907439112663255, 18.858295425938316]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.90780389308928, 18.858422337523614], [98.907793164253221, 18.858386802279732], [98.90781462192534, 18.858376649352902], [98.90781462192534, 18.858356343499256], [98.907793164253221, 18.858361419962669], [98.907760977745042, 18.858407108133378], [98.907718062400804, 18.858391878743138], [98.907707333564773, 18.858371572889492], [98.907685875892625, 18.858407108133378], [98.907632231712341, 18.858396955206551], [98.907589316368089, 18.858320808255375], [98.907551765441895, 18.858325884718784], [98.907519578933702, 18.858305578865139], [98.907498121261582, 18.858254814231017], [98.907503485679626, 18.858234508377372], [98.907535672187791, 18.858209126060313], [98.907600045204163, 18.858209126060313], [98.907701969146729, 18.858244661304198], [98.907750248908997, 18.858219278987139], [98.907825350761414, 18.858224355450545], [98.907862901687608, 18.858270043621257], [98.907830715179443, 18.858346190572433], [98.907852172851562, 18.858402031669961], [98.907836079597459, 18.858407108133378], [98.907825350761414, 18.858391878743138], [98.907819986343384, 18.858417261060197], [98.90780389308928, 18.858422337523614]], [[98.907739520072923, 18.858310655328552], [98.907750248908997, 18.858305578865139], [98.907744884490967, 18.858270043621257], [98.907739520072923, 18.858270043621257], [98.907739520072923, 18.858310655328552]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.908147215843201, 18.858315731791965], [98.908109664916992, 18.858300502401729], [98.908034563064561, 18.858305578865139], [98.908002376556382, 18.858254814231017], [98.908002376556382, 18.858229431913959], [98.908018469810486, 18.858219278987139], [98.908050656318665, 18.858219278987139], [98.90806138515471, 18.858234508377372], [98.908184766769395, 18.858229431913959], [98.908190131187439, 18.858254814231017], [98.908222317695618, 18.858264967157844], [98.908222317695618, 18.858290349474906], [98.908195495605469, 18.858315731791965], [98.908147215843201, 18.858315731791965]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.909622430801392, 18.858066985084779], [98.909617066383362, 18.85804160276772], [98.909568786621094, 18.858026373377488], [98.909568786621094, 18.85797053227996], [98.909611701965318, 18.857965455816544], [98.909638524055481, 18.857990838133603], [98.909654617309556, 18.858051755694547], [98.909643888473511, 18.858066985084779], [98.909622430801392, 18.858066985084779]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.909123539924622, 18.857899461792186], [98.909112811088548, 18.857879155938541], [98.909112811088548, 18.857838544231246], [98.909139633178711, 18.857879155938541], [98.909139633178711, 18.857899461792186], [98.909123539924622, 18.857899461792186]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.909048438072205, 18.857863926548308], [98.909026980400085, 18.857848697158072], [98.909026980400085, 18.8578182383776], [98.909053802490234, 18.857797932523951], [98.909112811088548, 18.857823314841013], [98.909102082252502, 18.857848697158072], [98.909048438072205, 18.857863926548308]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.909177184104934, 18.857752244353243], [98.90917181968689, 18.857721785572775], [98.909085988998399, 18.857711632645948], [98.909085988998399, 18.857676097402067], [98.909198641777039, 18.857671020938657], [98.909209370613084, 18.85768117386548], [98.909209370613084, 18.85774209142642], [98.909177184104934, 18.857752244353243]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.90952050685884, 18.857640562158181], [98.909493684768677, 18.857630409231362], [98.909493684768677, 18.857594873987473], [98.909515142440796, 18.857569491670418], [98.909541964530945, 18.857589797524064], [98.909579515457153, 18.857594873987473], [98.909568786621094, 18.857635485694768], [98.90952050685884, 18.857640562158181]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.909445405006409, 18.857528879963123], [98.909429311752305, 18.8575187270363], [98.909429311752305, 18.857498421182648], [98.909472227096558, 18.857493344719241], [98.909477591514573, 18.8575187270363], [98.909445405006409, 18.857528879963123]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.909150362014771, 18.857554262280182], [98.909150362014771, 18.857483191792412], [98.909193277359009, 18.857483191792412], [98.909204006195068, 18.857493344719241], [98.909198641777039, 18.857544109353359], [98.909150362014771, 18.857554262280182]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.909606337547288, 18.857544109353359], [98.909584879875169, 18.85752380349971], [98.909547328948975, 18.857528879963123], [98.90952050685884, 18.857508574109474], [98.909504413604722, 18.857488268255828], [98.909493684768677, 18.857417197768061], [98.90956342220305, 18.857407044841235], [98.909617066383362, 18.857452733011943], [98.9096599817276, 18.857467962402175], [98.909649252891526, 18.857533956426536], [98.909606337547288, 18.857544109353359]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.909000158309937, 18.857483191792412], [98.908984065055847, 18.85744765654853], [98.908946514129624, 18.857452733011943], [98.908946514129624, 18.857422274231471], [98.908973336219788, 18.857417197768061], [98.908989429473863, 18.857432427158294], [98.909005522727966, 18.857396891914416], [98.909032344818101, 18.857396891914416], [98.909059166908264, 18.85744258008512], [98.909032344818101, 18.857478115329002], [98.909000158309937, 18.857483191792412]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.909273743629456, 18.857539032889946], [98.909230828285203, 18.857498421182648], [98.909214735031114, 18.857452733011943], [98.909236192703233, 18.857366433133944], [98.90930593013762, 18.857386738987589], [98.909316658973694, 18.857533956426536], [98.909273743629456, 18.857539032889946]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.909128904342651, 18.857427350694884], [98.909075260162354, 18.857386738987589], [98.909080624580383, 18.85736135667053], [98.909134268760667, 18.857335974353468], [98.909150362014771, 18.857310592036409], [98.909204006195068, 18.857310592036409], [98.909209370613084, 18.857386738987589], [98.909144997596727, 18.857391815451003], [98.909128904342651, 18.857427350694884]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.909322023391724, 18.857346127280294], [98.909284472465501, 18.85730043910959], [98.909263014793382, 18.857335974353468], [98.909263014793382, 18.85729028618276], [98.90931129455565, 18.857280133255941], [98.909348845481873, 18.857295362646173], [98.909343481063829, 18.857341050816885], [98.909322023391724, 18.857346127280294]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.909043073654161, 18.857371509597353], [98.909026980400085, 18.857330897890055], [98.908967971801744, 18.857315668499819], [98.908962607383714, 18.85728520971935], [98.908989429473863, 18.85729028618276], [98.909021615982041, 18.857269980329118], [98.90906989574431, 18.857280133255941], [98.90906989574431, 18.857269980329118], [98.909032344818101, 18.857239521548646], [98.908967971801744, 18.857244598012059], [98.908957242965698, 18.857203986304764], [98.908962607383714, 18.857183680451115], [98.909016251564026, 18.857193833377934], [98.909016251564026, 18.857158298134056], [98.909032344818101, 18.857137992280407], [98.90906453132628, 18.857137992280407], [98.909075260162354, 18.857153221670639], [98.909102082252502, 18.857143068743817], [98.909144997596727, 18.857183680451115], [98.909144997596727, 18.857219215694993], [98.909102082252502, 18.85729028618276], [98.90906989574431, 18.857295362646173], [98.909075260162354, 18.857356280207121], [98.90906453132628, 18.857371509597353], [98.909043073654161, 18.857371509597353]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.90930593013762, 18.857163374597473], [98.909300565719604, 18.857158298134056], [98.909300565719604, 18.857092304109702], [98.909327387809753, 18.857102457036525], [98.909338116645813, 18.857122762890171], [98.909332752227769, 18.857158298134056], [98.90930593013762, 18.857163374597473]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "MultiPolygon", "coordinates": [[[[98.909686803817735, 18.857087227646289], [98.909702897071838, 18.857092304109702], [98.909697532653794, 18.857117686426761], [98.909718990325928, 18.857117686426761], [98.909740447998047, 18.857066921792644], [98.909697532653794, 18.857051692402408], [98.909681439399719, 18.85706184532923], [98.909686803817735, 18.857087227646289]]], [[[98.909686803817735, 18.857087227646289], [98.909617066383362, 18.85706184532923], [98.909579515457153, 18.857071998256053], [98.909584879875169, 18.857097380573112], [98.909638524055481, 18.85714814520723], [98.90967071056366, 18.85714814520723], [98.909686803817735, 18.857087227646289]]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.908973336219788, 18.848934174795133], [98.908935785293593, 18.848924021239199], [98.90890896320343, 18.848883407015457], [98.908844590187059, 18.848847869569685], [98.908828496932983, 18.848802178567983], [98.908785581588745, 18.848766641122211], [98.908790946006761, 18.848726026898476], [98.90881240367888, 18.848726026898476], [98.908866047859178, 18.848781871456115], [98.908898234367371, 18.848781871456115], [98.908887505531297, 18.848761564344244], [98.908892869949327, 18.848715873342538], [98.909016251564026, 18.848710796564571], [98.90906453132628, 18.848741257232376], [98.90906989574431, 18.848771717900181], [98.909053802490234, 18.848786948234082], [98.909010887145982, 18.848807255345953], [98.908967971801744, 18.848802178567983], [98.908957242965698, 18.848832639235784], [98.908973336219788, 18.848863099903589], [98.908989429473863, 18.848858023125626], [98.908989429473863, 18.848832639235784], [98.909005522727966, 18.848837716013751], [98.909005522727966, 18.848852946347659], [98.909043073654161, 18.848852946347659], [98.90906989574431, 18.848898637349361], [98.909021615982041, 18.848929098017166], [98.908973336219788, 18.848934174795133]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.908833861351013, 18.848726026898476], [98.908817768096924, 18.848705719786604], [98.908785581588745, 18.848720950120509], [98.908753395080566, 18.848710796564571], [98.908731937408447, 18.848644798450994], [98.908817768096924, 18.848609261005226], [98.90880167484282, 18.848568646781487], [98.908769488334642, 18.848538186113682], [98.908764123916612, 18.84850264866791], [98.908790946006761, 18.848482341556039], [98.908839225769029, 18.848477264778072], [98.908876776695251, 18.848543262891649], [98.908887505531297, 18.848604184227252], [98.908887505531297, 18.848624491339123], [98.908849954605103, 18.848629568117094], [98.908849954605103, 18.848649875228961], [98.908866047859178, 18.848670182340832], [98.908898234367371, 18.848675259118799], [98.908898234367371, 18.848695566230667], [98.908833861351013, 18.848726026898476]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.908833861351013, 18.848324961439054], [98.908823132514939, 18.848274193659378], [98.908839225769029, 18.848253886547507], [98.908871412277207, 18.848304654327183], [98.908833861351013, 18.848324961439054]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.908726572990403, 18.848294500771249], [98.908710479736328, 18.848279270437345], [98.908705115318298, 18.848253886547507], [98.908715844154358, 18.848269116881411], [98.908726572990403, 18.848253886547507], [98.908753395080566, 18.848264040103444], [98.908726572990403, 18.848294500771249]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.9089035987854, 18.848304654327183], [98.908876776695251, 18.848264040103444], [98.908882141113281, 18.848228502657673], [98.908930420875549, 18.848203118767834], [98.908978700637817, 18.848198041989864], [98.908978700637817, 18.848182811655963], [98.909021615982041, 18.848167581322066], [98.909037709236145, 18.848137120654258], [98.909091353416429, 18.84811681354239], [98.909134268760667, 18.848137120654258], [98.909150362014771, 18.848203118767834], [98.909187912940965, 18.848238656213606], [98.909177184104934, 18.848264040103444], [98.909150362014771, 18.848274193659378], [98.909059166908264, 18.848253886547507], [98.909016251564026, 18.848299577549216], [98.908957242965698, 18.848289423993283], [98.9089035987854, 18.848304654327183]], [[98.908984065055847, 18.848228502657673], [98.908984065055847, 18.848223425879706], [98.908989429473863, 18.848223425879706], [98.908989429473863, 18.848228502657673], [98.908984065055847, 18.848228502657673]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.908790946006761, 18.848264040103444], [98.908780217170715, 18.848228502657673], [98.90881240367888, 18.848192965211897], [98.908769488334642, 18.848182811655963], [98.908769488334642, 18.84817265810003], [98.908785581588745, 18.848147274210191], [98.908807039260864, 18.848147274210191], [98.908833861351013, 18.848182811655963], [98.908833861351013, 18.848223425879706], [98.908828496932983, 18.84824880976954], [98.908790946006761, 18.848264040103444]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.909102082252502, 18.84806096898475], [98.909091353416429, 18.848040661872883], [98.909112811088548, 18.848015277983045], [98.909123539924622, 18.848040661872883], [98.909102082252502, 18.84806096898475]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.909043073654161, 18.848081276096622], [98.909026980400085, 18.848055892206784], [98.909005522727966, 18.84806096898475], [98.909000158309937, 18.848000047649144], [98.909043073654161, 18.847994970871177], [98.909080624580383, 18.848015277983045], [98.90906989574431, 18.848076199318655], [98.909043073654161, 18.848081276096622]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.909713625907898, 18.848396036330591], [98.9096599817276, 18.848390959552624], [98.909611701965318, 18.848350345328889], [98.909590244293213, 18.84830973110515], [98.909499049186721, 18.84830973110515], [98.909472227096558, 18.848264040103444], [98.90941858291626, 18.848264040103444], [98.909386396408067, 18.848279270437345], [98.909381031990051, 18.848243732991573], [98.909413218498216, 18.848223425879706], [98.909397125244141, 18.848198041989864], [98.909273743629456, 18.848218349101739], [98.909268379211426, 18.848152350988158], [98.90931129455565, 18.848137120654258], [98.909322023391724, 18.848076199318655], [98.909295201301575, 18.848066045762717], [98.909300565719604, 18.848096506430522], [98.909284472465501, 18.848091429652555], [98.909273743629456, 18.848111736764423], [98.909246921539307, 18.848091429652555], [98.909246921539307, 18.848066045762717], [98.909209370613084, 18.848071122540684], [98.909150362014771, 18.84804573865085], [98.909144997596727, 18.848010201205074], [98.909182548522949, 18.848010201205074], [98.909241557121263, 18.84804573865085], [98.90925765037538, 18.848025431538979], [98.909295201301575, 18.84804573865085], [98.909300565719604, 18.848020354761012], [98.909354209899888, 18.848015277983045], [98.909391760826111, 18.848035585094912], [98.909407854080186, 18.848066045762717], [98.909450769424438, 18.848081276096622], [98.909445405006409, 18.848126967098327], [98.909477591514573, 18.848152350988158], [98.909499049186721, 18.84811681354239], [98.90955805778502, 18.84812189032036], [98.909600973129287, 18.84817265810003], [98.909584879875169, 18.848203118767834], [98.909649252891526, 18.848238656213606], [98.909649252891526, 18.848264040103444], [98.909681439399719, 18.84824880976954], [98.909740447998047, 18.848274193659378], [98.909751176834092, 18.848375729218724], [98.909713625907898, 18.848396036330591]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.909869194030762, 18.848030508316945], [98.909853100776658, 18.847989894093207], [98.909896016120896, 18.847989894093207], [98.909901380538926, 18.848025431538979], [98.909869194030762, 18.848030508316945]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.909820914268479, 18.84812189032036], [98.909777998924241, 18.848091429652555], [98.909735083580017, 18.848086352874589], [98.909740447998047, 18.848071122540684], [98.909713625907898, 18.848040661872883], [98.909729719161973, 18.847984817315236], [98.909761905670166, 18.847984817315236], [98.909772634506211, 18.848010201205074], [98.909831643104539, 18.848005124427107], [98.909853100776658, 18.848025431538979], [98.909853100776658, 18.848101583208489], [98.909820914268479, 18.84812189032036]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.909708261489854, 18.848243732991573], [98.909617066383362, 18.848182811655963], [98.909622430801392, 18.848147274210191], [98.909643888473511, 18.848126967098327], [98.909590244293213, 18.848106659986456], [98.909574151039109, 18.848086352874589], [98.909584879875169, 18.848040661872883], [98.909574151039109, 18.847989894093207], [98.909600973129287, 18.847959433425402], [98.909633159637437, 18.847984817315236], [98.909638524055481, 18.848030508316945], [98.9096599817276, 18.848020354761012], [98.909702897071838, 18.848030508316945], [98.909697532653794, 18.848142197432225], [98.909837007522583, 18.848137120654258], [98.909890651702881, 18.84818788843393], [98.909896016120896, 18.848223425879706], [98.90979945659636, 18.848233579435639], [98.909783363342285, 18.848182811655963], [98.909756541252122, 18.848162504544099], [98.909756541252122, 18.848238656213606], [98.909708261489854, 18.848243732991573]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.908919692039476, 18.848076199318655], [98.908892869949327, 18.848030508316945], [98.90890896320343, 18.848005124427107], [98.908876776695251, 18.847984817315236], [98.908887505531297, 18.847949279869468], [98.908914327621446, 18.847939126313531], [98.908962607383714, 18.847989894093207], [98.908951878547668, 18.848071122540684], [98.908919692039476, 18.848076199318655]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.909777998924241, 18.847989894093207], [98.909761905670166, 18.847934049535564], [98.90979945659636, 18.847903588867762], [98.909858465194702, 18.847959433425402], [98.909810185432434, 18.847989894093207], [98.909777998924241, 18.847989894093207]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.909273743629456, 18.847959433425402], [98.909246921539307, 18.847934049535564], [98.909246921539307, 18.847898512089795], [98.909263014793382, 18.847883281755895], [98.909295201301575, 18.847898512089795], [98.90931129455565, 18.847923895979633], [98.909300565719604, 18.847954356647431], [98.909273743629456, 18.847959433425402]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.909477591514573, 18.847969586981336], [98.909461498260498, 18.847934049535564], [98.90942394733429, 18.847934049535564], [98.909407854080186, 18.847959433425402], [98.909327387809753, 18.847934049535564], [98.909332752227769, 18.847908665645726], [98.909381031990051, 18.847898512089795], [98.909381031990051, 18.847883281755895], [98.909338116645813, 18.847883281755895], [98.909343481063829, 18.847832513976222], [98.909375667572021, 18.847827437198251], [98.909386396408067, 18.847812206864351], [98.909434676170335, 18.847817283642318], [98.909434676170335, 18.847837590754189], [98.909466862678528, 18.84785282108809], [98.909493684768677, 18.847893435311828], [98.909488320350633, 18.847964510203369], [98.909477591514573, 18.847969586981336]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.908839225769029, 18.847862974644023], [98.908828496932983, 18.847847744310123], [98.908828496932983, 18.847817283642318], [98.908849954605103, 18.847822360420285], [98.908844590187059, 18.847842667532156], [98.908860683441162, 18.84785282108809], [98.908860683441162, 18.847862974644023], [98.908839225769029, 18.847862974644023]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.908667564392076, 18.847964510203369], [98.908630013465881, 18.847923895979633], [98.908635377883911, 18.847873128199957], [98.908678293228135, 18.847862974644023], [98.908694386482239, 18.847888358533861], [98.908726572990403, 18.847888358533861], [98.908742666244493, 18.847847744310123], [98.908737301826477, 18.847832513976222], [98.908710479736328, 18.847837590754189], [98.908683657646179, 18.847812206864351], [98.90880167484282, 18.847812206864351], [98.908807039260864, 18.847827437198251], [98.908790946006761, 18.84785282108809], [98.90880167484282, 18.847883281755895], [98.908839225769029, 18.847918819201666], [98.908833861351013, 18.847949279869468], [98.90880167484282, 18.847964510203369], [98.908753395080566, 18.847928972757597], [98.908737301826477, 18.847959433425402], [98.908667564392076, 18.847964510203369]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.90955805778502, 18.847923895979633], [98.909531235694871, 18.84786805142199], [98.909504413604722, 18.847862974644023], [98.909461498260498, 18.847822360420285], [98.909450769424438, 18.847786822974513], [98.909429311752305, 18.847776669418579], [98.909440040588379, 18.84774620875077], [98.909482955932603, 18.84774620875077], [98.909499049186721, 18.847766515862645], [98.909541964530945, 18.847776669418579], [98.909568786621094, 18.847771592640612], [98.909568786621094, 18.847812206864351], [98.909649252891526, 18.847812206864351], [98.909633159637437, 18.847832513976222], [98.909584879875169, 18.847817283642318], [98.909622430801392, 18.847878204977928], [98.909595608711243, 18.847918819201666], [98.90955805778502, 18.847923895979633]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.909316658973694, 18.847781746196546], [98.909279108047485, 18.847741131972803], [98.909289836883531, 18.847700517749065], [98.909316658973694, 18.847700517749065], [98.909322023391724, 18.84772590163891], [98.909364938735948, 18.847736055194837], [98.909359574317932, 18.847761439084675], [98.909316658973694, 18.847781746196546]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.90906453132628, 18.847563444743948], [98.909059166908264, 18.84754313763208], [98.909096717834473, 18.847522830520209], [98.909096717834473, 18.847553291188014], [98.90906453132628, 18.847563444743948]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.909434676170335, 18.847649749969396], [98.909407854080186, 18.847639596413462], [98.909386396408067, 18.847578675077852], [98.909322023391724, 18.847598982189723], [98.909252285957336, 18.847553291188014], [98.909246921539307, 18.847598982189723], [98.909182548522949, 18.847609135745657], [98.909112811088548, 18.84754313763208], [98.909134268760667, 18.847538060854113], [98.909123539924622, 18.847532984076143], [98.909128904342651, 18.847517753742242], [98.909332752227769, 18.847507600186308], [98.909348845481873, 18.847532984076143], [98.90940248966217, 18.847563444743948], [98.909407854080186, 18.847517753742242], [98.909493684768677, 18.847517753742242], [98.909509778022752, 18.847558367965981], [98.909509778022752, 18.847624366079557], [98.909466862678528, 18.847649749969396], [98.909434676170335, 18.847649749969396]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.893373608589172, 18.846471936852044], [98.89333605766295, 18.846461783138878], [98.893330693244934, 18.846441475712545], [98.893282413482652, 18.846441475712545], [98.893277049064636, 18.846421168286213], [98.893212676048265, 18.846441475712545], [98.893191218376145, 18.846426245142791], [98.89318585395813, 18.846400860859877], [98.893228769302368, 18.846345015437461], [98.893277049064636, 18.846355169150627], [98.893303871154799, 18.846334861724294], [98.893319964408875, 18.846339938580883], [98.893319964408875, 18.846355169150627], [98.893346786499023, 18.846360246007215], [98.893384337425246, 18.846350092294049], [98.893405795097365, 18.846324708011132], [98.89342725276947, 18.846329784867716], [98.893432617187486, 18.846400860859877], [98.893405795097365, 18.846400860859877], [98.893389701843248, 18.846431321999376], [98.893416523933396, 18.846466859995459], [98.893373608589172, 18.846471936852044]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.893319964408875, 18.846324708011132], [98.893293142318711, 18.846299323728218], [98.893325328826919, 18.8462739394453], [98.893389701843248, 18.846279016301885], [98.893405795097365, 18.846304400584799], [98.893395066261292, 18.846324708011132], [98.893319964408875, 18.846324708011132]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.893357515335069, 18.845329644120831], [98.893314599990831, 18.84526872184184], [98.893271684646592, 18.845243337558919], [98.893271684646592, 18.845223030132587], [98.893255591392517, 18.845212876419421], [98.893341422080979, 18.845212876419421], [98.893357515335069, 18.845238260702338], [98.893400430679321, 18.845238260702338], [98.89342188835144, 18.845299182981332], [98.893400430679321, 18.845329644120831], [98.893357515335069, 18.845329644120831]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.893250226974487, 18.845182415279922], [98.893223404884338, 18.845167184710171], [98.893223404884338, 18.845136723570672], [98.89318585395813, 18.845136723570672], [98.893191218376145, 18.84510626243117], [98.893239498138414, 18.845101185574592], [98.893277049064636, 18.845136723570672], [98.893287777900682, 18.845172261566752], [98.893250226974487, 18.845182415279922]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.893277049064636, 18.84506057072193], [98.893271684646592, 18.845045340152176], [98.893218040466294, 18.845035186439009], [98.893212676048265, 18.845004725299511], [98.89318585395813, 18.844989494729763], [98.893191218376145, 18.844943803020509], [98.893250226974487, 18.844943803020509], [98.893239498138414, 18.844974264160012], [98.893271684646592, 18.844964110446842], [98.893271684646592, 18.845025032725843], [98.893287777900682, 18.845025032725843], [98.893293142318711, 18.844989494729763], [98.893282413482652, 18.844974264160012], [98.893303871154799, 18.844959033590264], [98.893298506736755, 18.844918418737596], [98.893325328826919, 18.844918418737596], [98.893325328826919, 18.844933649307343], [98.893341422080979, 18.844938726163928], [98.89333605766295, 18.844882880741512], [98.893346786499023, 18.844862573315183], [98.893362879753099, 18.844847342745428], [98.893411159515367, 18.844862573315183], [98.893432617187486, 18.844887957598093], [98.89342725276947, 18.844908265024429], [98.893346786499023, 18.844943803020509], [98.893352150917053, 18.844979341016597], [98.89333605766295, 18.844979341016597], [98.893341422080979, 18.844994571586344], [98.893368244171128, 18.844989494729763], [98.893368244171128, 18.845014879012677], [98.893314599990831, 18.845009802156095], [98.893309235572815, 18.845045340152176], [98.893277049064636, 18.84506057072193]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.893212676048265, 18.844786420466434], [98.89318585395813, 18.844755959326935], [98.89318585395813, 18.844725498187433], [98.893244862556458, 18.844700113904519], [98.893271684646592, 18.844725498187433], [98.893271684646592, 18.844781343609853], [98.893212676048265, 18.844786420466434]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.893196582794175, 18.8426947366886], [98.8931804895401, 18.842669352012649], [98.893212676048265, 18.842633813466321], [98.89317512512207, 18.842633813466321], [98.893142938613892, 18.842613505725563], [98.893260955810533, 18.842613505725563], [98.893244862556458, 18.842633813466321], [98.893255591392517, 18.842684582818222], [98.893196582794175, 18.8426947366886]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.891973495483398, 18.842598274919993], [98.891952037811279, 18.842557659438476], [98.891952037811279, 18.842547505568099], [98.891989588737474, 18.842547505568099], [98.891989588737474, 18.842588121049619], [98.891973495483398, 18.842598274919993]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.891828656196594, 18.842613505725563], [98.891791105270372, 18.842577967179235], [98.891791105270372, 18.842542428632907], [98.891860842704759, 18.84251704395696], [98.891893029212937, 18.842532274762529], [98.89194667339325, 18.842532274762529], [98.89193594455719, 18.842547505568099], [98.891952037811279, 18.842613505725563], [98.891828656196594, 18.842613505725563]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.892526030540452, 18.842273351067849], [98.892504572868333, 18.842253043327091], [98.892515301704407, 18.842217504780763], [98.892542123794556, 18.842242889456717], [98.892542123794556, 18.842263197197475], [98.892526030540452, 18.842273351067849]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.891399502754197, 18.84226827413266], [98.891286849975586, 18.842253043327091], [98.891281485557556, 18.842242889456717], [98.891302943229661, 18.842242889456717], [98.891286849975586, 18.842227658651147], [98.891308307647705, 18.842192120104816], [98.891345858573899, 18.842176889299246], [98.891378045082078, 18.842222581715955], [98.891442418098435, 18.842217504780763], [98.891447782516465, 18.842253043327091], [98.891399502754197, 18.84226827413266]], [[98.891367316246019, 18.842242889456717], [98.891372680664062, 18.842227658651147], [98.891404867172241, 18.842232735586336], [98.891399502754197, 18.842242889456717], [98.891367316246019, 18.842242889456717]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.892268538475037, 18.842187043169627], [98.892241716384888, 18.842166735428869], [98.892230987548814, 18.842126119947348], [98.892295360565186, 18.842110889141782], [98.892311453819261, 18.842176889299246], [98.892268538475037, 18.842187043169627]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.892370462417603, 18.842171812364061], [98.892338275909424, 18.842151504623299], [98.89233291149138, 18.842110889141782], [98.892375826835618, 18.842055042854696], [98.89243483543396, 18.842044888984315], [98.892483115196214, 18.84212104301216], [98.892483115196214, 18.842151504623299], [98.89244019985199, 18.842171812364061], [98.892370462417603, 18.842171812364061]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.892842531204224, 18.842065196725073], [98.892799615859971, 18.842044888984315], [98.892794251441941, 18.842024581243557], [98.89281570911406, 18.84199919656761], [98.892885446548462, 18.841989042697229], [98.892912268638611, 18.842009350437987], [98.892917633056626, 18.842044888984315], [98.892906904220581, 18.842060119789885], [98.892842531204224, 18.842065196725073]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.892579674720764, 18.84198396576204], [98.892493844032288, 18.84196873495647], [98.892499208450332, 18.841902734799], [98.892542123794556, 18.841902734799], [98.892536759376526, 18.841851965447102], [98.892579674720764, 18.841846888511913], [98.892590403556824, 18.841902734799], [98.892622590065002, 18.841892580928626], [98.892660140991211, 18.841902734799], [98.892708420753479, 18.841892580928626], [98.892719149589524, 18.841877350123056], [98.892745971679673, 18.841882427058241], [98.892745971679673, 18.841912888669384], [98.892729878425584, 18.841933196410142], [98.892660140991211, 18.841928119474954], [98.892665505409241, 18.84196873495647], [98.892649412155137, 18.84198396576204], [98.892617225646973, 18.841973811891659], [98.892579674720764, 18.84198396576204]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.892708420753479, 18.841872273187871], [98.89268159866333, 18.841846888511913], [98.892633318901062, 18.841846888511913], [98.892633318901062, 18.841816426900774], [98.892665505409241, 18.841796119160016], [98.892724514007554, 18.841801196095211], [98.892740607261672, 18.841857042382298], [98.892708420753479, 18.841872273187871]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.891099095344529, 18.841704734326601], [98.891072273254395, 18.841679349650654], [98.89107763767241, 18.841648888039515], [98.891115188598633, 18.841648888039515], [98.891131281852722, 18.84166919578028], [98.891125917434678, 18.841694580456227], [98.891099095344529, 18.841704734326601]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.892343640327454, 18.841567657076482], [98.892338275909424, 18.841537195465342], [98.892365097999573, 18.841537195465342], [98.892370462417603, 18.841562580141293], [98.892343640327454, 18.841567657076482]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.892182707786546, 18.841542272400535], [98.892150521278381, 18.841516887724584], [98.892150521278381, 18.841491503048637], [98.892214894294739, 18.841481349178252], [98.892220258712769, 18.841537195465342], [98.892182707786546, 18.841542272400535]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.891066908836365, 18.841623503363568], [98.891029357910156, 18.841608272557998], [98.890986442565918, 18.841618426428379], [98.890948891639709, 18.841593041752429], [98.890954256057725, 18.841557503206101], [98.890981078147874, 18.841537195465342], [98.891023993492112, 18.841562580141293], [98.891029357910156, 18.841532118530154], [98.890975713729844, 18.841516887724584], [98.890975713729844, 18.841491503048637], [98.891013264656067, 18.841461041437498], [98.891029357910156, 18.841425502891166], [98.891072273254395, 18.841440733696739], [98.891099095344529, 18.841481349178252], [98.891104459762559, 18.841532118530154], [98.891147375106797, 18.841537195465342], [98.891158103942857, 18.841527041594965], [98.891152739524827, 18.841577810946863], [98.891163468360901, 18.841598118687621], [98.891125917434678, 18.841623503363568], [98.891066908836365, 18.841623503363568]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.891367316246019, 18.841501656919014], [98.891356587409973, 18.841476272243067], [98.891308307647705, 18.841445810631924], [98.891329765319824, 18.841395041280034], [98.891372680664062, 18.841395041280034], [98.891383409500122, 18.841410272085596], [98.891388773918152, 18.841491503048637], [98.891367316246019, 18.841501656919014]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.891201019287095, 18.841445810631924], [98.891147375106797, 18.841435656761551], [98.891136646270752, 18.841420425955981], [98.891158103942857, 18.841364579668895], [98.891179561614976, 18.841349348863325], [98.891211748123169, 18.841349348863325], [98.891243934631333, 18.841384887409653], [98.891238570213318, 18.841435656761551], [98.891201019287095, 18.841445810631924]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.891104459762559, 18.841313810316997], [98.891120553016663, 18.841257963165337], [98.891072273254395, 18.841191961986109], [98.891018629074097, 18.841191961986109], [98.890991806983948, 18.841222424068828], [98.890927433967605, 18.841217347055039], [98.890916705131531, 18.841237655110191], [98.890895247459412, 18.841242732123977], [98.890905976295457, 18.841379810474464], [98.890927433967605, 18.841405195150411], [98.890970349311829, 18.841410272085596], [98.891013264656067, 18.841395041280034], [98.891007900238037, 18.841329041122567], [98.891023993492112, 18.841344271928136], [98.891066908836365, 18.841344271928136], [98.891104459762559, 18.841313810316997]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.89194667339325, 18.841298579275634], [98.891930580139146, 18.8412731942067], [98.891930580139146, 18.841247809137766], [98.891957402229309, 18.841252886151555], [98.891957402229309, 18.841298579275634], [98.89194667339325, 18.841298579275634]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.89143705368042, 18.841191961986109], [98.891426324844346, 18.841146268862023], [98.891458511352539, 18.841141191848237], [98.891463875770569, 18.841181807958531], [98.89143705368042, 18.841191961986109]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.891619443893418, 18.841115806779303], [98.89158725738524, 18.841090421710366], [98.891522884368882, 18.841090421710366], [98.891469240188584, 18.841065036641432], [98.891469240188584, 18.840993958448411], [98.891528248786926, 18.840993958448411], [98.891555070877075, 18.841019343517349], [98.891619443893418, 18.84101426650356], [98.891667723655686, 18.841029497544923], [98.89167845249176, 18.841090421710366], [98.891619443893418, 18.841115806779303]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.891968131065354, 18.841181807958531], [98.891930580139146, 18.841146268862023], [98.891930580139146, 18.841110729765514], [98.891898393630981, 18.841105652751729], [98.891903758049011, 18.841044728586279], [98.891876935958862, 18.84101426650356], [98.891823291778564, 18.840993958448411], [98.891823291778564, 18.8409584193519], [98.891893029212937, 18.840907649214035], [98.891952037811279, 18.840922880255391], [98.891968131065354, 18.841019343517349], [98.892021775245667, 18.841029497544923], [98.892011046409593, 18.841085344696577], [98.892059326171861, 18.841080267682795], [98.892059326171861, 18.841151345875812], [98.892027139663696, 18.841176730944742], [98.891968131065354, 18.841181807958531]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.891994953155518, 18.840988881434626], [98.891989588737474, 18.840912726227817], [98.892059326171861, 18.840892418172672], [98.892059326171861, 18.840953342338114], [98.891994953155518, 18.840988881434626]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.89131903648375, 18.841044728586279], [98.891297578811631, 18.841024420531134], [98.891238570213318, 18.841034574558705], [98.891233205795274, 18.840988881434626], [98.891281485557556, 18.840988881434626], [98.891270756721511, 18.8409584193519], [98.891233205795274, 18.840968573379477], [98.891201019287095, 18.8409584193519], [98.891206383705139, 18.840907649214035], [98.891281485557556, 18.840887341158883], [98.891302943229661, 18.840856879076163], [98.891345858573899, 18.840861956089945], [98.891378045082078, 18.840902572200246], [98.891394138336167, 18.840988881434626], [98.891442418098435, 18.841009189489775], [98.891420960426316, 18.84101426650356], [98.891426324844346, 18.841039651572494], [98.89131903648375, 18.841044728586279]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.891426324844346, 18.8409584193519], [98.891388773918152, 18.840897495186461], [98.891383409500122, 18.840856879076163], [98.891404867172241, 18.840836571021015], [98.891447782516465, 18.840836571021015], [98.891463875770569, 18.840801031924507], [98.891485333442688, 18.8408416480348], [98.891469240188584, 18.840856879076163], [98.891463875770569, 18.840902572200246], [98.891474604606614, 18.840953342338114], [98.891426324844346, 18.8409584193519]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.891860842704759, 18.840856879076163], [98.891823291778564, 18.840821339979655], [98.891914486885071, 18.840775646855572], [98.89193594455719, 18.840795954910718], [98.89193594455719, 18.840821339979655], [98.89192521572113, 18.840826416993441], [98.891919851303086, 18.840806108938292], [98.891903758049011, 18.840801031924507], [98.891893029212937, 18.840851802062378], [98.891860842704759, 18.840856879076163]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.891667723655686, 18.840821339979655], [98.891630172729492, 18.840785800883143], [98.891635537147522, 18.840755338800424], [98.89167308807373, 18.840755338800424], [98.891689181327806, 18.840740107759057], [98.891705274581909, 18.840811185952081], [98.891667723655686, 18.840821339979655]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "MultiPolygon", "coordinates": [[[[98.89193594455719, 18.840684260607404], [98.89193594455719, 18.840663952552251], [98.891919851303086, 18.840663952552251], [98.89192521572113, 18.840684260607404], [98.89193594455719, 18.840684260607404]]], [[[98.89193594455719, 18.840684260607404], [98.891919851303086, 18.840719799703912], [98.89192521572113, 18.840729953731483], [98.891957402229309, 18.840719799703912], [98.891957402229309, 18.840699491648763], [98.89193594455719, 18.840684260607404]]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.891426324844346, 18.840572566304086], [98.891388773918152, 18.840552258248941], [98.891367316246019, 18.840506565124862], [98.891372680664062, 18.840450717973201], [98.891399502754197, 18.840450717973201], [98.891485333442688, 18.840506565124862], [98.891479969024658, 18.840562412276515], [98.891426324844346, 18.840572566304086]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.891764283180223, 18.840821339979655], [98.891748189926147, 18.840801031924507], [98.891732096672058, 18.840811185952081], [98.891721367835984, 18.840719799703912], [98.89169454574585, 18.840704568662549], [98.89168381690979, 18.840674106579829], [98.891640901565538, 18.840663952552251], [98.891630172729492, 18.840628413455747], [98.891614079475403, 18.840628413455747], [98.891603350639343, 18.840648721510892], [98.89157652854918, 18.840643644497106], [98.89158725738524, 18.840603028386813], [98.891560435295105, 18.840592874359238], [98.891544342041001, 18.840567489290297], [98.891555070877075, 18.840476103042132], [98.891667723655686, 18.840476103042132], [98.89168381690979, 18.840496411097284], [98.891705274581909, 18.840496411097284], [98.891699910163865, 18.840455794986987], [98.891748189926147, 18.840465949014565], [98.891748189926147, 18.84051164213864], [98.891726732254028, 18.84051164213864], [98.891721367835984, 18.840526873180007], [98.891742825508103, 18.840537027207578], [98.891748189926147, 18.840572566304086], [98.891775012016296, 18.840592874359238], [98.891775012016296, 18.840623336441958], [98.891732096672058, 18.840653798524677], [98.891791105270372, 18.840648721510892], [98.89183938503264, 18.840735030745272], [98.89181792736052, 18.840785800883143], [98.891823291778564, 18.840811185952081], [98.891764283180223, 18.840821339979655]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.89183938503264, 18.840577643317875], [98.891812562942491, 18.840562412276515], [98.891834020614638, 18.840531950193792], [98.891834020614638, 18.840506565124862], [98.891828656196594, 18.84048625706971], [98.891801834106445, 18.840476103042132], [98.891801834106445, 18.840455794986987], [98.89181792736052, 18.840465949014565], [98.891850113868713, 18.840455794986987], [98.891887664794908, 18.840496411097284], [98.891893029212937, 18.840552258248941], [98.891882300376892, 18.840572566304086], [98.89183938503264, 18.840577643317875]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.891469240188584, 18.840450717973201], [98.891453146934509, 18.84042533290426], [98.891469240188584, 18.84038471679397], [98.891544342041001, 18.840379639780181], [98.891555070877075, 18.84042533290426], [98.891533613204956, 18.840445640959413], [98.891469240188584, 18.840450717973201]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.891597986221299, 18.840455794986987], [98.89157652854918, 18.840410101862904], [98.891619443893418, 18.840394870821541], [98.891635537147522, 18.840359331725029], [98.891689181327806, 18.840349177697455], [98.891764283180223, 18.840379639780181], [98.891732096672058, 18.840435486931835], [98.891597986221299, 18.840455794986987]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.89119029045105, 18.840465949014565], [98.891136646270752, 18.840445640959413], [98.891136646270752, 18.84041517887669], [98.891168832778945, 18.840374562766396], [98.891163468360901, 18.840318715614735], [98.891206383705139, 18.840318715614735], [98.891238570213318, 18.840293330545801], [98.891265392303467, 18.840293330545801], [98.891281485557556, 18.840323792628524], [98.891329765319824, 18.840323792628524], [98.891361951828003, 18.840369485752607], [98.891361951828003, 18.840399947835326], [98.891345858573899, 18.84041517887669], [98.891254663467393, 18.840410101862904], [98.891238570213318, 18.840460872000776], [98.89119029045105, 18.840465949014565]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.891399502754197, 18.840389793807752], [98.891367316246019, 18.840333946656099], [98.891297578811631, 18.840303484573376], [98.891249299049377, 18.840227329366567], [98.891286849975586, 18.840247637421719], [98.891340494155884, 18.84021209832521], [98.891383409500122, 18.840252714435501], [98.89143705368042, 18.840262868463078], [98.891458511352539, 18.840364408738822], [98.891426324844346, 18.840389793807752], [98.891399502754197, 18.840389793807752]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.891485333442688, 18.840267945476864], [98.891453146934509, 18.840237483394144], [98.891474604606614, 18.84021209832521], [98.891501426696763, 18.84021209832521], [98.891512155532851, 18.840232406380355], [98.891544342041001, 18.840232406380355], [98.891533613204956, 18.840262868463078], [98.891485333442688, 18.840267945476864]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.891201019287095, 18.840293330545801], [98.891136646270752, 18.840262868463078], [98.891158103942857, 18.840181636242487], [98.891168832778945, 18.840186713256273], [98.891163468360901, 18.840232406380355], [98.891233205795274, 18.840242560407933], [98.891233205795274, 18.840283176518231], [98.891201019287095, 18.840293330545801]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.891217112541199, 18.840196867283847], [98.891211748123169, 18.840151174159764], [98.891233205795274, 18.84014102013219], [98.891249299049377, 18.840176559228695], [98.891217112541199, 18.840196867283847]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.891415596008301, 18.840242560407933], [98.891388773918152, 18.840232406380355], [98.891399502754197, 18.840191790270062], [98.891351222991943, 18.840191790270062], [98.891302943229661, 18.840151174159764], [98.891254663467393, 18.840135943118401], [98.891254663467393, 18.840105481035682], [98.891292214393616, 18.840069941939174], [98.891356587409973, 18.840075018952959], [98.891383409500122, 18.840090249994319], [98.891394138336167, 18.840125789090827], [98.891453146934509, 18.84014102013219], [98.89143705368042, 18.840161328187339], [98.891447782516465, 18.840227329366567], [98.89143705368042, 18.840242560407933], [98.891415596008301, 18.840242560407933]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.891158103942857, 18.840156251173553], [98.891061544418335, 18.840125789090827], [98.891050815582275, 18.84008517298053], [98.891066908836365, 18.840069941939174], [98.891142010688782, 18.840059787911596], [98.891168832778945, 18.840110558049467], [98.89119565486908, 18.840115635063256], [98.89119565486908, 18.840130866104612], [98.891174197196946, 18.840135943118401], [98.891179561614976, 18.840156251173553], [98.891158103942857, 18.840156251173553]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.891474604606614, 18.840130866104612], [98.891458511352539, 18.84008517298053], [98.891528248786926, 18.840090249994319], [98.891544342041001, 18.840064864925385], [98.891565799713121, 18.840064864925385], [98.891565799713121, 18.840100404021893], [98.891501426696763, 18.840100404021893], [98.891501426696763, 18.840125789090827], [98.891474604606614, 18.840130866104612]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.893411159515367, 18.853421953265894], [98.893395066261292, 18.853416876645184], [98.893395066261292, 18.853376263679522], [98.89342188835144, 18.853335650713856], [98.893432617187486, 18.853421953265894], [98.893411159515367, 18.853421953265894]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.893319964408875, 18.853071666437035], [98.893271684646592, 18.85305643657491], [98.893260955810533, 18.853020900229954], [98.893271684646592, 18.853010746988538], [98.893389701843248, 18.853010746988538], [98.893395066261292, 18.85305643657491], [98.893378973007202, 18.853071666437035], [98.893319964408875, 18.853071666437035]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.890600204467773, 18.841313810316997], [98.890605568885817, 18.841293502261852], [98.8905894756317, 18.841263040179122], [98.890535831451402, 18.8412731942067], [98.890525102615371, 18.841308733303208], [98.890503644943237, 18.841308733303208], [98.890487551689148, 18.8412731942067], [98.890450000762939, 18.8412731942067], [98.890439271926866, 18.841278271220489], [98.890439271926866, 18.841313810316997], [98.890412449836717, 18.841288425248063], [98.890374898910522, 18.841283348234274], [98.890369534492478, 18.841303656289419], [98.890321254730225, 18.841313810316997], [98.890321254730225, 18.841339194992941], [98.8903373479843, 18.841369656604083], [98.890374898910522, 18.841374733539269], [98.890380263328552, 18.841389964344838], [98.890439271926866, 18.841334118057752], [98.890492916107164, 18.841364579668895], [98.890503644943237, 18.841384887409653], [98.890530467033386, 18.841389964344838], [98.890551924705505, 18.841339194992941], [98.890600204467773, 18.841313810316997]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.889849185943589, 18.841146268862023], [98.889833092689514, 18.841115806779303], [98.889870643615708, 18.84110057573794], [98.889876008033738, 18.841136114834448], [98.889849185943589, 18.841146268862023]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.889597058296189, 18.841080267682795], [98.88958632946013, 18.841044728586279], [98.889618515968337, 18.841039651572494], [98.889618515968337, 18.841080267682795], [98.889597058296189, 18.841080267682795]], [[98.889597058296189, 18.841059959627646], [98.889602422714219, 18.841059959627646], [98.889602422714219, 18.841054882613857], [98.889597058296189, 18.841054882613857], [98.889597058296189, 18.841059959627646]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.889216184616089, 18.84092795726918], [98.889205455780015, 18.840912726227817], [98.889151811599731, 18.840897495186461], [98.889151811599731, 18.840877187131309], [98.889124989509583, 18.840851802062378], [98.889130353927598, 18.840821339979655], [98.889205455780015, 18.840831494007226], [98.889232277870164, 18.840877187131309], [98.889232277870164, 18.84092795726918], [98.889216184616089, 18.84092795726918]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.889865279197693, 18.840882264145097], [98.889833092689514, 18.840867033103738], [98.889822363853455, 18.840836571021015], [98.889865279197693, 18.840816262965863], [98.889892101287828, 18.840821339979655], [98.889918923377977, 18.840856879076163], [98.889897465705857, 18.840877187131309], [98.889865279197693, 18.840882264145097]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.88944149017334, 18.840887341158883], [98.889414668083191, 18.840846725048589], [98.889430761337266, 18.840831494007226], [98.88944685459137, 18.840836571021015], [98.889457583427429, 18.840867033103738], [98.88944149017334, 18.840887341158883]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.889961838722229, 18.840846725048589], [98.889940381050124, 18.8408416480348], [98.889924287796006, 18.840816262965863], [98.88993501663208, 18.840775646855572], [98.889956474304199, 18.840775646855572], [98.890004754066453, 18.840821339979655], [98.889994025230394, 18.840846725048589], [98.889961838722229, 18.840846725048589]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.889275193214431, 18.84087211011752], [98.889205455780015, 18.840816262965863], [98.889151811599731, 18.840795954910718], [98.889146447181702, 18.840740107759057], [98.889157176017761, 18.840729953731483], [98.889216184616089, 18.840719799703912], [98.889269828796387, 18.840735030745272], [98.889307379722581, 18.8408416480348], [98.88929665088655, 18.840867033103738], [98.889275193214431, 18.84087211011752]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.889741897583008, 18.840826416993441], [98.889720439910889, 18.840780723869354], [98.889720439910889, 18.840760415814209], [98.889736533164978, 18.840750261786635], [98.889779448509216, 18.840785800883143], [98.889779448509216, 18.840806108938292], [98.889741897583008, 18.840826416993441]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.889618515968337, 18.840785800883143], [98.889591693878174, 18.840780723869354], [98.889559507369995, 18.840740107759057], [98.889564871788025, 18.840714722690127], [98.889602422714219, 18.840694414634974], [98.889645338058472, 18.840704568662549], [98.889677524566636, 18.840735030745272], [98.889666795730591, 18.840780723869354], [98.889618515968337, 18.840785800883143]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.889382481574998, 18.840775646855572], [98.88933956623076, 18.840755338800424], [98.889302015304565, 18.840765492827998], [98.889291286468506, 18.840704568662549], [98.889312744140611, 18.840679183593618], [98.889355659484863, 18.840674106579829], [98.889409303665147, 18.840709645676338], [98.889409303665147, 18.840755338800424], [98.889382481574998, 18.840775646855572]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.889977931976318, 18.840699491648763], [98.889870643615708, 18.840643644497106], [98.889838457107544, 18.840608105400594], [98.889816999435411, 18.840608105400594], [98.889811635017395, 18.840577643317875], [98.889870643615708, 18.840547181235156], [98.889902830123901, 18.840572566304086], [98.890015482902513, 18.840608105400594], [98.890015482902513, 18.840663952552251], [98.890004754066453, 18.840689337621196], [98.889977931976318, 18.840699491648763]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.889704346656785, 18.840714722690127], [98.889645338058472, 18.840679183593618], [98.889656066894517, 18.840592874359238], [98.889591693878174, 18.840587797345449], [98.889570236206055, 18.840567489290297], [98.88957560062407, 18.840526873180007], [98.889559507369995, 18.840516719152433], [98.88958632946013, 18.840516719152433], [98.88958632946013, 18.840491334083495], [98.889570236206055, 18.840476103042132], [98.889564871788025, 18.840435486931835], [98.88958632946013, 18.840399947835326], [98.889629244804368, 18.840394870821541], [98.889656066894517, 18.840440563945624], [98.88969361782074, 18.840455794986987], [98.889715075492859, 18.840531950193792], [98.889763355255127, 18.840516719152433], [98.889784812927246, 18.840542104221367], [98.889790177345276, 18.840628413455747], [98.889779448509216, 18.840643644497106], [98.889736533164978, 18.840638567483321], [98.889763355255127, 18.840669029566044], [98.889757990837097, 18.840694414634974], [98.889736533164978, 18.840714722690127], [98.889704346656785, 18.840714722690127]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.889956474304199, 18.840526873180007], [98.889838457107544, 18.840440563945624], [98.889876008033738, 18.840379639780181], [98.889902830123901, 18.840379639780181], [98.889902830123901, 18.840394870821541], [98.889951109886155, 18.840374562766396], [98.889972567558274, 18.840379639780181], [98.889994025230394, 18.840465949014565], [98.889972567558274, 18.840521796166215], [98.889956474304199, 18.840526873180007]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.890256881713867, 18.839034231126615], [98.890240788459764, 18.839024077099037], [98.890256881713867, 18.838968229947383], [98.890289068222032, 18.838968229947383], [98.890294432640061, 18.838993615016321], [98.890310525894165, 18.838998692030103], [98.890310525894165, 18.839024077099037], [98.890256881713867, 18.839034231126615]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.890342712402344, 18.839008846057681], [98.890321254730225, 18.838998692030103], [98.890310525894165, 18.838958075919805], [98.8903373479843, 18.838942844878446], [98.890385627746582, 18.838958075919805], [98.890385627746582, 18.838998692030103], [98.890342712402344, 18.839008846057681]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.889248371124268, 18.838958075919805], [98.889248371124268, 18.838947921892235], [98.889216184616089, 18.838942844878446], [98.889205455780015, 18.838876843699214], [98.889221549034119, 18.838856535644069], [98.889280557632432, 18.838861612657855], [98.889318108558655, 18.838886997726792], [98.889312744140611, 18.838942844878446], [98.889264464378343, 18.838942844878446], [98.889248371124268, 18.838958075919805]], [[98.889264464378343, 18.838927613837086], [98.889253735542283, 18.838912382795723], [98.889275193214431, 18.838902228768152], [98.889285922050462, 18.838927613837086], [98.889264464378343, 18.838927613837086]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.88982772827147, 18.839013923071469], [98.889800906181335, 18.839003769043895], [98.889816999435411, 18.838983460988747], [98.889774084091172, 18.838968229947383], [98.889768719673157, 18.838947921892235], [98.889741897583008, 18.838932690850871], [98.889747262001023, 18.838902228768152], [98.889774084091172, 18.838892074740574], [98.889790177345276, 18.838836227588921], [98.889806270599351, 18.838836227588921], [98.889859914779677, 18.838892074740574], [98.889843821525574, 18.838963152933594], [98.889876008033738, 18.838978383974954], [98.889876008033738, 18.838998692030103], [98.88982772827147, 18.839013923071469]], [[98.889833092689514, 18.838988538002532], [98.889849185943589, 18.838988538002532], [98.889849185943589, 18.838983460988747], [98.889833092689514, 18.838983460988747], [98.889833092689514, 18.838988538002532]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.889602422714219, 18.838897151754363], [98.88958632946013, 18.838886997726792], [98.889591693878174, 18.838836227588921], [98.889650702476487, 18.838856535644069], [98.889656066894517, 18.838871766685429], [98.889639973640442, 18.838892074740574], [98.889602422714219, 18.838897151754363]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.889709711074829, 18.838881920713003], [98.889731168746934, 18.83885145863028], [98.889747262001023, 18.838846381616495], [98.889741897583008, 18.838881920713003], [98.889709711074829, 18.838881920713003]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.889098167419434, 18.838876843699214], [98.889082074165344, 18.838861612657855], [98.88908743858336, 18.838815919533772], [98.889151811599731, 18.838831150575132], [98.889130353927598, 18.838876843699214], [98.889098167419434, 18.838876843699214]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.889661431312561, 18.838866689671644], [98.889661431312561, 18.838831150575132], [98.88969898223877, 18.838831150575132], [98.88969898223877, 18.838866689671644], [98.889661431312561, 18.838866689671644]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.889806270599351, 18.838790534464838], [98.889795541763291, 18.838780380437264], [98.889795541763291, 18.838739764326963], [98.88982772827147, 18.838749918354541], [98.88982772827147, 18.838785457451053], [98.889806270599351, 18.838790534464838]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.890267610549913, 18.838871766685429], [98.890251517295837, 18.838815919533772], [98.890219330787644, 18.838820996547561], [98.890208601951599, 18.83885145863028], [98.890154957771301, 18.838861612657855], [98.890144228935242, 18.838805765506198], [98.890192508697496, 18.838775303423478], [98.890230059623718, 18.838719456271814], [98.890326619148254, 18.838724533285603], [98.890342712402344, 18.838775303423478], [98.890385627746582, 18.838810842519983], [98.890374898910522, 18.838861612657855], [98.890267610549913, 18.838871766685429]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.890015482902513, 18.838714379258032], [98.889988660812378, 18.838694070888533], [98.889983296394348, 18.838653454149526], [98.889956474304199, 18.83862299159528], [98.889876008033738, 18.838628068687655], [98.889876008033738, 18.838714379258032], [98.889945745468125, 18.838724533285603], [98.889940381050124, 18.838744841340755], [98.889972567558274, 18.838760072382115], [98.890015482902513, 18.838744841340755], [98.890015482902513, 18.838714379258032]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.890165686607347, 18.838714379258032], [98.890165686607347, 18.838673762519036], [98.890149593353257, 18.838653454149526], [98.89017641544342, 18.838638222872405], [98.890181779861464, 18.838597606133401], [98.890224695205688, 18.83860268322578], [98.890256881713867, 18.838628068687655], [98.890305161476135, 18.838628068687655], [98.8903373479843, 18.83860268322578], [98.8903373479843, 18.838572220671526], [98.890278339385986, 18.838556989394398], [98.890267610549913, 18.838531603932527], [98.890208601951599, 18.838521449747777], [98.890181779861464, 18.838526526840152], [98.89017641544342, 18.838562066486777], [98.890149593353257, 18.838526526840152], [98.89009058475493, 18.838546835209648], [98.890122771263123, 18.838516372655402], [98.890106678009033, 18.838490987193527], [98.890031576156616, 18.838496064285902], [98.890010118484497, 18.838531603932527], [98.889977931976318, 18.838541758117277], [98.889977931976318, 18.83858237485628], [98.890015482902513, 18.838607760318151], [98.890015482902513, 18.838658531241904], [98.890031576156616, 18.838668685426654], [98.890036940574646, 18.838653454149526], [98.890047669410691, 18.838658531241904], [98.890085220336914, 18.838744841340755], [98.890106678009033, 18.838744841340755], [98.890112042427063, 18.838729610299392], [98.890149593353257, 18.838739764326963], [98.890165686607347, 18.838714379258032]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.890294432640061, 18.838536681024898], [98.890251517295837, 18.838506218470652], [98.890267610549913, 18.838475755916399], [98.8903373479843, 18.838475755916399], [98.890364170074463, 18.838496064285902], [98.890364170074463, 18.838516372655402], [98.890342712402344, 18.838536681024898], [98.890294432640061, 18.838536681024898]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.889677524566636, 18.838353905699396], [98.889618515968337, 18.838313288960396], [98.889629244804368, 18.838282826406139], [98.889682888984666, 18.838277749313768], [98.889704346656785, 18.838292980590893], [98.889704346656785, 18.838348828607018], [98.889677524566636, 18.838353905699396]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.889918923377977, 18.838298057683268], [98.889859914779677, 18.83827267222139], [98.889849185943589, 18.838247286759522], [98.889876008033738, 18.838221901297644], [98.889929652214036, 18.838206670020515], [98.889977931976318, 18.838247286759522], [98.889983296394348, 18.838282826406139], [98.889918923377977, 18.838298057683268]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.889205455780015, 18.838196515835769], [98.889189362525926, 18.838166053281512], [98.889237642288208, 18.838145744912016], [98.889232277870164, 18.83819143874339], [98.889205455780015, 18.838196515835769]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.889489769935608, 18.83820159292814], [98.88943612575531, 18.838150822004391], [98.88943612575531, 18.838120359450137], [98.889479041099548, 18.838100051080634], [98.889495134353638, 18.838125436542512], [98.889538049697876, 18.838135590727266], [98.889538049697876, 18.838166053281512], [98.889489769935608, 18.83820159292814]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.889543414115906, 18.838064511434009], [98.889516592025757, 18.838049280156888], [98.889532685279832, 18.838013740510256], [98.889559507369995, 18.838013740510256], [98.889570236206055, 18.838044203064509], [98.889607787132249, 18.838039125972134], [98.889602422714219, 18.838064511434009], [98.889543414115906, 18.838064511434009]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.889355659484863, 18.838074665618759], [98.88933420181273, 18.838064511434009], [98.889318108558655, 18.838003586325506], [98.889285922050462, 18.83797312377126], [98.889307379722581, 18.837937584124631], [98.889318108558655, 18.837957892494135], [98.889350295066833, 18.837957892494135], [98.889403939247117, 18.837988355048385], [98.889403939247117, 18.838059434341638], [98.889355659484863, 18.838074665618759]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.890042304992676, 18.838358982791771], [98.890010118484497, 18.838303134775646], [98.890015482902513, 18.838277749313768], [98.889983296394348, 18.838206670020515], [98.890020847320557, 18.83819143874339], [98.890112042427063, 18.83820159292814], [98.890112042427063, 18.838186361651012], [98.890026211738572, 18.838155899096765], [98.890026211738572, 18.838125436542512], [98.889977931976318, 18.838135590727266], [98.889972567558274, 18.83818128455864], [98.889859914779677, 18.83818128455864], [98.889849185943589, 18.83820159292814], [98.889822363853455, 18.838206670020515], [98.889800906181335, 18.838176207466262], [98.889806270599351, 18.838150822004391], [98.889833092689514, 18.838125436542512], [98.889822363853455, 18.838100051080634], [98.889876008033738, 18.838105128173012], [98.889913558959961, 18.838079742711137], [98.889951109886155, 18.838084819803509], [98.889945745468125, 18.838049280156888], [98.889913558959961, 18.838023894695006], [98.889897465705857, 18.838023894695006], [98.889876008033738, 18.838049280156888], [98.889854550361619, 18.838049280156888], [98.889843821525574, 18.838023894695006], [98.889859914779677, 18.837968046678885], [98.889892101287828, 18.83795281540176], [98.889913558959961, 18.837902044478003], [98.889983296394348, 18.837902044478003], [98.890010118484497, 18.837866504831378], [98.890042304992676, 18.837871581923757], [98.890058398246765, 18.837891890293253], [98.890058398246765, 18.837947738309381], [98.890165686607347, 18.838023894695006], [98.89018714427948, 18.838084819803509], [98.890160322189331, 18.838150822004391], [98.890165686607347, 18.838226978390015], [98.89018714427948, 18.83827267222139], [98.890224695205688, 18.838287903498518], [98.890224695205688, 18.838318366052771], [98.89017641544342, 18.838318366052771], [98.890160322189331, 18.838353905699396], [98.89007449150084, 18.838343751514646], [98.890063762664795, 18.838358982791771], [98.890042304992676, 18.838358982791771]], [[98.889977931976318, 18.838049280156888], [98.889983296394348, 18.838039125972134], [98.889994025230394, 18.838044203064509], [98.889994025230394, 18.838049280156888], [98.889977931976318, 18.838049280156888]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.889779448509216, 18.837709114967751], [98.889747262001023, 18.837683729505873], [98.889763355255127, 18.83764311276687], [98.889806270599351, 18.837648189859248], [98.889833092689514, 18.837678652413494], [98.889822363853455, 18.837709114967751], [98.889779448509216, 18.837709114967751]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.890272974967942, 18.837688806598251], [98.890262246131911, 18.837668498228748], [98.890213966369615, 18.83764311276687], [98.890235424041748, 18.83759234184312], [98.890235424041748, 18.837607573120248], [98.890251517295837, 18.837612650212623], [98.890240788459764, 18.83758218765837], [98.890251517295837, 18.837566956381245], [98.890267610549913, 18.83757203347362], [98.890272974967942, 18.837607573120248], [98.890315890312181, 18.837648189859248], [98.890305161476135, 18.837683729505873], [98.890272974967942, 18.837688806598251]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.889913558959961, 18.837876659016132], [98.889902830123901, 18.83785127355425], [98.889865279197693, 18.837825888092379], [98.889876008033738, 18.837780194261004], [98.88982772827147, 18.837759885891501], [98.88982772827147, 18.837724346244876], [98.889843821525574, 18.837698960783001], [98.88982772827147, 18.837617727304998], [98.889768719673157, 18.837602496027877], [98.889741897583008, 18.83758218765837], [98.889736533164978, 18.837556802196495], [98.889768719673157, 18.837541570919367], [98.889806270599351, 18.837566956381245], [98.88982772827147, 18.837541570919367], [98.889859914779677, 18.837541570919367], [98.889908194541931, 18.83757203347362], [98.889908194541931, 18.837541570919367], [98.889886736869812, 18.837521262549867], [98.889908194541931, 18.837490799995614], [98.889945745468125, 18.837506031272746], [98.889951109886155, 18.837531416734617], [98.889977931976318, 18.837500954180371], [98.890004754066453, 18.837500954180371], [98.890036940574646, 18.837526339642245], [98.89007449150084, 18.837516185457496], [98.89009058475493, 18.837587264750745], [98.890063762664795, 18.837587264750745], [98.890058398246765, 18.837648189859248], [98.890085220336914, 18.837693883690623], [98.890106678009033, 18.837698960783001], [98.890117406845079, 18.837668498228748], [98.890138864517198, 18.837688806598251], [98.890138864517198, 18.837709114967751], [98.890112042427063, 18.837739577521997], [98.890010118484497, 18.837719269152501], [98.889977931976318, 18.837668498228748], [98.890026211738572, 18.837617727304998], [98.889956474304199, 18.837551725104124], [98.889967203140259, 18.837602496027877], [98.88993501663208, 18.837627881489748], [98.88993501663208, 18.83764311276687], [98.889902830123901, 18.837653266951619], [98.889902830123901, 18.837688806598251], [98.889961838722229, 18.837739577521997], [98.890010118484497, 18.837749731706751], [98.890020847320557, 18.837785271353379], [98.889988660812378, 18.837825888092379], [98.889983296394348, 18.837856350646629], [98.889913558959961, 18.837876659016132]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.888599276542649, 18.837211559914984], [98.888610005378723, 18.837191251545484], [98.888593912124634, 18.837186174453105], [98.888593912124634, 18.83717094317598], [98.888626098632798, 18.83716078899123], [98.888626098632798, 18.837206482822609], [98.888599276542649, 18.837211559914984]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.888390064239516, 18.837054170051353], [98.888373970985398, 18.837038938774228], [98.888368606567397, 18.836983090758103], [98.888416886329651, 18.836972936573353], [98.888443708419786, 18.836993244942853], [98.888443708419786, 18.837038938774228], [98.888390064239516, 18.837054170051353]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.888239860534668, 18.837054170051353], [98.888213038444519, 18.837013553312353], [98.888207674026489, 18.8369627823886], [98.888277411460862, 18.83695262820385], [98.88828814029695, 18.837013553312353], [98.888255953788743, 18.837054170051353], [98.888239860534668, 18.837054170051353]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.888422250747666, 18.836901857280097], [98.888379335403428, 18.836866317633472], [98.888390064239516, 18.836785084155466], [98.888475894927964, 18.836764775785966], [98.888497352600083, 18.836866317633472], [98.888459801673889, 18.836896780187725], [98.888422250747666, 18.836901857280097]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.888111114501939, 18.836998322035225], [98.888062834739685, 18.836978013665725], [98.88804674148561, 18.836927242741972], [98.888132572174058, 18.8369221656496], [98.888148665428162, 18.83693231983435], [98.888148665428162, 18.836927242741972], [98.888111114501939, 18.836906934372475], [98.88807892799376, 18.836866317633472], [98.888073563575745, 18.836835855079219], [98.88804674148561, 18.836830777986847], [98.888036012649522, 18.836790161247844], [98.888089656829834, 18.836780007063094], [98.888111114501939, 18.836835855079219], [98.888137936592102, 18.836759698693594], [98.888132572174058, 18.83670385067747], [98.888180851936326, 18.836708927769841], [98.888229131698608, 18.836693696492716], [98.888298869132981, 18.836739390324091], [98.888320326805101, 18.836653079753713], [98.888298869132981, 18.836632771384217], [98.888293504714966, 18.836576923368085], [98.888304233551011, 18.836566769183335], [98.888368606567397, 18.836571846275714], [98.888368606567397, 18.83660230882996], [98.888411521911621, 18.83660230882996], [98.888427615165696, 18.836642925568967], [98.888459801673889, 18.836658156846092], [98.888475894927964, 18.83673431323172], [98.88843834400177, 18.836754621601219], [98.888406157493591, 18.836754621601219], [98.888373970985398, 18.83672415904697], [98.888363242149353, 18.836764775785966], [98.888314962387085, 18.836769852878344], [98.888352513313279, 18.836820623802097], [98.888363242149353, 18.836866317633472], [98.888293504714966, 18.836876471818222], [98.888282775878906, 18.836891703095347], [98.888239860534668, 18.836886626002975], [98.888234496116624, 18.836901857280097], [98.888164758682251, 18.836896780187725], [98.888159394264207, 18.836937396926722], [98.888143301010132, 18.8369424740191], [98.888148665428162, 18.836978013665725], [98.888111114501939, 18.836998322035225]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.888813853263855, 18.836587077552835], [98.888797760009751, 18.836541383721464], [98.888824582099915, 18.83653122953671], [98.888824582099915, 18.836587077552835], [98.888813853263855, 18.836587077552835]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.888803124427795, 18.836526152444339], [98.888797760009751, 18.836485535705336], [98.888856768608093, 18.836490612797711], [98.888856768608093, 18.836515998259582], [98.888803124427795, 18.836526152444339]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.888749480247498, 18.836439841873961], [98.888738751411424, 18.836424610596829], [98.888749480247498, 18.836373839673083], [98.888776302337632, 18.836358608395955], [98.888797760009751, 18.836363685488333], [98.888808488845825, 18.836378916765458], [98.888803124427795, 18.836414456412079], [98.888749480247498, 18.836439841873961]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.88892650604248, 18.83653122953671], [98.888910412788377, 18.836515998259582], [98.888883590698242, 18.836526152444339], [98.888872861862183, 18.836510921167211], [98.888883590698242, 18.836470304428211], [98.888829946517944, 18.836439841873961], [98.888851404190063, 18.836368762580705], [98.888888955116258, 18.836353531303583], [98.888915777206421, 18.83631291456458], [98.888953328132644, 18.836297683287455], [98.889023065567017, 18.836358608395955], [98.889023065567017, 18.836389070950208], [98.888969421386705, 18.836404302227329], [98.888969421386705, 18.836470304428211], [98.88892650604248, 18.83653122953671]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.888642191886888, 18.836409379319708], [98.888626098632798, 18.836389070950208], [98.888642191886888, 18.83631291456458], [98.888722658157334, 18.836338300026455], [98.88867974281311, 18.836378916765458], [98.888669013977037, 18.836409379319708], [98.888642191886888, 18.836409379319708]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.888792395591736, 18.836323068749333], [98.888754844665527, 18.836282452010327], [98.888711929321303, 18.836277374917955], [98.888722658157334, 18.836246912363702], [98.888754844665527, 18.836236758178952], [98.888819217681871, 18.836246912363702], [98.888819217681871, 18.83631291456458], [98.888792395591736, 18.836323068749333]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.888964056968675, 18.836277374917955], [98.8889479637146, 18.83625198945608], [98.888921141624436, 18.836246912363702], [98.888905048370361, 18.836221526901827], [98.888915777206421, 18.836201218532327], [98.888990879058824, 18.836206295624699], [98.888996243476868, 18.83627229782558], [98.888964056968675, 18.836277374917955]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.901597261428819, 18.84648209056521], [98.9015758037567, 18.846446552569127], [98.901581168174744, 18.846416091429628], [98.901607990264893, 18.846405937716458], [98.901602625846863, 18.846426245142791], [98.901629447937012, 18.846441475712545], [98.901634812355042, 18.846426245142791], [98.901613354682922, 18.846405937716458], [98.901650905609117, 18.846405937716458], [98.901645541191101, 18.846461783138878], [98.901629447937012, 18.846466859995459], [98.901634812355042, 18.846446552569127], [98.901618719100938, 18.846446552569127], [98.901624083518982, 18.846477013708625], [98.901597261428819, 18.84648209056521]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.900974988937364, 18.844334580230534], [98.900964260101304, 18.844319349660783], [98.900974988937364, 18.844299042234454], [98.900942802429199, 18.844293965377865], [98.90092134475708, 18.84426350423837], [98.900932073593125, 18.844238119955456], [98.900969624519348, 18.844233043098871], [98.900985717773423, 18.844258427381785], [98.900996446609497, 18.844334580230534], [98.900974988937364, 18.844334580230534]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.901109099388108, 18.844101044827706], [98.90107691287993, 18.844080737401374], [98.901093006134033, 18.843979200269715], [98.901119828224196, 18.843953815986797], [98.901141285896301, 18.843963969699963], [98.901178836822496, 18.843948739130216], [98.901205658912644, 18.843953815986797], [98.901211023330688, 18.84397412341313], [98.901248574256883, 18.843999507696047], [98.901248574256883, 18.84401981512238], [98.901173472404466, 18.844060429975041], [98.901141285896301, 18.84405535311846], [98.901141285896301, 18.844090891114543], [98.901109099388108, 18.844101044827706]], [[98.901130557060227, 18.84404519940529], [98.901135921478271, 18.84404519940529], [98.901135921478271, 18.844040122548712], [98.901130557060227, 18.844040122548712], [98.901130557060227, 18.84404519940529]], [[98.901130557060227, 18.844035045692124], [98.901130557060227, 18.844024891978961], [98.901135921478271, 18.844024891978961], [98.901135921478271, 18.844035045692124], [98.901130557060227, 18.844035045692124]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.901425600051866, 18.843913201134132], [98.90141487121582, 18.843897970328559], [98.901420235633836, 18.843862431782231], [98.901366591453552, 18.843816739365529], [98.901366591453552, 18.843781200819201], [98.90132904052733, 18.843786277754386], [98.901280760765076, 18.843765970013632], [98.901253938674913, 18.843781200819201], [98.901253938674913, 18.843796431624767], [98.901200294494629, 18.843821816300714], [98.901205658912644, 18.843842124041473], [98.901232481002793, 18.843852277911857], [98.901216387748718, 18.843913201134132], [98.901275396347032, 18.84393858541705], [98.901280760765076, 18.8439842771263], [98.901302218437195, 18.843999507696047], [98.901334404945374, 18.84397412341313], [98.901382684707642, 18.8439842771263], [98.901388049125671, 18.843999507696047], [98.901441693305983, 18.843994430839462], [98.901457786560059, 18.843953815986797], [98.901425600051866, 18.843913201134132]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.901275396347032, 18.843608585022753], [98.901248574256883, 18.84359335421718], [98.901243209838867, 18.843578123411611], [98.901286125183105, 18.84356796954123], [98.90130758285521, 18.843588277281988], [98.901302218437195, 18.843608585022753], [98.901275396347032, 18.843608585022753]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.901516795158372, 18.856457739183124], [98.901506066322327, 18.856432356472798], [98.901447057723985, 18.856391744136285], [98.90143096446991, 18.856366361425962], [98.90143096446991, 18.85633082563151], [98.901382684707642, 18.856305442921187], [98.901355862617493, 18.856320672547383], [98.901323676109314, 18.856310519463253], [98.901296854019151, 18.856249600958474], [98.901302218437195, 18.856208988621962], [98.901339769363403, 18.856198835537832], [98.901382684707642, 18.856244524416411], [98.901447057723985, 18.856244524416411], [98.901452422142015, 18.856305442921187], [98.901479244232178, 18.85634097871564], [98.901516795158372, 18.856351131799769], [98.901559710502625, 18.856335902173576], [98.901629447937012, 18.856396820678352], [98.901618719100938, 18.856422203388675], [98.901543617248535, 18.856427279930738], [98.901543617248535, 18.856452662641058], [98.901516795158372, 18.856457739183124]], [[98.901516795158372, 18.856437433014868], [98.901522159576416, 18.856417126846608], [98.901532888412476, 18.856412050304542], [98.901538252830491, 18.856427279930738], [98.901516795158372, 18.856437433014868]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.901645541191101, 18.855691181331373], [98.901602625846863, 18.85566579862105], [98.901602625846863, 18.855635339368664], [98.90166699886322, 18.855620109742468], [98.901672363281236, 18.85568610478931], [98.901645541191101, 18.855691181331373]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.900867700576782, 18.855559191237688], [98.900846242904663, 18.855543961611499], [98.90080869197844, 18.85546781348053], [98.900824785232544, 18.855447507312274], [98.900819420814514, 18.855401818433688], [98.900851607322679, 18.855391665349561], [98.900862336158738, 18.855371359181301], [98.900894522666931, 18.855371359181301], [98.900953531265245, 18.855442430770207], [98.900964260101304, 18.85549827273292], [98.900926709175096, 18.855513502359109], [98.900926709175096, 18.855538885069432], [98.900905251502977, 18.855559191237688], [98.900867700576782, 18.855559191237688]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.900765776634202, 18.855310440676529], [98.900749683380127, 18.85527998142414], [98.900653123855577, 18.855264751797943], [98.900637030601501, 18.85525459871382], [98.900637030601501, 18.855234292545557], [98.900620937347412, 18.855249522171754], [98.900594115257263, 18.85523936908762], [98.900588750839219, 18.855203833293171], [98.900637030601501, 18.855173374040785], [98.900690674781785, 18.855173374040785], [98.900706768035874, 18.855153067872521], [98.900765776634202, 18.855168297498722], [98.900814056396484, 18.855224139461431], [98.900819420814514, 18.855259675255883], [98.900819420814514, 18.855285057966206], [98.900797963142409, 18.855305364134463], [98.900765776634202, 18.855310440676529]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.901436328887939, 18.855229216003494], [98.901382684707642, 18.855208909835238], [98.901388049125671, 18.855188603666974], [98.901366591453552, 18.855183527124918], [98.901398777961717, 18.855122608620139], [98.901425600051866, 18.855122608620139], [98.901436328887939, 18.855142914788399], [98.901409506797791, 18.855168297498722], [98.901452422142015, 18.855178450582844], [98.901468515396104, 18.855203833293171], [98.901457786560059, 18.855229216003494], [98.901436328887939, 18.855229216003494]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.901227116584764, 18.855330746844785], [98.901184201240525, 18.855295211050333], [98.90116274356842, 18.855249522171754], [98.901087641716003, 18.855234292545557], [98.90107691287993, 18.855264751797943], [98.90105545520781, 18.855264751797943], [98.901033997535691, 18.855234292545557], [98.901039361953735, 18.855203833293171], [98.90107691287993, 18.855178450582844], [98.901087641716003, 18.855137838246328], [98.901152014732347, 18.855081996283619], [98.901205658912644, 18.855112455536009], [98.901211023330688, 18.855153067872521], [98.901237845420837, 18.855183527124918], [98.901227116584764, 18.855219062919367], [98.901237845420837, 18.855229216003494], [98.90130758285521, 18.855219062919367], [98.901323676109314, 18.855249522171754], [98.901323676109314, 18.85529013450827], [98.901302218437195, 18.855315517218589], [98.901227116584764, 18.855330746844785]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.900395631790161, 18.855183527124918], [98.900379538536072, 18.855173374040785], [98.900374174118042, 18.855092149367753], [98.900384902954087, 18.855076919741553], [98.900422453880296, 18.855087072825686], [98.900411725044236, 18.855178450582844], [98.900395631790161, 18.855183527124918]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.901280760765076, 18.855147991330462], [98.901243209838867, 18.855087072825686], [98.901259303092957, 18.855041383947107], [98.901259303092957, 18.855005848152654], [98.901237845420837, 18.854975388900264], [98.901243209838867, 18.854939853105815], [98.901275396347032, 18.854955082732008], [98.901366591453552, 18.854929700021685], [98.901382684707642, 18.854939853105815], [98.901409506797791, 18.85506676665743], [98.901350498199449, 18.855081996283619], [98.901371955871568, 18.855117532078076], [98.901361227035537, 18.855142914788399], [98.901280760765076, 18.855147991330462]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.900937438011169, 18.854919546937552], [98.90092134475708, 18.854899240769296], [98.90092134475708, 18.854863704974843], [98.900948166847229, 18.854853551890717], [98.900964260101304, 18.854884011143099], [98.900937438011169, 18.854919546937552]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.901377320289598, 18.854853551890717], [98.901361227035537, 18.85483832226452], [98.901366591453552, 18.854741867965295], [98.901393413543687, 18.854726638339098], [98.901420235633836, 18.854787556843874], [98.901420235633836, 18.854833245722453], [98.901409506797791, 18.85484847534865], [98.901377320289598, 18.854853551890717]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.901114463806152, 18.855031230862974], [98.901098370552049, 18.855010924694717], [98.901109099388108, 18.854960159274071], [98.901098370552049, 18.854889087685169], [98.901114463806152, 18.854873858058973], [98.901114463806152, 18.854843398806587], [98.90107691287993, 18.854792633385941], [98.90107691287993, 18.854731714881165], [98.901114463806152, 18.854726638339098], [98.901141285896301, 18.854746944507355], [98.90116274356842, 18.854782480301811], [98.90116810798645, 18.854833245722453], [98.901211023330688, 18.854823092638327], [98.901237845420837, 18.85483832226452], [98.901227116584764, 18.854772327217681], [98.901200294494629, 18.854767250675618], [98.901178836822496, 18.854782480301811], [98.901157379150376, 18.854731714881165], [98.901189565658569, 18.854691102544649], [98.901253938674913, 18.854691102544649], [98.901291489601135, 18.854716485254972], [98.901296854019151, 18.854736791423232], [98.901248574256883, 18.854777403759744], [98.901253938674913, 18.85483832226452], [98.901243209838867, 18.854843398806587], [98.901232481002793, 18.854924623479619], [98.901216387748718, 18.854950006189942], [98.901184201240525, 18.854965235816138], [98.901173472404466, 18.85502615432091], [98.901114463806152, 18.855031230862974]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.900948166847229, 18.854782480301811], [98.900899887084961, 18.854767250675618], [98.900883793830857, 18.854716485254972], [98.900894522666931, 18.854670796376386], [98.900953531265245, 18.854680949460519], [98.900958895683289, 18.854706332170842], [98.900980353355408, 18.854716485254972], [98.900980353355408, 18.854772327217681], [98.900948166847229, 18.854782480301811]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.900406360626221, 18.854701255628775], [98.900400996208191, 18.854686026002586], [98.900352716445923, 18.854675872918452], [98.900358080863953, 18.854630184039873], [98.900400996208191, 18.85463526058194], [98.900411725044236, 18.854645413666066], [98.900400996208191, 18.854665719834326], [98.90042781829834, 18.854665719834326], [98.90042781829834, 18.854701255628775], [98.900406360626221, 18.854701255628775]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.90157043933867, 18.85462003095574], [98.901511430740356, 18.85460480132955], [98.901522159576416, 18.854554035908905], [98.901559710502625, 18.854528653198582], [98.901581168174744, 18.854538806282708], [98.901607990264893, 18.854584495161294], [98.901602625846863, 18.85462003095574], [98.90157043933867, 18.85462003095574]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.900406360626221, 18.854422045815227], [98.900363445281968, 18.854401739646967], [98.900374174118042, 18.854371280394577], [98.900400996208191, 18.854386510020774], [98.90042781829834, 18.854371280394577], [98.900433182716355, 18.85441696927316], [98.900406360626221, 18.854422045815227]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.901468515396104, 18.8543966631049], [98.901441693305983, 18.854381433478711], [98.901441693305983, 18.854350974226318], [98.901457786560059, 18.854330668058065], [98.901479244232178, 18.854340821142188], [98.901489973068237, 18.854366203852518], [98.901489973068237, 18.854386510020774], [98.901468515396104, 18.8543966631049]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.900486826896653, 18.8543966631049], [98.900476098060622, 18.854330668058065], [98.900492191314683, 18.854320514973931], [98.9005672931671, 18.854320514973931], [98.900583386421189, 18.854371280394577], [98.900620937347412, 18.854386510020774], [98.900486826896653, 18.8543966631049]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.901066184043884, 18.854386510020774], [98.901033997535691, 18.854350974226318], [98.901050090789781, 18.854310361889805], [98.901093006134033, 18.854325591515998], [98.901087641716003, 18.85437635693664], [98.901066184043884, 18.854386510020774]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.900712132453904, 18.854310361889805], [98.900658488273621, 18.854315438431868], [98.90066921710968, 18.854386510020774], [98.900722861289978, 18.854366203852518], [98.900722861289978, 18.854422045815227], [98.900776505470262, 18.854432198899353], [98.900792598724365, 18.854462658151743], [98.900873064994812, 18.854467734693806], [98.900889158248901, 18.854457581609676], [98.900878429412856, 18.85437635693664], [98.900846242904663, 18.854335744600128], [98.900803327560425, 18.854310361889805], [98.900760412216187, 18.854310361889805], [98.900755047798143, 18.854340821142188], [98.900733590126023, 18.854345897684254], [98.900722861289978, 18.854310361889805], [98.900712132453904, 18.854310361889805]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.901586532592773, 18.854310361889805], [98.901538252830491, 18.85430020864839], [98.901511430740356, 18.854325591515998], [98.901516795158372, 18.854366203852518], [98.901543617248535, 18.8543966631049], [98.901597261428819, 18.8543966631049], [98.901624083518982, 18.854381433478711], [98.901624083518982, 18.854330668058065], [98.901586532592773, 18.854310361889805]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.900889158248901, 18.854310361889805], [98.900894522666931, 18.854284978786261], [98.900910615921006, 18.854279902165555], [98.900910615921006, 18.854310361889805], [98.900937438011169, 18.854356050768384], [98.900964260101304, 18.854361127310451], [98.900991082191467, 18.854330668058065], [98.900980353355408, 18.854244365820602], [98.900942802429199, 18.854224059337767], [98.900889158248901, 18.854224059337767], [98.900883793830857, 18.854264672303433], [98.900851607322679, 18.854290055406974], [98.900851607322679, 18.854315438431868], [98.900867700576782, 18.854325591515998], [98.900889158248901, 18.854310361889805]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.901409506797791, 18.854310361889805], [98.901409506797791, 18.854264672303433], [98.901388049125671, 18.854208829475645], [98.90131831169127, 18.854183446372101], [98.901286125183105, 18.854224059337767], [98.901286125183105, 18.854279902165555], [98.90132904052733, 18.854325591515998], [98.90132904052733, 18.854366203852518], [98.901339769363403, 18.85437635693664], [98.901420235633836, 18.854371280394577], [98.901409506797791, 18.854310361889805]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.899295926094055, 18.830905690021233], [98.899295926094055, 18.830890458036979], [98.899204730987535, 18.830885380708892], [98.899199366569519, 18.830870148724642], [98.899215459823594, 18.830854916740392], [98.899247646331787, 18.830870148724642], [98.899253010749817, 18.830844762084219], [98.899279832839952, 18.830859994068472], [98.899317383766174, 18.830854916740392], [98.899328112602234, 18.830865071396559], [98.899322748184204, 18.830905690021233], [98.899295926094055, 18.830905690021233]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.899371027946472, 18.830890458036979], [98.899354934692369, 18.830875226052722], [98.899349570274353, 18.830829530099976], [98.899392485618591, 18.830814298115719], [98.899403214454637, 18.830885380708892], [98.899371027946472, 18.830890458036979]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.899220824241638, 18.830849839412306], [98.899204730987535, 18.830814298115719], [98.899247646331787, 18.830814298115719], [98.899236917495713, 18.830849839412306], [98.899220824241638, 18.830849839412306]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.901484608650208, 18.854279902165555], [98.901473879814134, 18.854234212579183], [98.901489973068237, 18.854213906096351], [98.901511430740356, 18.854213906096351], [98.901538252830491, 18.854259595682723], [98.901511430740356, 18.854279902165555], [98.901484608650208, 18.854279902165555]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.900685310363755, 18.854274825544845], [98.900658488273621, 18.854218982717061], [98.90066921710968, 18.854188522992811], [98.900706768035874, 18.854198676234226], [98.900706768035874, 18.854218982717061], [98.900717496871948, 18.854208829475645], [98.900738954544067, 18.854229135958473], [98.900733590126023, 18.854239289199889], [98.900760412216187, 18.854249442441308], [98.900685310363755, 18.854274825544845]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.900787234306321, 18.854213906096351], [98.900765776634202, 18.854203752854936], [98.900765776634202, 18.854188522992811], [98.900787234306321, 18.854193599613517], [98.900792598724365, 18.854168216509976], [98.90080869197844, 18.85416313988927], [98.900819420814514, 18.854198676234226], [98.90080869197844, 18.854213906096351], [98.900787234306321, 18.854213906096351]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.900041580200181, 18.854284978786261], [98.900014758110046, 18.854279902165555], [98.900014758110046, 18.854264672303433], [98.900057673454285, 18.854234212579183], [98.900057673454285, 18.854208829475645], [98.900036215782166, 18.854188522992811], [98.899982571601868, 18.854188522992811], [98.899971842765808, 18.854137756785729], [98.899993300437927, 18.854122526923604], [98.900052309036255, 18.85412760354431], [98.900089859962449, 18.854183446372101], [98.900089859962449, 18.854269748924139], [98.900041580200181, 18.854284978786261]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.900889158248901, 18.854198676234226], [98.900862336158738, 18.854173293130682], [98.900862336158738, 18.854147910027145], [98.900889158248901, 18.854137756785729], [98.900910615921006, 18.854107297061482], [98.900937438011169, 18.854137756785729], [98.900937438011169, 18.854173293130682], [98.900889158248901, 18.854198676234226]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.899644613265991, 18.854147910027145], [98.899628520011888, 18.85412760354431], [98.899633884429917, 18.854086990578647], [98.89966607093811, 18.854092067199357], [98.899682164192185, 18.854117450302898], [98.89967143535614, 18.854147910027145], [98.899644613265991, 18.854147910027145]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.899880647659288, 18.854178369751391], [98.899848461151109, 18.854152986647854], [98.899853825569153, 18.854122526923604], [98.89982163906096, 18.854071760716526], [98.899773359298706, 18.854081913957941], [98.899735808372498, 18.854046377612985], [98.899751901626587, 18.854000688026613], [98.899778723716722, 18.853985458164484], [98.89992892742157, 18.853980381543778], [98.899998664855943, 18.854015917888738], [98.899998664855943, 18.854112373682192], [98.89991819858551, 18.854092067199357], [98.89991283416748, 18.854173293130682], [98.899880647659288, 18.854178369751391]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.900728225708008, 18.854173293130682], [98.90067458152771, 18.854158063268564], [98.900653123855577, 18.854107297061482], [98.900663852691636, 18.853995611405903], [98.90067458152771, 18.853980381543778], [98.900706768035874, 18.853990534785193], [98.900722861289978, 18.853954998440241], [98.900733590126023, 18.853954998440241], [98.900738954544067, 18.853985458164484], [98.900765776634202, 18.854000688026613], [98.900738954544067, 18.854010841268028], [98.900733590126023, 18.854036224371566], [98.900712132453904, 18.854000688026613], [98.900696039199829, 18.854005764647322], [98.900696039199829, 18.854051454233694], [98.900722861289978, 18.854051454233694], [98.900738954544067, 18.854086990578647], [98.900728225708008, 18.854173293130682]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.901087641716003, 18.853954998440241], [98.90107691287993, 18.853944845198821], [98.901087641716003, 18.853914385474575], [98.901114463806152, 18.853899155612449], [98.901157379150376, 18.853909308853869], [98.901157379150376, 18.853944845198821], [98.901087641716003, 18.853954998440241]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.900873064994812, 18.853995611405903], [98.90083014965056, 18.85396007506095], [98.900819420814514, 18.853914385474575], [98.90083014965056, 18.853863619267493], [98.900889158248901, 18.853863619267493], [98.90091598033905, 18.853894078991743], [98.90092134475708, 18.853934691957406], [98.900948166847229, 18.853954998440241], [98.90091598033905, 18.853985458164484], [98.900873064994812, 18.853995611405903]], [[98.900851607322679, 18.85396007506095], [98.900883793830857, 18.853949921819531], [98.900894522666931, 18.853929615336696], [98.900883793830857, 18.853909308853869], [98.900846242904663, 18.853924538715987], [98.900851607322679, 18.85396007506095]], [[98.900878429412856, 18.853980381543778], [98.900883793830857, 18.853980381543778], [98.900883793830857, 18.853975304923068], [98.900878429412856, 18.853975304923068], [98.900878429412856, 18.853980381543778]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.900824785232544, 18.853807776439705], [98.900824785232544, 18.853772240094745], [98.900856971740708, 18.853777316715458], [98.900856971740708, 18.853807776439705], [98.900824785232544, 18.853807776439705]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.901495337486253, 18.854168216509976], [98.901457786560059, 18.854142833406438], [98.901339769363403, 18.854137756785729], [98.901270031929002, 18.854092067199357], [98.901248574256883, 18.854092067199357], [98.901237845420837, 18.854137756785729], [98.901184201240525, 18.854137756785729], [98.901184201240525, 18.854097143820066], [98.901141285896301, 18.854086990578647], [98.901119828224196, 18.854005764647322], [98.901125192642198, 18.853970228302366], [98.901189565658569, 18.853970228302366], [98.901184201240525, 18.853878849129615], [98.90116810798645, 18.853848389405371], [98.901098370552049, 18.853812853060415], [98.901093006134033, 18.853762086853333], [98.901109099388108, 18.853741780370498], [98.901157379150376, 18.853736703749789], [98.901221752166748, 18.85379254657758], [98.901270031929002, 18.85379254657758], [98.901296854019151, 18.853772240094745], [98.901355862617493, 18.85378746995687], [98.901388049125671, 18.853838236163956], [98.901393413543687, 18.853873772508912], [98.901457786560059, 18.853863619267493], [98.901511430740356, 18.853899155612449], [98.901500701904283, 18.853975304923068], [98.901559710502625, 18.853975304923068], [98.901597261428819, 18.854005764647322], [98.901597261428819, 18.854071760716526], [98.901618719100938, 18.854102220440772], [98.901618719100938, 18.854137756785729], [98.901597261428819, 18.854152986647854], [98.901495337486253, 18.854168216509976]], [[98.901243209838867, 18.854031147750856], [98.901237845420837, 18.854015917888738], [98.901221752166748, 18.854015917888738], [98.901237845420837, 18.854051454233694], [98.901248574256883, 18.854051454233694], [98.901243209838867, 18.854031147750856]], [[98.901377320289598, 18.854015917888738], [98.901339769363403, 18.854000688026613], [98.901345133781419, 18.853939768578112], [98.901388049125671, 18.853975304923068], [98.901479244232178, 18.853970228302366], [98.901463150978103, 18.854026071130153], [98.901468515396104, 18.8540565308544], [98.901457786560059, 18.85406160747511], [98.901377320289598, 18.854015917888738]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.906580805778503, 18.843669508245025], [98.906575441360459, 18.843639046633886], [98.906602263450623, 18.843623815828316], [98.906618356704726, 18.843664431309836], [98.906580805778503, 18.843669508245025]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.906409144401536, 18.843644123569074], [98.906339406967163, 18.843613661957939], [98.906350135803223, 18.843562892606041], [98.906435966491685, 18.84355273873566], [98.906473517417908, 18.843588277281988], [98.906478881835952, 18.843608585022753], [98.906446695327759, 18.843644123569074], [98.906409144401536, 18.843644123569074]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.906736373901367, 18.843578123411611], [98.906747102737427, 18.843532430994898], [98.906773924827561, 18.843532430994898], [98.906784653663621, 18.84355273873566], [98.906763195991516, 18.843578123411611], [98.906736373901367, 18.843578123411611]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.906816840171814, 18.843542584865283], [98.906795382499695, 18.843522277124524], [98.906800746917739, 18.843501969383766], [98.906725645065293, 18.843471507772627], [98.906736373901367, 18.843400430679971], [98.906790018081665, 18.843400430679971], [98.906832933425889, 18.84344612309668], [98.906827569007859, 18.843501969383766], [98.906849026679978, 18.843512123254143], [98.906849026679978, 18.843527354059713], [98.906816840171814, 18.843542584865283]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.906135559082045, 18.843481661643008], [98.906114101409898, 18.843466430837438], [98.906119465827928, 18.843385199874398], [98.906162381172166, 18.843359815198454], [98.906221389770494, 18.843359815198454], [98.906237483024597, 18.843380122939212], [98.906237483024597, 18.843410584550352], [98.906216025352478, 18.843471507772627], [98.906135559082045, 18.843481661643008]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.906494975090027, 18.843507046318958], [98.906457424163818, 18.843471507772627], [98.90641987323761, 18.843476584707812], [98.906398415565491, 18.843451200031868], [98.906398415565491, 18.843420738420726], [98.906435966491685, 18.843420738420726], [98.906441330909715, 18.843395353744782], [98.906484246253953, 18.843390276809586], [98.906489610671983, 18.843420738420726], [98.906532526016221, 18.843456276967057], [98.906527161598206, 18.84349689244857], [98.906494975090027, 18.843507046318958]], [[98.906414508819566, 18.843441046161484], [98.90641987323761, 18.843441046161484], [98.90641987323761, 18.84343089229111], [98.906414508819566, 18.84343089229111], [98.906414508819566, 18.843441046161484]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.906516432762146, 18.843405507615156], [98.906505703926072, 18.843344584392884], [98.906543254852295, 18.8433344305225], [98.90655398368834, 18.843400430679971], [98.906516432762146, 18.843405507615156]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.906720280647292, 18.843354738263258], [98.906645178794861, 18.843329353587311], [98.906639814376831, 18.843263353429847], [98.906682729721069, 18.843258276494659], [98.906725645065293, 18.843288738105798], [98.906741738319397, 18.843339507457696], [98.906736373901367, 18.843354738263258], [98.906720280647292, 18.843354738263258]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.906993865966797, 18.843329353587311], [98.906999230384812, 18.843319199716934], [98.906972408294664, 18.843314122781742], [98.906950950622544, 18.843273507300225], [98.906956315040574, 18.843248122624278], [98.906983137130737, 18.843222737948327], [98.907047510147081, 18.843222737948327], [98.907095789909349, 18.84325319955947], [98.907090425491333, 18.843303968911368], [98.90705287456511, 18.843309045846556], [98.907036781311035, 18.843329353587311], [98.906993865966797, 18.843329353587311]], [[98.906988501548767, 18.843314122781742], [98.906993865966797, 18.843314122781742], [98.906993865966797, 18.843309045846556], [98.906988501548767, 18.843309045846556], [98.906988501548767, 18.843314122781742]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.904794454574571, 18.842847044744293], [98.904772996902466, 18.842826737003534], [98.904713988304124, 18.842826737003534], [98.904708623886108, 18.84280135232758], [98.904735445976243, 18.842781044586822], [98.904762268066392, 18.842781044586822], [98.904772996902466, 18.84280135232758], [98.90481591224669, 18.842821660068338], [98.90481054782866, 18.842847044744293], [98.904794454574571, 18.842847044744293]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.905368447303772, 18.842583044114424], [98.9053040742874, 18.842537351697718], [98.905320167541504, 18.842481505410632], [98.905352354049683, 18.842471351540247], [98.905373811721802, 18.842476428475443], [98.905384540557847, 18.842506890086575], [98.90541672706604, 18.842527197827337], [98.90541136264801, 18.842562736373665], [98.905368447303772, 18.842583044114424]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.905722498893724, 18.842369812836459], [98.905690312385545, 18.842359658966075], [98.905690312385545, 18.842319043484562], [98.905717134475708, 18.842319043484562], [98.905743956565843, 18.84233935122532], [98.905738592147827, 18.842369812836459], [98.905722498893724, 18.842369812836459]], [[98.905711770057678, 18.842344428160505], [98.905722498893724, 18.842344428160505], [98.905722498893724, 18.84233935122532], [98.905711770057678, 18.84233935122532], [98.905711770057678, 18.842344428160505]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.905373811721802, 18.842425659123546], [98.905330896377563, 18.842374889771648], [98.905330896377563, 18.842293658808611], [98.905346989631639, 18.842283504938234], [98.905459642410264, 18.842288581873422], [98.905491828918471, 18.84235458203089], [98.905475735664353, 18.842410428317976], [98.905395269393921, 18.842400274447591], [98.905389904975905, 18.842425659123546], [98.905373811721802, 18.842425659123546]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.905239701271057, 18.842466274605062], [98.905191421508789, 18.842435812993919], [98.905202150344834, 18.842395197512403], [98.905180692672715, 18.842395197512403], [98.90516996383667, 18.842435812993919], [98.905132412910447, 18.842451043799489], [98.905094861984253, 18.842451043799489], [98.90506267547606, 18.842425659123546], [98.905030488967896, 18.842385043642029], [98.905041217803955, 18.84235458203089], [98.905030488967896, 18.842232735586336], [98.905116319656372, 18.842232735586336], [98.905143141746521, 18.842202273975197], [98.90516459941864, 18.842212427845574], [98.905191421508789, 18.842202273975197], [98.905223608016968, 18.842237812521525], [98.905282616615281, 18.842242889456717], [98.9053040742874, 18.84233935122532], [98.905271887779236, 18.842364735901263], [98.905255794525132, 18.842359658966075], [98.905261158943162, 18.842303812678988], [98.905228972434998, 18.842298735743803], [98.905234336853013, 18.842374889771648], [98.905271887779236, 18.842400274447591], [98.905271887779236, 18.842445966864304], [98.905239701271057, 18.842466274605062]], [[98.905137777328477, 18.842319043484562], [98.905148506164565, 18.842319043484562], [98.905143141746521, 18.84226827413266], [98.905132412910447, 18.842288581873422], [98.905137777328477, 18.842319043484562]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.905014395713792, 18.842212427845574], [98.904998302459717, 18.84214642768811], [98.905019760131836, 18.842131196882544], [98.905068039894104, 18.842136273817729], [98.905078768730149, 18.84214642768811], [98.905073404312134, 18.842192120104816], [98.905035853385911, 18.842181966234438], [98.905030488967896, 18.842207350910389], [98.905014395713792, 18.842212427845574]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.905051946640015, 18.841928119474954], [98.905009031295776, 18.841923042539758], [98.904998302459717, 18.841882427058241], [98.905041217803955, 18.841826580771158], [98.905073404312134, 18.841826580771158], [98.905121684074402, 18.841872273187871], [98.905121684074402, 18.84188750399343], [98.905089497566223, 18.841923042539758], [98.905051946640015, 18.841928119474954]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.905143141746521, 18.841857042382298], [98.905132412910447, 18.841846888511913], [98.905137777328477, 18.841811349965585], [98.905180692672715, 18.8418062730304], [98.905191421508789, 18.841841811576728], [98.905143141746521, 18.841857042382298]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.904971480369568, 18.841801196095211], [98.904901742935181, 18.841740272872929], [98.90492856502533, 18.841699657391413], [98.905035853385911, 18.841653964974707], [98.905116319656372, 18.841684426585843], [98.905089497566223, 18.841740272872929], [98.905035853385911, 18.841745349808122], [98.904971480369568, 18.841801196095211]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.904558420181274, 18.841313810316997], [98.904510140419006, 18.841313810316997], [98.904472589492784, 18.841344271928136], [98.904526233673096, 18.841420425955981], [98.904585242271438, 18.841379810474464], [98.904590606689439, 18.841344271928136], [98.904558420181274, 18.841313810316997]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.907079696655273, 18.859503624230342], [98.907074332237229, 18.859452859596221], [98.907149434089646, 18.859457936059638], [98.907144069671631, 18.859503624230342], [98.907079696655273, 18.859503624230342]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.90692412853241, 18.859366559718222], [98.906886577606201, 18.859325948010927], [98.906886577606201, 18.859280259840222], [98.906908035278306, 18.85925995398657], [98.906961679458632, 18.859270106913392], [98.907009959220886, 18.859341177401163], [98.906999230384812, 18.859366559718222], [98.90692412853241, 18.859366559718222]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.906961679458632, 18.858635548986911], [98.90691339969635, 18.858625396060088], [98.906902670860291, 18.858610166669855], [98.906908035278306, 18.858569554962557], [98.906945586204529, 18.858544172645495], [98.906972408294664, 18.858554325572324], [98.906999230384812, 18.858605090206442], [98.906999230384812, 18.858630472523497], [98.906961679458632, 18.858635548986911]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.907031416892991, 18.858594937279616], [98.907009959220886, 18.858559402035731], [98.907009959220886, 18.858518790328436], [98.906940221786499, 18.858493408011377], [98.906934857368469, 18.858478178621144], [98.906950950622544, 18.858452796304086], [98.906993865966797, 18.858457872767495], [98.906999230384812, 18.858493408011377], [98.907079696655273, 18.858539096182088], [98.907079696655273, 18.858579707889383], [98.907031416892991, 18.858594937279616]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.906875848770127, 18.858483255084554], [98.906832933425889, 18.858457872767495], [98.906843662261963, 18.858412184596791], [98.90691339969635, 18.85843756691385], [98.906897306442247, 18.858478178621144], [98.906875848770127, 18.858483255084554]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.90705287456511, 18.858452796304086], [98.907004594802856, 18.858427413987027], [98.906993865966797, 18.858402031669961], [98.906940221786499, 18.858427413987027], [98.906902670860291, 18.858396955206551], [98.906859755516052, 18.858391878743138], [98.906827569007859, 18.858351267035843], [98.906827569007859, 18.858315731791965], [98.906859755516052, 18.858290349474906], [98.906886577606201, 18.858290349474906], [98.906918764114366, 18.858315731791965], [98.906929492950425, 18.858361419962669], [98.906972408294664, 18.858336037645611], [98.907004594802856, 18.85834111410902], [98.907015323638916, 18.858386802279732], [98.907085061073303, 18.858396955206551], [98.907079696655273, 18.858442643377263], [98.90705287456511, 18.858452796304086]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.906983137130737, 18.858285273011493], [98.906929492950425, 18.858254814231017], [98.906934857368469, 18.858209126060313], [98.90715479850769, 18.858209126060313], [98.907138705253601, 18.858249737767611], [98.907058238983154, 18.858234508377372], [98.907026052474961, 18.858244661304198], [98.907009959220886, 18.85827512008467], [98.906983137130737, 18.858285273011493]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.904789090156555, 18.841197038999894], [98.904772996902466, 18.841181807958531], [98.904772996902466, 18.8411564228896], [98.904826641082778, 18.841141191848237], [98.904837369918809, 18.8411564228896], [98.90481054782866, 18.8411564228896], [98.90481054782866, 18.84118688497232], [98.904789090156555, 18.841197038999894]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.904891014099107, 18.841197038999894], [98.904880285263062, 18.841161499903386], [98.904853463172913, 18.8411564228896], [98.904853463172913, 18.841136114834448], [98.904826641082778, 18.841136114834448], [98.904826641082778, 18.841120883793085], [98.904944658279419, 18.841110729765514], [98.904960751533494, 18.841146268862023], [98.904944658279419, 18.841191961986109], [98.904891014099107, 18.841197038999894]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.90466570854187, 18.841110729765514], [98.904654979705811, 18.841095498724155], [98.904660344123826, 18.840978727407052], [98.904697895050049, 18.840973650393266], [98.904740810394273, 18.84101426650356], [98.904751539230347, 18.841085344696577], [98.904735445976243, 18.84110057573794], [98.90466570854187, 18.841110729765514]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.904762268066392, 18.840933034282969], [98.904746174812317, 18.840912726227817], [98.904746174812317, 18.840836571021015], [98.904848098754883, 18.840826416993441], [98.904874920845032, 18.840861956089945], [98.904864192008958, 18.840902572200246], [98.904832005500793, 18.84092795726918], [98.904762268066392, 18.840933034282969]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.904472589492784, 18.840557335262723], [98.904418945312486, 18.840516719152433], [98.904418945312486, 18.84050148811107], [98.904472589492784, 18.840450717973201], [98.904515504837022, 18.840450717973201], [98.904542326927171, 18.840496411097284], [98.904536962509141, 18.840526873180007], [98.904515504837022, 18.840557335262723], [98.904472589492784, 18.840557335262723]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.904601335525513, 18.840450717973201], [98.904601335525513, 18.84041517887669], [98.904558420181274, 18.840399947835326], [98.904563784599318, 18.840369485752607], [98.904585242271438, 18.840374562766396], [98.904579877853394, 18.840359331725029], [98.904595971107469, 18.840359331725029], [98.904617428779588, 18.840399947835326], [98.904622793197632, 18.840445640959413], [98.904601335525513, 18.840450717973201]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.904794454574571, 18.840440563945624], [98.904724717140198, 18.840374562766396], [98.904724717140198, 18.840359331725029], [98.904762268066392, 18.840323792628524], [98.904842734336839, 18.840369485752607], [98.904842734336839, 18.840405024849115], [98.90481591224669, 18.840420255890479], [98.90481054782866, 18.840440563945624], [98.904794454574571, 18.840440563945624]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.904660344123826, 18.840333946656099], [98.904606699943542, 18.840283176518231], [98.904606699943542, 18.840257791449293], [98.904649615287767, 18.840227329366567], [98.904730081558228, 18.840217175338992], [98.904756903648376, 18.840288253532016], [98.904708623886108, 18.840308561587161], [98.904687166213989, 18.840333946656099], [98.904660344123826, 18.840333946656099]]] } },
        //             { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.905470371246352, 18.840029325828876], [98.905448913574205, 18.839998863746153], [98.905448913574205, 18.839963324649641], [98.905497193336473, 18.839927785553133], [98.905513286590576, 18.839897323470414], [98.905540108680725, 18.839897323470414], [98.905545473098741, 18.839922708539344], [98.905572295188904, 18.839937939580707], [98.905577659606919, 18.83996840166343], [98.905561566352844, 18.839993786732368], [98.905497193336473, 18.840029325828876], [98.905470371246352, 18.840029325828876]]] } }
        //         ]
        //     }

        // -->
        //     tmp_build = L.geoJSON(x, { fillColor: 'violet', weight: 2, opacity: 1, color: 'violet', fillOpacity: 0.7 })
        // } else {
        //     // tmp_build = tmp_build
        // }


        
        // show_build = !show_build
        // tmp_build.addTo(map)
        // if (show_build) {
        //     tmp_build.addTo(map)
        // } else {
        //     map.removeLayer(tmp_build)
        // }
        // 18.858594937279616, 98.90703141689299
    }
    
    


    const [ lang, setLang ] = React.useState('');

    const handleChangeLang = (event) => {
        setLang(event.target.value)
        console.log('Lang', lang)
    }
    
    // const initialList = [
    //     {
    //         id: 'a',
    //         task: 'Learn React',
    //         isComplete: false,
    //     },
    //     {
    //         id: 'b',
    //         task: 'Learn GraphQL',
    //         isComplete: true,
    //     },
    // ];
        


    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex', overflow: 'hidden' }} >
                <CssBaseline />

                {/* import AppBar_NavBar */}
                {/* <React.Fragment> */}

                <AppBar position="absolute" open={open} >
                    <Toolbar sx={{ pr: '24px' }}>
                        <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={toggleDrawer} sx={{ marginRight: '36px', ...(open && { display: 'none' }), }}>
                            <MenuIcon />
                        </IconButton>
                        <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>Dashboard</Typography>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel>ภาษา</InputLabel>
                                <Select value={lang} onChange={handleChangeLang} >
                                    <MenuItem value={10}>EN</MenuItem>
                                    <MenuItem value={20}>TH</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Toolbar>
                </AppBar>

                <Drawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}
                    >
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        {mainListItems}
                        <Divider sx={{ my: 1 }} />
                        {secondaryListItems}
                        <Divider sx={{ my: 1 }} />
                    </List>
                </Drawer>

                {/* </React.Fragment > */}
                {/* import AppBar_NavBar */}

                <Box component="main" sx={{ backgroundColor: (theme) => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900], flexGrow: 1, height: '1', overflow: 'hidden', }}>
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={3}>

                            <Grid item xs={12} mt={3} md={8} lg={12}>
                                <Paper sx={{ mt: 5, p: 0, display: 'flex', flexDirection: 'column', height: 800, }}>                                    
                                    
                                        {MapComponent}
                                        
                                </Paper>
                            </Grid>

                            <Grid item xs={12}>
                                {map ? <MapSearch map={map} /> : null}
                            </Grid>

                            <Grid item xs={4}>
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                    <Box sx={{ marginTop: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                                        <Typography component="h1" variant="h5"> ข้อมูลสภาพอากาศ </Typography>
                                        <FormControl sx={{ m: 1, minWidth: 250 }}>
                                            <TextField required type='number' fullWidth variant="standard" inputRef={value_wind_spe} helperText="ทิศทางลม (องศาตามเข็มนาฬิกาจากทิศเหนือ)" />
                                            <TextField required type='number' fullWidth variant="standard" inputRef={value_wind_dir} helperText="ความเร็วลม (กิโลเมตรต่อชั่วโมง)" />
                                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 2 }} onClick={submit_weather}>ยืนยันข้อมูลสภาพอากาศ</Button>
                                        </FormControl>
                                    </Box>
                                </Paper>
                            </Grid>

                            <Grid item xs={4}>
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                    <Box sx={{ marginTop: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                                        <Typography component="h1" variant="h5"> ข้อมูลจุดกำเนิดไฟป่า </Typography>
                                        <p></p>
                                        <p>ระบุตำแหน่งแหล่งกำเนิดไฟป่า โดยการวาดรูปทรงบนแผนที่</p>
                                        <FormControl sx={{ m: 1, minWidth: 250 }}>
                                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={submit_hotspot} >ยืนยันข้อมูลจุดกำเนิดไฟป่า</Button>
                                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 2 }} onClick={import_hotspot}>นำเข้าข้อมูลจุดความร้อนจาก FIRMS</Button>
                                        </FormControl>
                                    </Box>
                                </Paper>
                            </Grid>

                            <Grid item xs={4}>
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                    <Box sx={{ marginTop: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                                        <Typography component="h1" variant="h5">สิ่งปลกคลุมดิน (Land Cover)</Typography>
                                        <FormControl sx={{ m: 1, minWidth: 250 }}>
                                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={submit_fire_break} >ยืนยันข้อมูลแนวป้องกันไฟ</Button>
                                            {/* <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 2 }} onClick={import_land_cover} >นำเข้าข้อมูลแบบจำลองเชื้อเพลิง</Button> */}
                                            {/* <TextField required type='string' fullWidth variant="standard" inputRef={value_land_cover_list} helperText="เลือกข้อมูลแบบจำลองเชื้อเพลิง" /> */}
                                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={submit_all_land_cover} > ยืนยันข้อมูลสิ่งปลกคลุมดิน</Button>
                                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={submit_land_cover} >เลือกสิ่งปลกคุลมดิน (Landcover) </Button>
                                            <Select value={landcover} label="landcover" onChange={handle_change_Land_cover} >
                                                <MenuItem value={30}> เมือง </MenuItem>
                                                <MenuItem value={20}> พุ่มไม้ </MenuItem>
                                                <MenuItem value={30}> พืช </MenuItem>
                                                <MenuItem value={40}> พื้นที่เพาะปลูก </MenuItem>
                                                <MenuItem value={60}> พื้นที่ว่างเปล่า </MenuItem>
                                                <MenuItem value={70}> น้ำ </MenuItem>
                                                <MenuItem value={115}> ป่า </MenuItem>
                                                <MenuItem value={70}> แนวป้องกันไฟ </MenuItem>
                                            </Select>
                                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={reset_land_cover} > reset landcover </Button>
                                        </FormControl>
                                    </Box>
                                </Paper>
                            </Grid>

                            <Grid item xs={6}>
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                    <Box sx={{ marginTop: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                                        <FormControl sx={{ m: 1, minWidth: 250 }}>
                                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={start_fire_pred} >การลุกลามของไฟ</Button>
                                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 2 }} onClick={start_build} >พื้นที่ชุมชน</Button>
                                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 2 }} onClick={damage_assess} >ประเมินผลกระทบ</Button>
                                        </FormControl>
                                    </Box>
                                </Paper>
                            </Grid>

                            <Grid item xs={6}>
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>

                                  
                                  
                                </Paper>
                            </Grid>

                            

                            {/* https://firms.modaps.eosdis.nasa.gov/api/area/csv/da9fbf64257959120af01dbc6211339c/VIIRS_SNPP_SP/
                            98.88381238789997,18.82340549445857,98.92177941210004,18.859338105541433 */}
                            {/* /1/2022-06-13 */}
                            

                        </Grid>

                    </Container>



                    {/* <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

                        
                        <Grid container spacing={3} direction="column">
                            
                            


                            <Grid container spacing={12} direction="row">
                                
                                <Grid item xs={4}>
                                    <Typography component="h1" variant="h5">Search area</Typography>
                                </Grid>
                                
                                <Grid item xs={8}>
                                    <TextField required type='number' fullWidth variant="standard" inputRef={value_wind_dir} helperText="ความเร็วลม (กิโลเมตรต่อชั่วโมง)" />
                                </Grid>

                            </Grid>
                                    


                            <Grid container spacing={12} direction="row">
                                <Grid item xs={9}>
                                    
                                    <Grid container spacing={9} direction="column">
                                        <Grid item xs={9}>
                                            
                                            
                                            <Grid container spacing={12} direction="row">
                                                <Grid item xs={3}>
                                                    <Typography component="h1" variant="h5">Weather</Typography>
                                                </Grid>
                                                <Grid item xs={9}>


                                                    {/* <Button type="submit" fullWidth variant="contained" size="large" sx={{ mt: 1, mb: 2 }} >2222</Button> */}
                                                    {/* <Grid container spacing={12} direction="row">
                                                        <Grid item xs={6}>
                                                            <Typography component="h1" variant="h5">Wind direction</Typography>
                                                            <TextField required type='number' fullWidth variant="standard" inputRef={value_wind_dir} helperText="ความเร็วลม (กิโลเมตรต่อชั่วโมง)" />
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <Typography component="h1" variant="h5">wind speed</Typography>
                                                            <TextField required type='number' fullWidth variant="standard" inputRef={value_wind_dir} helperText="ความเร็วลม (กิโลเมตรต่อชั่วโมง)" />
                                                        </Grid>
                                                    </Grid>


                                                </Grid>
                                            </Grid>

                                        </Grid>
                                        <Grid item xs={9}>
                                            {/* <Button type="submit" fullWidth variant="contained" size="large" sx={{ mt: 1, mb: 2 }} >พื้นที่ชุมชน</Button> */}
                                            {/* <Grid container spacing={12} direction="row">
                                                <Grid item xs={3}>
                                                    <Typography component="h1" variant="h5">Active fires</Typography>
                                                </Grid>
                                                <Grid item xs={9}>
                                                    <Button type="submit" fullWidth variant="contained" size="large" sx={{ mt: 1, mb: 2 }} >4444</Button>
                                                </Grid>
                                            </Grid>

                                        </Grid>
                                    </Grid>

                                </Grid>

                                

                                <Grid item xs={3}>
                                    <Button type="submit" fullWidth variant="contained" size="large" sx={{ mt: 1, mb: 2 }} >Fire break</Button>
                                    <Button type="submit" fullWidth variant="contained" size="large" sx={{ mt: 1, mb: 2 }} >Urban area</Button>
                                    <Button type="submit" fullWidth variant="contained" size="large" sx={{ mt: 1, mb: 2 }} >Land cover</Button>
                                </Grid>

                            // </Grid>


                        // </Grid>

                            
                    // </Container> */}


                                {/* <Typography component="h1" variant="h5">สิ่งปลกคลุมดิน (Land Cover)</Typography> */}
                                {/* <Button type="submit" fullWidth variant="contained" size="large" sx={{ mt: 1, mb: 2 }} >พื้นที่ชุมชน</Button> */}
                    
                    

                </Box>


                

            </Box>


            
                





            

        </ThemeProvider>
    )
}