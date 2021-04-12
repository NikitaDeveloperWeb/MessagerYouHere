import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import Home from './pages/Home/Home';
import RecoveryPage from './pages/RecoveryPage';
import RegistrationPage from './pages/RegisterPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={AuthPage} />
        <Route exact path="/registration" component={RegistrationPage} />
        <Route exact path="/recovery" component={RecoveryPage} />
        <Route exact path="/home">
          <Home page="home" />
        </Route>
        <Route exact path="/messages">
          <Home page="message" />
        </Route>
        <Route exact path="/search">
          <Home page="search" />
        </Route>
        <Route exact path="/setting">
          <Home page="setting" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
