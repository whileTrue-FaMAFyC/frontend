import {useEffect, useState} from "react";
import ListGamesView from "./ListGamesView";

const ListGames = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_KEY}games`)
      .then((response) => response.json())
      .then((json) => setGames(json))
      .catch((error) => console.log(error));
  }, []);

  return <ListGamesView games={games} />;
};
export default ListGames;
