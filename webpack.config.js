
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-3-webpack-plugin');

module.exports = {
	entry: [
		/*'babel-polyfill',/**/
		'./src/js/main.js',
		'./src/scss/main.scss'
	],
	output: {
		path: path.resolve(__dirname, 'static'),
		filename: 'js/build.js'
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'css/styles.css'
						}
					},
					{
						loader: 'extract-loader'
					},
					{
						loader: 'css-loader?-url'
					},
					{
						loader: 'postcss-loader'
					},
					{
						loader: 'sass-loader'
					}
				],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['env', 'stage-3']
				}
			}
		]
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true,
		overlay: true,
		port: 8081
	},
	plugins: [
		new UglifyJsPlugin()
	]
};
