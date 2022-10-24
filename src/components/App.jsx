import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import {
  Login,
  ListGames,
  Register,
  Navbar,
  Botsubmit,
  GameConfig,
  BotInGame,
} from "../components";

import Verify from "../pages/Verify/Verify";

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
          <Route path='/verify' element={<Verify />} />
          <Route path='/botInGame' element={<BotInGame />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
