import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import {Info, Code, Negrita} from "./Botsubmit.styled";
import Typography from "@mui/material/Typography";
import GameInfo from "./GameInfo";

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

const runnerRobot = `class RunnerRobot(Robot):

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

const shooterRobot = `class ShooterRobot(Robot):

    def initialize(self):
        self.degrees = 0

    def respond(self):
        self.point_scanner(self.degrees, 10)
        if self.scanned() != None:
            self.cannon(self.degrees, self.scanned())
        else:
            self.degrees = (self.degrees + 10) % 360`;

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
          <Typography
            id='modal-modal-title'
            variant='h4'
            component='h2'
            style={{fontFamily: "Times new roman"}}>
            Instruction set
          </Typography>
          <Typography id='modal-modal-description' sx={{mt: 1}} variant='body1'>
            <GameInfo />
          </Typography>
          <Typography
            id='modal-modal-title'
            variant='h4'
            component='h2'
            sx={{mt: 1.5, fontFamily: "Times new roman"}}>
            Robot code examples
          </Typography>
          <Typography
            id='modal-modal-title'
            variant='h6'
            component='h2'
            sx={{mt: 3}}>
            Example 1: runner_robot.py
          </Typography>
          <Typography id='modal-modal-description' sx={{mt: 1}}>
            <Code>{runnerRobot}</Code>
          </Typography>
          <Typography
            id='modal-modal-title'
            variant='h5'
            component='h2'
            sx={{mt: 3}}>
            Example 2: shooter_robot.py
          </Typography>
          <Typography id='modal-modal-description' sx={{mt: 1}}>
            <Code>{shooterRobot}</Code>
          </Typography>
        </Box>
      </Modal>
    </a>
  );
}
