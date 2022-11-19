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

const ListGamesView = ({
  games,
  refresh,
  loading,
  register,
  handleSubmit,
  submit,
}) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>Match list</Title>
      <label>filters</label>

      <form onSubmit={handleSubmit(submit)}>
        <label>Is mine: </label>
        <select
          data-testid='is_mine'
          {...register("is_mine", {required: true})}>
          <option value='None'>-</option>
          <option value='True'>True</option>
          <option value='False'>False</option>
        </select>
        <label>I'm in: </label>
        <select data-testid='im_in' {...register("im_in", {required: true})}>
          <option value='None'>-</option>
          <option value='True'>True</option>
          <option value='False'>False</option>
        </select>
        <label>Started: </label>
        <select
          data-testid='started'
          {...register("started", {required: true})}>
          <option value='None'>-</option>
          <option value='True'>True</option>
          <option value='False'>False</option>
        </select>
        <Button role='button'>Apply filters</Button>
      </form>
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
