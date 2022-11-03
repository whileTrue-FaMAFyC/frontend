import {Bot, Harm, StyledBoard, StyledRobot, StyledHarm} from "./Board.style";

export const Board = ({colors, robots}) => {
  return (
    <StyledBoard>
      {Object.entries(robots).map(([robotId, r]) => (
        <StyledRobot
          key={robotId}
          x={r.x / 10}
          y={r.y / 10}
          color={colors[robotId]}
          hidden={!r.harmed && r.died}
          data-testid={`${robotId}`}>
          <Bot id={robotId} data-testid='bot' />
          <StyledHarm hidden={!r.harmed}>
            <Harm data-testid='harm' />
          </StyledHarm>
        </StyledRobot>
      ))}
      {Object.entries(missiles).map(([missilId, missil]) => (
        <Missiles
          key={missilId}
          initial_x={missil.initial_x}
          initial_y={missil.initial_y}
          x={missil.x / 10}
          y={missil.y / 10}
          exploded={missil.exploded}
          new={missil.new}></Missiles>
      ))}
    </StyledBoard>
  );
};
