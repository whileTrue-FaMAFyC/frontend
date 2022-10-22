import axios from "axios";

export const getRobotsNames = async (token) => {
  const response = await axios.get(`http://localhost:8000/list-robots`, {
    headers: {Authorization: token},
  });
  return response;
};
