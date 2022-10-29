import {useEffect, useState} from "react";
import {joinGame} from "../../services";
import {Container, Button} from "./Match.styled";
import useMatch from "../../hooks/useMatch";

const Match = () => {
  const {dispatch, match} = useMatch();
  const [socket, setSocket] = useState(
    !match.results && new WebSocket(process.env.REACT_APP_WEB_SOCKET)
  );

  const handleJoinGame = async () => {
    try {
      await joinGame(localStorage.getItem("user"));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    socket.onmessage = (e) => {
      const data = JSON.parse(e.data);
      dispatch({type: data.action, payload: data});
    };

    return () => socket.close(1001, "Exit");
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
