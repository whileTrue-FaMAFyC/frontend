import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import EnterPassword from "./EnterPasswordView";
import EnterEmail from "./EnterEmailView";
import {useNavigate} from "react-router-dom";

import {
  EntryPage,
  StyledButton,
  StyledEntryCard,
  StyledInput,
  StyledInputGroup,
} from "../Login/Login.styled";
import {CircularProgress} from "@mui/material";

const PasswordRestore = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const [failureData, setFailureData] = useState("");
  const [sentCode, setSentCode] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("user");

  const submitEmail = async (data) => {
    console.log("Submiteando");
    setSentCode(true);
    console.log(JSON.stringify(data));
    console.log(data);
    await fetch(`${process.env.REACT_APP_API_KEY}create-bot`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http//localhost:3000",
        "Access-Control-Allow-Credentials": "true",
        Authorization: `${token}`,
      },
      body: JSON.stringify(data),
    });
  };

  const submitPassword = async (data) => {
    console.log("Submiteando");
    setSentCode(true);
    navigate("/");
    console.log(data);
  };

  return sentCode ? (
    <EnterPassword
      register={register}
      handleSubmit={handleSubmit}
      submit={submitPassword}
      failureData={failureData}
      loading={loading}
    />
  ) : (
    // <EnterEmail
    //   register={register}
    //   handleSubmit={handleSubmit}
    //   submit={submitEmail}
    //   failureData={failureData}
    //   loading={loading}
    // />
    <EntryPage>
      <StyledEntryCard>
        <form onSubmit={handleSubmit(submitEmail)} id='form'>
          <StyledInputGroup>
            <label>Email</label>
            <StyledInput
              type='text'
              id='inputEmail'
              {...register("email", {
                required: true,
              })}></StyledInput>
          </StyledInputGroup>
          {loading ? (
            <div>
              <CircularProgress data-testid='loader' />
            </div>
          ) : (
            <StyledButton role='button' data-testid='loginButton' type='submit'>
              Send Email
            </StyledButton>
          )}
        </form>
      </StyledEntryCard>
    </EntryPage>
  );
};

export default PasswordRestore;
