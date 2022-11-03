import {useFormContext} from "react-hook-form";
import {InputContainer, Input, InputError} from "./TextField.styled";

const TextField = ({
  placeholder,
  type,
  name,
  minLength,
  minLengthMessage,
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
        autoComplete='off'
        placeholder={placeholder}
        data-testid={name}
        name={name}
        type={type}
        {...register(name, {
          maxLength: {
            value: maxLength,
            message: `${maxLengthMessage}`,
          },
          minLength: {
            value: minLength,
            message: `${minLengthMessage}`,
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
      <InputError data-testid={`${name}-error`}>
        {errors[name]?.message}
      </InputError>
    </InputContainer>
  );
};
export default TextField;
