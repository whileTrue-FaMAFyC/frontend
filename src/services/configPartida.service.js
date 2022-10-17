import axios from "axios";

export const getRobotsNames = async () => {
  const response = await axios.get(
    `https://634303a43f83935a784e2a0c.mockapi.io/robots`
  );
  return response;
};
