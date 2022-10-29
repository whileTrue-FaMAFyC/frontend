import axios from "axios";

export const joinGame = async (token) => {
  const response = await axios.post(`${process.env.REACT_APP_API_KEY}join`, {
    headers: {Authorization: token},
  });
  return response;
};
