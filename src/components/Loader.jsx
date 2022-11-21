import {CircularProgress} from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #0f1519;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = () => {
  return (
    <Container>
      <CircularProgress />
    </Container>
  );
};
export default Loader;
