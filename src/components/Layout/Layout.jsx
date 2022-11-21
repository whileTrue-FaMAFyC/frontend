import {useState} from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import {NavMobile} from "../NavbarMobile/NavbarMobile";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #0f1519;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Layout = ({children}) => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <NavMobile open={open} handleMenu={setOpen} />
      <Navbar handleMenu={setOpen} open={open} />
      {children}
    </Container>
  );
};
export default Layout;
