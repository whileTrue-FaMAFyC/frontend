import axios from "axios";

export const getGames = async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_KEY}games`);
  return response;
};
