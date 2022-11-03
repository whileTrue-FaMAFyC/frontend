import {useEffect, useState} from "react";
import {Fragment} from "react";
import useMatch from "../../hooks/useMatch";
import {
  getMatchInfo,
  joinMatch,
  leaveMatch,
  getRobotsNames,
} from "../../services";
import {useParams} from "react-router-dom";
import MatchView from "./MatchView";

const Match = () => {
  const {match_id} = useParams();
  const {match, dispatch} = useMatch();
  // const [robotsNames, setRobotsNames] = getRobotsNames();
  useEffect(() => {
    const callGetMatchInfo = async () => {
      try {
        const response = await getMatchInfo(
          localStorage.getItem("user"),
          match_id
        );
        localStorage.setItem("match_id", match_id);
        console.log(response);
        dispatch({type: "initial_info", payload: response.data});
      } catch (error) {
        console.log(error);
      }
    };

    callGetMatchInfo();
  }, [dispatch]);

  useEffect(() => {
    const ws = new WebSocket(
      `${
        process.env.REACT_APP_WEB_SOCKET
      }matches/ws/follow-lobby/${match_id}?authorization=${localStorage.getItem(
        "user"
      )}`
    );

    ws.onopen = () => {
      console.log("connected");
    };

    ws.onmessage = (e) => {
      const data = JSON.parse(e.data);
      dispatch({type: data.action, payload: data.data});
    };

    ws.onclose = (e) => {
      console.log(e.code);
    };

    return () => {
      ws.close(1000, "Unmount");
    };
  }, [dispatch]);

  // useEffect(() => {
  //   const callGetRobotsNames = async () => {
  //     try {
  //       const response = await getRobotsNames(localStorage.getItem(`user`));
  //       setRobotsNames(response.data);
  //       console.log(robotsNames);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   callGetRobotsNames();
  // }, []);
  // console.log(robotsNames);

  return <MatchView match={match} match_id={match_id} />; //robotsNames={robotsNames} />;
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
