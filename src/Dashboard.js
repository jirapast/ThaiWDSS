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
import { CountertopsSharp, PersonRemoveAlt1TwoTone } from '@mui/icons-material';




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

var lat1 = ''
var lat2 = ''
var lng1 = ''
var lng2 = ''

var list_build = []
var list_add_layer = []

var assess_build = []
var assess_fire = []


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
            console.log(32131231, lat1, lat2)
            console.log(32131231, lng1, lng2)
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

        

        const click_show_fire = (e) => {
            show_fire[0] = !show_fire[0]
            show_fire[1] = !show_fire[1]
            show_fire[2] = !show_fire[2]

            if (show_fire[0] == true) { list_fire_pred_layer[0].addTo(map) } else { map.removeLayer(list_fire_pred_layer[0]) }
            if (show_fire[1] == true) { list_fire_pred_layer[1].addTo(map) } else { map.removeLayer(list_fire_pred_layer[1]) }
            if (show_fire[2] == true) { list_fire_pred_layer[2].addTo(map) } else { map.removeLayer(list_fire_pred_layer[2]) }
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
                
                <Button type="submit" variant="contained" sx={{ ml: 2, mr: 1 }} onClick={click_show_build}>click_show_build</Button>

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


        // for (let i = 0; i < list_build.length; i++) {
        //     console.lo(111, list_add_layer[i])
        // }

        count = 0

        for (let i = 0; i < assess_fire.length; i++) {
            _f_ = assess_fire[i]['features'][0]['geometry']['coordinates']
            for (let j = 0; j < assess_build.length; j++) {
                _b_ = assess_build[j]['features'][0]['geometry']['coordinates']

                var poly1 = turf.polygon([_f_])
                var poly2 = turf.polygon([_b_])

                if (overlaps(poly1, poly2)) {
                    count += 1
                }
            }
        }
        consol.log('damage assess : answer =', count)
        


        var poly1 = turf.polygon([
            [
            [0, 0],
            [0, 2],
            [2, 2],
            [2, 0],
            [0, 0]
        ]
    ]);


        // var which_fire_pred = 1
        // axios.get('https://' + config.GCP_EXT_IP + '/damage_assess', { params: which_fire_pred })
        //     .then(res => { 
        //         console.log('--> damage_assess', res.data)
        //         // var layer = L.geoJSON(res.data, { fillColor: 'red', weight: 2, opacity: 1, color: 'red', fillOpacity: 0.7 })
        //         // layer.addTo(map)
        //     })
    }




    var list_add_layer = []

    

    const start_fire_pred = () => {
        // console.log(draw_list)
        // for (let i = 0; i < draw_list.length; i++) {
            //     candidate_geojson.push(draw_list[i].toGeoJSON())
            // }
        // console.los('tmp_')
        // https://34.142.209.147/grass_5

        if (list_add_layer.length>0) {
            for (let n = 0; n < layers.length; n++) {
                var layer = list_add_layer[n]
                map.removeLayer(layer)
            }
        }
    


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
                                                                assess_fire.push(res.data)
                                                                list_fire_pred_layer.push(layer)
                                                                layer.addTo(map); list_add_layer.push(layer)//
                                                                show_fire[0] = true
                                                                layers.push(layer)
                                                            }})
                                                    axios.get('https://' + config.GCP_EXT_IP + '/grass_12b')
                                                        .then(res => {
                                                            console.log('--> grass_12b', res.data)
                                                            if (res.data !== 0) {
                                                                var layer = L.geoJSON(res.data, { fillColor: 'orange', weight: 2, opacity: 1, color: 'orange', fillOpacity: 0.7 })
                                                                assess_fire.push(res.data)
                                                                list_fire_pred_layer.push(layer)
                                                                layer.addTo(map); list_add_layer.push(layer)//
                                                                show_fire[1] = true
                                                                layers.push(layer)
                                                            }})
                                                    axios.get('https://' + config.GCP_EXT_IP + '/grass_12c')
                                                        .then(res => {
                                                            console.log('--> grass_12c', res.data)
                                                            if (res.data !== 0) {
                                                                var layer = L.geoJSON(res.data, { fillColor: 'yellow', weight: 2, opacity: 1, color: 'yellow', fillOpacity: 0.7 })
                                                                list_fire_pred_layer.push(layer)
                                                                layer.addTo(map); list_add_layer.push(layer)//
                                                                assess_fire.push(res.data)
                                                                show_fire[2] = true
                                                                layers.push(layer)
                                                                
                                                                console.log('---grass12c')
                                                                console.log(layer)
                                                                console.log('---grass12c')


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

    
    var tmp_build = ''

    const click_show_build = (e) => {
        show_build = !show_build
        console.log('click_show_build', show_build)
        if (show_build) {
            tmp_build[0].addTo(map)
        } else {
            map.removeLayer(tmp_build[0])
        }
    }




    const start_build = () => {
        console.log('start_build --> ', lat1, lat2, lng1, lng2)
        
        var path_build = 'http://0df8-35-185-176-237.ngrok.io/build'
        
        
        var x = 1
        axios.get(path_build, { params: { 'lng1': lng1, 'lng2': lng2, 'lat1': lat1, 'lat2': lat2 } }).then(res => { 
            
            console.log(11111)
            res.data['crs'] = { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } }
            x = res.data
            console.log(x)
            
            console.log(111113333)

            // var layer = L.geoJSON(res.data, { fillColor: 'red', weight: 2, opacity: 1, color: 'red', fillOpacity: 0.7 })
                    
            // layer.addTo(map);
            // console.log('start build: added')

            tmp_build = L.geoJSON(x, { fillColor: 'violet', weight: 2, opacity: 1, color: 'violet', fillOpacity: 0.7 })
            
            assess_build.push(res.data)
            list_build.push(tmp_build)

            console.log(11111)
            console.log(tmp_build)
            console.log(11111)

            show_build = !show_build
            tmp_build.addTo(map)
            if (show_build) {
                tmp_build.addTo(map)
            } else {
                map.removeLayer(tmp_build)
            }

        })


        // axios.get(path_build, { params: { 'lng1': lng1, 'lng2': lng2, 'lat1': lat1, 'lat2': lat2 } }).then(res => { console.log('start build', res.data) })
        

        // --> return geojson of detected buildings --> x

        
        // list_fire_pred_layer.push(layer)
        // list_add_layer.push(layer)//
        // show_fire[1] = true
        // layers.push(layer)

        // if (tmp_build==0) {
            // var x = {
            //     "type": "FeatureCollection",
            //     "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
            //     "features": [
            //         { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.885107040405273, 18.838993615016321], [98.885053396224961, 18.838978383974954], [98.885042667388916, 18.838958075919805], [98.885053396224961, 18.838907305781937], [98.885074853897095, 18.838907305781937], [98.88509094715117, 18.838932690850871], [98.885128498077393, 18.838942844878446], [98.885133862495408, 18.838988538002532], [98.885107040405273, 18.838993615016321]]] } },
            //         { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.885166049003601, 18.835861049414248], [98.885160684585557, 18.835805200533756], [98.885182142257676, 18.835774737508032], [98.885096311569214, 18.835713811456586], [98.885064125061035, 18.835729042969447], [98.885053396224961, 18.835713811456586], [98.885064125061035, 18.835693502772763], [98.885123133659363, 18.835708734285632], [98.885133862495408, 18.835729042969447], [98.885171413421631, 18.835703657114674], [98.88518750667572, 18.835713811456586], [98.88519287109375, 18.835855972243294], [98.885166049003601, 18.835861049414248]]] } },
            //         { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.88519287109375, 18.838490987193527], [98.88519823551178, 18.838465601731649], [98.88518750667572, 18.838455447546895], [98.885155320167527, 18.838465601731649], [98.885166049003601, 18.838501141378277], [98.88519823551178, 18.838506218470652], [98.88519287109375, 18.838490987193527]]] } },
            //         { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.88519287109375, 18.837907121570382], [98.885155320167527, 18.837917275755132], [98.885144591331482, 18.837993432140756], [98.885096311569214, 18.837988355048385], [98.88508021831511, 18.838023894695006], [98.885107040405273, 18.838039125972134], [98.885107040405273, 18.838064511434009], [98.885128498077393, 18.838094973988262], [98.885155320167527, 18.838110205265384], [98.885203599929795, 18.838110205265384], [98.885219693183899, 18.838140667819641], [98.885176777839646, 18.838140667819641], [98.885144591331482, 18.838166053281512], [98.885144591331482, 18.838206670020515], [98.885123133659363, 18.838211747112886], [98.885096311569214, 18.838257440944268], [98.885123133659363, 18.838267595129018], [98.885149955749512, 18.838252363851893], [98.885176777839646, 18.838328520237521], [98.88519823551178, 18.838348828607018], [98.885262608528137, 18.838358982791771], [98.885294795036316, 18.838343751514646], [98.885305523872361, 18.838308211868018], [98.885273337364197, 18.838242209667143], [98.88519823551178, 18.838226978390015], [98.885155320167527, 18.838237132574765], [98.885160684585557, 18.838211747112886], [98.885225057601915, 18.838206670020515], [98.885241150856018, 18.838186361651012], [98.885273337364197, 18.838206670020515], [98.885316252708435, 18.838206670020515], [98.88533234596251, 18.838186361651012], [98.885316252708435, 18.838135590727266], [98.885251879692063, 18.838079742711137], [98.885251879692063, 18.838054357249259], [98.885230422019944, 18.838034048879756], [98.885230422019944, 18.838003586325506], [98.885257244110093, 18.838003586325506], [98.885267972946181, 18.838008663417884], [98.885262608528137, 18.838049280156888], [98.885337710380554, 18.838105128173012], [98.885337710380554, 18.838125436542512], [98.885364532470703, 18.838140667819641], [98.885380625724778, 18.838186361651012], [98.885423541069017, 18.838206670020515], [98.885423541069017, 18.838232055482393], [98.885466456413269, 18.838318366052771], [98.885504007339463, 18.838318366052771], [98.885514736175537, 18.83818128455864], [98.885504007339463, 18.838166053281512], [98.88543963432312, 18.838155899096765], [98.885418176651001, 18.838135590727266], [98.885402083396897, 18.838084819803509], [98.885418176651001, 18.838079742711137], [98.88543963432312, 18.838115282357762], [98.885498642921434, 18.838130513634887], [98.885541558265686, 18.838079742711137], [98.885546922683702, 18.838034048879756], [98.885605931282043, 18.838039125972134], [98.885589838027968, 18.837988355048385], [98.885530829429626, 18.837978200863638], [98.885461091995239, 18.837927429939882], [98.885380625724778, 18.837957892494135], [98.885348439216628, 18.837927429939882], [98.885310888290391, 18.837937584124631], [98.885305523872361, 18.837881736108503], [98.885278701782212, 18.837856350646629], [98.885305523872361, 18.83785127355425], [98.88533234596251, 18.837891890293253], [98.885364532470703, 18.837891890293253], [98.885402083396897, 18.837861427739], [98.885396718978868, 18.83783096518475], [98.885359168052659, 18.837805579722875], [98.885353803634629, 18.837785271353379], [98.885316252708435, 18.83783096518475], [98.885310888290391, 18.837810656815254], [98.885267972946181, 18.837790348445754], [98.885257244110093, 18.837749731706751], [98.885225057601915, 18.837739577521997], [98.885171413421631, 18.837749731706751], [98.885155320167527, 18.837790348445754], [98.885171413421631, 18.837836042277129], [98.885225057601915, 18.837891890293253], [98.885225057601915, 18.837907121570382], [98.88519287109375, 18.837907121570382]]] } },
            //         { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.885117769241333, 18.837932507032257], [98.885096311569214, 18.837902044478003], [98.885112404823289, 18.837871581923757], [98.885133862495408, 18.837891890293253], [98.885128498077393, 18.837932507032257], [98.885117769241333, 18.837932507032257]]] } },
            //         { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.901672363281236, 18.846512551704709], [98.901758193969727, 18.846507474848124], [98.901720643043504, 18.846411014573043], [98.90168309211731, 18.846431321999376], [98.90168309211731, 18.846461783138878], [98.90166699886322, 18.846466859995459], [98.901672363281236, 18.846512551704709]]] } },
            //         { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.901672363281236, 18.84359335421718], [98.901672363281236, 18.843517200189336], [98.901693820953355, 18.843517200189336], [98.901709914207458, 18.843557815670856], [98.901672363281236, 18.84359335421718]]] } },
            //         { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.90466570854187, 18.841110729765514], [98.904654979705811, 18.841095498724155], [98.904660344123826, 18.840978727407052], [98.904697895050049, 18.840973650393266], [98.904740810394273, 18.84101426650356], [98.904751539230347, 18.841085344696577], [98.904735445976243, 18.84110057573794], [98.90466570854187, 18.841110729765514]]] } },
            //         { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.904762268066392, 18.840933034282969], [98.904746174812317, 18.840912726227817], [98.904746174812317, 18.840836571021015], [98.904848098754883, 18.840826416993441], [98.904874920845032, 18.840861956089945], [98.904864192008958, 18.840902572200246], [98.904832005500793, 18.84092795726918], [98.904762268066392, 18.840933034282969]]] } },
            //         { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.904472589492784, 18.840557335262723], [98.904418945312486, 18.840516719152433], [98.904418945312486, 18.84050148811107], [98.904472589492784, 18.840450717973201], [98.904515504837022, 18.840450717973201], [98.904542326927171, 18.840496411097284], [98.904536962509141, 18.840526873180007], [98.904515504837022, 18.840557335262723], [98.904472589492784, 18.840557335262723]]] } },
            //         { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.904601335525513, 18.840450717973201], [98.904601335525513, 18.84041517887669], [98.904558420181274, 18.840399947835326], [98.904563784599318, 18.840369485752607], [98.904585242271438, 18.840374562766396], [98.904579877853394, 18.840359331725029], [98.904595971107469, 18.840359331725029], [98.904617428779588, 18.840399947835326], [98.904622793197632, 18.840445640959413], [98.904601335525513, 18.840450717973201]]] } },
            //         { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.904794454574571, 18.840440563945624], [98.904724717140198, 18.840374562766396], [98.904724717140198, 18.840359331725029], [98.904762268066392, 18.840323792628524], [98.904842734336839, 18.840369485752607], [98.904842734336839, 18.840405024849115], [98.90481591224669, 18.840420255890479], [98.90481054782866, 18.840440563945624], [98.904794454574571, 18.840440563945624]]] } },
            //         { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.904660344123826, 18.840333946656099], [98.904606699943542, 18.840283176518231], [98.904606699943542, 18.840257791449293], [98.904649615287767, 18.840227329366567], [98.904730081558228, 18.840217175338992], [98.904756903648376, 18.840288253532016], [98.904708623886108, 18.840308561587161], [98.904687166213989, 18.840333946656099], [98.904660344123826, 18.840333946656099]]] } },
            //         { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[98.905470371246352, 18.840029325828876], [98.905448913574205, 18.839998863746153], [98.905448913574205, 18.839963324649641], [98.905497193336473, 18.839927785553133], [98.905513286590576, 18.839897323470414], [98.905540108680725, 18.839897323470414], [98.905545473098741, 18.839922708539344], [98.905572295188904, 18.839937939580707], [98.905577659606919, 18.83996840166343], [98.905561566352844, 18.839993786732368], [98.905497193336473, 18.840029325828876], [98.905470371246352, 18.840029325828876]]] } }
            //     ]
            // }

        
        
        

        
        
        
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
                                        {/* <Typography component="h1" variant="h5">สิ่งปลกคลุมดิน (Land Cover)</Typography> */}
                                        <FormControl sx={{ m: 1, minWidth: 250 }}>
                                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={submit_fire_break} >ยืนยันข้อมูลแนวป้องกันไฟ</Button>
                                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={start_fire_pred} >การลุกลามของไฟ</Button>
                                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 2 }} onClick={start_build} >พื้นที่ชุมชน</Button>
                                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 2 }} onClick={damage_assess} >ประเมินผลกระทบ</Button>
                                            {/* <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 2 }} onClick={import_land_cover} >นำเข้าข้อมูลแบบจำลองเชื้อเพลิง</Button> */}
                                            {/* <TextField required type='string' fullWidth variant="standard" inputRef={value_land_cover_list} helperText="เลือกข้อมูลแบบจำลองเชื้อเพลิง" /> */}
                                            {/* <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={submit_all_land_cover} > ยืนยันข้อมูลสิ่งปลกคลุมดิน</Button>
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
                                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={reset_land_cover} > reset landcover </Button> */}
                                        </FormControl>
                                    </Box>
                                </Paper>
                            </Grid>

                            <Grid item xs={6}>
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                    {/* <Box sx={{ marginTop: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                                        <FormControl sx={{ m: 1, minWidth: 250 }}>
                                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={start_fire_pred} >การลุกลามของไฟ</Button>
                                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 2 }} onClick={start_build} >พื้นที่ชุมชน</Button>
                                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 2 }} onClick={damage_assess} >ประเมินผลกระทบ</Button>
                                        </FormControl>
                                    </Box> */}
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