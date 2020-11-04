// Dependencies
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

// Pages
import User from './user/pages/User';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';

// Components
import MainNavgation from './shared/components/Navigation/MainNavigation';

function App() {
  return (
    <Router>
      <MainNavgation />
      <main>
        <Switch>
          <Route exact path="/" component={User} />
          <Route exact path="/places/new" component={NewPlace} />
          <Route exact path="/:userId/places" component={UserPlaces} />
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
