import React from 'react';
import ReactDOM from 'react-dom';

import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import 'semantic-ui-css/semantic.min.css';
import './styles/styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Dashboard />
  </React.StrictMode>,
  document.getElementById('root'),
);
