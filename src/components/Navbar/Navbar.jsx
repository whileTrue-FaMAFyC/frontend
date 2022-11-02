import React from "react";
import {StyledNavbar, NavItemLink} from "./Navbar.styled";

function Navbar({children}) {
  return (
    <StyledNavbar data-testid='navbar'>
      <NavItemLink to='/' data-testid='toHome'>
        Home
      </NavItemLink>
      <NavItemLink to='/login' data-testid='toLogin'>
        Log In
      </NavItemLink>
      <NavItemLink to='/register' data-testid='toReg'>
        Register
      </NavItemLink>
      <NavItemLink to='/listgames' data-testid='toListGames'>
        List Matches
      </NavItemLink>
      <NavItemLink to='/botsubmit' data-testid='toBotsubmit'>
        Bot Submit
      </NavItemLink>
      <NavItemLink to='/gameconfig' data-testid='toGameConfig'>
        Create Match
      </NavItemLink>
      <NavItemLink to='/simulation' data-testid='simulation'>
        Simulation
      </NavItemLink>
      <NavItemLink to='/simCreate' data-testid='simCreate'>
        Sim Create
      </NavItemLink>
    </StyledNavbar>
  );
}

export default Navbar;
