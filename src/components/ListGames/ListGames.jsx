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
    // try {
    //   if (!data) {
    //     data = {is_owner: "None", is_joined: "None", started: "None"};
    //   }
    //   console.log(JSON.stringify(data));
    //   const response = await getGames(localStorage.getItem("user"), data);
    //   if (response.data.length) {
    //     setGames(response.data);
    //   }
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   setRefresh(false);
    // }
    await fetch(`${process.env.REACT_APP_API_KEY}matches/list-matches`, {
      method: "POST",
      headers: {
        authorization: `${localStorage.getItem("user")}`,
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify(data),
    }).then(async (response) => {
      const data = await response.json();
      if (response.status === 201 || response.status === 200) {
        setGames(data);
        setRefresh(false);
      }
    });
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
