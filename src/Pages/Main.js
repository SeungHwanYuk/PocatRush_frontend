import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import GameInformation from "../Components/GameInformation";
import Header from "../Components/Header";
import Profile from "../Components/Profile";
import SmallTable from "../Components/SmallTable";
import {
  GameStartButton,
  Image,
  SmallTableTd,
  SmallTableTr,
  SmallTableWrapper,
  StyledLink,
  Text,
  Wrapper,
} from "../Style/StyledComponents";
import { useNavigate } from "react-router-dom";
import { tokenCheck, urlGetCharacter } from "../API/api";

function Main() {
  const navigate = useNavigate();
  const [nickName, setNickName] = useState("");
  const [level, setLevel] = useState("");
  const [levelImage, setLevelImage] = useState("");

  function loginCheck() {
    let token = localStorage.getItem("JWT-token");
    if (token) {
      window.location.href = `/playgame`;
    } else {
      alert("로그인이 필요합니다.");
    }
  }

  async function checkForUserInfo() {
    try {
      const token = await tokenCheck();
      if (!token) {
        return;
      }
      try {
        const response = await urlGetCharacter(token.userId);
        console.log("캐릭터 정보 : ", response.data);
        setNickName(response.data.data.charNickName);
        setLevel(response.data.data.level.levelId);
        setLevelImage(response.data.data.level.medalImage);
      } catch (error) {
        console.log("캐릭터 정보 없음 : ", error);
        setNickName("noCharacter");
      }
    } catch (error) {
      console.log("토큰 없음 : ", error);
    }
  }
  useEffect(() => {
    checkForUserInfo();
  }, []);

  return (
    <>
      <Header />
      <Wrapper ju={`center`} al={`flex-end`} dr={`column`}>
        <Image src="/images/testBanner.png" />
        <Wrapper dr={`column`} al={`flex-end`} isAbsolute top={`32%`}>
          <GameStartButton onClick={() => loginCheck()}>
            GAME START
          </GameStartButton>
          <Profile nickName={nickName} level={level} medalImg={levelImage} />
        </Wrapper>
      </Wrapper>
      <SmallTable />
      <GameInformation />

      <Footer />
    </>
  );
}

export default Main;
