import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthProvider from "./providers/AuthProvider";
import { BrowserRouter, } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import "semantic-ui-css/semantic.min.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

import * as serviceWorker from './serviceWorker';
import { initMiddleware, } from "devise-axios";

import { createGlobalStyle, } from "styled-components"
import mainFont from "./fonts/Copperplate.ttc";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #000000 !important;
    color: white !important;
  }

  @font-face {
    font-family: "copperplate" !important;
    src: url(${mainFont}) format("truetype");
  }
`

initMiddleware();

ReactDOM.render(
  <AuthProvider>
    <GlobalStyle />
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
