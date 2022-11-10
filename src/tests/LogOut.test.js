import "@testing-library/jest-dom";
import * as React from "react";
// import API mocking utilities from Mock Service Worker.
import {rest} from "msw";
// import testing utilitiess
import {render, fireEvent, screen, waitFor} from "@testing-library/react";
import {BrowserRouter as Router} from "react-router-dom";
import {act} from "react-dom/test-utils";
import Home from "../pages/Home/Home";

// User is logged in and has a token
beforeAll(() => localStorage.setItem("user", "1234"));

test("render full login component successfully", async () => {
  act(() =>
    render(
      <div>
        <Router>
          <Home />
        </Router>
      </div>
    )
  );

  // User has a token
  expect(localStorage.getItem("user")).toEqual("1234");

  // User logs out
  act(() => fireEvent.click(screen.getByTestId("logOut")));

  // Token does not exist anymore
  waitFor(() => expect(localStorage.getItem("user")).toEqual(null));
});
