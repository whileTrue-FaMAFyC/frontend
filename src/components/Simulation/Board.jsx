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
      {Object.entries(robots).map(([robotId, r]) => (
        <StyledRobot
          key={robotId}
          x={r.x}
          y={r.y}
          //color={colors[idx]}
          hidden={r.died}
          data-testid={`${robotId}`}>
          <StyledLabel htmlFor={robotId} data-testid='label'>
            {robotId}
          </StyledLabel>
          <Bot id={robotId} data-testid='bot' />
          <StyledHarm hidden={!r.harmed}>
            <Harm data-testid='harm' />
          </StyledHarm>
        </StyledRobot>
      ))}
    </StyledBoard>
  );
};
