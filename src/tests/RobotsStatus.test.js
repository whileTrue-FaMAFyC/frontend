import "@testing-library/jest-dom";
import * as React from "react";
// import API mocking utilities from Mock Service Worker.
import {rest} from "msw";
// import testing utilitiess
import {render, fireEvent, screen} from "@testing-library/react";
import Login from "../components/Login/Login";
import {BrowserRouter as Router, Link} from "react-router-dom";
import {server} from "../__mocks__/server.js";
import RobotsStatus from "../components/BotInGame/RobotsStatus";

// beforeAll(() => server.listen());
// afterEach(() => {
//   server.resetHandlers();
//   window.localStorage.removeItem("user");
// });
// afterAll(() => server.close());

test("render robots status bar successfully", async () => {
  render(
    <RobotsStatus
      names={["Wallee", "Eva", "Roberto", "Rocoloco"]}
      health={[60, 50, 30, 100]}
    />
  );

  expect.toBeInTheDocument(screen.findByText("Wallee"));
  expect.toBeInTheDocument(screen.findByText("Eva"));
  expect.toBeInTheDocument(screen.findByText("Roberto"));
  expect.toBeInTheDocument(screen.findByText("Rocoloco"));
  expect.toBeInTheDocument(screen.findByText("60"));
  expect.toBeInTheDocument(screen.findByText("50"));
  expect.toBeInTheDocument(screen.findByText("30"));
  expect.toBeInTheDocument(screen.findByText("100"));
  expect.toBeInTheDocument(screen.getAllByTestId("name-and-bar"));
  expect.toBeInTheDocument(screen.getAllByTestId("name"));
  expect.toBeInTheDocument(screen.getAllByTestId("bar"));
});
