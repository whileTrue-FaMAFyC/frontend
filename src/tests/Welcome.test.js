import "@testing-library/jest-dom";
import React from "react";
import userEvent from "@testing-library/user-event";
import {render, screen} from "@testing-library/react";
import Welcome from "../pages/Welcome";

test("render Welcome component successfully", () => {
  render(<Welcome />);

  const img = screen.findByTestId("img");
  const toRegister = screen.findByTestId("linkToReg");
  const toLogin = screen.findByTestId("linkToLogin");

  expect(img).toBeInTheDocument;
  expect(toRegister).toBeInTheDocument;
  expect(toLogin).toBeInTheDocument;
});

test("navs to Register", () => {
  render(<Welcome />);

  const toRegister = screen.findByTestId("linkToReg");

  userEvent.click(toRegister);

  expect(screen.findByTestId("Register")).toBeInTheDocument;
});

test("navs to Login", () => {
  render(<Welcome />);

  const toLogin = screen.findByTestId("linkToLogin");

  userEvent.click(toLogin);

  expect(screen.findByTestId("Login")).toBeInTheDocument;
});
