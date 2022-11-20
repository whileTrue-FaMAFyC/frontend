import {Route, Routes} from "react-router-dom";
import {Login, Register, AvatarSubmit} from "../components";
import {ListMatches, Verify, Home, Welcome, Match} from "../pages";
import Library from "../pages/Library/Library";
import ProfilePage from "../pages/Profile/Profile";
import BotSubmitPage from "../pages/BotSubmit/BotSubmitPage";
import CreateSimulation from "../pages/CreateSumulation/CreateSimulation";
import MatchConfigPage from "../pages/MatchConfig/MatchConfig";
import PasswordRestore from "./PasswordRestore/PasswordRestore";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/restore' element={<PasswordRestore />} />
      <Route path='/listgames' element={<ListMatches />} />
      <Route path='/botsubmit' element={<BotSubmitPage />} />
      <Route path='/gameconfig' element={<MatchConfigPage />} />
      <Route path='/verify' element={<Verify />} />
      <Route path='/simCreate' element={<CreateSimulation />} />
      <Route path='/avatarSubmit' element={<AvatarSubmit />} />
      <Route path='/match/:match_id' element={<Match />} />
      <Route path='/library' element={<Library />} />
      <Route path='/profile' element={<ProfilePage />} />
    </Routes>
  );
};
export default App;
