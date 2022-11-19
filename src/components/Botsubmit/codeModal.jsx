import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {Info} from "./Botsubmit.styled";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "#252c32",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  maxHeight: 500,
  overflow: "scroll",
};

const head = {
  textIndent: 10,
};

const body = {
  textIndent: 20,
};

const robotCode = `
class RandomRobot(Robot):

    def initialize(self):
        pass

    def respond(self):
        import random
        self.rand_direction = random.randint(0, 359)
        self.rand_velocity = random.randint(0,100)
        self.rand_shoot_distance = random.randint(1,700)
        self.rand_shoot_direction = random.randint(0, 359)

        self.drive(self.rand_direction, self.rand_velocity)

        self.cannon(self.rand_shoot_direction, self.rand_shoot_direction)
                  `;

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
- get_damage()
`;

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <a scroll-y='auto'>
      <Button onClick={handleOpen}>
        {/* <Info /> */}
        Example
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Instruction set
          </Typography>
          <Typography id='modal-modal-description' sx={{mt: 1}}>
            <pre>{info}</pre>
          </Typography>
          <Typography
            id='modal-modal-title'
            variant='h6'
            component='h2'
            sx={{mt: 3}}>
            Robot code example - Random robot
          </Typography>
          <Typography id='modal-modal-description' sx={{mt: 1}}>
            <pre>{robotCode}</pre>
          </Typography>
        </Box>
      </Modal>
    </a>
  );
}
