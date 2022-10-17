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
      <Title>Lista de partidas</Title>
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
