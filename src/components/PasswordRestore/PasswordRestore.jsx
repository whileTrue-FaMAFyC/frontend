import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import EnterPassword from "./EnterPasswordView";
import EnterEmail from "./EnterEmailView";
import {useNavigate} from "react-router-dom";

const PasswordRestore = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm();

  const [failureData, setFailureData] = useState("");
  const [sentCode, setSentCode] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("user");

  const submitEmail = async (data) => {
    setLoading(true);
    localStorage.setItem("email", data.email);
    await fetch(`${process.env.REACT_APP_API_KEY}password-restore-request`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http//localhost:3000",
        "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify(data),
    })
      .then(async (response) => {
        setLoading(false);
        const data = await response.json();
        if (response.status === 401) {
          setFailureData(data.detail);
        } else if (response.status === 200) {
          setSentCode(true);
        } else {
          setFailureData("Unknown Error");
        }
      })
      .catch((error) => {
        setFailureData("Network Error");
        setSentCode(true);
        setLoading(false);
      });
  };

  const submitPassword = async (data) => {
    const email = localStorage.getItem(`email`);
    await fetch(`${process.env.REACT_APP_API_KEY}password-restore`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http//localhost:3000",
        "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify({
        email: email,
        restore_password_code: data.code,
        new_password: data.password,
      }),
    })
      .then(async (response) => {
        setLoading(false);
        const data = await response.json();
        if (response.status === 401) {
          setFailureData(data.detail);
        } else if (response.status === 200) {
          setSentCode(true);
        } else {
          setFailureData("Unknown Error");
        }
      })
      .catch((error) => {
        setFailureData("Network Error");
        setSentCode(true);
        setLoading(false);
      });
    navigate("/");
  };

  return sentCode ? (
    <EnterPassword
      register={register}
      handleSubmit={handleSubmit}
      submit={submitPassword}
      failureData={failureData}
      loading={loading}
      errors={errors}
      watch={watch}
    />
  ) : (
    <EnterEmail
      register={register}
      handleSubmit={handleSubmit}
      submit={submitEmail}
      failureData={failureData}
      loading={loading}
      errors={errors}
    />
  );
};

export default PasswordRestore;
