import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import Home from "./pages/Home";
import FormPartidaConfig from "./components/Partida_config_form";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FormPartidaConfig />
  </React.StrictMode>
);
