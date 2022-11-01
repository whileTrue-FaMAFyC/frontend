import {Route, Routes} from "react-router-dom";

import Home from "../pages/Home";
import {
  Login,
  Register,
  Navbar,
  Botsubmit,
  BotInGame,
  AvatarSubmit,
  MatchStartView,
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
          <Route
            path='/gameconfig'
            element={
              <MatchStartView
                isCreator={true}
                isReadyToStart={true}
                matchId={1}
              />
            }
          />
          <Route path='/verify' element={<Verify />} />
          <Route path='/botInGame' element={<BotInGame />} />
          <Route path='/avatarSubmit' element={<AvatarSubmit />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
