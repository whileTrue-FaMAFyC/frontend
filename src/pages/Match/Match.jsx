import {useEffect, useState} from "react";
import {Fragment} from "react";
import useMatch from "../../hooks/useMatch";
import {getMatchInfo, joinMatch, leaveMatch} from "../../services";
import {useParams} from "react-router-dom";
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
} from "./Match.styled";

const Match = () => {
  const {match_id} = useParams();
  const {match, dispatch} = useMatch();
  const [socket, setSocket] = useState(
    new WebSocket(
      `${
        process.env.REACT_APP_WEB_SOCKET
      }matches/ws/follow-lobby/${match_id}?authorization=${localStorage.getItem(
        "user"
      )}`
    )
  );
  useEffect(() => {
    const callGetMatchInfo = async () => {
      try {
        const response = await getMatchInfo(
          localStorage.getItem("user"),
          match_id
        );
        dispatch({type: "initial_info", payload: response.data});
      } catch (error) {
        console.log(error);
      }
    };
    callGetMatchInfo();
  }, [dispatch, match_id]);

  useEffect(() => {
    if (!socket) return;
    socket.onmessage = (e) => {
      const data = JSON.parse(e.data);
      dispatch({type: data.action, payload: data.data});
    };
  }, [dispatch, socket]);

  useEffect(() => {
    if (!socket) return;
    socket.onclose = (e) => {
      console.log("ERROR CODE:", e.code);
    };
  }, [socket]);

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
    </Container>
  );
};
export default Match;

{
  /* <table>
            <tbody>
              <tr>
                <td>
                  <StyledSelect
                    enabledColor={success}
                    disabled={success}
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
                    <StyledError role='alertError'>
                      Robot is required.
                    </StyledError>
                  )}
                </td>
                <td>
                  <StyledInputGroup>
                    <StyledInput
                      enabledColor={success}
                      disabled={success}
                      type='password'
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
                </td>
              </tr>
              <tr>
                <td>
                  <StyledButton
                    type='submit'
                    onClick={joined && joinMatch}
                    data-testid='joinButton'
                    enabledColor={success}
                    disabled={success}>
                    Join
                  </StyledButton>
                </td>
                <td>
                  <StyledButton
                    type='submit'
                    onClick={notJoined && leaveMatch}
                    data-testid='leaveButton'
                    enabledColor={!success}
                    disabled={!success}>
                    Leave
                  </StyledButton>
                </td>
              </tr>
            </tbody>
          </table>
        </form> */
}
