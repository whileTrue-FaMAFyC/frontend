import {useEffect, useState} from "react";
import {getGames} from "../../services/games.service";
import ListGamesView from "./ListGamesView";

const ListGames = () => {
  const [games, setGames] = useState([]);

  const callGetGames = async () => {
    try {
      const response = await getGames();
      setGames(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callGetGames();
  }, []);

  return <ListGamesView games={games} />;
};
export default ListGames;
