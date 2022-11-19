import axios from "axios";

export const getGames = async (token, data) => {
  // const response = await axios.get(
  //   `${process.env.REACT_APP_API_KEY}matches/list-matches`,
  //   {
  //     headers: {
  //       Authorization: token,
  //     },
  //     body: JSON.stringify(data),
  //   }
  // );
  // console.log(JSON.stringify(data));
  // console.log(response.data);
  // return response;
  await fetch(`${process.env.REACT_APP_API_KEY}matches/list-matches`, {
    method: "POST",
    headers: {
      authorization: `${token}`,
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Credentials": "true",
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    return response;
  });
};
