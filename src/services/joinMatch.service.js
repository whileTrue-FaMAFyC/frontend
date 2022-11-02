import axios from "axios";

export const joinMatch = async (token, match_id, password, robot) => {
  console.log(robot);
  const response = await axios.post(
    `${process.env.REACT_APP_API_KEY}matches/join-match/${match_id}`,
    {
      headers: {
        Authorization: token,
      },
      match_password: password,
      joining_robot: robot,
    }
  );
  return response;
};
