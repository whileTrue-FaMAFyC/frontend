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
          {games.map(({match_info, robots_joined}) => (
            <Row key={match_info.match_id} data-testid='row'>
              <Column>{match_info.name}</Column>
              <Column>{match_info.creator_user.username}</Column>
              <Column>{match_info.max_players}</Column>
              <Column>{robots_joined}</Column>
            </Row>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
};
export default ListGamesView;
