import axios from "axios";

export const verifyUser = async () => {
  const response = await axios.get(
    `https://6341d10916ffb7e275d86e37.mockapi.io/api/games`
    /*     {verification_code: data.code} */
  );

  return response;
};
