import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import {Crown} from "@styled-icons/boxicons-regular/";

const Container = styled.div`
  width: 100%;
  height: 60px;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  background-color: #0a0e13;
`;

export const Names = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 13px;
`;

export const CrownStyled = styled(Crown)`
  width: 25px;
  fill: #f7b103;
`;

const Player = ({username, robot_avatar, robot_name, is_creator}) => {
  return (
    <Container>
      <Avatar src={robot_avatar} alt='Avatar robot' />
      <Names>
        <p>{username}</p>
        <p>{robot_name}</p>
      </Names>
      {is_creator && <CrownStyled />}
    </Container>
  );
};
export default Player;
