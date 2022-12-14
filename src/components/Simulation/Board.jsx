import {
  Bot,
  Harm,
  StyledBoard,
  StyledRobot,
  StyledHarm,
  Missiles,
} from "./Board.style";

const Board = ({colors, robots, missiles}) => {
  return (
    <StyledBoard>
      {robots !== undefined ? (
        <div>
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
        </div>
      ) : null}
      {missiles !== undefined ? (
        <div>
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
        </div>
      ) : null}
    </StyledBoard>
  );
};

export default Board;
