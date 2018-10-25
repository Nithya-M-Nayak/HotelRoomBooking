var webpack = require("webpack");
const path=require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname,"dest/assets"),
		filename: "bundle.js",
		publicPath: "assets"
	},
	devServer: {
		inline: true,
		contentBase:path.resolve(__dirname, './dest'),
		port: 3000
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: path.resolve(__dirname,"./node_modules/babel-loader"),
				query: {
					presets: ["env", "stage-0", "react"]
				}
			},
				{
				test: /\.json$/,
				exclude: /(node_modules)/,
				loader: "json-loader"
			},
			{
                 test: /\.css$/,  
				 loaders: ['style-loader', 'css-loader']
			}
		]
	}
}







