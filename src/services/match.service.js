import axios from "axios";

export const getMatchInfo = async (token, match_id) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_KEY}matches/join-lobby?match_id=${match_id}`,
    {headers: {Authorization: token}}
  );
  return response;
};
