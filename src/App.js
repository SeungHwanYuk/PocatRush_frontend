import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";

import FirstTest from "./Pages/FirstTest";
import Main from "./Pages/Main";
import WhatsNew from "./Pages/WhatsNew";
import Ranking from "./Pages/Ranking";
import Community from "./Pages/Community";
import Join from "./Pages/Join";
import Login from "./Pages/Login";
import FindAccess from "./Pages/FindAccess";
import MyPage from "./Pages/MyPage";
import GameIntro from "./Pages/GameIntro";
import Admin from "./Pages/Admin";
import BoardWrapper from "./Pages/BoardWrapper";

import PostWrite from "./Pages/PostWrite";

import Post from "./Pages/Post";
import { UnityGame } from "./Components/UnityGame";
import { DeviceJoin } from "./Pages/DeviceJoin";
import DeviceWrapper from "./Pages/DeviceWrapper";
import Guide from "./Pages/Guide";
import GuideWrapper from "./Pages/GuideWrapper";
import GuidePost from "./Pages/GuidePost";

// basename={process.env.PUBLIC_URL}
function App() {
  return (
    <>
      {/* <Main /> */}
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Main />} index />
          <Route path="/test" element={<FirstTest />} />
          <Route path="/whatsnew" element={<WhatsNew />} />

          <Route path="/Guide" element={<GuideWrapper />}>
            <Route index element={<Guide />} />
            <Route path=":id" element={<GuidePost />} />
          </Route>

          <Route path="/ranking" element={<Ranking />} />

          <Route path="/community" element={<BoardWrapper />}>
            <Route index element={<Community />} />
            <Route path=":postId" element={<Post />} />
          </Route>
          <Route path="/postwrite" element={<PostWrite />}>
            <Route path=":boardNumber" element={<PostWrite />} />
          </Route>

          <Route path="/mypage" element={<MyPage />} />
          <Route path="/join" element={<Join />} />
          <Route path="/devicejoin" element={<DeviceWrapper />}>
            <Route path=":userId" element={<DeviceJoin />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/findaccess" element={<FindAccess />} />
          <Route path="/gameintro" element={<GameIntro />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/playgame" element={<UnityGame />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
