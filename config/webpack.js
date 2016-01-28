var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//var atImport = require('postcss-import');
require('es6-promise').polyfill();
var glob = require('glob');

module.exports.webpack = {
  options: {
    devtool: 'eval',
    entry: glob.sync('./assets/js/components/**/scripts/components/*.js'),
    output: {
      path: path.resolve(__dirname, '../.tmp/public/js'),
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel',
          query: {
            presets: ['react', 'es2015']
          }
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css!sass')
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new ExtractTextPlugin('../styles/style.css')
    ]
  },
  watchOptions: {
    aggregateTimeout: 300
  }
};
