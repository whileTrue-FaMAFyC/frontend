import * as React from "react";
import {Info, Code, Negrita} from "./Botsubmit.styled";

const GameInfo = () => {
  return (
    <div>
      <div>
        <strong>Requirements:</strong>
        <li>The source code must be written in Python.</li>
        <li>
          The filename must be in snake case with the .py extension and the
          robot classname must be the same as the filename but in camel case.
        </li>
        <li>The robot class must inherit from 'Robot'.</li>
      </div>
      <strong>
        <br />
        PyRobots methods:
      </strong>
      <li>
        <Negrita>initialize():</Negrita> Executed only once at the beginning of
        each game.
      </li>
      <li>
        <Negrita>respond():</Negrita> Contains the robot's methods and is
        executed in each round.
      </li>
      <strong>
        <br />
        Robot methods:
      </strong>
      <li>
        <Negrita>is_cannon_ready():</Negrita> Checks if the cannon has finished
        reloading and is ready to shoot again.
      </li>
      <li>
        <Negrita>cannon(degree, distance):</Negrita> Fires the cannon. 'degree'
        must be between 0 and 359 and 'distance' between 1 and 700.
      </li>
      <li>
        <Negrita>point_scanner(direction, resolution_in_degrees):</Negrita>{" "}
        Points the scanner at the given position. 'direction' must be between 0
        and 359 and 'resolution_in_degrees' between 0 and 10.
      </li>
      <li>
        <Negrita>scanned():</Negrita> Returns the distance to the nearest robot
        in the direction scanned during the last round.
      </li>
      <li>
        <Negrita>drive(direction, velocity):</Negrita> Sets a new direction and
        velocity for the robot. 'direction' must be between 0 and 359 and
        'velocity' is a percentage (must be between 0 and 100).
      </li>
      <li>
        <Negrita>get_direction():</Negrita> Get your current direction.
      </li>
      <li>
        <Negrita>get_velocity():</Negrita> Get your current velocity.
      </li>
      <li>
        <Negrita>get_position():</Negrita>Get your current position.
      </li>
      <li>
        <Negrita>get_damage():</Negrita> Get your current damage.
      </li>
    </div>
  );
};

export default GameInfo;
