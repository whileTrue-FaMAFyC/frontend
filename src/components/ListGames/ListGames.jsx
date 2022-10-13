import {useEffect, useState} from "react";
import {getGames} from "../../services/endpoints";
import ListGamesView from "./ListGamesView";

const ListGames = () => {
  const [games, setGames] = useState([]);

  const callGetGames = async () => {
    try {
      const response = await getGames();
      setGames(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    callGetGames();
  }, []);
  /*   useEffect(() => {
    fetch(`${process.env.REACT_APP_API_KEY}games`)
      .then((response) => response.json())
      .then((json) => setGames(json))
      .catch((error) => console.log(error));
  }, []); */

  return <ListGamesView games={games} />;
};
export default ListGames;
