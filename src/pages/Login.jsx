import React, {useState} from "react";
import {useHistiry} from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [userInfo, setUserInfo] = useState({email: "", password: ""});

  const AgregarUsuario = async (e) => {
    e.preventDefault();
    let result = await fetch("http://localhost:8000/todo", {
      method: "POST",
      body: JSON.stringify(userInfo),
    });
    setUserInfo({email: "", password: ""});
    result = result.json();
    history.push("/");
  };

  const ChangeEmail = (e) => {
    e.preventDefault();
    setUserInfo({email: e.target.value, password: userInfo.password});
  };

  const ChangePassword = (e) => {
    e.preventDefault();
    setUserInfo({email: userInfo.email, password: e.target.value});
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <input
          type='text'
          placeholder='example@example.com'
          value={userInfo.email}
          onChange={(e) => ChangeEmail(e)}
        />
        <input
          type='password'
          placeholder='password'
          value={userInfo.password}
          onChange={(e) => ChangePassword(e)}
        />
        <button
          onClick={(e) => {
            AgregarUsuario(e);
          }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
