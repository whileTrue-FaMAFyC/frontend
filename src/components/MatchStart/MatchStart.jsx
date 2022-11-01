import {start} from "../../services/matchStart.service";
import {CircularProgress} from "@mui/material";
import {StyledButton} from "./MatchStart.styled";

const MatchStartView = ({isCreator, isReadyToStart, matchId}) => {
  return (
    <div>
      {isCreator ? (
        <div>
          {isReadyToStart ? (
            <StyledButton onClick={() => start(matchId)}>
              Start match
            </StyledButton>
          ) : (
            <CircularProgress />
          )}
        </div>
      ) : null}
    </div>
  );
};
export default MatchStartView;
