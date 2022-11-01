import {Route, Routes} from "react-router-dom";
import {
  Login,
  Register,
  Navbar,
  Botsubmit,
  GameConfig,
  BotInGame,
  AvatarSubmit,
} from "../components";
import {ListMatches, Verify, Home, Match} from "../pages";
function App() {
  return (
    <div className='App'>
      <Navbar />
      <div>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/botsubmit' element={<Botsubmit />} />
          <Route path='/gameconfig' element={<GameConfig />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/botInGame' element={<BotInGame />} />
          <Route path='/avatarSubmit' element={<AvatarSubmit />} />
          <Route path='/listgames' element={<ListMatches />} />
          <Route path='/match/:match_id' element={<Match />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
