import {Route, Routes} from "react-router-dom";

import Home from "../pages/Home";
import {
  Login,
  Register,
  Navbar,
  Botsubmit,
  GameConfig,
  BotInGame,
  AvatarSubmit,
  SimCreate,
} from "../components";
import Verify from "../pages/Verify/Verify";
import ListMatches from "../pages/ListMatches/ListMatches";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/listgames' element={<ListMatches />} />
          <Route path='/botsubmit' element={<Botsubmit />} />
          <Route path='/gameconfig' element={<GameConfig />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/botInGame' element={<BotInGame />} />
          <Route path='/avatarSubmit' element={<AvatarSubmit />} />
          <Route path='/simCreate' element={<SimCreate />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
