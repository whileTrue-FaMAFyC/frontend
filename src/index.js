import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Home from "./pages/Home";
import FormPartidaConfig from "./components/Partida_config_form";
import {BrowserRouter as Router} from "react-router-dom";
import {GlobalStyle} from "./components/Partida_config_form.style";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <React.StrictMode>
      <GlobalStyle />
      <FormPartidaConfig />
    </React.StrictMode>
  </Router>
);
