import "@testing-library/jest-dom";
import React from "react";
import {render, screen} from "@testing-library/react";
import Simulation from "../components/Simulation/Simulation";

const props = {
  names: ["Wallee", "Eva", "Rocoloco", "Mario"],
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

test("render board component successfully", () => {
  render(<Simulation props={props} />);

  const labels = screen.findAllByTestId("label");
  const bots = screen.findAllByTestId("bot");
  const bot0 = screen.findByTestId("robot0");
  const bot1 = screen.findByTestId("robot1");
  const bot2 = screen.findByTestId("robot2");
  const bot3 = screen.findByTestId("robot3");

  expect(labels).toBeInTheDocument;
  expect(bots).toBeInTheDocument;
  expect(bot0).toBeInTheDocument;
  expect(bot1).toBeInTheDocument;
  expect(bot2).toBeInTheDocument;
  expect(bot3).toBeInTheDocument;
});

// test("render robot component successfully", () => {
//   render(<Simulacion />);

//   expect(screen.findByTestId("robot")).toBeInTheDocument;
// });
