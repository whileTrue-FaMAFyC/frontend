import {Piece} from "./Piece.style";
//import "robot.png" from "../../public"
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
  }, []);

  // useEffect(() => {
  //   setTimeout(cycleAnimation, 1000); // start "animationTwo" after 1 second
  //   setTimeout(cycleAnimation, 2000); // start "animationThree" after 2 seconds
  //   setTimeout(cycleAnimation, 3000);
  //   setTimeout(cycleAnimation, 4000);
  //   setTimeout(cycleAnimation, 5000);
  // }, []);

  const PlaneVariants = {
    animationOne: {
      x: [0, 150, 150, 0, 0],
      y: [0, 0, 150, 150, 0],
      transition: {
        x: {yoyo: Infinity, duration: 5},
        y: {yoyo: Infinity, duration: 5},
      },
    },
    // animationTwo: {
    //   x: 150,
    //   y: 0,
    //   transition: {duration: 1.0},
    // },
    // animationThree: {
    //   x: 150,
    //   y: 150,
    //   transition: {duration: 1.0},
    // },
    // animationFour: {
    //   x: 0,
    //   y: 150,
    //   transition: {duration: 1.0},
    // },
    // animationFive: {
    //   x: 0,
    //   y: 0,
    //   transition: {duration: 1.0},
    // },
  };

  return (
    <EntryPage>
      <motion.div variants={PlaneVariants} animate={animation}>
        <Bot />
      </motion.div>
      <StyledBoard />
    </EntryPage>
  );
};

export default Robot;
