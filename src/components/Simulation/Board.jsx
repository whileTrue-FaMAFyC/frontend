import {Robot, StyledLabel} from "./Board.style";
import {ReactComponent as Bot} from "./robot-line.svg";

export const Board = (props) => {
  const {names, coordinates} = props;

  return (
    <div>
      {coordinates.map((c, idx) => (
        <div>
          <Robot coordinates={c}>
            <StyledLabel for={idx}>{names[idx]}</StyledLabel>
            <Bot id={idx} />
          </Robot>
        </div>
      ))}
    </div>
  );
};
