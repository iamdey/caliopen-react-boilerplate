const path = require('path');
const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');

const rootFolder = path.resolve(__dirname, '..');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: isDev ? [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    'webpack/hot/only-dev-server',
    './client/index.js',
  ] : [
    './client/index.js',
  ],
  output: {
    path: path.join(__dirname, '..', 'public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: isDev ? [
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin(),
  ] : [],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, '../client/'),
      loaders: ['babel-loader'],
    }]
  },
};
