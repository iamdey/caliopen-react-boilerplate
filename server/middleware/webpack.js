const webpackMiddleware = require("webpack-dev-middleware");
const path = require('path');

const webpack = require('webpack');
const config = require('../../webpack/webpack.config.js');
const compiler = webpack(config);

module.exports = (req, res, next) => {

  req.app.locals.webpack = {
    config,
    compiler,
  };

  return webpackMiddleware(req.app.locals.webpack.compiler, {
    contentBase: path.join(__dirname, '../..', 'public'),
    publicPath: '/',
    hot: true,
    historyApiFallback: true,
    serverSideRender: true,
  })(req, res, next);
};
