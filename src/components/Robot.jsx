import {Piece} from "./Piece.style";
//import "robot.png" from "../../public"
import {ReactComponent as Bot} from "./robot-line.svg";
import {motion} from "framer-motion";

// const Robot = () => {
//   return (
//     <motion.div
//       role='robot'
//       transition={{duration: 2, x: [100, 100], y: [100, 100]}}
//       animate={{
//         x: [100, 100],
//         y: [100, 100],
//         scale: [1, 2],
//       }}>
//       <Bot />
//     </motion.div>
//     //{/* <Piece color='red'></Piece> */}
//   );
// };

const containerStyle = {
  position: "relative",
  width: "12rem",
  height: "12rem",
  boxSizing: "border-box",
};

const circleStyle = {
  display: "block",
  width: "12rem",
  height: "12rem",
  border: "0.5rem solid #ffffff",
  borderTop: "0.5rem solid #ffffff",
  borderRadius: "50%",
  position: "absolute",
  boxSizing: "border-box",
  top: 100,
  left: 500,
};

const spinTransition = {
  loop: Infinity,
  ease: "linear",
  duration: 10,
};

const Robot = () => {
  return (
    <motion.div
      style={circleStyle}
      animate={{rotate: 360}}
      transition={spinTransition}>
      <Bot />
    </motion.div>
  );
};

export default Robot;
