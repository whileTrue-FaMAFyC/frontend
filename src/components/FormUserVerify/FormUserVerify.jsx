import {useEffect, useState, useRef} from "react";
import {useForm, FormProvider} from "react-hook-form";
import {verifyUser} from "../../services";
import TextField from "../TextField/TextField";
import {useNavigate} from "react-router-dom";
import {Form, FeedBack} from "./FormUserVerify.styled";

const FormUserVerify = () => {
  const navigate = useNavigate();
  const ref = useRef();
  const methods = useForm({mode: "all"});
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (data) => {
    try {
      await verifyUser(data.code, localStorage.getItem("username"));
      setSuccess("Account verified successfully");
      navigate("/avatarSubmit");
    } catch (error) {
      setError(error.response.data.detail.normalize());
    }
  };

  useEffect(() => {
    if (methods.watch("code").length !== 6) return;
    ref.current.submit();
  }, [methods.watch("code")]);

  return (
    <FormProvider {...methods}>
      <Form ref={ref} onSubmit={methods.handleSubmit(onSubmit)}>
        {error && (
          <FeedBack data-testid='error' color='red'>
            {error}
          </FeedBack>
        )}
        {success && (
          <FeedBack data-testid='success' color='green'>
            {success}
          </FeedBack>
        )}
        <TextField
          type='text'
          name='code'
          minLength={6}
          minLengthMessage='The code is 6 digits'
          maxLength={6}
          maxLengthMessage='The code is 6 digits'
          required
          requiredMessage='Enter the code'
        />
      </Form>
    </FormProvider>
  );
};
export default FormUserVerify;
