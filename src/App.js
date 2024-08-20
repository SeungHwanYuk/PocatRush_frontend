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

function App() {
  return (
    <>
      {/* <Main /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} index />
          <Route path="/test" element={<FirstTest />} />
          <Route path="/whatsnew" element={<WhatsNew />} />
          <Route path="/ranking" element={<Ranking />} />

          <Route path="/community" element={<BoardWrapper />}>
            <Route index element={<Community />} />
            <Route path=":postId" element={<Post />} />
          </Route>
          <Route path="/postwrite" element={<PostWrite />} />

          <Route path="/mypage" element={<MyPage />} />
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
          <Route path="/findaccess" element={<FindAccess />} />
          <Route path="/gameintro" element={<GameIntro />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
