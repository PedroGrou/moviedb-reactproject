import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './allStyle.css';
import App from './App';
import Title from './Components/Title';
import Footer from './Components/Footer';
import { AppProvider } from './context';
import { BrowserRouter as Router } from 'react-router-dom';
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <Title />
        <App />
        <Footer />
      </Router>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
