import {
  Bot,
  Harm,
  StyledLabel,
  StyledBoard,
  StyledRobot,
  StyledHarm,
} from "./Board.style";

export const Board = ({names, robots}) => {
  return (
    <StyledBoard>
      {robots.map((r, idx) => (
        <StyledRobot key={idx} x={r.x} y={r.y} hidden={r.died}>
          <StyledLabel htmlFor={idx}>{names[idx]}</StyledLabel>
          <Bot id={idx} />
          <StyledHarm hidden={!r.harmed}>
            <Harm />
          </StyledHarm>
        </StyledRobot>
      ))}
    </StyledBoard>
  );
};
