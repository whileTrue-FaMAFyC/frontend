import {
  Bot,
  Harm,
  StyledLabel,
  StyledBoard,
  StyledRobot,
  StyledHarm,
  Missiles,
} from "./Board.style";

export const Board = ({names, robots, missiles}) => {
  return (
    <StyledBoard>
      {Object.entries(robots).map(([robotId, r]) => (
        <StyledRobot
          key={robotId}
          x={r.x}
          y={r.y}
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
      {Object.entries(missiles).map(([missilId, missil]) => (
        <Missiles
          key={missilId}
          x={missil.x}
          y={missil.y}
          exploded={missil.exploded}
          new={missil.new}></Missiles>
      ))}
    </StyledBoard>
  );
};
