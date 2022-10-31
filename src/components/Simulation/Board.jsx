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
        <StyledRobot
          key={idx}
          x={r.x}
          y={r.y}
          hidden={r.died}
          data-testid={`robot + ${idx}`}>
          <StyledLabel htmlFor={idx} data-testid='label'>
            {names[idx]}
          </StyledLabel>
          <Bot id={idx} data-testid='bot' />
          <StyledHarm hidden={!r.harmed}>
            <Harm data-testid='harm' />
          </StyledHarm>
        </StyledRobot>
      ))}
    </StyledBoard>
  );
};
