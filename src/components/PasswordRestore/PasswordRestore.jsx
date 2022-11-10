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

  const [failure_data, setFailure_data] = useState("");
  const [sentCode, setSentCode] = useState(false);
  const navigate = useNavigate();

  const submitEmail = async (data) => {
    console.log("Submiteando");
    setSentCode(true);
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
    />
  ) : (
    <EnterEmail
      register={register}
      handleSubmit={handleSubmit}
      submit={submitEmail}
    />
  );
};

export default PasswordRestore;
