import {MatchStartView, FormJoinMatch} from "../../components";
import {CircularProgress} from "@mui/material";
import Player from "../../components/Player/Player";
import MatchLoader from "./components/MatchLoader";
import {
  Container,
  Results,
  Text,
  Span,
  Title,
  MatchInfo,
  PlayersInfo,
  Aside,
  ResultsWrapper,
  Button,
} from "./Match.styled";

const MatchView = ({match, match_id, handleLeave, loading}) => {
  if (loading) {
    return <MatchLoader />;
  }

  return (
    <Container>
      <Results>
        <Title>{match.name}</Title>
      </Results>
      <Aside>
        <MatchInfo>
          <Text>
            <Span>Games: </Span>
            {match.num_games}
          </Text>
          <Text>
            <Span>Max players: </Span>
            {match.max_players}
          </Text>
          <Text>
            <Span>Rounds: </Span>
            {match.num_rounds}
          </Text>
          <Text>
            <Span>Min players: </Span>
            {match.min_players}
          </Text>
        </MatchInfo>

        <PlayersInfo>
          {match.user_robot.map(
            ({username, robot_avatar, robot_name}, index) => (
              <Player
                key={index}
                username={username}
                robot_avatar={robot_avatar}
                robot_name={robot_name}
              />
            )
          )}
        </PlayersInfo>

        {!match.is_creator && !match.im_in && (
          <FormJoinMatch
            match_id={match_id}
            has_password={match.has_password}
          />
        )}

        {match.is_creator && (
          <MatchStartView
            isCreator={match.is_creator}
            isReadyToStart={
              match.is_creator && match.min_players <= match.users_joined
            }
            started={match.started}
            matchId={match_id}
          />
        )}

        {!match.is_creator && match.im_in && (
          <Button onClick={handleLeave} data-testid='leaveButton'>
            Leave
          </Button>
        )}
      </Aside>

      {match.results.length > 0 && (
        <ResultsWrapper>
          <div>
            {match.results.length === 1 && <h2>Winner</h2>}
            {match.results.length > 1 && <h2>Winners</h2>}
            {match.results.map((winner, index) => (
              <div key={index}>
                <p data-testid='user_winner'>{winner.username}</p>
              </div>
            ))}
          </div>
        </ResultsWrapper>
      )}

      {match.started && <p style={{color: "#252c32"}}>start</p>}
    </Container>
  );
};
export default MatchView;
