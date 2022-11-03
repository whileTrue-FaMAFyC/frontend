import {Route, Routes} from "react-router-dom";
import {
  Login,
  Register,
  Botsubmit,
  GameConfig,
  AvatarSubmit,
  SimCreate,
  Navbar,
  Simulation,
} from "../components";
import {ListMatches, Verify, Home, Welcome, Match} from "../pages";

function App() {
  const props = {
    //     name : : str
    // username : : str
    // robot_id : :  int
    names: [
      {name: "Wallee", robot_id: "0"},
      {name: "Eva", robot_id: "1"},
      {name: "Rocoloco", robot_id: "2"},
      {name: "Mario", robot_id: "3"},
    ],

    simulation: [
      {
        robots: {
          Wallee: {
            x: 0,
            y: 0,
            harmed: false,
            died: false,
            status: 100,
          },
          Eva: {
            x: Math.floor(Math.random() * 1000) + 1,
            y: Math.floor(Math.random() * 1000) + 1,
            harmed: false,
            died: false,
            status: 100,
          },
          Rocoloco: {
            x: Math.floor(Math.random() * 1000) + 1,
            y: Math.floor(Math.random() * 1000) + 1,
            harmed: false,
            died: false,
            status: 100,
          },
          Mario: {
            x: Math.floor(Math.random() * 1000) + 1,
            y: Math.floor(Math.random() * 1000) + 1,
            harmed: false,
            died: false,
            status: 100,
          },
        },
      },
      {
        robots: {
          Wallee: {
            x: 0,
            y: 1000,
            harmed: false,
            died: false,
            status: 50,
          },
          Eva: {
            x: Math.floor(Math.random() * 1000) + 1,
            y: Math.floor(Math.random() * 1000) + 1,
            harmed: false,
            died: false,
            status: 50,
          },
          Mario: {
            x: Math.floor(Math.random() * 1000) + 1,
            y: Math.floor(Math.random() * 1000) + 1,
            harmed: false,
            died: false,
            status: 50,
          },
          Rocoloco: {
            x: Math.floor(Math.random() * 1000) + 1,
            y: Math.floor(Math.random() * 1000) + 1,
            harmed: false,
            died: false,
            status: 50,
          },
        },
      },
      {
        robots: {
          Eva: {
            x: Math.floor(Math.random() * 1000) + 1,
            y: Math.floor(Math.random() * 1000) + 1,
            harmed: false,
            died: false,
            status: 50,
          },
          Wallee: {
            x: 1000,
            y: 1000,
            harmed: false,
            died: false,
            status: 50,
          },
          Mario: {
            x: 1000,
            y: 1000,
            harmed: false,
            died: false,
            status: 50,
          },
          Rocoloco: {
            x: Math.floor(Math.random() * 1000) + 1,
            y: Math.floor(Math.random() * 1000) + 1,
            harmed: false,
            died: false,
            status: 50,
          },
        },
      },
      {
        robots: {
          Rocoloco: {
            x: Math.floor(Math.random() * 1000) + 1,
            y: Math.floor(Math.random() * 1000) + 1,
            harmed: false,
            died: false,
            status: 50,
          },
          Eva: {
            x: Math.floor(Math.random() * 1000) + 1,
            y: Math.floor(Math.random() * 1000) + 1,
            harmed: false,
            died: false,
            status: 50,
          },
          Mario: {
            x: Math.floor(Math.random() * 1000) + 1,
            y: Math.floor(Math.random() * 1000) + 1,
            harmed: false,
            died: false,
            status: 50,
          },
          Wallee: {
            x: 1000,
            y: 0,
            harmed: false,
            died: false,
            status: 50,
          },
        },
      },
    ],
  };

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
            path='/simulate'
            element={
              <div>
                <Navbar />
                <Simulation props={props} />
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
