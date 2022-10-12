import React from "react";
import {StyledNavbar, NavItemLink} from "./navbar.style";

function Navbar({children}) {
  return (
    <StyledNavbar>
      <NavItemLink to='/login'>Log in</NavItemLink>
      <NavItemLink to='/register'>Register</NavItemLink>
    </StyledNavbar>
  );
}

export default Navbar;
