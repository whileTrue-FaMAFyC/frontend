import {useState, useEffect} from "react";
import axios from "axios";
import {StyledError} from "../GameConfig/MatchConfig.styled";

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState({});
  const [userInfoError, setUserInfoError] = useState("");
  const [success, setSuccess] = useState(true);
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
      setSuccess(false);
      setUserInfoError(error);
    }
  };
  useEffect(() => {
    callGetUserInfo();
  }, []);
  return success ? (
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
  ) : (
    <StyledError style={{color: "red"}}>{userInfoError}</StyledError>
  );
};

export default UserInfo;
