import {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";

import {StyledEntryCard, EntryPage} from "./Profile.style";
import ChangePassword from "./ChangePassword";
import ChangeAvatar from "./ChangeAvatar";

const Profile = () => {
  return (
    <EntryPage>
      <StyledEntryCard>
        <ChangeAvatar />
        <ChangePassword />
      </StyledEntryCard>
    </EntryPage>
  );
};

export default Profile;
