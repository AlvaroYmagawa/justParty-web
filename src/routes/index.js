import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Promoter from '../pages/Promoter';
import Event from '../pages/Event';
import NewEvent from '../pages/NewEvent';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/users/:userId" component={Promoter} isPrivate />
      <Route path="/events/:eventId" component={Event} isPrivate />
      <Route path="/developers/events/new" component={NewEvent} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
