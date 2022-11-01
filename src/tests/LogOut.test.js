import "@testing-library/jest-dom";
import * as React from "react";
// import API mocking utilities from Mock Service Worker.
import {rest} from "msw";
// import testing utilitiess
import {render, fireEvent, screen} from "@testing-library/react";
import {BrowserRouter as Router, Link} from "react-router-dom";
import {server} from "../__mocks__/server.js";
import Home from "../pages/Home/Home";
import userEvent from "@testing-library/user-event";

test("render full login component successfully", async () => {
  const handleClick = jest.fn();
  render(
    <div>
      <Router>
        <Home />
      </Router>
    </div>
  );

  localStorage.setItem("user", "1234");
  expect(localStorage.getItem("user")).toEqual("1234");
  fireEvent.click(screen.getByTestId("logOut"));

  expect(handleClick).toHaveBeenCalledTimes(1);
  const emptyToken = localStorage.getItem("user");
  // No se por que el siguiente expect falla
  expect(emptyToken).toEqual("");
});
