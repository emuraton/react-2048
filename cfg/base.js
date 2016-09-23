const path = require('path');
const port = 3000;
const srcPath = path.join(__dirname, '/../src');

module.exports = {
  port: port,
  debug: true,
  output: {
    path: path.join(__dirname, '/../dist'),
    filename: 'app.js',
    publicPath: '/dist/'
  },
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    port: port,
    publicPath: '/dist/',
    noInfo: false
  },
  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx'
    ],
    alias: {
      actions: srcPath + '/actions',
      reducers: srcPath + '/reducers',
      components: srcPath + '/components',
      containers: srcPath + '/containers',
      config: srcPath + '/config/' + process.env.REACT_WEBPACK_ENV
    }
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'react-hot!babel-loader',
        include: srcPath,
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=8192'
      },
        { test: /\.json$/, loader: "json-loader" },

    ]
  },
  postcss: function () {
    return [];
  }
};
