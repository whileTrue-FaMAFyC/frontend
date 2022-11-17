import {start} from "../../services/matchStart.service";
import {StyledButton} from "./MatchStart.styled";

const MatchStartView = ({isCreator, isReadyToStart, started, matchId}) => {
  return (
    <div>
      {isCreator ? (
        <StyledButton
          onClick={() => start(matchId)}
          enabledColor={(!isReadyToStart && !started) || started}
          disabled={(!isReadyToStart && !started) || started}
          data-testid='Start'>
          Start match
        </StyledButton>
      ) : null}
    </div>
  );
};
export default MatchStartView;
