import StatusBar from "../Simulation/StatusBar";
import {StyledEntryCard} from "../Simulation/StatusBar.styled";

const RobotsStatus = ({colors, robots, names}) => {
  return (
    <StyledEntryCard>
      <h2>Remaining life</h2>
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
