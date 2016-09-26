var path = require('path');
var srcPath = path.join(__dirname, '/../src/');

module.exports = {
  devtool: 'inline-source-map',
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'isparta-instrumenter-loader',
        include: [
          srcPath,
        ]
      }
    ],
    loaders: [
      {
        test: /\.(png|jpg|gif|woff|woff2|css|sass|scss|less|styl)$/,
        loader: 'null-loader'
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [
          path.join(__dirname, '/../src'),
          path.join(__dirname, '/../test'),
        ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ]
  },
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  resolve: {
    extensions: [ '', '.js', '.jsx', '.json' ],
    alias: {
      actions: srcPath + 'actions',
      components: srcPath + 'components',
      sources: srcPath + 'containers',
      stores: srcPath + 'reducers',
      config: srcPath + 'config/' + process.env.REACT_WEBPACK_ENV,
    }
  }
};
