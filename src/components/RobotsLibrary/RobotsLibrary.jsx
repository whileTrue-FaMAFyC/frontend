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
        <input
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
        />
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
                  <Column name={true}>{name}</Column>
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

//   const columns = [
//     {field: "avatar", headerName: "Avatar", width: 70},
//     {field: "robotName", headerName: "Name", width: 130},
//     {
//       field: "stats.matches_played",
//       headerName: "Stats",
//       width: 130,
//       minWidth: 10,
//       flex: 1,
//     },
//   ];

//   const rows = [
//     robotsNames.map((value) => {
//       console.log(value);
//       return {
//         internalId: value[1],
//         avatar: value[0],
//         name: value[1],
//       };
//     }),
//   ];

//   useEffect(() => {
//     callGetRobotsNames();
//   }, []);

//   robotsNames.map((robot) => (robot.id = 1));
//   return (
//     <div style={{height: 400, width: "100%"}}>
//       {console.log(robotsNames)}
//       <DataGrid
//         rows={rows}
//         // getRowId={(row) => row.internalId}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//         checkboxSelection
//       />
//       {console.log(rows)}
//     </div>
//   );
// };
// export default RobotsLibrary;
