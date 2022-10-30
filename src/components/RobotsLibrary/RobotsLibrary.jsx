import {useState, useEffect} from "react";
import {getRobotsNames} from "../../services";
import Avatar from "@mui/material/Avatar";
import {
  Container,
  Title,
  Table,
  Thead,
  Column,
  Tbody,
  Row,
  Feedback,
  StyledEntryCard,
} from "./RobotsLibrary.style";

const RobotsLibrary = () => {
  const [robotsNames, setRobotsNames] = useState([]);

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
    console.log(robotsNames);
  }, []);
  return (
    <StyledEntryCard>
      <Title data-testid='title'>Game list</Title>
      <Table>
        <Tbody>
          {robotsNames.length < 1 && (
            <Feedback>
              <Column>No robots availables</Column>
            </Feedback>
          )}
          {robotsNames.map(({avatar, name}) => (
            <Row key={name} data-testid='row'>
              <Column>
                {" "}
                <Avatar spacing={2} src={avatar} />
              </Column>
              <Column>{name}</Column>
            </Row>
          ))}
        </Tbody>
      </Table>
    </StyledEntryCard>
  );
};
export default RobotsLibrary;
