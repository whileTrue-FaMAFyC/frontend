import "@testing-library/jest-dom";
import React from "react";
import {render, screen} from "@testing-library/react";
import {Board} from "../components/Simulation/Board";

const props = {
  names: ["Wallee", "Eva", "Rocoloco", "Mario"],

  simulation: [
    {
      robots: {
        Wallee: {
          x: 0,
          y: 0,
          harmed: false,
          died: false,
        },
        Eva: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        Rocoloco: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        Mario: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
      },
    },
    {
      robots: {
        Wallee: {
          x: 0,
          y: 100,
          harmed: false,
          died: false,
        },
        Eva: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        Mario: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        Rocoloco: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
      },
    },
    {
      robots: {
        Eva: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        Wallee: {
          x: 100,
          y: 100,
          harmed: false,
          died: false,
        },
        Mario: {
          x: 100,
          y: 100,
          harmed: false,
          died: false,
        },
        Rocoloco: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
      },
    },
    {
      robots: {
        Rocoloco: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        Eva: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        Mario: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        Wallee: {
          x: 100,
          y: 0,
          harmed: false,
          died: false,
        },
      },
    },
    {
      robots: {
        Wallee: {
          x: 0,
          y: 0,
          harmed: false,
          died: false,
        },
        Eva: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        Mario: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        Rocoloco: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
      },
    },
    {
      robots: {
        Wallee: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        Eva: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        Mario: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        Rocoloco: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
      },
    },
  ],
};

test("render board component successfully", async () => {
  render(<Board names={props.names} robots={props.simulation[0].robots} />);

  //const labels = screen.findAllByTestId("label");
  const bots = await screen.findAllByTestId("bot");
  const bot0 = await screen.findByTestId("Wallee");
  const bot1 = await screen.findByTestId("Eva");
  const bot2 = await screen.findByTestId("Mario");
  const bot3 = await screen.findByTestId("Rocoloco");

  //expect.toBeInTheDocument(labels);
  expect.toBeInTheDocument(bots);
  expect.not.toBeInTheDocument(bot0);
  expect.toBeInTheDocument(bot1);
  expect.toBeInTheDocument(bot2);
  expect.toBeInTheDocument(bot3);
});

// test("render robot component successfully", () => {
//   render(<Simulacion />);

//   expect(screen.findByTestId("robot")).toBeInTheDocument;
// });
