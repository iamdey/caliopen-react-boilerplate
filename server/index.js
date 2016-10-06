const path = require('path');
const express = require('express');
const app = express();
const isDev = process.env.NODE_ENV === 'development';

app.set('port', (process.env.PORT || 3000));

//-------
// generate js on the fly w/ HMR
// instead client must be released
if (isDev) {
  app.use(require('./middleware/webpack.js'));
  app.use(require('./middleware/webpack-hot.js'));
}

//-------
// assets & eventual bundle.js
app.use(express.static(path.join(__dirname, '..', 'public')));

//-------
app.get('*', require('./middleware/ssr.js'));

//-------
app.listen(app.get('port'), function() {
  console.log(`Server started: http://localhost: ${app.get('port')}/`);
});
