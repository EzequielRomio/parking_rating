import dotenv from 'dotenv';
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './reducer/Store.js'

import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import App from './App';

dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_PRODUCTION_URL || 'http://localhost:8010/proxy/';
axios.defaults.headers = { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` }

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
