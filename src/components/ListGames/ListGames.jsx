import {useEffect, useState} from "react";
import {getGames} from "../../services";
import ListGamesView from "./ListGamesView";

const ListGames = () => {
  const [games, setGames] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => setRefresh(!refresh);

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
  }, [refresh]);

  return <ListGamesView games={games} refresh={handleRefresh} />;
};
export default ListGames;
