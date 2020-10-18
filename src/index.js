import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./store";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";
import history from "./history";
import theme from "./style/themeprovider";
import { GlobalStyle } from "./style/globalstyles";
import * as serviceWorker from "./serviceWorker";
import ReactGA from 'react-ga';

ReactGA.initialize('UA-166135822-3');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <>
          <Helmet>
            <title>PhotoHubs</title>
            <meta
              name="description"
              content="PhotoHub where you can check all your favorite images , as well as the related images of it, and so much more"
            />
          </Helmet>
          <GlobalStyle />
          <App />
        </>
      </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
