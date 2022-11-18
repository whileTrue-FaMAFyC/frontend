import React, {useState} from "react";
import {StyledButton, Div, StyledError} from "./MatchStart.styled";
import {CircularProgress} from "@mui/material";

const MatchStart = ({isCreator, isReadyToStart, started, matchId}) => {
  const [loading, setLoading] = useState(false);
  const [failureData, setFailureData] = useState("");
  const start = async (matchId) => {
    setLoading(true);
    try {
      await fetch(
        `${process.env.REACT_APP_API_KEY}matches/start-match/${matchId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `${localStorage.getItem("user")}`,
          },
        }
      ).then(async (response) => {
        const data = await response.json();
        setLoading(false);
        if (response.status !== 200 && response.status !== 201) {
          setFailureData(data);
        }
      });
    } catch (error) {
      setFailureData("Network error");
    }
  };

  return (
    <div>
      {isCreator ? (
        <div>
          {!loading ? (
            <StyledButton
              onClick={() => start(matchId)}
              enabledColor={(!isReadyToStart && !started) || started}
              disabled={(!isReadyToStart && !started) || started}
              data-testid='Start'>
              Start match
            </StyledButton>
          ) : (
            <Div>
              <CircularProgress data-testid='loader' />
              <p>The match is running!</p>
            </Div>
          )}
          {failureData !== "" ? <StyledError>{failureData}</StyledError> : null}
        </div>
      ) : null}
    </div>
  );
};

export default MatchStart;
