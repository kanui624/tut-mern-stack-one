import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

// Pages
import User from './user/pages/User';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={User} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
