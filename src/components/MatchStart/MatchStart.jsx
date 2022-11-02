import {start} from "../../services/matchStart.service";
import {CircularProgress} from "@mui/material";
import {StyledButton} from "./MatchStart.styled";

const MatchStartView = ({isCreator, isReadyToStart, matchId}) => {
  return (
    <div>
      {isCreator ? (
        <div>
          <StyledButton
            onClick={() => start(matchId)}
            enabledColor={!isReadyToStart}
            disabled={!isReadyToStart}
            data-testid='Start'>
            Start match
          </StyledButton>
        </div>
      ) : null}
    </div>
  );
};
export default MatchStartView;
