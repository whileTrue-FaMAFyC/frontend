import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import Home from "./pages/Home";
import Formulario from "./components/Register";
import {GlobalStyle} from "./components/Register.style";
import {BrowserRouter as Router} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <React.StrictMode>
      <GlobalStyle />
      <Formulario />
    </React.StrictMode>
  </Router>
);
