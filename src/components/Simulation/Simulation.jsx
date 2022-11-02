import {EntryPage} from "./Board.style";
import React, {useEffect, useState} from "react";
import {Board} from "./Board";
import {useRef} from "react";

const Simulation = ({props}) => {
  const {names, simulation} = props;
  const [nframe, setNframe] = useState(0);
  const [robots, setRobots] = useState([]);
  const [missiles, setmissiles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      drawFrame(simulation[nframe]);
      setNframe(nframe + 1);
    }, 600);
    return () => clearInterval(interval);
  });

  const drawFrame = (frame) => {
    if (nframe < simulation.length) {
      setRobots(frame.robots);
      setmissiles(frame.missiles);
    }
  };

  return (
    <EntryPage>
      <Board names={names} robots={robots} missiles={missiles} />
    </EntryPage>
  );
};

export default Simulation;
