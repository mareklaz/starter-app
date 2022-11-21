import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { AuthContextProvider } from './context/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </AuthContextProvider>
);
