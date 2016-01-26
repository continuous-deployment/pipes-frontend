var path = require('path');

var config = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'app/main.js')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          presets: ['react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css!autoprefixer-loader?{browsers:["last 3 version"]}'
      },
      {
        test: /\.less$/,
        loader: 'style!css!autoprefixer-loader?{browsers:["last 3 version"]}!less'
      },
    ]
  }
};

module.exports = config;
