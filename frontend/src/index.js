import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';

import {BrowserRouter as Router } from 'react-router-dom'
import StoreContextProvider from './context/StoreContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <StoreContextProvider>
    <App />
    </StoreContextProvider>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
