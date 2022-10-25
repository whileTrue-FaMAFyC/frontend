import axios from "axios";

export const getRobotsNames = async (token) => {
  const response = await axios.get(`http://localhost:8000/list-robots`, {
    headers: {Authorization: token},
  });
  console.log(response);
  return response;
};
