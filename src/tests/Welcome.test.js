import "@testing-library/jest-dom";
import React from "react";
import userEvent from "@testing-library/user-event";
import {render, screen} from "@testing-library/react";
import Welcome from "../pages/Welcome/Welcome";
import {BrowserRouter as Router, Link} from "react-router-dom";

test("render Welcome component successfully", async () => {
  render(
    <Router>
      <Welcome />
    </Router>
  );

  const img = await screen.findByTestId("img");
  const toRegister = await screen.findByTestId("linkToReg");
  const toLogin = await screen.findByTestId("linkToLogin");

  expect(img).toBeInTheDocument;
  expect(toRegister).toBeInTheDocument;
  expect(toLogin).toBeInTheDocument;
});

test("navs to Register", async () => {
  render(
    <Router>
      <Welcome />
    </Router>
  );

  const toRegister = await screen.findByTestId("linkToReg");

  userEvent.click(toRegister);

  expect(screen.findByTestId("Username")).toBeInTheDocument;
});

test("navs to Login", async () => {
  render(
    <Router>
      <Welcome />
    </Router>
  );

  const toLogin = await screen.findByTestId("linkToLogin");

  userEvent.click(toLogin);

  expect(screen.findByTestId("titleUsrenameOrEmail")).toBeInTheDocument;
});
