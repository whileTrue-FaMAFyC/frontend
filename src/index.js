import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Board from "./components/Board";
import {EntryPage} from "./components/Board.style";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <EntryPage>
      <Board />
    </EntryPage>
  </React.StrictMode>
);
