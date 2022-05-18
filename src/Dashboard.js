import * as React from 'react';
import { useState, useEffect, useRef, useCallback, useMemo } from "react";

import { styled, createTheme, ThemeProvider, alpha } from '@mui/material/styles';
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
// import AssignmentIcon from '@mui/icons-material/Assignment';
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
// import InputLabel from '@mui/material/InputLabel';
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

import FormControl from '@mui/material/FormControl';
// import { MapContainer, TileLayer } from 'react-leaflet';
// import { MapContainer, TileLayer, useMap, } from 'https://cdn.esm.sh/react-leaflet'
import { MapContainer, TileLayer, useMap, Map, FeatureGroup, LayerGroup, ZoomControl} from 'react-leaflet'

// import { Map, TileLayer } from "react-leaflet";
import L from 'leaflet'

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import InputAdornment from '@mui/material/InputAdornment';
// or
// import { InputAdornment } from '@mui/material';


import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import axios from 'axios';




// import { EditControl } from "react-leaflet-draw"
// import { FeatureGroup } from 'react-leaflet';

// import 'leaflet/dist/leaflet.css';
// import 'leaflet-draw/dist/leaflet.draw.css';


// import LogIn from './LogIn.js'
// import Search from './Search.js'

// import EditControl from './EditControl.js'

import {DrawTools, draw_list} from './leaflets/drawtools.js'


import test from './leaflets/drawtools.js'
import config from './config.json'




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

const onCreated = (e) => {
    collection.features.push(e.layer.toGeoJSON())
    console.log('----draw create----')
    console.log(collection)
}

const onDeleted = (e) => {
    collection = {
        "type": "FeatureCollection",
        "features": []
    };

}

const on_submit_vector = (e) => {
    console.log(4444)
    console.log(e.target.value)
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
}





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
var candidate_geojson = []
var layer_aoi = []

// landcover ordered list
var land_cover_list = []


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
    function MapSearch({ map }) {

        // const [position, setPosition] = useState(() => map.getCenter())
        const value_search = useRef()

        const submit_search_A = () => {
            const Nominatim = require('nominatim-geocoder')
            const geocoder = new Nominatim()
            // var s = 'Bangkok, Thailand'
            var s = value_search.current.value
            geocoder.search({ q: s })
                .then((res) => {
                    if (typeof (res[0]) == 'undefined') {
                        // alert('location not found then use default coordinates')
                        console.log('location not found then use default coordinates')
                        let rec = L.rectangle(L.latLng(g_lat, g_lon).toBounds(4000))
                        rec.addTo(map)
                        layer_aoi.push(rec)
                        map.fitBounds(rec.getBounds())

                        lat2 = rec.getBounds()._northEast.lat
                        lng2 = rec.getBounds()._northEast.lng
                        lat1 = rec.getBounds()._southWest.lat
                        lng1 = rec.getBounds()._southWest.lng
                        axios.get('https://' + config.GCP_EXT_IP + '/aoi', { params: { 'lng1': lng1, 'lng2': lng2, 'lat1': lat1, 'lat2': lat2 } }).then(res => { console.log('input aoi', res.data) })
                        console.log('location not found then use default coordinates')
                        console.log(lng1, lng2, lat1, lat2)
                    } else {
                        g_lat = res[0].lat
                        g_lon = res[0].lon
                        console.log('location found', g_lat, g_lon)
                        // submit_search_B(g_lat, g_lon)
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
                    }
                }).catch((error) => { console.log(error) })
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
                <Button type="submit" variant="contained" sx={{ ml: 2, mr: 1 }} onClick={submit_search_A} >Search AOI</Button>
                <Button type="submit" variant="contained" sx={{ ml: 2, mr: 1 }} onClick={submit_geometry} >Submit Geometry</Button>
            </div>
        )
    }
    

    // 
    const value_wind_spe = useRef()
    const value_wind_dir = useRef()

    const submit_weather = () => {
        axios.get('http://api.weatherapi.com/v1/current.json?key=' + config.WEATHER_API_KEY + '&q=' + g_lat + ',' + g_lon + '&aqi=no')
            .then(res => {
                if (res.data.location.country != 'Thailand') {
                    console.log('wrong coordinates')
                    alert('wrong coordinates')
                } else {
                    console.log(res.data.location.country == 'Thailand', res.data.location.region)
                    value_wind_spe.current.value = res.data.current.wind_kph
                    value_wind_dir.current.value = res.data.current.wind_degree
                    axios.get('https://' + config.GCP_EXT_IP + '/weather', { params: { 'wind_dir': res.data.current.wind_degree, 'wind_spe': res.data.current.wind_kph } }).then(res => { console.log('input weather', res.data) })
                }
            }).catch(err => console.log(err.data))
    }


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
                if (_lat.length!=_lon.length) { console.error('firms lat lon not the same size') }
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
        // let rad = 1000000 // m^2
        // let rec = L.rectangle(L.latLng(g_lat, g_lon).toBounds(rad))

        // var lat1 = rec._bounds._southWest.lat
        // var lat2 = rec._bounds._northEast.lat
        // var lng1 = rec._bounds._southWest.lng
        // var lng2 = rec._bounds._northEast.lng

        var _aoi = lng1 + ',' + lat1 + ',' + lng2 + ',' + lat2

        var _today = new Date()
        _today = _today.getFullYear() + '-' + String(_today.getMonth() + 1).padStart(2, '0') + '-' + String(_today.getDate()).padStart(2, '0')
        
        var url = [
            'http://firms.modaps.eosdis.nasa.gov/api/area/csv/' + config.FIRM_API_KEY + '/MODIS_NRT/' + _aoi + '/1/' + _today,
            'http://firms.modaps.eosdis.nasa.gov/api/area/csv/' + config.FIRM_API_KEY + '/MODIS_SP/' + _aoi + '/1/' + _today,
            'http://firms.modaps.eosdis.nasa.gov/api/area/csv/' + config.FIRM_API_KEY + '/VIIRS_NOAA20_NRT/' + _aoi + '/1/' + _today,
            'http://firms.modaps.eosdis.nasa.gov/api/area/csv/' + config.FIRM_API_KEY + '/VIIRS_SNPP_NRT/' + _aoi + '/1/' + _today,
            'http://firms.modaps.eosdis.nasa.gov/api/area/csv/' + config.FIRM_API_KEY + '/VIIRS_SNPP_SP/' + _aoi + '/1/' + _today
        ]

        _get_axios_FIRMS(url)
            .then((_res) => {
                let lat_lon = []
                for (let i = 0; i < _res.length; i++) {
                    if (_res[i].length!=0) {
                        lat_lon.push(_res[i])
                    }
                }
                _res.send('lat_lon', lat_lon)
            })
        
    }

    var geojson_point = {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [125.6, 10.1]
        },
        "properties": {
            "value": 1
        }
    }

    const submit_hotspot = () => {
        if (draw_list.length > 0) {
            console.log('submit_hotspot', draw_list.length)
            collection = []
            for (let n = 0; n < draw_list.length; n++) {
                var geojson = draw_list[n].toGeoJSON()
                geojson.properties.value = 1
                collection.push(JSON.stringify(geojson))
            }

            console.log(321312312, collection)

            var features_collection = JSON.stringify({
                type: 'FeatureCollection',
                features: collection.map(JSON.parse)
            })

            console.log(654564564, features_collection)

            // var candy = []
            // for (let n = 0; n < draw_list.length; n++) {
            //     if (typeof(draw_list[n]._latlng) != 'undefined') { // a point
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
            axios.get('https://' + config.GCP_EXT_IP + '/test', { params: { 'features_collection': features_collection } }).then(res => { console.log('input draw list', res.data) })
            
        }
        // else {
        //     console.log('draw_list.length == 0')
        // }
    }


    const import_land_cover = () => {
        console.log('import_land_cover')
    }

    const [ landcover, setLandCover ] = React.useState('')

    const handle_change_Land_cover = (event) => {
        setLandCover(event.target.value)
        // console.log(landcover, candidate_geojson.length)
    }

    const submit_land_cover = () => {
        if (candidate_geojson.length <= land_cover_list.length) {
            console.log('land cover list full')
        } else {
            land_cover_list.push(landcover)
            console.log(candidate_geojson.length)
            console.log(land_cover_list.length)
        }
    }
    
    // // geometry draw
    // var candidate_geojson = []
    // var layer_aoi = []
    var test11 = 0
    var test22 = 0
    var test33 = 0

    // draw_list is imported from drawtool.js
    const submit_geometry = () => {
        // console.log(draw_list)
        // for (let i = 0; i < draw_list.length; i++) {
            //     candidate_geojson.push(draw_list[i].toGeoJSON())
            // }
        // https://34.142.209.147/grass_5
        

        axios.get('https://' + config.GCP_EXT_IP + '/grass_1').then(res => { 
            axios.get('https://' + config.GCP_EXT_IP + '/grass_2').then(res => {
                axios.get('https://' + config.GCP_EXT_IP + '/grass_3').then(res => {
                    axios.get('https://' + config.GCP_EXT_IP + '/grass_4').then(res => {
                        axios.get('https://' + config.GCP_EXT_IP + '/grass_5').then(res => {
                            axios.get('https://' + config.GCP_EXT_IP + '/grass_6').then(res => {
                                axios.get('https://' + config.GCP_EXT_IP + '/grass_7').then(res => {
                                    axios.get('https://' + config.GCP_EXT_IP + '/grass_8a').then(res => { test11 = res.data; if (test11 != 0) { L.geoJSON(res.data, { fillColor: 'red', weight: 2, opacity: 1, color: 'red', fillOpacity: 0.7 }).addTo(map) } })
                                    axios.get('https://' + config.GCP_EXT_IP + '/grass_8b').then(res => { test22 = res.data; if (test22 != 0) { L.geoJSON(res.data, { fillColor: 'orange', weight: 2, opacity: 1, color: 'orange', fillOpacity: 0.7 }).addTo(map) } })
                                    axios.get('https://' + config.GCP_EXT_IP + '/grass_8c').then(res => { test33 = res.data; if (test33 != 0) { L.geoJSON(res.data, { fillColor: 'yellow', weight: 2, opacity: 1, color: 'yellow', fillOpacity: 0.7 }).addTo(map) } })
                                })
                            })
                        })
                    })
                })
            })
        })


        
        // 18.85021771579519,98.72216402467477

        
        // axios.get('https://' + GCP_EXT_IP + '/grass_8a')
        //     .then(res => {
        //         console.log(312312312)
                // let geometry = L.geoJSON(JSON.parse(res.data)).addTo(map)
        //         console.log(312312312)
        //     }).catch(err => console.log(err.data))
        
            
    }
    // 


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
                            <Grid item xs={12} md={8} lg={12}>
                                <Paper sx={{ mt: 5, p: 0, display: 'flex', flexDirection: 'column', height: 800, }}>                                    
                                    {/* <MapContainer className="markercluster-map" center={[51.0, 19.0]} zoom={4} maxZoom={18} scrollWheelZoom={false} style={{ width: '200', height: '90vh' }}> */}
                                    
                                    {/* <MapContainer className="markercluster-map" center={[14.488396495971253, 100.6615092985177]} zoom={8} minZoom={5} maxZoom={18} scrollWheelZoom={false} > */}
                                        {/* <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' /> */}
                                        {/* <DrawTools /> */}
                                    {/* </MapContainer> */}
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
                                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 2 }} onClick={submit_weather}>นำเข้าข้อมูลสภาพอากาศ</Button>
                                        </FormControl>
                                    </Box>
                                </Paper>
                            </Grid>

                            <Grid item xs={4}>
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                    <Box sx={{ marginTop: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                                        <Typography component="h1" variant="h5"> ข้อมูลจุดความร้อน </Typography>
                                        <FormControl sx={{ m: 1, minWidth: 250 }}>
                                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={submit_hotspot} >ยืนยันข้อมูลจุดความร้อน</Button>
                                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 2 }} onClick={import_hotspot}>นำเข้าข้อมูลจุดความร้อนจาก FIRMS</Button>
                                        </FormControl>
                                    </Box>
                                </Paper>
                            </Grid>

                            <Grid item xs={4}>
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                    <Box sx={{ marginTop: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                                        <Typography component="h1" variant="h5">Land Cover</Typography>
                                        <FormControl sx={{ m: 1, minWidth: 250 }}>
                                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 2 }} onClick={import_land_cover} >นำเข้าข้อมูลแบบจำลองเชื้อเพลิง</Button>
                                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={submit_land_cover} >เลือก</Button>
                                            <Select value={landcover} label="landcover" onChange={handle_change_Land_cover} >
                                                <MenuItem value={0}></MenuItem>
                                                <MenuItem value={1}>ดิน</MenuItem>
                                                <MenuItem value={2}>น้ำ</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Paper>
                            </Grid>

                            <Grid item xs={6}>
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                    <Box sx={{ marginTop: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                                        <FormControl sx={{ m: 1, minWidth: 250 }}>
                                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >การลุกลามของไฟ</Button>
                                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 2 }} >พื้นที่ชุมชน</Button>
                                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 2 }} >ประเมินผลกระทบ</Button>
                                        </FormControl>
                                    </Box>
                                </Paper>
                            </Grid>

                            <Grid item xs={6}>
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                    <Box sx={{ marginTop: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                                        <FormControl sx={{ m: 1, minWidth: 250 }}>
                                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >การลุกลามของไฟ</Button>
                                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 2 }} >พื้นที่ชุมชน</Button>
                                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 2 }} >ประเมินผลกระทบ</Button>
                                        </FormControl>
                                    </Box>
                                </Paper>
                            </Grid>

                        </Grid>

                    </Container>

                </Box>

            </Box>
        </ThemeProvider>
    )
}