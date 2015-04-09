var leaflet = require('leaflet');
var heat    = require('leaflet.heat');

// var mapdiv  = document.getElementById('map');
var map    = L.map('map').setView([9.695584, 7.644742], 6);
var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

var osm    = new L.TileLayer(osmUrl);
osm.addTo(map);










/////////
// DOM //
/////////

var toggle_li = function() {
	console.log('foo');
};

// listener to handle sidebar
$('#menu_toggle').on('click', function() {
	if ($('#left_open').css('margin-left') == '50px') {
		window.setTimeout( function() {
			$('#menu_toggle').css('color', '#e5e5e5');
			$('#left_open').css('margin-left', '-148px');
			$('#left_closed ul li').css('height', '50px');
		}, 0);
	}
	else {
		window.setTimeout( function() {
			$('#menu_toggle').css('color', '#898989');
			$('#left_open').css('margin-left', '50px');
			$('#left_closed #menu_heatmap').css('height', $('#open_guts #menu_heatmap').css('height'));
		}, 0);
	}
});