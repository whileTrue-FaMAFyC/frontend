import {leaveMatch} from "../../services";
import {MatchStartView, FormJoinMatch} from "../../components";
import Player from "../../components/Player/Player";
import {
  Container,
  Results,
  Text,
  Title,
  MatchInfo,
  PlayersInfo,
  Wrapper,
  ResultsWrapper,
  StyledButton,
  Button,
} from "./Match.styled";

const MatchView = ({match, match_id}) => {
  const handleLeave = async () => {
    const user = localStorage.getItem("user");
    await leaveMatch(user, match_id);
  };

  return (
    <Container>
      <Results>
        <Title>{match.name}</Title>
      </Results>

      <Wrapper>
        <MatchInfo>
          <Text>Games: {match.num_games}</Text>
          <Text>Rounds: {match.num_rounds}</Text>
          <Text>Min players: {match.min_players}</Text>
          <Text>Max players: {match.max_players}</Text>
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
          <FormJoinMatch match_id={match_id} />
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
          <Button type='button' onClick={handleLeave} data-testid='leaveButton'>
            Leave
          </Button>
        )}
      </Wrapper>

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
