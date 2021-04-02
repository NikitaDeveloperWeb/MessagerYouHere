import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthPage from './pages/AuthPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={AuthPage} />
      </Switch>
    </div>
  );
}

export default App;
