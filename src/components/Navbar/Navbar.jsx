import React from "react";
import {StyledNavbar, NavItemLink} from "./Navbar.styled";

function Navbar({children}) {
  return (
    <StyledNavbar data-testid='navbar'>
      <NavItemLink to='/' data-testid='toHome'>
        Home
      </NavItemLink>
      <NavItemLink to='/login' data-testid='toLogin'>
        Log in
      </NavItemLink>
      <NavItemLink to='/register' data-testid='toReg'>
        Register
      </NavItemLink>
      <NavItemLink to='/listgames' data-testid='toListGames'>
        ListGames
      </NavItemLink>
    </StyledNavbar>
  );
}

export default Navbar;
