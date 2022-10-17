import {ReactComponent as Bot} from "./robot-line.svg";
import {motion} from "framer-motion";
import {EntryPage, StyledBoard} from "./Board.style";
import {useEffect} from "react";
import {useCycle} from "framer-motion";

const Robot = () => {
  const [animation, cycleAnimation] = useCycle("animationOne");

  useEffect(() => {
    setTimeout(() => {
      cycleAnimation();
    }, 1000);
  }, [cycleAnimation]);

  const PlaneVariants = {
    animationOne: {
      x: [0, 300, 300, 0, 0],
      y: [0, 0, 300, 300, 0],
      transition: {
        x: {duration: 5},
        y: {duration: 5},
      },
    },
  };

  return (
    <EntryPage>
      <StyledBoard role='board'>
        <motion.div role='robot' variants={PlaneVariants} animate={animation}>
          <Bot />
        </motion.div>
      </StyledBoard>
    </EntryPage>
  );
};

export default Robot;
