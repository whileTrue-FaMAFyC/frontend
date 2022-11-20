import React from "react";
import {StyledButton} from "./MatchStartView.styled";
import {start} from "../../services/matchStart.service";

const MatchStartView = ({isCreator, isReadyToStart, started, matchId}) => {
  return (
    <div>
      {isCreator ? (
        <div>
          <StyledButton
            onClick={() => start(matchId)}
            enabledColor={(!isReadyToStart && !started) || started}
            disabled={(!isReadyToStart && !started) || started}
            data-testid='Start'>
            Start match
          </StyledButton>
        </div>
      ) : null}
    </div>
  );
};

export default MatchStartView;
