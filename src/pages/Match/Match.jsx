import {useEffect, useRef, useState} from "react";
import {useParams} from "react-router-dom";
import useMatch from "../../hooks/useMatch";
import {getMatchInfo, leaveMatch} from "../../services";

import MatchView from "./MatchView";

const Match = () => {
  const {match, dispatch} = useMatch();
  const [loading, setLoading] = useState(true);
  const {match_id} = useParams();

  const [ws, setWs] = useState(
    new WebSocket(
      `${
        process.env.REACT_APP_WEB_SOCKET
      }matches/ws/follow-lobby/${match_id}?authorization=${localStorage.getItem(
        "user"
      )}`
    )
  );

  const handleLeave = async () => {
    const user = localStorage.getItem("user");
    await leaveMatch(user, match_id);
  };

  console.log("HOLAAAAAAAAAA");
  console.log("MATCH ID:", match_id);
  console.log("USER:", localStorage.getItem("user"));

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
    ws.onopen = () => {
      console.log("connected");
    };

    ws.onmessage = (e) => {
      const data = JSON.parse(e.data);
      console.log("MESSAGE:", e.data);
      dispatch({type: data.action, payload: data.data});
    };

    ws.onclose = (e) => {
      console.log(e.code);
    };

    return () => {
      ws.close(1000, "Unmount");
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
