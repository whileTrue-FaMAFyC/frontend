import { useEffect, useState } from "react";
import useMatch from "../../hooks/useMatch";
import { getMatchInfo } from "../../services";
import { useParams } from "react-router-dom";
import { Container, Button } from "./Match.styled";

const Match = () => {
  const { id } = useParams();
  const { match, dispatch } = useMatch();
  // const [socket, setSocket] = useState(
  //   new WebSocket(`process.env.REACT_APP_WEB_SOCKET${id}?
  //     authorization=${localStorage.getItem("user")}`)
  // );

  const ws = new WebSocket(`${process.env.REACT_APP_WEB_SOCKET}${id}?authorization=${localStorage.getItem("user")}`);
  ws.onopen = () => ws.send("WEBSOCKET CONNECTED");

  // const callGetMatchInfo = async () => {
  //   try {
  //     const response = await getMatchInfo(localStorage.getItem("user"), id);
  //     dispatch({ type: "initial_info", payload: response.data });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    const callGetMatchInfo = async () => {
      try {
        const response = await getMatchInfo(localStorage.getItem("user"), id);
        dispatch({ type: "initial_info", payload: response.data });
      } catch (error) {
        console.log(error);
      }
    };
    callGetMatchInfo();
  }, []);

  return (
    <Container>
      <p>
        {match.name}
      </p>
      <p>
        {match.num_games}
      </p>
      <p>
        {match.num_rounds}
      </p>
      <p>
        {match.min_players}
      </p>
      <p>
        {match.max_players}
      </p>
      <p>
        {match.users_joined}
      </p>
      {Object.keys(match.user_robot).map((key, index) => (
        <p key={index}>
          {key}
          {match.user_robot[key]}
        </p>
      ))}
      <Button>JOIN</Button>
    </Container>
  );
};
export default Match;



/*  useEffect(() => {
    socket.onmessage = (e) => {
      const data = JSON.parse(e.data);
      dispatch({type: data.action, payload: data});
    };

    return () => socket.close(1000, "Exit");
  }, []);
 */
