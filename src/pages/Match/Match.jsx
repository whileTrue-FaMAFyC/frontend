import {useEffect, useRef, useState} from "react";
import {useParams} from "react-router-dom";
import useMatch from "../../hooks/useMatch";
import {getMatchInfo, leaveMatch} from "../../services";
import MatchView from "./MatchView";

const Match = () => {
  const [loading, setLoading] = useState(true);
  const ws = useRef(null);
  const {match, dispatch} = useMatch();
  const {match_id} = useParams();

  const handleLeave = async () => {
    const user = localStorage.getItem("user");
    await leaveMatch(user, match_id);
  };

  useEffect(() => {
    const callGetMatchInfo = async () => {
      try {
        const user = localStorage.getItem("user");
        const response = await getMatchInfo(user, match_id);
        dispatch({type: "initial_info", payload: response.data});
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    callGetMatchInfo();
  }, [dispatch]);

  useEffect(() => {
    ws.current = new WebSocket(
      `${
        process.env.REACT_APP_WEB_SOCKET
      }matches/ws/follow-lobby/${match_id}?authorization=${localStorage.getItem(
        "user"
      )}`
    );

    ws.current.onopen = () => {
      console.log("connected");
    };

    ws.current.onmessage = (e) => {
      const data = JSON.parse(e.data);
      dispatch({type: data.action, payload: data.data});
    };

    ws.current.onclose = (e) => {
      console.log(e.code);
    };

    return () => {
      ws.current.close(1000, "Unmount");
    };
  }, [dispatch]);

  return (
    <MatchView
      match={match}
      match_id={match_id}
      handleLeave={handleLeave}
      loading={loading}
    />
  );
};
export default Match;
