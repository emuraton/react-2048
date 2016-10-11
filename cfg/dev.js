const path = require('path');
const webpack = require('webpack');
const _ = require('lodash');

const baseConfig = require('./base');

var config = _.merge({
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:3001',
    'webpack/hot/only-dev-server',
    './src/run'
  ],
  cache: true,
  devtool: 'eval',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}, baseConfig);

module.exports = config;
