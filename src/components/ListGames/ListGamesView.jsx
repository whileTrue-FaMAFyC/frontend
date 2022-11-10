import {useNavigate} from "react-router-dom";
import {CircularProgress} from "@mui/material";
import {
  Container,
  Title,
  Table,
  Thead,
  Column,
  Tbody,
  Row,
  Feedback,
  Button,
} from "./ListGames.styled";

const ListGamesView = ({games, refresh, loading}) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>Match list</Title>
      <Table>
        <Thead>
          <Row>
            <Column>Name</Column>
            <Column>Creator</Column>
            <Column>Max Players</Column>
            <Column>Robots Joined</Column>
            <Column>
              <Button onClick={refresh}>Refresh</Button>
            </Column>
          </Row>
        </Thead>
        <Tbody>
          {loading && (
            <Feedback>
              <Column>
                <CircularProgress data-testid='list-progress' />
              </Column>
            </Feedback>
          )}
          {games.length < 1 && (
            <Feedback>
              <Column>No games availables</Column>
            </Feedback>
          )}
          {games.map(
            ({match_id, creator_user, max_players, name, robots_joined}) => (
              <Row key={match_id} data-testid='row'>
                <Column>{name}</Column>
                <Column>{creator_user.username}</Column>
                <Column>{max_players}</Column>
                <Column>{robots_joined}</Column>
                <Column>
                  <Button
                    onClick={() => {
                      navigate(`/match/${match_id}`);
                    }}>
                    More info
                  </Button>
                </Column>
              </Row>
            )
          )}
        </Tbody>
      </Table>
    </Container>
  );
};
export default ListGamesView;
