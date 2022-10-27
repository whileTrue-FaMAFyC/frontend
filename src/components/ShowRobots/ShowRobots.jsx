import {useState, useEffect} from "react";

import {styled} from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import {getRobotsNames} from "../../services";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const ShowRobots = () => {
  const [robotsNames, setRobotsNames] = useState([]);

  const callGetRobotsNames = async () => {
    try {
      const response = await getRobotsNames(localStorage.getItem(`user`));
      setRobotsNames(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callGetRobotsNames();
    console.log(robotsNames);
  }, []);

  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}>
      {robotsNames.map((robot) => (
        <Grid container spacing={2} key={robot.name}>
          <Grid item>
            <ButtonBase sx={{width: 128, height: 128}}>
              <Img alt='' src={robot.avatar} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction='column' spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant='subtitle1' component='div'>
                  {robot.name}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Paper>
  );
};

export default ShowRobots;
