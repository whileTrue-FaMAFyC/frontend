import {Robot, StyledLabel, StyledBoard} from "./Board.style";
import {ReactComponent as Bot} from "./robot-line.svg";
import {ReactComponent as Harm} from "./harm.svg";

export const Board = ({names, robots}) => {
  const robotsAlive = robots.filter((r) => {
    return !r.died;
  });

  return (
    <StyledBoard>
      {robotsAlive.map((r, idx) => (
        <Robot x={r.x} y={r.y} key={idx} hidden={r.died}>
          <StyledLabel htmlFor={idx}>{names[idx]}</StyledLabel>
          <Bot id={idx} />
          <div hidden={!r.harmed}>
            <Harm />
          </div>
        </Robot>
      ))}
    </StyledBoard>
  );
};
