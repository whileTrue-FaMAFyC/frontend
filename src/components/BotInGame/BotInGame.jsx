import {ReactComponent as Bot} from "./robot-line.svg";
import {Robot, StyledBoard, EntryPage} from "./Board.style";
import React, {useEffect, useState} from "react";

const Board = (props) => {
  const [coordinates1, setCoordinates1] = useState({
    x: Math.floor(Math.random() * 100) + 1,
    y: Math.floor(Math.random() * 100),
  });
  const [coordinates2, setCoordinates2] = useState({
    x: Math.floor(Math.random() * 100) + 1,
    y: Math.floor(Math.random() * 100),
  });

  useEffect(() => {
    setInterval(() => {
      setCoordinates1({
        x: Math.floor(Math.random() * 100) + 1,
        y: Math.floor(Math.random() * 100),
      });
      setCoordinates2({
        x: Math.floor(Math.random() * 100) + 1,
        y: Math.floor(Math.random() * 100),
      });
    }, 2000);
  }, []);

  return (
    <EntryPage>
      <StyledBoard>
        <Robot coordinates={coordinates1}>
          <Bot />
        </Robot>
        <Robot coordinates={coordinates2}>
          <Bot />
        </Robot>
      </StyledBoard>
    </EntryPage>
  );
};

export default Board;
