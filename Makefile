build:
	browserify base/index.js -o static/js/bundle.js
watch:
	watchify base/index.js -o static/js/bundle.js
