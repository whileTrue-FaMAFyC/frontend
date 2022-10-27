import {useEffect, useState} from "react";
import StatusBar from "./StatusBar";

const RobotsStatus = (props) => {
  const [completed, setCompleted] = useState(0);
  const {names, health} = props;

  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);

  // <StatusBar bgcolor={"#6a1b9a"} completed={completed} />
  // <StatusBar bgcolor={"#6a1b9a"} completed={completed} />
  // <StatusBar bgcolor={"#6a1b9a"} completed={completed} />

  return (
    <div>
      {health.map((health, idx) => (
        <StatusBar
          key={idx}
          bgcolor={"#6a1b9a"}
          name={names[idx]}
          completed={health}
        />
      ))}
    </div>
  );
};

export default RobotsStatus;
