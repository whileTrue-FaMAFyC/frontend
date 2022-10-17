import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import {Login, ListGames, Register, Navbar, Botsubmit} from "../components";

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
        </Routes>
      </div>
    </div>
  );
}

export default App;
