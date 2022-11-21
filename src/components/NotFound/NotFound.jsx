import {useNavigate} from "react-router-dom";
import {Back, Container, Title} from "./NotFound.styled";

const NotFound = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  return (
    <Container>
      <Title>You got lost?</Title>
      <img src='/robot.png' alt='robot' />
      <Back onClick={handleBack}>Back</Back>
    </Container>
  );
};
export default NotFound;
