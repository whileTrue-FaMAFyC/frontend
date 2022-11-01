import axios from "axios";

export const getRobotsNames = async (token) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_KEY}list-robots`,
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return response;
};
