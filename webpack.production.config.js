var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var config = {
  entry: {
    app: path.resolve(__dirname, 'app/main.js'),
    vendors: ['react']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [node_modules_dir],
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
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ]
};

module.exports = config;
