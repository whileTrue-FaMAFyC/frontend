import {StyledBoard, EntryPage} from "./Board.style";
import React, {useEffect, useState} from "react";
import {Board} from "./Board";
import {useRef} from "react";

const Simulation = ({props}) => {
  const {names, simulation} = props;
  const [nframe, setNframe] = useState(0);
  const [robots, setRobots] = useState([]);
  const [rockets, setRockets] = useState([]);

  const interval = useRef(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      drawFrame(simulation[nframe]);
      setNframe(nframe + 1);
    }, 600);
    return () => clearInterval(interval.current);
  });

  const drawFrame = (frame) => {
    if (nframe <= 12) {
      setRobots(frame.robots);
      setRockets(frame.rockets);
    }
  };

  return (
    <EntryPage>
      <Board names={names} robots={robots} rockets={rockets} />
    </EntryPage>
  );
};

export default Simulation;
