import {MatchStartView, FormJoinMatch} from "../../components";
import Player from "../../components/Player/Player";
import {CircularProgress} from "@mui/material";
import MatchLoader from "./components/MatchLoader";
import {
  Container,
  Results,
  Winner,
  Text,
  Span,
  Title,
  MatchInfo,
  PlayersInfo,
  Aside,
  ResultsWrapper,
  Button,
} from "./Match.styled";
import Confetti from "react-confetti";

const MatchView = ({match, match_id, handleLeave, loading}) => {
  if (loading) {
    return <MatchLoader />;
  }

  return (
    <Container>
      <Results>
        <Title>{match.name}</Title>
        {match.results.length > 0 && (
          <ResultsWrapper>
            {match.results.length === 1 && <Winner>Winner</Winner>}
            {match.results.length > 1 && <Winner>Winners</Winner>}
            {match.results.map((winner, index) => (
              <p key={index} data-testid='user_winner'>
                {winner.username}
              </p>
            ))}
          </ResultsWrapper>
        )}
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
                is_creator={match.creator_username === username}
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

        {match.is_creator && !match.started && (
          <MatchStartView
            isCreator={match.is_creator}
            isReadyToStart={
              match.is_creator && match.min_players <= match.users_joined
            }
            started={match.started}
            matchId={match_id}
          />
        )}

        {!match.is_creator && match.im_in && !match.started && (
          <Button onClick={handleLeave} data-testid='leaveButton'>
            Leave
          </Button>
        )}
      </Aside>
    </Container>
  );
};
export default MatchView;
