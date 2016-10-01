var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'compiled/src');
var APP_DIR = path.resolve(__dirname, 'compiled/src');
var SPEC_DIR = path.resolve(__dirname, 'compiled/spec');

var config = {
  entry: {
    app: APP_DIR + '/index.js',
    spec: SPEC_DIR + '/spec.js'
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.[name].js'
  },
  devtool: 'source-map'
};

module.exports = config;