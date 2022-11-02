export const start = async (match) => {
  try {
    await fetch(
      `${process.env.REACT_APP_API_KEY}matches/start-match/${match_id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3000",
          "Access-Control-Allow-Credentials": "true",
          Authorization: `${localStorage.getItem("user")}`,
        },
      }
    ).then(async (response) => {
      const data = await response.json();
      if (response.status === 200 || response.status === 201) {
        //setSuccess(true);
      } else {
        // setSuccess(false);
        // setFailure_data(data.detail);
      }
    });
  } catch (error) {
    //setFailure_data(error);
  }
};
