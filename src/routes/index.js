import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn/index';
import SignUp from '../pages/SignUp/index';

import Profile from '../pages/Profile/index';
import Dashboard from '../pages/Dashboard/index';
import Details from '../pages/Details/index';
import Meetup from '../pages/Meetup/index';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/details" component={Details} isPrivate />
      <Route path="/meetup" component={Meetup} isPrivate />
    </Switch>
  );
}
