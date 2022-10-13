import {useForm, FormProvider} from "react-hook-form";
import TextField from "../TextField/TextField";
import {Form, Button} from "./FormUserVerify.styled";

const FormUserVerify = () => {
  const methods = useForm({mode: "all"});

  const onSubmit = (data) => {
    console.log("la data es data", data);
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <TextField
          type='text'
          name='code'
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
