import axios from "axios";

export const joinMatch = async (match_id, username, robot) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_KEY}verifyuser/${match_id}`, // PEGARLE AL ENDPOINT QUE CORRESPONDA
    {username: username, name_robot: robot}
  );
  return response;
};
