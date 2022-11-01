import {useEffect, useState} from "react";
import useMatch from "../../hooks/useMatch";
import {getMatchInfo} from "../../services";
import {useParams} from "react-router-dom";
import {Container, Button} from "./Match.styled";

const Match = () => {
  const {id} = useParams();
  const {match, dispatch} = useMatch();
  const [socket, setSocket] = useState(
    new WebSocket(process.env.REACT_APP_WEB_SOCKET)
  );

  useEffect(() => {
    const callGetMatchInfo = async () => {
      try {
        const response = await getMatchInfo(localStorage.getItem("user"), id);
        dispatch({type: "initial_info", payload: response.data});
      } catch (error) {
        console.log(error);
      }
    };
    callGetMatchInfo();
  }, []);

  useEffect(() => {
    socket.onmessage = (e) => {
      const data = JSON.parse(e.data);
      dispatch({type: data.action, payload: data.data});
    };
  }, [dispatch]);

  return (
    <Container>
      <p>{match.name}</p>
      <p>{match.creator_username}</p>
      <p>{match.num_games}</p>
      <p>{match.num_rounds}</p>
      <p>{match.min_players}</p>
      <p>{match.max_players}</p>
      <p>{match.users_joined}</p>
      {match.user_robot.map((user, index) => (
        <div key={index}>
          <p>{user.username}</p>
          <p>{user.user_avatar}</p>
          <p>{user.robot_name}</p>
          <p>{user.robot_avatar}</p>
        </div>
      ))}
      <Button>JOIN</Button>
    </Container>
  );
};
export default Match;
