import {useForm} from "react-hook-form";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

import {
  StyledButton,
  StyledEntryCard,
  StyledInput,
  StyledInputGroup,
  EntryPage,
  StyledError,
} from "./Register.style";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm();

  const [success, setSuccess] = useState(false); //Form subido con exito
  const [failure_data, setFailure_data] = useState(""); //Detalle del servidor

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setFailure_data("");
    const username = data.username;
    await fetch(`${process.env.REACT_APP_API_KEY}signup`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify(data),
    })
      .then(async (response) => {
        const data = await response.json();
        if (response.status === 201) {
          setSuccess(true);
          localStorage.setItem("username", username);
          navigate(`/verify`);
        } else {
          setSuccess(false);
          setFailure_data(data.detail);
        }
      })
      .catch((error) => {
        alert(error);
        setSuccess(false);
      });
  };

  return (
    <EntryPage>
      <StyledEntryCard className='registro'>
        <h2>Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledInputGroup>
            <label className='form-label' htmlFor='inputUsername'>
              Username
            </label>
            <StyledInput
              autoComplete='off'
              type='text'
              id='inputUsername'
              data-testid='Username'
              {...register("username", {
                required: true,
                maxLength: 16,
                minLength: 3,
              })}
            />
            {errors.username?.type === "required" && (
              <StyledError role='alertError'>Username is required</StyledError>
            )}
            {errors.username?.type === "maxLength" && (
              <StyledError role='alertError'>
                Username must be at most 16 characters long.
              </StyledError>
            )}
            {errors.username?.type === "minLength" && (
              <StyledError role='alertError'>
                Username must be at least 3 characters long.
              </StyledError>
            )}
          </StyledInputGroup>
          <StyledInputGroup>
            <label className='form-label' htmlFor='inputEmail'>
              Email
            </label>
            <StyledInput
              autoComplete='off'
              type='text'
              id='inputEmail'
              data-testid='Email'
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
              })}
            />
            {errors.email?.type === "pattern" && (
              <StyledError role='alertError'>
                The email format is incorrect
              </StyledError>
            )}
            {errors.email?.type === "required" && (
              <StyledError role='alertError'>Email is required</StyledError>
            )}
          </StyledInputGroup>
          <StyledInputGroup>
            <label className='form-label' htmlFor='inputPassword'>
              Password
            </label>
            <StyledInput
              autoComplete='off'
              type='password'
              id='inputPassword'
              data-testid='Password'
              {...register("password", {
                required: true,
                pattern: /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,})$/,
              })}
            />
            {errors.password?.type === "pattern" && (
              <StyledError role='alertError'>
                The password must contain at least 8 characters, one uppercase,
                lowercase and number
              </StyledError>
            )}
            {errors.password?.type === "minLength" && (
              <StyledError role='alertError'>
                The password must contain at least 8 characters
              </StyledError>
            )}
            {errors.password?.type === "required" && (
              <StyledError role='alertError'>Password is required</StyledError>
            )}
          </StyledInputGroup>
          <StyledInputGroup>
            <label className='form-label' htmlFor='inputConfirmPassword'>
              Confirm password
            </label>
            <StyledInput
              autoComplete='off'
              type='password'
              id='inputConfirmPassword'
              data-testid='Confirm password'
              {...register("confirmPassword", {
                required: true,
                validate: (val) => {
                  return watch("password") === "" || watch("password") === val;
                },
              })}
            />
            {errors.confirmPassword?.type === "validate" && (
              <StyledError role='alertError'>
                Passwords do not match
              </StyledError>
            )}
            {errors.confirmPassword?.type === "required" &&
              watch("password") && (
                <StyledError role='alertError'>
                  Enter your password again
                </StyledError>
              )}
          </StyledInputGroup>
          <StyledButton type='submit'>Submit</StyledButton>
        </form>
        {success && (
          <div className='alert alert-success mt-4' role='alertSuccess'>
            A verification email was sent
          </div>
        )}
        {failure_data !== "" ? (
          <div role='alertServer'>{failure_data}</div>
        ) : null}
        <span>
          <p data-testid='notAMemb'>Already have an account?</p>
          <Link to='/login' data-testid='linkToReg'>
            Login
          </Link>
        </span>
      </StyledEntryCard>
    </EntryPage>
  );
};

export default RegisterForm;
