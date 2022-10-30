import {useEffect, useState} from "react";
import {useMatch} from "../../contexts/MatchContext";
import {Container, Button} from "./Match.styled";

const Match = () => {
  const {match, dispatch} = useMatch();
  const [socket, setSocket] = useState(
    !match.results && new WebSocket(process.env.REACT_APP_WEB_SOCKET)
  );

  useEffect(() => {
    socket.onmessage = (e) => {
      const data = JSON.parse(e.data);
      dispatch({type: data.action, payload: data});
    };

    return () => socket.close(1000, "Exit");
  }, [socket]);

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
