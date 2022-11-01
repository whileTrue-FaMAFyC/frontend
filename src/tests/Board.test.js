import "@testing-library/jest-dom";
import React from "react";
import {render, screen} from "@testing-library/react";
import {Board} from "../components/Simulation/Board";

const props = {
  names: ["Wallee", "Eva", "Rocoloco", "Mario"],
  colors: ["red", "yellow", "turquoise", "pink"],
  simulation: [
    {
      robots: [
        {
          x: 0,
          y: 0,
          harmed: false,
          died: false,
        },
        {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        {
          x: 0,
          y: 100,
          harmed: false,
          died: false,
        },
      ],
    },
    {
      robots: [
        {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: true,
          died: false,
        },
        {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
      ],
    },
    {
      robots: [
        {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: true,
        },
        {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
      ],
    },
    {
      robots: [
        {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: true,
        },
        {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
      ],
    },
    {
      robots: [
        {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: true,
        },
        {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
      ],
    },
  ],
};

test("render board component successfully", async () => {
  render(
    <Board
      names={props.names}
      colors={props.colors}
      robots={props.simulation[0].robots}
    />
  );

  //const labels = screen.findAllByTestId("label");
  const bots = await screen.findAllByTestId("bot");
  const bot0 = await screen.findByTestId("robot0");
  const bot1 = await screen.findByTestId("robot1");
  const bot2 = await screen.findByTestId("robot2");
  const bot3 = await screen.findByTestId("robot3");

  //expect.toBeInTheDocument(labels);
  expect.toBeInTheDocument(bots);
  expect.toBeInTheDocument(bot0);
  expect.toBeInTheDocument(bot1);
  expect.toBeInTheDocument(bot2);
  expect.toBeInTheDocument(bot3);
});

// test("render robot component successfully", () => {
//   render(<Simulacion />);

//   expect(screen.findByTestId("robot")).toBeInTheDocument;
// });
