const path = require('path');
const { name } = require('../../package');

module.exports = (production = false) => {
  return {
    output: production
      ? {
          path: path.resolve(__dirname, '../../dist'),
          filename: 'static/[name]/index.[chunkhash].js',
          chunkFilename: 'static/[name].[id].[chunkhash].js',
          publicPath: '/static/',
          library: `${name}-[name]`,
          libraryTarget: 'umd',
          jsonpFunction: `webpackJsonp_${name}`,
          globalObject: 'window'
        }
      : {
          path: path.resolve(__dirname, '../../dist'),
          filename: '[name].js',
          chunkFilename: '[name].js',
          publicPath: '/',
          library: `${name}-[name]`,
          libraryTarget: 'umd',
          jsonpFunction: `webpackJsonp_${name}`,
          globalObject: 'window'
        }
  };
};
