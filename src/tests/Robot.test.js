// __tests__/login.js
// again, these first two imports are something you'd normally handle in
// your testing framework configuration rather than importing them in every file.
import "@testing-library/jest-dom";
import React from "react";
import {render, screen} from "@testing-library/react";
import Robot from "../components/Robot";

test("render board component successfully", async () => {
  render(<Robot />);

  expect.toBeInTheDocument(screen.findByRole("robot"));
});
