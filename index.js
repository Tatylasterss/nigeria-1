var leaflet = require('leaflet');
var heat    = require('leaflet.heat');

// var mapdiv  = document.getElementById('map');
var map    = L.map('map').setView([9.695584, 7.644742], 6);
var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

var osm    = new L.TileLayer(osmUrl);
osm.addTo(map);



