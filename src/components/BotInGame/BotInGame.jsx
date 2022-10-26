import {ReactComponent as Bot} from "./robot-line.svg";
import {motion} from "framer-motion";
import {EntryPage, StyledBoard} from "./Board.style";
import {useEffect, useState} from "react";
import {useCycle} from "framer-motion";
import ProgressBar from "./StatusBar";

const BotInGame = () => {
  const [animation, cycleAnimation] = useCycle("animationOne");

  useEffect(() => {
    setTimeout(() => {
      cycleAnimation();
    }, 1000);
  }, [cycleAnimation]);

  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);

  const PlaneVariants = {
    animationOne: {
      x: [0, 300, 300, 0, 0],
      y: [0, 0, 300, 300, 0],
      transition: {
        duration: 5,
      },
    },
  };

  const [completed, setCompleted] = useState(0);

  return (
    <EntryPage>
      <ProgressBar bgcolor={"#6a1b9a"} completed={completed} />
      <StyledBoard data-testid='board'>
        <motion.div variants={PlaneVariants} animate={animation}>
          <Bot data-testid='robot' />
        </motion.div>
      </StyledBoard>
    </EntryPage>
  );
};

export default BotInGame;
