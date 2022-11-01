import axios from "axios";

export const leaveMatch = async (token, match_id) => {
  // const response = await axios.put(
  //   `${process.env.REACT_APP_API_KEY}leave-match/${match_id}`,
  //   {
  //     headers: {
  //       Authorization: token,
  //     },
  //   }
  // );
  console.log(match_id);
  await fetch(`${process.env.REACT_APP_API_KEY}matches/new-match`, {
    method: "PUT",
    headers: {
      authorization: `${token}`,
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Credentials": "true",
    },
    body: JSON.stringify(match_id),
  })
    .then(async (response) => {
      const data = await response.json();
      if (response.status === 201 || response.status === 200) {
        console.log(response);
        return response;
      } else {
        alert(data.detail);
      }
    })
    .catch((error) => {
      alert(error);
    });
};
