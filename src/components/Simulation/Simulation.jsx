import {EntryPage} from "./Board.style";
import React, {useEffect, useState} from "react";
import {Board} from "./Board";

const Simulation = ({props}) => {
  const {names, simulation} = props;
  const [nframe, setNframe] = useState(0);
  const colorsRobots = ["red", "black", "orange", "pink"];

  const colors = {};

  for (let i = 0; i < names.length; i++) {
    colors[names[i].id] = colorsRobots[i];
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
      <div>Status Bar!</div>
      <Board colors={colors} robots={robots} />
    </EntryPage>
  );
};

export default Simulation;
