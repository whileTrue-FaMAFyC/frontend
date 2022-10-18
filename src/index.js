import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
<<<<<<< HEAD
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
=======
import {App} from "./components";
import {BrowserRouter as Router} from "react-router-dom";
import {GlobalStyle} from "./index.style";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </Router>
>>>>>>> develop
);
