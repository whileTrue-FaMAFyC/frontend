import {useState} from "react";
import {useForm, FormProvider} from "react-hook-form";
import {verifyUser} from "../../services/verifyuser.service";
import TextField from "../TextField/TextField";
import {Form, Button} from "./FormUserVerify.styled";

const FormUserVerify = () => {
  const [message, setMessage] = useState("");
  const methods = useForm({mode: "all"});

  const onSubmit = async (data) => {
    try {
      const response = await verifyUser();
      console.log("Response:", response);
      if (response.statusText !== "OK") {
        setMessage(response.data.details);
        throw new Error(`Error with status code: ${response.status}`);
      }
      setMessage("Account verified successfully!");
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
