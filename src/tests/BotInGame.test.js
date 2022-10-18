import "@testing-library/jest-dom";
import React from "react";
import {render, screen} from "@testing-library/react";
import BotInGame from "../components/BotInGame/BotInGame";

test("render board component successfully", () => {
  render(<BotInGame />);

  expect(screen.findByTestId("board")).toBeInTheDocument;
});

test("render robot component successfully", () => {
  render(<BotInGame />);

  expect(screen.findByTestId("robot")).toBeInTheDocument;
});
