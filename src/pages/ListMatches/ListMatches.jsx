import {ListGames} from "../../components";
import {Container} from "./ListMatches.styled";
import Layout from "../../components/Layout/Layout";

const ListMatches = () => {
  return (
    <Layout>
      <Container>
        <ListGames />
      </Container>
    </Layout>
  );
};
export default ListMatches;
