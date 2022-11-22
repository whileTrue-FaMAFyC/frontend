import styled from "styled-components";
import {CircularProgress} from "@mui/material";

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0f1519;
`;

const MatchLoader = () => {
  return (
    <Container>
      <CircularProgress />
    </Container>
  );
};
export default MatchLoader;
