var path = require('path');
var port = 3000;
var srcPath = path.join(__dirname, '/../src');

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
      actions: srcPath + '/actions/',
      reducers: srcPath + '/reducers/',
      components: srcPath + '/components/',
      containers: srcPath + '/containers/',
      styles: srcPath + '/styles/',
      config: srcPath + '/config/' + process.env.REACT_WEBPACK_ENV
    }
  },
  module: {
    preLoaders: [{
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'src'),
        loader: 'eslint-loader'
      }],
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.styl/,
        loader: 'style-loader!css-loader!postcss-loader!stylus-loader'
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
