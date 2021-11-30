import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// axios.defaults.baseURL = 'https://nintendo-shop.herokuapp.com/';
// axios.defaults.headers.post['Content-Type'] = 'application/json';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
