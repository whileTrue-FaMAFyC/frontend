import {EntryPage} from "./Board.style";
import React, {useEffect, useState} from "react";
import {Board} from "./Board";
import RobotsStatus from "./RobotsStatus";

const Simulation = ({props}) => {
  const {names, simulation} = props;
  const [nframe, setNframe] = useState(0);
  const colorsRobots = ["red", "turquoise", "orange", "pink"];

  const colors = {};
  const robot_names = {};

  if (names !== undefined) {
    for (let i = 0; i < names.length; i++) {
      colors[names[i].id] = colorsRobots[i];
    }
  }

  if (names !== undefined) {
    for (let i = 0; i < names.length; i++) {
      robot_names[names[i].id] = names[i].name;
    }
  }

  const [robots, setRobots] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      drawFrame(simulation[nframe]);
      setNframe(nframe + 1);
    }, 500);
    return () => clearInterval(interval);
  });

  const drawFrame = (frame) => {
    if (nframe < simulation.length) {
      setRobots(frame.robots);
    }
  };

  return (
    <EntryPage data-testid='Simulation'>
      <RobotsStatus colors={colors} robots={robots} names={robot_names} />
      <Board colors={colors} robots={robots} />
    </EntryPage>
  );
};

export default Simulation;
