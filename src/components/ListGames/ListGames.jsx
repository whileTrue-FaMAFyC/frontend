import {useEffect, useState} from "react";
import {getGames} from "../../services";
import ListGamesView from "./ListGamesView";

const ListGames = () => {
  const [games, setGames] = useState([]);

  const callGetGames = async () => {
    try {
      const response = await getGames(localStorage.getItem("user"));
      if (response.data.length) {
        setGames(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callGetGames();
  }, [games]);

  return <ListGamesView games={games} />;
};
export default ListGames;
