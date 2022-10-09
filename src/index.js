import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
// import Home from "./pages/Home";

// async function render() {
//   if (process.env.NODE_ENV === "development") {
//     const {server} = require("./mocks/server");
//     await server.start();
//   }

//   ReactDOM.render(<App />, document.getElementById("root"));
// }

// render();

if (process.env.NODE_ENV === "development") {
  const {server} = require("./mocks/server");
  server.start();
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
