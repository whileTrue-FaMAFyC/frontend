import Navbar from "./Navbar";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
