import axios from "axios";

export const getMatchInfo = async (token, id) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_KEY}match/${id}`,
    {headers: {Authorization: token}}
  );
  return response;
};
