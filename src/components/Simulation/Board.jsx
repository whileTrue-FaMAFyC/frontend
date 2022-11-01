import {
  Bot,
  Harm,
  StyledLabel,
  StyledBoard,
  StyledRobot,
  StyledHarm,
  Rocket,
} from "./Board.style";

export const Board = ({names, colors, robots, rockets}) => {
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
      {rockets.map((rk, idx) => (
        <Rocket
          key={idx}
          color={colors[idx]}
          x={rk.x}
          y={rk.y}
          exploded={rk.exploded}
          new={rk.new}></Rocket>
      ))}
    </StyledBoard>
  );
};
