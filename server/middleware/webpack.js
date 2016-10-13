const webpackMiddleware = require("webpack-dev-middleware");
const path = require('path');
const webpack = require('webpack');
const config = require('../../webpack/webpack.config.js');

const compiler = webpack(config);
const middleware = webpackMiddleware(compiler, {
  serverSideRender: true,
});

module.exports = (req, res, next) => {
  req.app.locals.webpack = {
    config,
    compiler,
  };

  return middleware(req, res, next);
};
