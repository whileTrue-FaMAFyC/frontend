import {useEffect} from "react";
import useMatch from "../../hooks/useMatch";
import {getMatchInfo} from "../../services";
import {useParams} from "react-router-dom";
import {Container, Button} from "./Match.styled";

const Match = () => {
  const {id} = useParams();
  const {match, dispatch} = useMatch();

  const callGetMatchInfo = async () => {
    try {
      const response = await getMatchInfo(localStorage.getItem("user"), id);
      dispatch({type: "initial_info", payload: response.data});
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callGetMatchInfo();
  }, []);

  return (
    <Container>
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

/*   const [socket, setSocket] = useState(
    new WebSocket(process.env.REACT_APP_WEB_SOCKET)
  ); */

/*  useEffect(() => {
    socket.onmessage = (e) => {
      const data = JSON.parse(e.data);
      dispatch({type: data.action, payload: data});
    };

    return () => socket.close(1000, "Exit");
  }, []);
 */
