import {useForm} from "react-hook-form";
import {Form, Input} from "./FormUserVerify.styled";

const FormUserVerify = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: "all"});

  const onSubmit = (data) => {
    console.log("la data es data", data);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <p>Ingrese el codigo</p>
        <Input
          data-testid='code'
          name='code'
          type='text'
          {...register("code", {
            maxLength: {
              value: 4,
              message: "La cantidad maxima de caracteres es 4",
            },
            required: {
              value: true,
              message: "Ingrese el codigo",
            },
          })}
        />
        <button type='submit'>Enviar</button>
      </Form>
      {<p data-testid='error'>{errors?.code?.message}</p>}
    </>
  );
};
export default FormUserVerify;
