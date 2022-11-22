import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {Menu} from "@styled-icons/entypo/";

export const Header = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  background-color: #202023;
  justify-content: flex-end;
`;

export const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 70px;
  padding: 0 30px;
  color: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

export const Burger = styled(Menu)`
  width: 40px;
  height: 40px;
  fill: #fff;
  cursor: pointer;
  display: none;
  @media screen and (max-width: 1100px) {
    display: flex;
  }
`;

export const NavItemLink = styled(NavLink)`
  width: ${({width}) => width};
  display: flex;
  align-items: center;
  font-size: 1em;
  font-weight: 500;
  letter-spacing: 1px;
  color: #f9f9f9;
  cursor: pointer;
  padding: 7.5px 16px;

  &.active {
    &::before {
      width: 100%;
      height: 4px;
      position: absolute;
      content: "";
      bottom: 0;
      left: 0;
      background-color: #00c8c8;
      border-radius: 2px;
    }
  }

  &:hover {
    background-color: #333333;
    border-radius: 4px;
  }
`;

export const LinkContainer = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
