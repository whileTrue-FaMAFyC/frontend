import {Route, Routes} from "react-router-dom";
import {
  Login,
  Register,
  Navbar,
  Botsubmit,
  GameConfig,
  AvatarSubmit,
  SimCreate,
  Simulation,
} from "../components";
import {ListMatches, Verify, Home, Match} from "../pages";
const props = {
  names: [
    {id: "Wallee", name: "Wallee"},
    {id: "Eva", name: "Eva"},
    {id: "Mario", name: "Mario"},
    {id: "Rocoloco", name: "Rocoloco"},
  ],

  simulation: [
    {
      robots: {
        Wallee: {
          x: 0,
          y: 0,
          harmed: false,
          died: false,
        },
        Eva: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        Rocoloco: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        Mario: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
      },
    },
    {
      robots: {
        Wallee: {
          x: 0,
          y: 100,
          harmed: false,
          died: false,
        },
        Eva: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        Mario: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        Rocoloco: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
      },
    },
    {
      robots: {
        Eva: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        Wallee: {
          x: 100,
          y: 100,
          harmed: false,
          died: false,
        },
        Mario: {
          x: 100,
          y: 100,
          harmed: false,
          died: false,
        },
        Rocoloco: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
      },
    },
    {
      robots: {
        Rocoloco: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        Eva: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        Mario: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        Wallee: {
          x: 100,
          y: 0,
          harmed: false,
          died: false,
        },
      },
    },
    {
      robots: {
        Wallee: {
          x: 0,
          y: 0,
          harmed: false,
          died: false,
        },
        Eva: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        Mario: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        Rocoloco: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
      },
    },
    {
      robots: {
        Wallee: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        Eva: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        Mario: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        Rocoloco: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
      },
    },
  ],
};

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
          <Route path='/simCreate' element={<SimCreate />} />
          <Route path='/simulation' element={<Simulation props={props} />} />
          <Route path='/avatarSubmit' element={<AvatarSubmit />} />
          <Route path='/listgames' element={<ListMatches />} />
          <Route path='/match/:match_id' element={<Match />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
