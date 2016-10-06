// webpack middleware must be loaded before this one

module.exports = (req, res, next) => {
  const compiler = req.app.locals.webpack.compiler;

  return require('webpack-hot-middleware')(compiler)(req, res, next);
}
