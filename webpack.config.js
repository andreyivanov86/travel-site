const path = require('path');

module.exports = {
	entry:"./app/assets/scripts/App.js",
	output: {
		path: path.join(__dirname, "./app/temp/scripts"),
		filename: "App.js"
	}
}