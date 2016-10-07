# Caliopen React Boilerplate

I was unable to have a dead simple app which provide Hot Module Reload (HMR) and Server Side
Rendering (SSR) using actual known boilerplates or Creacte React App.

[CRA](https://github.com/facebookincubator/create-react-app) is really cool for quick prototyping
but not designed for configuration.

So here it is, I take ideas from [all of those boilerplates](http://andrewhfarmer.com/starter-project/)
and started to use [Expressjs](http://expressjs.com/), webpack and some middlewares
([webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware),
[webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware), a home made ssr
middleware), that's all.

## Features

* SSR (universal js, isomorphic)
* redux
* react-router
* webpack ( + webpack-dashboard)
* HMR

## TODO

* support assets
* prefetch redux
* add bundle.js filename for production env.
