import {useState} from "react";
import {useForm, FormProvider} from "react-hook-form";
import {verifyUser} from "../../services";
import TextField from "../TextField/TextField";
import {Form, Button, FeedBack} from "./FormUserVerify.styled";

const FormUserVerify = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const methods = useForm({mode: "all"});

  const onSubmit = async (data) => {
    try {
      await verifyUser(data.code, localStorage.getItem("username"));
      setSuccess("Account verified successfully");
    } catch (error) {
      setError(error.response.data.detail.normalize());
    }
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
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
        <Button type='submit'>Send</Button>
      </Form>
    </FormProvider>
  );
};
export default FormUserVerify;
