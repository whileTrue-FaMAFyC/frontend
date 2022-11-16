import {EntryPage} from "./Board.style";
import React, {useEffect, useState, useRef} from "react";
import Board from "./Board";
import RobotsStatus from "./RobotsStatus";
import SimControl from "./SimControl";

const Simulation = ({props}) => {
  const {names, simulation, winners} = props;

  const [nframe, setNframe] = useState(0);
  const [activeInterval, setActiveInterval] = useState(true);
  const [showWinners, setShowWinners] = useState(null);
  const interval = useRef(null);

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
  const [missiles, setMissiles] = useState({});

  useEffect(() => {
    if (activeInterval) {
      interval.current = setInterval(() => {
        console.log(nframe);
        drawFrame(simulation[nframe]);
        setNframe(nframe + 1);
      }, 500);

      return () => {
        clearInterval(interval.current);
      };
    } else {
      return;
    }
  });

  const drawFrame = (frame) => {
    if (nframe < simulation.length) {
      setRobots(frame.robots);
      setMissiles(frame.missiles);
    } else {
      setShowWinners(winners);
      console.log(showWinners);
      stopSimulation();
    }
  };

  const playSimulation = () => {
    if (nframe < simulation.length) {
      setActiveInterval(true);
    }
  };

  const stopSimulation = () => {
    setActiveInterval(false);
  };

  const followingRound = () => {
    if (nframe < simulation.length) {
      stopSimulation();
      drawFrame(simulation[nframe + 1]);
      setNframe(nframe + 1);
      console.log(nframe);
    }
  };

  const previousRound = () => {
    if (nframe > 0) {
      stopSimulation();
      setNframe(nframe - 1);
      drawFrame(simulation[nframe - 1]);
      console.log(nframe);
    }
  };

  const resetSimulation = () => {
    if (nframe > 0) {
      stopSimulation();
      setNframe(0);
      drawFrame(simulation[0]);
    }
  };

  const handlers = {
    play: playSimulation,
    stop: stopSimulation,
    forward: followingRound,
    backward: previousRound,
    reset: resetSimulation,
  };

  return (
    <EntryPage data-testid='Simulation'>
      <RobotsStatus
        colors={colors}
        robots={robots}
        names={robot_names}
        winners={showWinners}
      />
      <Board colors={colors} robots={robots} missiles={missiles} />
      <SimControl handlers={handlers} />
    </EntryPage>
  );
};

export default Simulation;
