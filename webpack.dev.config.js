var webpack = require('webpack');
var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var publicPath = 'http://127.0.0.1:3000/';
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

var config = {
  entry: [ hotMiddlewareScript, './client/index.js'],
  output: {
    path: path.resolve(__dirname, './server/public/static/js/'),
    filename: 'bundle.js',
    publicPath: publicPath
  },
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader?presets[]=es2015&presets[]=react' 
      },
      { 
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader','css-loader']
      }
    ]
  },
  plugins: [
        // new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};

module.exports = config;
