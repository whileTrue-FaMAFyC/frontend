import {
  Container,
  Title,
  Table,
  Thead,
  Column,
  Tbody,
  Row,
  Feedback,
} from "./ListGames.styled";

const ListGamesView = ({games}) => {

  const handleClick = (creator_user, match_name) => {
    const ws = new WebSocket(`ws://localhost:8000/ws/join-lobby/${creator_user}/${match_name}`,
    `${localStorage.getItem("user")}`)
    ws.send(creator_user)
  }
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
            <Feedback>
              <Column>No games availables</Column>
            </Feedback>
          )}
          {games.map(
            ({match_id, creator_user, max_players, name, robots_joined}) => (
              <Row key={match_id} data-testid='row' onClick={() =>handleClick(creator_user, name)}>
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
