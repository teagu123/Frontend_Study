const path = require('path')
const HTMLIFrameElement = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: {
		main: './src/app.js',
	},

	output: {
		path: path.resolve('./dist'),
		filename: '[name].js',
	},

	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.png$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							publicPath: '../dist',
						},
					},
				],
			},
		],
	},

	plugins: [
		new HTMLIFrameElement({
			template: './src/index.html',
		}),
	],
}
