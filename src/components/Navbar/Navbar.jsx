import React from "react";
import {
  StyledNavbar,
  NavItemLink,
  LinkContainer,
  Header,
  Burger,
} from "./Navbar.styled";
import Avatar from "@mui/material/Avatar";

function Navbar({handleMenu, open}) {
  return (
    <Header>
      <StyledNavbar data-testid='navbar'>
        <LinkContainer>
          <NavItemLink to='/home' data-testid='toHome'>
            Home
          </NavItemLink>
        </LinkContainer>
        <LinkContainer>
          <NavItemLink
            to='/gameconfig'
            data-testid='toCreateMatch'
            className={({isActive}) => (isActive ? "active" : undefined)}>
            Create Match
          </NavItemLink>
        </LinkContainer>
        <LinkContainer>
          <NavItemLink
            to='/botsubmit'
            data-testid='toCreateBot'
            className={({isActive}) => (isActive ? "active" : undefined)}>
            Create Bot
          </NavItemLink>
        </LinkContainer>
        <LinkContainer>
          <NavItemLink
            to='/listgames'
            data-testid='toListGames'
            className={({isActive}) => (isActive ? "active" : undefined)}>
            List Matches
          </NavItemLink>
        </LinkContainer>
        <LinkContainer>
          <NavItemLink
            to='/simCreate'
            data-testid='toSimCreate'
            className={({isActive}) => (isActive ? "active" : undefined)}>
            Create Simulation
          </NavItemLink>
        </LinkContainer>
        <LinkContainer>
          <NavItemLink
            to='/library'
            data-testid='robotsLibrary'
            className={({isActive}) => (isActive ? "active" : undefined)}>
            Robots Library
          </NavItemLink>
        </LinkContainer>
      </StyledNavbar>
      {!open && <Burger onClick={() => handleMenu(true)} />}
      <LinkContainer>
        <NavItemLink
          to='/profile'
          data-testid='profile'
          className={({isActive}) => (isActive ? "active" : undefined)}>
          <Avatar spacing={0} src={localStorage.getItem("avatar")} />
        </NavItemLink>
      </LinkContainer>
    </Header>
  );
}

export default Navbar;
