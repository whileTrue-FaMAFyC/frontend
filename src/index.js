import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
// import Home from "./pages/Home";

// const express = require("express");

// const app = express();

// app.use(express.json({limit: "10mb", extended: true}));
// app.use(
//   express.urlencoded({limit: "10mb", extended: true, parameterLimit: 50000})
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
