import styled from "styled-components";
import {Link} from "react-router-dom";
import {CloseOutline} from "@styled-icons/evaicons-outline/";

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: ${({open}) => (open ? "0" : "-50%")};
  top: 70px;
  transition: 0.5s right ease;
  background-color: #202023;
  padding: 12px 18px;
  z-index: 2;
`;

export const LinkMobile = styled(Link)`
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

export const NavMobileHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Close = styled(CloseOutline)`
  width: 40px;
  height: 40px;
  fill: #fff;
  cursor: pointer;
`;
