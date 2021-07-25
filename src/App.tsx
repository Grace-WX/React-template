import React from 'react';
import './App.css';
import { Switch, Redirect, Route } from 'react-router-dom';
import { adminRouters } from './routes/index';

function App() {
  return (
    <div className="App">
      <Switch>
        {adminRouters.map(route => {
          return <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            render={routeProps => {
              return <route.component {...routeProps} />;
            }}
          />
        })}
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;
