import axios from "axios";

export const verifyUser = async (match_id, username) => {
  const response = await axios.put(
    `${process.env.REACT_APP_API_KEY}verifyuser/${match_id}`, // PEGARLE AL ENDPOINT QUE CORRESPONDA
    {username: username}
  );
  return response;
};
