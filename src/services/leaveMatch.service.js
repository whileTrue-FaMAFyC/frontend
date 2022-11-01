import axios from "axios";

export const leaveMatch = async (token, match_id) => {
  const response = await axios.put(
    `${process.env.REACT_APP_API_KEY}leave-match/${match_id}`,
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return response;
};
