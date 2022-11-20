import {useEffect, useState} from "react";
import {getGames} from "../../services";
import ListGamesView from "./ListGamesView";
import {useForm} from "react-hook-form";

const ListGames = () => {
  const {register, handleSubmit} = useForm();
  const [games, setGames] = useState([]);
  const [refresh, setRefresh] = useState(true);

  const handleRefresh = () => setRefresh(true);

  const callGetGames = async (data) => {
    try {
      if (!data) {
        data = {is_owner: "None", is_joined: "None", started: "None"};
      }
      const response = await getGames(localStorage.getItem("user"), data);
      setGames(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setRefresh(false);
    }
  };

  useEffect(() => {
    callGetGames();
  }, []);

  return (
    <ListGamesView
      games={games}
      register={register}
      handleSubmit={handleSubmit}
      submit={callGetGames}
      refresh={handleRefresh}
      loading={refresh}
    />
  );
};
export default ListGames;
