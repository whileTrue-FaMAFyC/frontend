import {useReducer} from "react";
import {matchReducer} from "./reducer";

const initialState = {
  name: "",
  creator_username: "",
  min_players: 0,
  max_players: 0,
  num_games: 0,
  users_joined: 0,
  user_robot: [],
  results: [],
  has_password: false,
  started: false,
  im_in: false,
  is_creator: false,
};

const useMatch = () => {
  const [match, dispatch] = useReducer(matchReducer, initialState);

  return {match, dispatch};
};
export default useMatch;
