const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    main: ['./src/index.js'],
    // styles: ['./src/index.scss'],
  },
  output: {
  	path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].bundle.[hash].js'
  },
  optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // fallback to style-loader in development
          // process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          // 'css-loader',
          // 'sass-loader',

          {
            loader: process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          },
          {
          	loader: 'css-loader',
          },
          {
          	loader: 'postcss-loader',
          	options: {
				      plugins: function () { // postcss plugins, can be exported to postcss.config.js
				        return [
				          require('autoprefixer')
				        ];
				      }
				    }
          },
          {
          	loader: 'sass-loader'
          }
        ],
      },
    ],
  },
  plugins: [
  	new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Bootstrap Seed',
		}),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].[hash].css',
      chunkFilename: '[name].bundle.[hash].js'
    })
  ],
};