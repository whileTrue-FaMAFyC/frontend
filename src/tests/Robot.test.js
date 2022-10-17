import "@testing-library/jest-dom";
import React from "react";
import {render, screen} from "@testing-library/react";
import Robot from "../components/Robot";

test("render board component successfully", () => {
  render(<Robot />);

  expect(screen.findByTestId("board")).toBeInTheDocument;
});

test("render robot component successfully", () => {
  render(<Robot />);

  expect(screen.findByTestId("robot")).toBeInTheDocument;
});
