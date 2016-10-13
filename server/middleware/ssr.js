const fs = require('fs');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const isDev = process.env.NODE_ENV === 'development';

require('babel-register')();

const config = {
  styles: [],
  scripts: ['/bundle.js'],
}

/**
 * base html template
 */
function getMarkup(reactElement, store, assets) {
  const markup = ReactDOMServer.renderToString(reactElement);
  const initialState = store.getState();
  const scripts = assets.scripts.reduce((str, path) => `
${str}
<script src="${path}"></script>`, '');
  const tpl = fs.readFileSync(path.join(__dirname, '../..', 'template', 'index.html'), 'utf8');

  return [
    { key: '%HEAD%', value: `<script>window.__STORE__ = ${JSON.stringify(initialState)};</script>` },
    { key: '%MARKUP%', value: markup },
    { key: '%BODY_SCRIPT%', value: scripts},
  ].reduce((str, current) => str.replace(current.key, current.value), tpl);
}

module.exports = (req, res) => {
  if (isDev) {
    const assetsByChunkName = res.locals.webpackStats.toJson().assetsByChunkName;
    config.scripts = (
      Array.isArray(assetsByChunkName.main) ? assetsByChunkName.main : [assetsByChunkName.main]
    )
      .filter(path => path.endsWith('.js'))
  }
  const ReactRouter = require('react-router');
  const match = ReactRouter.match;
  const RouterContext = React.createFactory(ReactRouter.RouterContext);
  const Provider = React.createFactory(require('react-redux').Provider);
  const routes = require('../../client/routes.js').default;
  const configureStore = require('../../client/store/configure-store.js').default;

  // XXX: prefetch
  const initialState = {
  };

  const store = configureStore(initialState);

  match({ routes: routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      res.send(getMarkup(Provider({ store: store }, RouterContext(renderProps)), store, config));
    } else {
      res.status(404).send('Not found')
    }
  });
};
