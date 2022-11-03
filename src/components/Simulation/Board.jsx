import {
  Bot,
  Harm,
  StyledLabel,
  StyledBoard,
  StyledRobot,
  StyledHarm,
} from "./Board.style";

export const Board = ({colors, robots}) => {
  return (
    <StyledBoard>
      {Object.entries(robots).map(([robotId, r]) => (
        <StyledRobot
          key={robotId}
          x={r.x / 10}
          y={r.y / 10}
          color={colors[robotId]}
          hidden={r.died}
          data-testid={`${robotId}`}>
          {/* <StyledLabel htmlFor={robotId} data-testid='label'>
            {robotId}
          </StyledLabel> */}
          <Bot id={robotId} data-testid='bot' />
          <StyledHarm hidden={!r.harmed}>
            <Harm data-testid='harm' />
          </StyledHarm>
        </StyledRobot>
      ))}
    </StyledBoard>
  );
};
