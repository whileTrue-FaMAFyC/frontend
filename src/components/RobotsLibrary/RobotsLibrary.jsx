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
  Button,
  StyledButton,
} from "./RobotsLibrary.style";

const RobotsLibrary = () => {
  const [robotsNames, setRobotsNames] = useState([]);
  const [query, setQuery] = useState("");

  const callGetRobotsNames = async () => {
    try {
      const response = await getRobotsNames(localStorage.getItem(`user`));
      setRobotsNames(response.data);
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
        <Title data-testid='title'>My robots</Title>
        {/* <input
          type='text'
          placeholder='Find your robot...'
          style={{
            height: 30,
            width: 100,
            verticalAlign: "middle",
            position: "relative",
            // left: "124px",
            justifyContent: "center",
            top: "20px",
          }}
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
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
                  <Column>{name}</Column>
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
          <Link to='/botsubmit' data-testid='linkToBotSubmit'>
            Create bot
          </Link>
        </StyledButton>
      </Container>
    </PadreContainer>
  );
};
export default RobotsLibrary;

// import * as React from "react";
// import {useState, useEffect} from "react";
// import {getRobotsNames} from "../../services";
// import {DataGrid} from "@mui/x-data-grid";

// const columns = [
//   {field: "avatar", headerName: "Avatar", width: 70},
//   {field: "robotName", headerName: "Name", width: 130},
//   {field: "stats.matches_played", headerName: "Stats", width: 130},
// ];

// const rows = [
//   {id: 1, lastName: "Snow", firstName: "Jon", age: 35},
//   {id: 2, lastName: "Lannister", firstName: "Cersei", age: 42},
//   {id: 3, lastName: "Lannister", firstName: "Jaime", age: 45},
//   {id: 4, lastName: "Stark", firstName: "Arya", age: 16},
//   {id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null},
//   {id: 6, lastName: "Melisandre", firstName: null, age: 150},
//   {id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44},
//   {id: 8, lastName: "Frances", firstName: "Rossini", age: 36},
//   {id: 9, lastName: "Roxie", firstName: "Harvey", age: 65},
// ];

// const RobotsLibrary = () => {
//   const [robotsNames, setRobotsNames] = useState([]);
//   const [query, setQuery] = useState("");

//   const callGetRobotsNames = async () => {
//     try {
//       const response = await getRobotsNames(localStorage.getItem(`user`));
//       setRobotsNames(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     callGetRobotsNames();
//   }, []);

//   robotsNames.map((robot) => (robot.id = 1));
//   return (
//     <div style={{height: 400, width: "100%"}}>
//       <DataGrid
//         rows={robotsNames}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//         checkboxSelection
//       />
//     </div>
//   );
// };
// export default RobotsLibrary;
