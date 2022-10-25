import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {Welcome} from "./pages";
import {App} from "./components";
import {BrowserRouter as Router} from "react-router-dom";
import {GlobalStyle} from "./index.style";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <React.StrictMode>
      <GlobalStyle />
      <App />
      <Welcome />
    </React.StrictMode>
  </Router>
);
