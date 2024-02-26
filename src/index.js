import React from "react";
import ReactDOM from "react-dom";
import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import App from "./App";
import { store as store1 } from "./store/store.js";

ReactDOM.render(
  <StrictMode>
    <Provider store={store1}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
