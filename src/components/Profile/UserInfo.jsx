import {useState, useEffect} from "react";
import axios from "axios";

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState({});
  const [userInfoError, setUserInfoError] = useState("");

  const getUserInfo = async (token) => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_KEY}user-profile`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return response;
  };

  const callGetUserInfo = async () => {
    try {
      const response = await getUserInfo(localStorage.getItem(`user`));
      if (response.data !== "") {
        setUserInfo(response.data);
      }
    } catch (error) {
      setUserInfoError(error);
    }
  };

  useEffect(() => {
    callGetUserInfo();
  });

  return (
    <div>
      <div>
        <a data-testid='username'>{userInfo.username}</a>
      </div>
      <div>
        <a data-testid='email'>{userInfo.email}</a>
      </div>
    </div>
  );
};

export default UserInfo;
