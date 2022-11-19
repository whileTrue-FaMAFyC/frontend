import {useState} from "react";
import {EntryPage} from "../AvatarSubmit/AvatarSubmit.style";
import {Info, StyledEntryCard, StyledExtraCard} from "./Botsubmit.styled";

const MoreInfoCode = () => {
  //   const [isHovering, setIsHovering] = useState(false);

  //   const handleMouseOver = () => {
  //     setIsHovering(true);
  //   };

  //   const handleMouseOut = () => {
  //     setIsHovering(false);
  //   };

  const info = `
  Requirements:
  - The file name must be the same as the class name with the
   .py extension.

  PyRobots methods:
  - initialize(): Executed when the robot is created
  - respond(): Contains the robot's methods and is executed
   in each round.

  Robot methods:
  - is_cannon_ready(): Checks if the cannon is reloaded.
  - cannon(degree,distance): Fires the cannon.
  - point_scanner(direction, resolution_in_degrees):
  Points the scanner at the given position.
  - scanned(): Returns the distance to the nearest robot
   in the direction scanned last round.
  - drive(direction, velocity): Sets a new direction and
   velocity for the robot.
  - get_direction()
  - get_velocity()
  - get_position()
  - get_damage()`;

  return (
    <a>
      <StyledExtraCard>
        <pre>{info}</pre>
      </StyledExtraCard>
    </a>
  );
};

export default MoreInfoCode;
