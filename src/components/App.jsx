import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import {
  Login,
  ListGames,
  Register,
  Navbar,
  Botsubmit,
  GameConfig,
  FormUserVerify,
  BotInGame,
} from "../components";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/listgames' element={<ListGames />} />
          <Route path='/botsubmit' element={<Botsubmit />} />
          <Route path='/gameconfig' element={<GameConfig />} />
          <Route path='/verify' element={<FormUserVerify />} />
          <Route path='/botInGame' element={<BotInGame />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
