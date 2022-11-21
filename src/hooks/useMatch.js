import {useReducer} from "react";
import {matchReducer} from "./reducer";

const initialState = {
  creator_username: "",
  has_password: false,
  im_in: false,
  is_creator: false,
  max_players: 0,
  min_players: 0,
  name: "",
  num_games: 0,
  num_rounds: 0,
  requester_username: "",
  results: [],
  started: false,
  user_robot: [],
  users_joined: 0,
};

const useMatch = () => {
  const [match, dispatch] = useReducer(matchReducer, initialState);
  return {match, dispatch};
};
export default useMatch;
