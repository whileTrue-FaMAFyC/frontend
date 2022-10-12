import Navbar from "./Navbar";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div>
        <Routes>
          <Route path='/login' element={<div />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
