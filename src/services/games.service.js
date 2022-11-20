import axios from "axios";

export const getGames = async (token, data) => {
  const response = await axios.get(
    `${
      process.env.REACT_APP_API_KEY
    }matches/list-matches?is_owner=${encodeURIComponent(
      data.is_owner
    )}&is_joined=${encodeURIComponent(
      data.is_joined
    )}&started=${encodeURIComponent(data.started)}`,
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return response;
};
