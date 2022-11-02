import "@testing-library/jest-dom";
import * as React from "react";
// import API mocking utilities from Mock Service Worker.
import {rest} from "msw";
// import testing utilitiess
import {render, screen} from "@testing-library/react";
import Home from "../pages/Home/Home";
import {BrowserRouter as Router, Link} from "react-router-dom";

test("render robots status bar successfully", async () => {
  render(
    <Router>
      <Home />
    </Router>
  );

  expect.toBeInTheDocument(screen.getByTestId("linkToCreateMatch"));
  expect.toBeInTheDocument(screen.getByTestId("linkToCreateSim"));
  expect.toBeInTheDocument(screen.getByTestId("linkToCreateBot"));
  expect.toBeInTheDocument(screen.getByTestId("linkToListMatch"));
});
