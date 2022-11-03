import {useEffect} from "react";
import MatchView from "./MatchView";
import {useParams} from "react-router-dom";
import useMatch from "../../hooks/useMatch";
import {getMatchInfo} from "../../services";

const Match = () => {
  const {match_id} = useParams();
  const {match, dispatch} = useMatch();

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

  return <MatchView match={match} />;
};
export default Match;
