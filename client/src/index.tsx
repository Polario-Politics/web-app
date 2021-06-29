import React from 'react';
import ReactDOM from 'react-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import 'semantic-ui-css/semantic.min.css';
import './styles/styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Home />
  </React.StrictMode>,
  document.getElementById('root'),
);
