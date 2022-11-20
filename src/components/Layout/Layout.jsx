import styled from "styled-components";
import Navbar from "../Navbar/Navbar";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #0f1519;
`;

const Layout = ({children}) => {
  return (
    <Container>
      <Navbar />
      {children}
    </Container>
  );
};
export default Layout;
