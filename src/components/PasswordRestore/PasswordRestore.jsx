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
  } = useForm();

  const [failureData, setFailureData] = useState("");
  const [sentCode, setSentCode] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("user");

  const submitEmail = async (data) => {
    console.log("Submiteando");
    setLoading(true);
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
      errors={errors}
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
