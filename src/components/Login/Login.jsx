import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import {CircularProgress} from "@mui/material";
import {
  StyledButton,
  StyledEntryCard,
  StyledInput,
  StyledInputGroup,
  EntryPage,
  StyledError,
  StyledSuccess,
} from "./Login.styled";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const [success, setSuccess] = useState(false);
  const [sent, setSent] = useState(false);
  const [failure_data, setFailure_data] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setFailure_data("");
    setSent(true);
    setLoading(false);
    await fetch(`${process.env.REACT_APP_API_KEY}login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify(data),
    })
      .then(async (response) => {
        setLoading(false);
        const data = await response.json();
        if (response.status === 401) {
          setFailure_data(data.detail);
          setSuccess(false);
        } else if (response.status === 200) {
          if (data.Authorization) {
            localStorage.setItem("user", data.Authorization);
            setSuccess(true);
            navigate("/");
          } else {
            setFailure_data("Unknown Error");
            setSuccess(false);
          }
        } else {
          setFailure_data("Unknown Error");
          setSuccess(false);
        }
      })
      .catch((error) => {
        setFailure_data("Network Error");
        setSuccess(false);
        setLoading(false);
      });
  };

  return (
    <EntryPage>
      <StyledEntryCard>
        <h2 data-testid='Title'>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} id='form' data-testid='form'>
          <StyledInputGroup data-testid='usernameOrEmailGroup'>
            <label
              htmlFor='inputUsernameOrEmail'
              data-testid='titleUsrenameOrEmail'>
              Username or Email
            </label>
            <StyledInput
              id='inputUsernameOrEmail'
              data-testid='inputUsernameOrEmail'
              type='text'
              autoComplete='off'
              placeholder='your username or email'
              {...register("username_or_email", {
                required: true,
              })}
            />
            {errors.username_or_email?.type === "required" && (
              <StyledError data-testid='errorUsernameOrEmailEmpty'>
                Enter your username or email
              </StyledError>
            )}
          </StyledInputGroup>
          <StyledInputGroup data-testid='passwordGroup'>
            <label htmlFor='inputPassword' data-testid='titlePassword'>
              Password
            </label>
            <StyledInput
              type='password'
              id='inputPassword'
              data-testid='inputPassword'
              placeholder='password'
              {...register("password", {
                required: true,
                pattern: /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20})$/,
              })}
            />
            {errors.password?.type === "pattern" && (
              <StyledError data-testid='errorPasswordNotValid'>
                Password must contain uppercase lowercase and a number
              </StyledError>
            )}
            {errors.password?.type === "required" && (
              <StyledError data-testid='errorPasswordEmpty'>
                Enter your password
              </StyledError>
            )}
          </StyledInputGroup>
          {loading ? (
            <div>
              <CircularProgress data-testid='loader' />
            </div>
          ) : (
            <StyledButton type='login' role='button' data-testid='loginButton'>
              Login
            </StyledButton>
          )}
        </form>
        {success && (
          <StyledSuccess role='alert' data-testid='succesfulLogin'>
            Successful login
          </StyledSuccess>
        )}
        {sent && failure_data !== "" && (
          <StyledError role='alert' data-testid='error'>
            {failure_data}
          </StyledError>
        )}
        <span>
          <p data-testid='notAMemb'>Not a member?</p>
          <Link to='/register' data-testid='linkToReg'>
            Register
          </Link>
        </span>
      </StyledEntryCard>
    </EntryPage>
  );
};

export default Login;
