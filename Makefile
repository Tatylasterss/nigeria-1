build:
	browserify index.js -o bundle.js
watch:
	watchify index.js -o bundle.js
