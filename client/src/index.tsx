import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AuthProvider from './context/auth';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import 'semantic-ui-css/semantic.min.css';
import './styles/styles.scss';

axios.defaults.withCredentials = true;

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <Switch>
          <ProtectedRoute exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
