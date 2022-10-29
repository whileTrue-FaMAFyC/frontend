import {StyledBoard, EntryPage} from "./Board.style";
import React, {useEffect, useState} from "react";
import {Board} from "./Board";

const Simulation = ({props}) => {
  const {names, simulation} = props;
  const [nframe, setNframe] = useState(0);
  const [coordinates, setCoordinates] = useState([]);
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
    setCoordinates(frame.coordinates);
  };

  return (
    <EntryPage>
      <StyledBoard>
        <Board names={names} coordinates={coordinates} />
      </StyledBoard>
    </EntryPage>
  );
};

export default Simulation;
