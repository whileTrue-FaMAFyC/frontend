import {useForm} from "react-hook-form";
import {Fragment, useState, useEffect} from "react";
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
  StyledButton,
  StyledError,
  StyledSelect,
  StyledInput,
} from "./Match.styled";
import {joinMatch, leaveMatch, getRobotsNames} from "../../services";
import Avatar from "@mui/material/Avatar";
import {StyledInputGroup} from "../../components/Login/Login.styled";

const MatchView = ({match}) => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm();
  const [robotsNames, setRobotsNames] = useState([]);

  const callGetRobotsNames = async () => {
    try {
      const response = await getRobotsNames(localStorage.getItem(`user`));
      setRobotsNames(response.data);
      console.log(robotsNames);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callGetRobotsNames();
  }, []);

  console.log(robotsNames);
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
                <Avatar width={50} src={user.user_avatar} alt='user avatar' />
                <Text>{user.robot_name}</Text>
                <Avatar width={50} src={user.robot_avatar} alt='robot avatar' />
              </Fragment>
            ))}
          </PlayersInfo>

          <div>
            <StyledSelect
              enabledColor={match.im_in}
              disabled={match.im_in}
              id='inputRaobot'
              data-testid='nameRobot'
              {...register("joining_robot", {required: true})}>
              {robotsNames.map((a) => (
                <option key={a.name} value={a.name}>
                  {a.name}
                </option>
              ))}
              <option key={""} value=''>
                * Choose a robot *
              </option>
            </StyledSelect>
            {errors.creator_robot?.type === "required" && (
              <StyledError role='alertError'>Robot is required.</StyledError>
            )}
            <StyledInputGroup>
              <StyledInput
                enabledColor={match.im_in}
                disabled={match.im_in}
                type={match.im_in ? "hidden" : "password"}
                id='inputPassword'
                data-testid='password'
                placeholder=' Match password'
                {...register(" match_password", {
                  maxLength: 16,
                })}
              />
              {errors.password?.type === "maxLength" && (
                <StyledError role='alertError'>
                  The password must have at most 16 characters.
                </StyledError>
              )}
            </StyledInputGroup>
          </div>
          <Buttons>
            <StyledButton
              type='submit'
              onClick={joinMatch}
              data-testid='joinButton'
              enabledColor={match.im_in}
              disabled={match.im_in}>
              Join
            </StyledButton>
            <StyledButton
              type='submit'
              onClick={leaveMatch}
              data-testid='leaveButton'
              enabledColor={!match.im_in}
              disabled={!match.im_in}>
              Leave
            </StyledButton>
            <Button>START</Button>
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
