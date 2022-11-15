import {useEffect, useState} from "react";
import StatusBar from "../Simulation/StatusBar";
import {StyledEntryCard} from "../Simulation/StatusBar.styled";

const RobotsStatus = ({colors, robots, names, winner}) => {
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
      {winner !== "" ? (
        <h2 data-testid='winner'>The winner is: {winner}</h2>
      ) : null}
    </StyledEntryCard>
  );
};

export default RobotsStatus;
