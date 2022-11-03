import "@testing-library/jest-dom";
import * as React from "react";
// import API mocking utilities from Mock Service Worker.
import {rest} from "msw";
// import testing utilitiess
import {render, fireEvent, screen} from "@testing-library/react";
import StatusBar from "../components/Simulation/StatusBar";

test("render robots status bar successfully", async () => {
  render(<StatusBar name='Wallee' completed='60' bgcolor='red' />);

  expect.toBeInTheDocument(await screen.findByText("Wallee"));
  expect.toBeInTheDocument(await screen.findByText("60"));
  expect.toBeInTheDocument(screen.getAllByTestId("name-and-bar"));
  expect.toBeInTheDocument(screen.getAllByTestId("name"));
  expect.toBeInTheDocument(screen.getAllByTestId("bar"));
  expect(screen.getAllByTestId("name-and-bar")).toHaveLength(1);
  expect(screen.getAllByTestId("name")).toHaveLength(1);
  expect(screen.getAllByTestId("bar")).toHaveLength(1);
});
