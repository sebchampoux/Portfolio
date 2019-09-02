const path = require('path');

module.exports = {
	mode: 'development',
	entry: [
		'./src/js/main.js',
	],
	output: {
		path: path.resolve(__dirname, 'static'),
		filename: 'js/build.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	devtool: 'eval-source-map'
};
