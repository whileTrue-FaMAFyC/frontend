import {useState} from "react";
import {useForm, FormProvider} from "react-hook-form";
import {verifyUser} from "../../services/verifyuser.service";
import TextField from "../TextField/TextField";
import {Form, Button} from "./FormUserVerify.styled";

const FormUserVerify = () => {
  const [message, setMessage] = useState("");
  const methods = useForm({mode: "all"});

  const onSubmit = async (data) => {
    const username = "israel";
    try {
      const response = await verifyUser(data.code, username);
      setMessage(response.data.details);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <p>{message}</p>
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
