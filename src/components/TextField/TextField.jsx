import {useFormContext} from "react-hook-form";
import {InputContainer, Input, InputError} from "./TextField.styled";

const TextField = ({
  type,
  name,
  maxLength,
  maxLengthMessage,
  required,
  requiredMessage,
  pattern,
  patternMessage,
}) => {
  const {
    register,
    formState: {errors},
  } = useFormContext();

  return (
    <InputContainer>
      <Input
        name={name}
        type={type}
        {...register(name, {
          maxLength: {
            value: maxLength,
            message: `${maxLengthMessage} ${maxLength}`,
          },
          required: {
            value: required,
            message: requiredMessage,
          },
          pattern: {
            value: pattern,
            message: patternMessage,
          },
        })}
      />
      <InputError>{errors[name]?.message}</InputError>
    </InputContainer>
  );
};
export default TextField;
