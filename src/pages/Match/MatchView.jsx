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
  Results,
  ResultsWrapper,
} from "./Match.styled";
import Avatar from "@mui/material/Avatar";

const MatchView = ({match, matchId}) => {
  console.log(match);
  const isReadyToStart =
    match.is_creator && match.min_players <= match.users_joined;
  match.results = [{username: "seba", robot_name: "wallee"}];
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
                <Avatar
                  width={50}
                  spacing={2}
                  src={user.user_avatar}
                  alt='user avatar'
                  style={{margin: 5}}
                />
                <Text>{user.robot_name}</Text>
                <Avatar
                  width={50}
                  spacing={2}
                  src={user.robot_avatar}
                  alt='robot avatar'
                  style={{margin: 5}}
                />
              </Fragment>
            ))}
          </PlayersInfo>
          <Buttons>
            <Button>JOIN</Button>
            <Button>EXIT</Button>
            <Button>START</Button>
          </Buttons>
        </Wrapper>

        <ResultsWrapper>
          {match.results.length > 0 && (
            <div>
              {match.results.length === 1 && <h2>Winner</h2>}
              {match.results.length > 1 && <h2>Winners</h2>}
              {match.results.map((winner, index) => (
                <Results key={index}>
                  <p data-testid='user_winner'>{winner.username}</p>
                </Results>
              ))}
            </div>
          )}
        </ResultsWrapper>
        {match.started && <p>start</p>}
      </SuperWrapper>
    </Container>
  );
};
export default MatchView;
