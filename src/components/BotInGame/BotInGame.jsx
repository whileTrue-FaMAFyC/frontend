import {ReactComponent as Bot} from "./robot-line.svg";
<<<<<<< HEAD
import {motion} from "framer-motion";
import {EntryPage, StyledBoard} from "./Board.style";
import {useEffect} from "react";
import {useCycle} from "framer-motion";
import RobotsStatus from "./RobotsStatus";
=======
import {Robot, StyledBoard, EntryPage} from "./Board.style";
import React, {useEffect, useState} from "react";
>>>>>>> feature_PYR-104_robotMovements

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
      <RobotsStatus
        names={["Wallee", "Eva", "Roberto", "Rocoloco"]}
        health={[60, 50, 30, 20]}
        colors={["#00c8c8", "blue", "green", "pink"]}
      />
      <StyledBoard data-testid='board'>
        <motion.div variants={PlaneVariants} animate={animation}>
          <Bot data-testid='robot' />
        </motion.div>
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
