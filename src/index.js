import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Store from "./store/index";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
