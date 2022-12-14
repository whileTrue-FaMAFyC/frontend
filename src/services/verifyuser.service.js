import axios from "axios";

export const verifyUser = async (code, username) => {
  const response = await axios.put(
    `${process.env.REACT_APP_API_KEY}verifyuser/${username}`,
    {verification_code: code}
  );
  return response;
};
