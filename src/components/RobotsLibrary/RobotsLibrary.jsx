import {useState, useEffect} from "react";
import {getRobotsNames} from "../../services";
import Avatar from "@mui/material/Avatar";
import {Link, useNavigate} from "react-router-dom";
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
  StyledButton,
} from "./RobotsLibrary.style";
import {EntryPage} from "../GameConfig/MatchConfig.styled";

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
  const navigate = useNavigate();

  useEffect(() => {
    callGetRobotsNames();
    console.log(robotsNames);
  }, []);
  return (
    <EntryPage>
      <StyledEntryCard>
        <Table>
          <h2 data-testid='title'>My robots</h2>
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
