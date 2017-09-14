var path = require('path');
var webpack = require("webpack");
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var ManifestPlugin = require('webpack-manifest-plugin');

var config = {
  entry: { 
    main: path.resolve(__dirname, 'client/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'server/public/static/js'),
    filename: '[name].[chunkhash:16].js',
  },
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader?presets[]=es2015&presets[]=react' 
      },
      { 
        test: /\.css$/, // Only .css files
        exclude: /node_modules/,
        use: ['style-loader','css-loader' ]
      }
    ]
  },
  plugins:[
    new ManifestPlugin({
      fileName: 'my-manifest.json'
    })
  ]
};

module.exports = config;
