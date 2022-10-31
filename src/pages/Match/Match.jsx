import {useEffect, useState} from "react";
import useMatch from "../../hooks/useMatch";
import {getMatchInfo} from "../../services";
import {Container, Button} from "./Match.styled";

const Match = () => {
  const {match, dispatch} = useMatch();
  const [socket, setSocket] = useState(
    new WebSocket(process.env.REACT_APP_WEB_SOCKET)
  );

  const callGetMatchInfo = async () => {
    try {
      const response = await getMatchInfo("israel", "20");
      dispatch({type: "initial_info", payload: response.data});
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callGetMatchInfo();
  }, []);

  useEffect(() => {
    socket.onmessage = (e) => {
      const data = JSON.parse(e.data);
      dispatch({type: data.action, payload: data});
    };

    return () => socket.close(1000, "Exit");
  }, []);

  return (
    <Container>
      {match.players.map((player, index) => (
        <p key={index}>{player.name}</p>
      ))}
      <Button>JOIN</Button>
    </Container>
  );
};
export default Match;
