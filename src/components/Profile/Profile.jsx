import {useForm} from "react-hook-form";
import {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";

import {
  StyledButton,
  StyledEntryCard,
  StyledInput,
  StyledInputGroup,
  EntryPage,
  StyledError,
  StyledProbando,
} from "./Profile.style";
import ChangePassword from "./ChangePassword";
import ChangeAvatar from "./ChangeAvatar";

const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm();

  return (
    <EntryPage>
      <StyledEntryCard>
        <ChangeAvatar />
        <ChangePassword
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          watch={watch}
        />
      </StyledEntryCard>
    </EntryPage>
  );
};

export default Profile;
