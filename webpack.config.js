var path = require('path');

var config = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'app/index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css!autoprefixer-loader?{browsers:["last 3 version"]}'
      },
      {
        test: /\.less$/,
        loader: 'style!css!autoprefixer-loader?{browsers:["last 3 version"]}!less'
      }
    ]
  }
};

module.exports = config;
