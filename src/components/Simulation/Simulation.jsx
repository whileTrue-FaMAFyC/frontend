import {StyledBoard, EntryPage} from "./Board.style";
import React, {useEffect, useState} from "react";
import {Board} from "./Board";

const Simulation = ({props}) => {
  const {names, simulation} = props;
  const [nframe, setNframe] = useState(0);
  const [robots, setRobots] = useState([]);
  // useState({
  //   x: Math.floor(Math.random() * 100) + 1,
  //   y: Math.floor(Math.random() * 100),
  // });
  // const [coordinates2, setCoordinates2] = useState({
  //   x: Math.floor(Math.random() * 100) + 1,
  //   y: Math.floor(Math.random() * 100),
  // });

  useEffect(() => {
    setInterval(() => {
      drawFrame(simulation[nframe]);
      setNframe(nframe + 1);
    }, 2000);
  });

  const drawFrame = (frame) => {
    setRobots(frame.robots);
  };

  return (
    <EntryPage>
      <Board names={names} robots={robots} />
    </EntryPage>
  );
};

export default Simulation;