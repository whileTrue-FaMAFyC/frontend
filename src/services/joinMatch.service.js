import axios from "axios";

export const joinMatch = async (token, match_id, data) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_KEY}matches/join-match/${match_id}`,
    {
      headers: {
        Authorization: token,
      },
      body: data,
    }
  );
  return response;
};
