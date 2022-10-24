import {useState} from "react";
import {useForm, FormProvider} from "react-hook-form";
import {verifyUser} from "../../services";
import TextField from "../TextField/TextField";
import {Form, Button, Msg} from "./FormUserVerify.styled";

const FormUserVerify = () => {
  const [message, setMessage] = useState("");
  const methods = useForm({mode: "all"});

  const onSubmit = async (data) => {
    try {
      await verifyUser(data.code, localStorage.getItem("username"));
      setMessage("account verified successfully");
    } catch (error) {
      setMessage(error.response.data.detail);
    }
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <Msg data-testid='msg'>{message}</Msg>
        <TextField
          type='text'
          name='code'
          minLength={6}
          minLengthMessage='El codigo es de 6 digitos'
          maxLength={6}
          maxLengthMessage='El codigo es de 6 digitos'
          required
          requiredMessage='Ingrese el codigo'
        />
        <Button type='submit'>Enviar</Button>
      </Form>
    </FormProvider>
  );
};
export default FormUserVerify;
