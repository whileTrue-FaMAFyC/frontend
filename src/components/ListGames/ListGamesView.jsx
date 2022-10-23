import {
  Container,
  Title,
  Table,
  Thead,
  Column,
  Tbody,
  Row,
} from "./ListGames.styled";

const ListGamesView = ({games}) => {
  return (
    <Container>
      <Title>Game list</Title>
      <Table>
        <Thead>
          <Row>
            <Column>Name</Column>
            <Column>Creator</Column>
            <Column>Max Players</Column>
            <Column>Robots Joined</Column>
          </Row>
        </Thead>
        <Tbody>
          {games.length < 1 && (
            <Row>
              <Column>No games availables</Column>
            </Row>
          )}
          {games.map(
            ({match_id, creator_user, max_players, name, robots_joined}) => (
              <Row key={match_id} data-testid='row'>
                <Column>{name}</Column>
                <Column>{creator_user.username}</Column>
                <Column>{max_players}</Column>
                <Column>{robots_joined}</Column>
              </Row>
            )
          )}
        </Tbody>
      </Table>
    </Container>
  );
};
export default ListGamesView;
