import {StyledBoard, EntryPage} from "./Board.style";
import React, {useEffect, useState} from "react";
import {Board} from "./Board";
import {useRef} from "react";

const Simulation = ({props}) => {
  const {names, colors, simulation} = props;
  const [nframe, setNframe] = useState(0);
  const [robots, setRobots] = useState([]);

  const interval = useRef(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      drawFrame(simulation[nframe]);
      setNframe(nframe + 1);
    }, 2000);
    return () => clearInterval(interval.current);
  });

  const drawFrame = (frame) => {
    if (nframe <= names.length) {
      setRobots(frame.robots);
    }
  };

  return (
    <EntryPage>
      <Board names={names} colors={colors} robots={robots} />
    </EntryPage>
  );
};

export default Simulation;
