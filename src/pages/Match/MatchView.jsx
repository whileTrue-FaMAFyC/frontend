import {Fragment} from "react";
import {
  Container,
  SuperWrapper,
  Text,
  Title,
  MatchInfo,
  PlayersInfo,
  Buttons,
  Button,
  Wrapper,
} from "./Match.styled";
import {MatchStartView} from "../../components";

const MatchView = ({match, matchId}) => {
  console.log(match);
  const isReadyToStart =
    match.is_creator && match.min_players <= match.users_joined;

  return (
    <Container>
      <SuperWrapper>
        <Title>{match.name}</Title>
        <MatchInfo>
          <Text>Creator user: {match.creator_username}</Text>
          <Text>Games: {match.num_games}</Text>
          <Text>Rounds: {match.num_rounds}</Text>
          <Text>Min players: {match.min_players}</Text>
          <Text>Max players: {match.max_players}</Text>
          <Text>
            joined: {match.users_joined}/{match.max_players}
          </Text>
        </MatchInfo>

        <Wrapper>
          <PlayersInfo>
            {match.user_robot.map((user, index) => (
              <Fragment key={index}>
                <Text>{user.username}</Text>
                <img width={50} src={user.user_avatar} alt='user avatar' />
                <Text>{user.robot_name}</Text>
                <img width={50} src={user.robot_avatar} alt='robot avatar' />
              </Fragment>
            ))}
          </PlayersInfo>
          <Buttons>
            <Button>JOIN</Button>
            <Button>EXIT</Button>
            <MatchStartView
              isCreator={match.is_creator}
              isReadyToStart={isReadyToStart}
              matchId={matchId}
            />
          </Buttons>
        </Wrapper>
      </SuperWrapper>

      {match.results.length > 0 &&
        match.results.map((winner, index) => (
          <div key={index}>
            <p>RESULTADOS</p>
            <p data-testid='user_winner'>{winner.username}</p>
            <p>{winner.robot_name}</p>
          </div>
        ))}
      {match.started && <p>start</p>}
    </Container>
  );
};
export default MatchView;
