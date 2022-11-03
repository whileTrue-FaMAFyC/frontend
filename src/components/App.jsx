import {Route, Routes} from "react-router-dom";
import {
  Login,
  Register,
  Botsubmit,
  GameConfig,
  AvatarSubmit,
  RobotsLibrary,
  SimCreate,
  Navbar,
} from "../components";
import {ListMatches, Verify, Home, Welcome, Match} from "../pages";

function App() {
  return (
    <div className='App'>
      <div>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route
            path='/listgames'
            element={
              <div>
                <Navbar />
                <ListMatches />
              </div>
            }
          />
          <Route
            path='/botsubmit'
            element={
              <div>
                <Navbar />
                <Botsubmit />
              </div>
            }
          />
          <Route
            path='/gameconfig'
            element={
              <div>
                <Navbar />
                <GameConfig />
              </div>
            }
          />
          <Route
            path='/verify'
            element={
              <div>
                <Navbar />
                <Verify />
              </div>
            }
          />
          <Route
            path='/simCreate'
            element={
              <div>
                <Navbar />
                <SimCreate />
              </div>
            }
          />
          <Route
            path='/avatarSubmit'
            element={
              <div>
                <Navbar />
                <AvatarSubmit />
              </div>
            }
          />
          <Route
            path='/match/:match_id'
            element={
              <div>
                <Navbar />
                <Match />
              </div>
            }
          />
          <Route
            path='/library'
            element={
              <div>
                <Navbar />
                <RobotsLibrary />
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
