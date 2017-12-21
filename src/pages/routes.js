import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Cities } from './Cities';

export default (
  <Switch>
    <Route exact path="/" render={() => 'Coming soon...'} />
    <Route exact path="/cities" component={Cities} />
    <Route render={() => '404 - Not Found'} />
  </Switch>
);
