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
  return (
    <EntryPage>
      <StyledEntryCard>
        <column>
          <Avatar
            style={{
              height: 150,
              width: 150,
              verticalAlign: "middle",
              position: "relative",
              justifyContent: "center",
            }}
            spacing={2}
            src={localStorage.getItem("avatar")}
          />
        </column>
        <column>
          <div>Username</div>
          <div>Email</div>
        </column>
      </StyledEntryCard>
    </EntryPage>
  );
};

export default Profile;
