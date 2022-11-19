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

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <a>
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
