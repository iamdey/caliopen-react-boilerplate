const path = require('path');
const express = require('express');
const app = express();
const isDev = process.env.NODE_ENV === 'development';

app.set('port', (process.env.PORT || 3000));

//-------
// generate js on the fly w/ HMR
// instead client must be released
if (isDev) {
  const webpack = require('webpack');
  const config = require('../webpack/webpack.config.js');
  const compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, { serverSideRender: true }));
  app.use(require('webpack-hot-middleware')(compiler));
}

//-------
// assets & eventual bundle.js
app.use(express.static(path.join(__dirname, '..', 'public')));

//-------
app.get('*', require('./middleware/ssr.js'));

module.exports = app;
