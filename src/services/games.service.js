import axios from "axios";

export const getGames = async (token, data) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_KEY}matches/list-matches`,
    {
      headers: {
        Authorization: token,
      },
      body: JSON.stringify(data),
    }
  );
  return response;
};
