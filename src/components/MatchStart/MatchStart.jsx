import {start} from "../../services/matchStart.service";
import {StyledButton} from "./MatchStart.styled";

const MatchStartView = ({isCreator, isReadyToStart, started, matchId}) => {
  return (
    <div>
      {isCreator ? (
        <div>
          <StyledButton
            onClick={() => start(matchId)}
            enabledColor={!isReadyToStart || started}
            disabled={!isReadyToStart || started}
            data-testid='Start'>
            Start match
          </StyledButton>
        </div>
      ) : null}
    </div>
  );
};
export default MatchStartView;
