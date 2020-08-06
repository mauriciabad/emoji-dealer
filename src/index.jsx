import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from './theme'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';

// TODO: configure authentication
// axios.interceptors.request.use(
//   config => {
//     if (!config.headers.Authorization) {
//       const token = JSON.parse(localStorage.getItem("keyCloak")).token;

//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//     }

//     return config;
//   },
//   error => Promise.reject(error)
// );

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <App />
      </Router>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
