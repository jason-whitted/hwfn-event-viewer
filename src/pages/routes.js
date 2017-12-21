import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Search } from './Search';

export default (
  <Switch>
    <Route exact path="/" component={Search} />
    <Route exact path="/search" component={Search} />
    <Route render={() => '404 - Not Found'} />
  </Switch>
);
