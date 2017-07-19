import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './containers/App';
import Home from './containers/Home';
import page404 from './containers/page404';
import DateSelector from './components/DateSelector';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="404" component={page404} />
    <Route path="date" component={DateSelector} />
    <Redirect from="*" to="404" />
  </Route>
);
