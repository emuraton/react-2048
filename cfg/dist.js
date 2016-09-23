const path = require('path');
const webpack = require('webpack');
const _ = require('lodash');

var baseConfig = require('./base');

var config = _.merge({
  entry: path.join(__dirname, '../src/components/run'),
  cache: false,
  debug: false,
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),,
    new webpack.optimize.UglifyJsPlugin({
      compressor: {warnings: false}
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}, baseConfig);

module.exports = config;
