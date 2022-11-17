import React from "react";
import {StyledNavbar, NavItemLink, LinkContainer} from "./Navbar.styled";
import Avatar from "@mui/material/Avatar";

function Navbar() {
  return (
    <StyledNavbar data-testid='navbar'>
      <LinkContainer>
        <NavItemLink to='/home' data-testid='toHome'>
          Home
        </NavItemLink>
      </LinkContainer>
      <LinkContainer>
        <NavItemLink to='/gameconfig' data-testid='toCreateMatch'>
          Create Match
        </NavItemLink>
      </LinkContainer>
      <LinkContainer>
        <NavItemLink to='/botsubmit' data-testid='toCreateBot'>
          Create Bot
        </NavItemLink>
      </LinkContainer>
      <LinkContainer>
        <NavItemLink to='/listgames' data-testid='toListGames'>
          List Matches
        </NavItemLink>
      </LinkContainer>
      <LinkContainer>
        <NavItemLink to='/simCreate' data-testid='toSimCreate'>
          Create Simulation
        </NavItemLink>
      </LinkContainer>
      <LinkContainer>
        <NavItemLink to='/library' data-testid='robotsLibrary'>
          Robots Library
        </NavItemLink>
      </LinkContainer>
      <LinkContainer>
        <NavItemLink to='/profile' data-testid='profile'>
          <Avatar spacing={0} src={localStorage.getItem("avatar")} />
        </NavItemLink>
      </LinkContainer>
    </StyledNavbar>
  );
}

export default Navbar;
