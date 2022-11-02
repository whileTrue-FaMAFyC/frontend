import {Route, Routes} from "react-router-dom";
import Welcome from "../pages/Welcome/Welcome";
import Home from "../pages/Home/Home";

import {
  Login,
  Register,
  Botsubmit,
  GameConfig,
  BotInGame,
  AvatarSubmit,
} from "../components";
import Verify from "../pages/Verify/Verify";
import ListMatches from "../pages/ListMatches/ListMatches";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/listgames' element={<ListMatches />} />
        <Route path='/botsubmit' element={<Botsubmit />} />
        <Route path='/gameconfig' element={<GameConfig />} />
        <Route path='/verify' element={<Verify />} />
        <Route path='/botInGame' element={<BotInGame />} />
        <Route path='/avatarSubmit' element={<AvatarSubmit />} />
        <Route path='/' element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
