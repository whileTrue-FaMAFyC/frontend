import {useEffect, useState} from "react";
import StatusBar from "../Simulation/StatusBar";
import {StyledEntryCard} from "../Simulation/StatusBar.styled";

const RobotsStatus = ({colors, robots, names, winners}) => {
  return (
    <StyledEntryCard>
      <h2>Daño</h2>
      {Object.entries(robots).map(([robotId, r]) => (
        <StatusBar
          key={robotId}
          bgcolor={colors[robotId]}
          name={names[robotId]}
          completed={r.status}
          data-testid={`${robotId}`}
        />
      ))}
      {winners !== [] ? (
        <div>
          <p data-testid='winner'>The winners are: </p>
          {winners.map((winner) => (
            <li>{winner}</li>
          ))}
        </div>
      ) : null}
    </StyledEntryCard>
  );
};

export default RobotsStatus;
