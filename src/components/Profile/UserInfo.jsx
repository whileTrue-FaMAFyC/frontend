import {useState, useEffect} from "react";
import axios from "axios";
import {color} from "@mui/system";

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
      if (response.data != "") {
        setUserInfo(response.data);
      }
    } catch (error) {
      setUserInfoError(error);
    }
  };
  useEffect(() => {
    callGetUserInfo();
  }, []);
  return (
    <div style={{marginTop: 10, color: "#00c8c8"}}>
      <div>
        Username:
        <a data-testid='username'>{userInfo.username}</a>
      </div>
      <div>
        Email:
        <a data-testid='email'>{userInfo.email}</a>
      </div>
    </div>
  );
};

export default UserInfo;
