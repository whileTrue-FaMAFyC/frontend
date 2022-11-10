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
    setSentCode(true);
    // await fetch(`${process.env.REACT_APP_API_KEY}create-bot`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "http://localhost:3000",
    //     "Access-Control-Allow-Credentials": "true",
    //     Authorization: `${token}`,
    //   },
    //   body: JSON.stringify(data),
    // });
    console.log(JSON.stringify(data));
  };

  const submitPassword = async (data) => {
    console.log("Submiteando");
    setSentCode(true);
    navigate("/");
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
    <EnterEmail
      register={register}
      handleSubmit={handleSubmit}
      submit={submitEmail}
      failureData={failureData}
      loading={loading}
    />
  );
};

export default PasswordRestore;
