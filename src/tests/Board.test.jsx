// __tests__/login.js
// again, these first two imports are something you'd normally handle in
// your testing framework configuration rather than importing them in every file.
import "@testing-library/jest-dom";
import * as React from "react";
// import testing utilitiess
import {render, screen} from "@testing-library/react";
import Board from "../components/Board";
import {BrowserRouter as Router, Link} from "react-router-dom";

test("render board component successfully", async () => {
  render(
    <div>
      <Router>
        <Board />
      </Router>
    </div>
  );

  expect.toBeInTheDocument(screen.getByTestId("board"));
});
