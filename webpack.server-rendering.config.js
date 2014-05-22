var path = require("path");

module.exports = {
	entry: "./server/page.js",
	target: "node",
	output: {
		path: path.join(__dirname, "public", "assets"),
		filename: "../../server/page.generated.js",
		publicPath: "assets/",
		libraryTarget: "commonjs2"
	},
	externals: /^[a-z\-0-9]+$/,
	module: {
		loaders: [
			{ test: /\.js$/,   loader: "jsx-loader" },
			{ test: /\.json$/, loader: "json-loader" },
			{ test: /\.css$/,  loader: path.join(__dirname, "server", "style-collector") + "!css-loader" },
			{ test: /\.png$/,  loader: "url-loader" },
			{ test: /\.jpg$/,  loader: "file-loader" },
		]
	}
}