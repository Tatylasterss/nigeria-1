var db = require('monk')('localhost/nigeria');
var education = db.get('education');

var get_lga = function(unique_lga, cb) {
	var promise = education.find({'unique_lga': unique_lga });
	promise.on('error', function(err) {
		throw err;
	});
	promise.on('success', function(doc) {
		cb(doc);
	});
};

var electricity = function(bool, cb) {
	var promise = education.find({'phcn_electricity':bool});
	promise.on('error', function(err) {
		throw err;
	});
	promise.on('success', function(doc) {
		cb(doc);
	});
};

module.exports = get_lga;