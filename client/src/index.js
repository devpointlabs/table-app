import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthProvider from "./providers/AuthProvider";
import { BrowserRouter, } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

import * as serviceWorker from './serviceWorker';
import { initMiddleware, } from "devise-axios";

import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #000000 !important;
    color: white !important;

  }
`

initMiddleware();

ReactDOM.render(
  <AuthProvider>
    <GlobalStyle />
    <BrowserRouter>

      <App />
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
