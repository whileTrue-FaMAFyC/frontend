import axios from "axios";

export const getGames = async (token) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_KEY}matches/list-matches`,
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return response;
};
