var restify = require('restify');
var fs      = require('fs');
var get_lga = require('./logic/utils');

var server = restify.createServer({
	name: 'nigeria',
});


////////////
// ROUTES //
////////////


server.get('lga/:lga', function (req, res, next) {
	get_lga(req.params.lga, function(doc) {
		res.send(doc);
		return next();
	});
});

server.get('electricity/:bool', function (req, res, next) {
	get_lga(req.params.lga, function(doc) {
		res.send(doc);
		return next();
	});
});

server.get('/.*/', restify.serveStatic({
	directory: __dirname + '/static',
	default:   'index.html',
}));

server.listen(8080);