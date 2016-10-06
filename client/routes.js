import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Page, { Foo, Bar } from './page';

const routes = (
  <Route path="/" component={Page} >
    <IndexRoute component={Foo} />
    <Route path="bar" component={Bar} />
  </Route>
);

export default routes;
