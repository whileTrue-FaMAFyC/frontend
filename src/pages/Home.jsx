import {useState} from "react";
import {Container} from "./styled";

const Home = () => {
  const [login, setState] = useState(false);
  return <Container>{login ? <p>login</p> : <p>register</p>}</Container>;
};
export default Home;
