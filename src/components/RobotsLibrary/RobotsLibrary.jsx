import {useState, useEffect} from "react";
import {getRobotsNames} from "../../services";
import Avatar from "@mui/material/Avatar";
import {Link} from "react-router-dom";
import {
  Table,
  Title,
  Column,
  Tbody,
  Row,
  Feedback,
  StyledEntryCard,
  StyledButton,
  EntryPage,
} from "./RobotsLibrary.style";

const RobotsLibrary = () => {
  const [robotsNames, setRobotsNames] = useState([]);

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
    console.log(robotsNames);
  }, []);
  return (
    <EntryPage>
      <StyledEntryCard>
        <Title data-testid='title'>My robots</Title>
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
        <StyledButton>
          <Link to='/botsubmit' data-testid='linkToBotSubmit'>
            Create bot
          </Link>
        </StyledButton>
      </StyledEntryCard>
    </EntryPage>
  );
};
export default RobotsLibrary;
