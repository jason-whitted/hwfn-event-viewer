import React from 'react';
import { Switch, Route } from 'react-router-dom';

export default (
  <Switch>
    <Route exact path="/" render={() => 'Coming soon...'} />
    <Route render={() => '404 - Not Found'} />
  </Switch>
);
