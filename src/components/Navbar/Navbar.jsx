import React from "react";
import {StyledNavbar, NavItemLink, LinkContainer} from "./Navbar.styled";

function Navbar({children}) {
  return (
    <StyledNavbar data-testid='navbar'>
      <LinkContainer>
        <NavItemLink to='/home' data-testid='toHome'>
          Home
        </NavItemLink>
      </LinkContainer>
      <LinkContainer>
        <NavItemLink to='/gameconfig' data-testid='toLogin'>
          Create Match
        </NavItemLink>
      </LinkContainer>
      <LinkContainer>
        <NavItemLink to='/botsubmit' data-testid='toReg'>
          Create Bot
        </NavItemLink>
      </LinkContainer>
      <LinkContainer>
        <NavItemLink to='/listgames' data-testid='toListGames'>
          List Matches
        </NavItemLink>
      </LinkContainer>
    </StyledNavbar>
  );
}

export default Navbar;
