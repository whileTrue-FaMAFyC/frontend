import "@testing-library/jest-dom";
import React from "react";
import {render, screen} from "@testing-library/react";
import Board from "../components/Simulation/Board";
import {props} from "../__mocks__/board";

test("render board component successfully", async () => {
  render(
    <Board
      colors={props.colors}
      robots={props.simulation[0].robots}
      missiles={props.simulation[0].missile}
    />
  );

  //const labels = screen.findAllByTestId("label");
  const bots = await screen.findAllByTestId("bot");
  const bot0 = await screen.findByTestId("Wallee");
  const bot1 = await screen.findByTestId("Eva");
  const bot2 = await screen.findByTestId("Mario");
  const bot3 = await screen.findByTestId("Rocoloco");

  //expect.toBeInTheDocument(labels);
  expect.toBeInTheDocument(bots);
  expect.toBeInTheDocument(bot0);
  expect.toBeInTheDocument(bot1);
  expect.toBeInTheDocument(bot2);
  expect.toBeInTheDocument(bot3);
});

test("render other frame successfully", async () => {
  render(
    <Board
      colors={props.colors}
      robots={props.simulation[2].robots}
      missiles={props.simulation[2].missile}
    />
  );

  //const labels = screen.findAllByTestId("label");
  const bots = await screen.findAllByTestId("bot");
  const bot0 = await screen.findByTestId("Wallee");
  const bot1 = await screen.findByTestId("Eva");
  const bot2 = await screen.findByTestId("Mario");
  const bot3 = await screen.findByTestId("Rocoloco");

  //expect.toBeInTheDocument(labels);
  expect.toBeInTheDocument(bots);
  expect.toBeInTheDocument(bot0);
  expect.toBeInTheDocument(bot1);
  expect.toBeInTheDocument(bot2);
  expect.toBeInTheDocument(bot3);
});
