import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import EnterPassword from "./EnterPasswordView";
import EnterEmail from "./EnterEmailView";

const PasswordRestore = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const [sentCode, setSentCode] = useState(false);

  const onSubmit = async (data) => {
    console.log("Submiteando");
    setSentCode(true);
  };

  return sentCode ? (
    <EnterPassword
      register={register}
      handleSubmit={handleSubmit}
      submit={onSubmit}
    />
  ) : (
    <EnterEmail
      register={register}
      handleSubmit={handleSubmit}
      submit={onSubmit}
    />
  );
};

export default PasswordRestore;
