import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import RecoveryPage from './pages/RecoveryPage';
import RegistrationPage from './pages/RegisterPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={AuthPage} />
        <Route exact path="/registration" component={RegistrationPage} />
        <Route exact path="/recovery" component={RecoveryPage} />
      </Switch>
    </div>
  );
}

export default App;
