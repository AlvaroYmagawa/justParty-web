import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import UserDashboard from '../pages/User/Dashboard';
import Profile from '../pages/User/Profile';
import PromoterPage from '../pages/User/PromoterPage';
import Event from '../pages/User/EventPage';

import PromoterDashboard from '../pages/Promoter/Dashboard';
import NewEvent from '../pages/Promoter/NewEvent';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={UserDashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/users/:userId" component={PromoterPage} isPrivate />
      <Route path="/events/:eventId" component={Event} isPrivate />

      <Route path="/developers" component={PromoterDashboard} isPrivate />
      <Route path="/developers/events/new" component={NewEvent} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
