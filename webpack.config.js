var path = require("path");

module.exports = {
	entry: "./app/entry.js",
	output: {
		path: path.join(__dirname, "public", "assets"),
		filename: "[hash].js",
		publicPath: "assets/"
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: "jsx-loader" },
			{ test: /\.css$/, loader: "style-loader!css-loader" },
			{ test: /\.png$/, loader: "url-loader" },
			{ test: /\.jpg$/, loader: "file-loader" },
		]
	}
}