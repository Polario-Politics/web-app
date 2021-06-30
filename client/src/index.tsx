import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import 'semantic-ui-css/semantic.min.css';
import './styles/styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
