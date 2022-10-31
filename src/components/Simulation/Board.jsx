import {Robot, StyledLabel, StyledBoard} from "./Board.style";
import {ReactComponent as Bot} from "./robot-line.svg";
import {ReactComponent as Harm} from "./harm.svg";

export const Board = ({names, robots}) => {
  return (
    <StyledBoard>
      {robots.map((r, idx) => (
        <Robot x={r.x} y={r.y} key={idx} hidden={r.died}>
          <StyledLabel htmlFor={idx}>{names[idx]}</StyledLabel>
          <div hidden={!r.harmed}>
            <Harm style={{hidden: `${!r.harmed}`}} />
          </div>
          <Bot id={idx} />
        </Robot>
      ))}
    </StyledBoard>
  );
};
