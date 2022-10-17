import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Home from "./pages/Home";
import FormPartidaConfig from "./components/GameConfig";
import {BrowserRouter as Router} from "react-router-dom";
import {GlobalStyle} from "./components/GameConfig.styled";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <React.StrictMode>
      <GlobalStyle />
      <FormPartidaConfig />
    </React.StrictMode>
  </Router>
);
