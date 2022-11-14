import axios from "axios";

export const leaveMatch = async (token, match_id) => {
  const response = axios.delete(
    `${process.env.REACT_APP_API_KEY}matches/leave-match/${match_id}`,
    {headers: {authorization: token}}
  );
  return response;
};
