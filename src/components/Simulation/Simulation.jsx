import {EntryPage} from "./Board.style";
import React, {useEffect, useState, useRef} from "react";
import Board from "./Board";
import RobotsStatus from "./RobotsStatus";
import SimControl from "./SimControl";

const Simulation = ({props}) => {
  const {names, simulation, winner} = props;
  const [nframe, setNframe] = useState(0);
  const [activeInterval, setActiveInterval] = useState(true);
  const [showWinner, setShowWinner] = useState("");
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
    interval.current = setInterval(() => {
      if (activeInterval) {
        drawFrame(simulation[nframe]);
        setNframe(nframe + 1);
      }
    }, 500);

    return () => {
      clearInterval(interval.current);
    };
  });

  const drawFrame = (frame) => {
    if (nframe < simulation.length) {
      setRobots(frame.robots);
      setMissiles(frame.missiles);
    } else {
      setShowWinner(winner);
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
    clearInterval(interval.current);
  };

  const followingRound = () => {
    if (nframe < simulation.length) {
      drawFrame(simulation[nframe]);
      setNframe(nframe + 1);
    }
  };

  const previousRound = () => {
    if (nframe > 0) {
      setNframe(nframe - 1);
      drawFrame(simulation[nframe]);
    }
  };

  const resetSimulation = () => {
    setNframe(0);
    drawFrame(simulation[nframe]);
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
        winner={showWinner}
      />
      <Board colors={colors} robots={robots} missiles={missiles} />
      <SimControl handlers={handlers} />
    </EntryPage>
  );
};

export default Simulation;
