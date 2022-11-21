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
  maxWidth: "50%",
  overflowY: "scroll",
};

const runnerRobot = `
class RunnerRobot(Robot):

    def initialize(self):
        self.reached_wall = False
        self.degrees = 90
        self.velocity = 50

    def respond(self):
        if not self.reached_wall:
            self.drive(0, self.velocity)
            if self.get_position()[0] == 983:
                self.velocity = 50
                self.reached_wall = True
        else:
            if self.near_corner():
                self.degrees += 90
                if self.degrees == 360:
                    self.degrees = 0
                self.velocity = 50
            self.drive(self.degrees, self.velocity)

    def near_corner(self):
        x, y = self.get_position()
        return (((x + 35 >= 983) and (y + 35 >= 983))
             or ((x + 35 >= 983) and (y - 35 <= 16))
             or ((x - 35 <= 16) and (y + 35 >= 983))
             or ((x - 35 <= 16) and (y - 35 <= 16)))`;

const shooterRobot = `
class ShooterRobot(Robot):

    def initialize(self):
        self.degrees = 0

    def respond(self):
        self.point_scanner(self.degrees, 10)
        if self.scanned() != None:
            self.cannon(self.degrees, self.scanned())
        else:
            self.degrees = (self.degrees + 10) % 360`;

const info = `
Requirements:
- The file name must be the same as the class name with the
  .py extension.

PyRobots methods:
- initialize(): Executed when the robot is created.
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
- get_direction(): Get your current direction.
- get_velocity(): Get your current velocity.
- get_position(): Get your current position.
- get_damage(): Get your current damage.
`;

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <a scroll-y='auto'>
      <Button onClick={handleOpen}>
        <Info />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h3' component='h2'>
            Instruction set
          </Typography>
          <Typography id='modal-modal-description' sx={{mt: 1}} variant='body1'>
            <pre>{info}</pre>
          </Typography>
          <Typography
            id='modal-modal-title'
            variant='h3'
            component='h2'
            sx={{mt: 3}}>
            Robot code examples
          </Typography>
          <Typography
            id='modal-modal-title'
            variant='h5'
            component='h2'
            sx={{mt: 3}}>
            Example 1: RunnerRobot.py
          </Typography>
          <Typography id='modal-modal-description' sx={{mt: 1}}>
            <pre>{runnerRobot}</pre>
          </Typography>
          <Typography
            id='modal-modal-title'
            variant='h5'
            component='h2'
            sx={{mt: 3}}>
            Example 2: ShooterRobot.py
          </Typography>
          <Typography id='modal-modal-description' sx={{mt: 1}}>
            <pre>{shooterRobot}</pre>
          </Typography>
        </Box>
      </Modal>
    </a>
  );
}
