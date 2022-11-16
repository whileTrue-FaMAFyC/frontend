import {useEffect, useState} from "react";
import {getGames} from "../../services";
import ListGamesView from "./ListGamesView";
import {useForm} from "react-hook-form";

const ListGames = () => {
  const {register, handleSubmit} = useForm();
  const [games, setGames] = useState([]);
  const [refresh, setRefresh] = useState(true);

  const handleRefresh = () => setRefresh(true);

  const callGetGames = async () => {
    try {
      const response = await getGames(localStorage.getItem("user"));
      if (response.data.length) {
        setGames(response.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setRefresh(false);
    }
  };

  useEffect(() => {
    callGetGames();
  }, [refresh]);

  return (
    <ListGamesView
      games={games}
      register={register}
      handleSubmit={handleSubmit}
      refresh={handleRefresh}
      loading={refresh}
    />
  );
};
export default ListGames;
