import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { mainRouters } from './routes/index';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/admin" render={() => <App />} />
      {mainRouters.map(route => {
        return <Route key={route.path} {...route} />
      })}
      <Redirect to="/admin/homePage" />
    </Switch>
  </Router>,
  document.getElementById('root')
);

