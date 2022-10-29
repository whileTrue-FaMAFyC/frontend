import {useReducer} from "react";

const initialState = {
  host: "",
  players: [],
  results: null,
};

const reducer = (state, action) => {
  if (action.type === "new_lobby") {
    return {
      ...state,
      host: action.payload.host.name,
      players: [action.payload.host],
    };
  }

  if (action.type === "joined_lobby") {
    return {
      ...state,
      players: action.payload.players,
    };
  }

  if (action.type === "new_player") {
    return {
      ...state,
      players: [...state.players, action.payload.player],
    };
  }
};

const useMatch = () => {
  const [match, dispatch] = useReducer(reducer, initialState);

  return {dispatch, match};
};
export default useMatch;
