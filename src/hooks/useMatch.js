import {useReducer} from "react";
import {matchReducer} from "./reducer";

const initialState = {
  host: "",
  players: [],
  results: null,
};

const useMatch = () => {
  const [match, dispatch] = useReducer(matchReducer, initialState);

  return {match, dispatch};
};
export default useMatch;
