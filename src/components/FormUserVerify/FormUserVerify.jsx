import {useState} from "react";
import {useForm, FormProvider} from "react-hook-form";
import {verifyUser} from "../../services";
import TextField from "../TextField/TextField";
import {useNavigate} from "react-router-dom";
import {Form, FeedBack, Title, Button} from "./FormUserVerify.styled";
import {CircularProgress} from "@mui/material";

const FormUserVerify = () => {
  const navigate = useNavigate();
  const methods = useForm({mode: "all"});
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await verifyUser(data.code, localStorage.getItem("username"));
      setSuccess("Account verified successfully");
      navigate("/avatarSubmit");
    } catch (error) {
      setError(error.response.data.detail.normalize());
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <Title>We have sent a code to your email</Title>
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
        {!loading && <Button type='submit'>Send</Button>}
        {loading && <CircularProgress />}
      </Form>
    </FormProvider>
  );
};
export default FormUserVerify;
