import styled from "styled-components";
import {Link} from "react-router-dom";

export const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 70px;
  padding: 0 30px;
  color: #ffffff;
  background-color: #202023;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

export const NavItemLink = styled(Link)`
  width: ${({width}) => width};
  display: flex;
  align-items: center;
  font-size: 1em;
  font-weight: 500;
  letter-spacing: 1px;
  color: #f9f9f9;
  cursor: pointer;
  padding: 7.5px 16px;

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

  &:hover {
    &::before {
      width: 100%;
      height: 4px;
      position: absolute;
      content: "";
      bottom: 0;
      background-color: #00c8c8;
      border-radius: 2px;
    }
  }
`;

// import styled from "styled-components";
// import {Link} from "react-router-dom";
// import {FaBars, FaLinkedin, FaGithub} from "react-icons/fa";

// export const Container = styled.div`
//   width: 100%;
//   min-height: 100vh;
//   background-color: #ece8e1;
//   position: relative;
//   overflow: hidden;
// `;

// export const Header = styled.header`
//   width: 100%;
//   height: 80px;
//   font-size: 16px;
//   display: flex;
//   align-items: center;
//   padding: 0px 36px;
//   background-color: #111;
//   border-bottom: 2px solid rgba(51, 51, 51, 0.25);
//   position: fixed;
//   z-index: 30;

//   .burger {
//     width: 48px;
//     height: 48px;
//     margin-left: auto;
//   }
// `;

// export const Nav = styled.nav`
//   height: 100%;
//   display: flex;
//   align-items: center;
//   gap: 30px;
//   margin-left: 70px;
// `;

// export const LinkContainer = styled.div`
//   height: 100%;
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   &:hover {
//     &::before {
//       width: 100%;
//       height: 4px;
//       position: absolute;
//       content: "";
//       bottom: 0;
//       background-color: rgb(255, 70, 85);
//       border-radius: 2px;
//     }
//   }
// `;

// export const LinkStyled = styled(Link)`
//   width: ${({width}) => width};
//   display: flex;
//   align-items: center;
//   font-size: 1em;
//   font-weight: 500;
//   letter-spacing: 1px;
//   color: #f9f9f9;
//   cursor: pointer;
//   padding: 7.5px 16px;

//   &:hover {
//     background-color: #333333;
//     border-radius: 4px;
//   }
// `;

// export const NavMobile = styled.nav`
//   width: 50%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   position: absolute;
//   z-index: 999;
//   right: ${({open}) => (open ? "0" : "-100%")};
//   transition: 0.5s right ease;
//   background-color: #1f1f1f;
//   padding: 12px 18px;

//   @media screen and (max-width: 600px) {
//     width: 100%;
//   }
// `;

// export const NavMobileHeader = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 20px;
// `;

// export const Main = styled.main`
//   width: 100%;
//   height: 100%;
//   min-height: calc(100% - 80px);
//   margin-top: 80px;
// `;
