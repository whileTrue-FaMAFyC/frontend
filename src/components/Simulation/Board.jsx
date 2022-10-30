import {Robot, StyledLabel, StyledBoard} from "./Board.style";
import {ReactComponent as Bot} from "./robot-line.svg";

export const Board = (props) => {
  const {names, coordinates} = props;

  return (
    <StyledBoard>
      {coordinates.map((c, idx) => (
        <Robot coordinates={c}>
          <StyledLabel for={idx}>{names[idx]}</StyledLabel>
          <Bot id={idx} />
        </Robot>
      ))}
    </StyledBoard>
  );
};
