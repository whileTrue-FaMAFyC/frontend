import {useEffect, useState} from "react";
import StatusBar from "./StatusBar";
import {StyledEntryCard} from "./StatusBar.styled";

const RobotsStatus = (props) => {
  const [completed, setCompleted] = useState(0);
  const {names, health} = props;

  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);

  return (
    <StyledEntryCard>
      <h2>Daño</h2>
      {health.map((health, idx) => (
        <StatusBar
          key={idx}
          bgcolor={"#00c8c8"}
          name={names[idx]}
          completed={health}
        />
      ))}
    </StyledEntryCard>
  );
};

export default RobotsStatus;
