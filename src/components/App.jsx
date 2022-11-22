import {lazy, Suspense} from "react";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import {Login, Register, AvatarSubmit} from "../components";

import Private from "./Auth/Private";
import Public from "./Auth/Public";
import NotFound from "./NotFound/NotFound";
import Loader from "./Loader";

const PasswordRestore = lazy(() => import("./PasswordRestore/PasswordRestore"));
const CreateSimulation = lazy(() =>
  import("../pages/CreateSimulation/CreateSimulation")
);
const BotSubmit = lazy(() => import("../pages/BotSubmit/BotSubmitPage"));
const Library = lazy(() => import("../pages/Library/Library"));
const Match = lazy(() => import("../pages/Match/Match"));
const Welcome = lazy(() => import("../pages/Welcome/Welcome"));
const Home = lazy(() => import("../pages/Home/Home"));
const Verify = lazy(() => import("../pages/Verify/Verify"));
const ListMatches = lazy(() => import("../pages/ListMatches/ListMatches"));
const Profile = lazy(() => import("../pages/Profile/Profile"));
const MatchConfig = lazy(() => import("../pages/MatchConfig/MatchConfig"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<Private />}>
            <Route path='/listgames' element={<ListMatches />} />
            <Route path='/botsubmit' element={<BotSubmit />} />
            <Route path='/gameconfig' element={<MatchConfig />} />
            <Route path='/simCreate' element={<CreateSimulation />} />
            <Route path='/match/:match_id' element={<Match />} />
            <Route path='/library' element={<Library />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/home' element={<Home />} />
            <Route path='/*' element={<NotFound />} />
          </Route>
          <Route element={<Public />}>
            <Route path='/' element={<Welcome />} />
            <Route path='/avatarSubmit' element={<AvatarSubmit />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/verify' element={<Verify />} />
            <Route path='/restore' element={<PasswordRestore />} />
            <Route path='/*' element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
export default App;
