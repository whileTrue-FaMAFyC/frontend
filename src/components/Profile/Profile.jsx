import {useForm} from "react-hook-form";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import {
  StyledButton,
  StyledEntryCard,
  StyledInput,
  StyledInputGroup,
  EntryPage,
  StyledError,
} from "./Profile.style";

const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();
  return (
    <EntryPage>
      <StyledEntryCard>
        <row>
          <column>
            <Avatar
              style={{
                height: 150,
                width: 150,
                left: 100,
                verticalAlign: "middle",
                position: "relative",
                justifyContent: "center",
              }}
              spacing={2}
              src={localStorage.getItem("avatar")}
            />
            <div>Username</div>
            <div>aestusemburgo@gmail.com</div>
          </column>
        </row>
        <row>
          <column>
            <form onSubmit={handleSubmit()}>
              <StyledInputGroup>
                <StyledInput
                  type='text'
                  placeholder='Current password'
                  {...register("current_password", {
                    required: true,
                    pattern: /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,})$/,
                  })}
                />
                {errors.current_password?.type === "pattern" && (
                  <StyledError role='alertError'>
                    The password must contain at least 8 characters, one
                    uppercase, lowercase and number
                  </StyledError>
                )}
                {errors.current_password?.type === "minLength" && (
                  <StyledError role='alertError'>
                    The password must contain at least 8 characters
                  </StyledError>
                )}
                {errors.current_password?.type === "required" && (
                  <StyledError role='alertError'>
                    Password is required
                  </StyledError>
                )}
              </StyledInputGroup>
              <StyledInputGroup>
                <StyledInput
                  type='text'
                  placeholder='New password'
                  {...register("new_password", {
                    required: true,
                    pattern: /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,})$/,
                  })}
                />
                {errors.new_password?.type === "pattern" && (
                  <StyledError role='alertError'>
                    The password must contain at least 8 characters, one
                    uppercase, lowercase and number
                  </StyledError>
                )}
                {errors.new_password?.type === "minLength" && (
                  <StyledError role='alertError'>
                    The password must contain at least 8 characters
                  </StyledError>
                )}
                {errors.new_password?.type === "required" && (
                  <StyledError role='alertError'>
                    New password is required
                  </StyledError>
                )}
              </StyledInputGroup>
              <StyledButton type='submit'>Submit</StyledButton>
            </form>
            {/* <StyledButton onClick></StyledButton> */}
          </column>
        </row>
      </StyledEntryCard>
    </EntryPage>
  );
};

export default Profile;
