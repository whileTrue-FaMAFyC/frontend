import {useState, useEffect} from "react";

import {styled} from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import {getRobotsNames} from "../../services";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import {
  StyledButton,
  StyledEntryCard,
  StyledInput,
  StyledInputGroup,
  EntryPage,
  StyledError,
} from "./RobotsLibrary.style";

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
    <EntryPage>
      <h2> Library </h2>
      {robotsNames.map((robot) => (
        <Paper
          sx={{
            p: 2,
            margin: "auto",
            borderRadius: 2,
            maxWidth: 500,
            flexGrow: 1,
            backgroundColor: "#252c32",
            maxWidth: 800,
            maxHeight: 150,
            margin: `2px auto`,
            padding: 2,
          }}>
          <Grid container spacing={2} key={robot.name}>
            <Grid item>
              <Avatar
                style={{
                  height: 120,
                  width: 120,
                  verticalAlign: "middle",
                  position: "relative",
                  justifyContent: "center",
                }}
                spacing={2}
                src={robot.avatar}
              />
            </Grid>
            <Grid
              item
              xs
              container
              spacing={0}
              direction='column'
              alignItems='center'
              justifyContent='center'>
              <Typography
                gutterBottom
                variant='body1'
                color='common.white'
                style={{justifyContent: "center"}}>
                {robot.name}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </EntryPage>
  );
};

export default ShowRobots;
