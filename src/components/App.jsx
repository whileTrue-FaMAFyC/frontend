import {Route, Routes, BrowserRouter} from "react-router-dom";
import {Login, Register, AvatarSubmit} from "../components";
import {ListMatches, Verify, Home, Welcome, Match} from "../pages";
import Library from "../pages/Library/Library";
import ProfilePage from "../pages/Profile/Profile";
import BotSubmitPage from "../pages/BotSubmit/BotSubmitPage";
import CreateSimulation from "../pages/CreateSumulation/CreateSimulation";
import MatchConfigPage from "../pages/MatchConfig/MatchConfig";
import PasswordRestore from "./PasswordRestore/PasswordRestore";
import Private from "./Auth/Private";
import Public from "./Auth/Public";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Private />}>
          <Route path='/restore' element={<PasswordRestore />} />
          <Route path='/listgames' element={<ListMatches />} />
          <Route path='/botsubmit' element={<BotSubmitPage />} />
          <Route path='/gameconfig' element={<MatchConfigPage />} />
          <Route path='/simCreate' element={<CreateSimulation />} />
          <Route path='/match/:match_id' element={<Match />} />
          <Route path='/library' element={<Library />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/*' element={<p>404</p>} />
        </Route>
        <Route element={<Public />}>
          <Route path='/' element={<Welcome />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/*' element={<p>404</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;

/*


    <BrowserRouter>
      <Routes>
        <Route element={<Private />}>
          <Route path='/restore' element={<PasswordRestore />} />
          <Route path='/listgames' element={<ListMatches />} />
          <Route path='/botsubmit' element={<BotSubmitPage />} />
          <Route path='/gameconfig' element={<MatchConfigPage />} />
          <Route path='/simCreate' element={<CreateSimulation />} />
          <Route path='/match/:match_id' element={<Match />} />
          <Route path='/library' element={<Library />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/home' element={<Home />} />
        </Route>
        <Route path='/' element={<Welcome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/verify' element={<Verify />} />

        <Route path='/avatarSubmit' element={<AvatarSubmit />} />
      </Routes>
    </BrowserRouter>
    
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

        {/* <Route path='/avatarSubmit' element={<AvatarSubmit />} /> */
