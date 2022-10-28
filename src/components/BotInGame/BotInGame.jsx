import {ReactComponent as Bot} from "./robot-line.svg";
import {Robot, StyledBoard, EntryPage, RedRocket} from "./Board.style";
import React, {useEffect, useState} from "react";

const Board = (props) => {
  const [coordinates1, setCoordinates1] = useState([
    {
      x: Math.floor(Math.random() * 100) + 1,
      y: Math.floor(Math.random() * 100),
    },
  ]);
  const [coordinates2, setCoordinates2] = useState({
    x: Math.floor(Math.random() * 100) + 1,
    y: Math.floor(Math.random() * 100),
  });
  const [coordinatesRocket1, setCoordinatesRocket1] = useState([
    {
      x: 100,
      y: 100,
    },
    {
      x: 50,
      y: 50,
    },
    {
      x: Math.floor(Math.random() * 100) + 1,
      y: Math.floor(Math.random() * 100),
    },
  ]);
  let i = 0;
  useEffect(() => {
    setInterval(() => {
      console.log(i);
      setCoordinates1({
        x: Math.floor(Math.random() * 100) + 1,
        y: Math.floor(Math.random() * 100),
      });
      setCoordinates2({
        x: Math.floor(Math.random() * 100) + 1,
        y: Math.floor(Math.random() * 100),
      });
      setCoordinatesRocket1({
        x: coordinatesRocket1[i].x,
        y: coordinatesRocket1[i].y,
      });
      i++;
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
        <RedRocket coordinates={coordinatesRocket1} />
      </StyledBoard>
    </EntryPage>
  );
};

export default Board;
