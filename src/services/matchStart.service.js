export const start = async (match_id) => {
  try {
    await fetch(
      `${process.env.REACT_APP_API_KEY}matches/start-match/${match_id}`,
      {
        method: "PUT",
        headers: {
          Authorization: `${localStorage.getItem("user")}`,
        },
      }
    ).then(async (response) => {
      const data = await response.json();
      if (response.status !== 200 && response.status !== 201) {
        alert(data);
      }
    });
  } catch (error) {
    alert(error);
  }
};
