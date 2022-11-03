import {useEffect, useState} from "react";
import StatusBar from "../Simulation/StatusBar";
import {StyledEntryCard} from "../Simulation/StatusBar.styled";

const RobotsStatus = ({colors, robots, names}) => {
  return (
    <StyledEntryCard>
      <h2>Daño</h2>
      {/* {health.map((health, idx) => (
        <StatusBar
          key={idx}
          bgcolor={colors[idx]}
          name={names[idx]}
          completed={health}
        />
      ))} */}
      {Object.entries(robots).map(([robotId, r]) => (
        <StatusBar
          key={robotId}
          bgcolor={colors[robotId]}
          name={names[robotId]}
          completed={r.status}
          data-testid={`${robotId}`}
        />
      ))}
    </StyledEntryCard>
  );
};

export default RobotsStatus;
