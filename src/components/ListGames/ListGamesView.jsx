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
            <Column>Players</Column>
          </Row>
        </Thead>
        <Tbody>
          {games.map(({id, name, players}) => (
            <Row key={id} data-testid='row'>
              <Column>{name}</Column>
              <Column>{players}</Column>
            </Row>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
};
export default ListGamesView;
