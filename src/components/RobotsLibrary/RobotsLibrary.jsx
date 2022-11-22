import {useState, useEffect} from "react";
import {getRobotsNames} from "../../services";
import Avatar from "@mui/material/Avatar";
import {Link} from "react-router-dom";
import {
  PadreContainer,
  Container,
  Title,
  Table,
  Thead,
  Column,
  Tbody,
  Row,
  Feedback,
  StyledButton,
  StyledInput,
} from "./RobotsLibrary.style";

const RobotsLibrary = () => {
  const [robotsNames, setRobotsNames] = useState([]);
  const [query, setQuery] = useState("");

  const callGetRobotsNames = async () => {
    try {
      const response = await getRobotsNames(localStorage.getItem(`user`));
      if (response.data.length) {
        setRobotsNames(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callGetRobotsNames();
  }, []);

  return (
    <PadreContainer>
      <Container>
        <Title style={{marginBottom: -25}} data-testid='title'>
          My robots
        </Title>
        <StyledInput
          type='text'
          data-testid='filter'
          placeholder='Find your robot...'
          style={{
            height: 30,
            verticalAlign: "middle",
            position: "relative",
            justifyContent: "center",
            top: "20px",
            caretColor: "white"
          }}
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
        {/* <TextField
          fullWidth
          label='Search'
          id='fullWidth'
          placeholder='Find your robot...'
          size='small'
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
          sx={{backgroundColor: "#00c8c8"}}
        /> */}
        <Table>
          <Thead>
            <Row>
              <Column sortable='true'>Avatar</Column>
              <Column>Name</Column>
              <Column>Matches played</Column>
              <Column>Matches won</Column>
              <Column>Matches tied</Column>
              <Column>Matches lost</Column>
              <Column>Games win rate</Column>
            </Row>
          </Thead>
          <Tbody>
            {robotsNames.length < 1 && (
              <Feedback>
                <Column>No robots availables</Column>
              </Feedback>
            )}
            {robotsNames
              .filter((robotName) =>
                robotName.name.toLowerCase().includes(query)
              )
              .map(({avatar, name, stats}) => (
                <Row key={name} data-testid='row'>
                  <Column>
                    <Avatar spacing={2} src={avatar} />
                  </Column>
                  <Column name={1}>{name}</Column>
                  <Column>{stats.matches_played}</Column>
                  <Column>{stats.matches_won}</Column>
                  <Column>{stats.matches_tied}</Column>
                  <Column>{stats.matches_lost}</Column>
                  <Column>{stats.games_win_rate * 100}%</Column>
                </Row>
              ))}
          </Tbody>
        </Table>
        <StyledButton>
          <Link
            to='/botsubmit'
            data-testid='linkToBotSubmit'
            style={{color: "black", fontWeight: 500}}>
            Create robot
          </Link>
        </StyledButton>
      </Container>
    </PadreContainer>
  );
};
export default RobotsLibrary;
