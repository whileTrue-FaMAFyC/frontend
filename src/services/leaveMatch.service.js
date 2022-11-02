export const leaveMatch = async (token, match_id) => {
  await fetch(
    `${process.env.REACT_APP_API_KEY}matches/leave-match/${match_id}`,
    {
      method: "DELETE",
      headers: {
        authorization: `${token}`,
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials": "true",
      },
    }
  )
    .then(async (response) => {
      const data = await response.json();
      if (response.status === 201 || response.status === 200) {
      } else {
        alert(data.detail);
      }
    })
    .catch((error) => {
      alert(error);
    });
};
