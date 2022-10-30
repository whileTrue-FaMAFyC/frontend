import {useContext, createContext, useReducer, useMemo} from "react";
import {matchReducer} from "./reducer";

const MatchContext = createContext();

export const useMatch = () => {
  return useContext(MatchContext);
};

const initialState = {
  host: "host",
  players: [{name: "Host", robot: "RobotDeHost"}],
  results: null,
};

const MatchProvider = ({children}) => {
  const [match, dispatch] = useReducer(matchReducer, initialState);

  const value = useMemo(() => {
    return {match, dispatch};
  }, [match, dispatch]);

  return (
    <MatchContext.Provider value={value}>{children}</MatchContext.Provider>
  );
};
export default MatchProvider;
