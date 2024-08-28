import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import {
  MainPostTextTableTr,
  MypageData,
  MypageNickName,
  MypageNickNameHeader,
  MypageNickNameSide,
  MypageNickNameTr,
  NicknameSuffix,
  PostTableTd,
  PostWriteInputText,
  SubPageTitle,
  SubPageTitleDesc,
  SubPageTitleWrapper,
  Wrapper,
} from "../Style/StyledComponents";
import { tokenCheck, urlGetCharacter } from "../API/api";
import { useEffect, useState } from "react";

function MyPage() {
  const [data, setData] = useState("");
  const [catImage, setCatImage] = useState(<h1>잠긴고양이</h1>);
  const [humanImage, setHumanImage] = useState(<h1>잠긴인간</h1>);
  const [uniconImage, setUniconImage] = useState(<h1>잠긴유니콘</h1>);
  const [tigerImage, setTigerImage] = useState(<h1>잠긴호랑이</h1>);

  async function getCharacter() {
    try {
      const user = await tokenCheck();
      console.log(user.userId);
      let response = await urlGetCharacter(user.userId);
      console.log("urlGetCharacter", response.data);
      setData(response.data);
    } catch (error) {
      console.log("에러발생", error);
    }
  }

  function unlockMadal() {
    if (data && data.data.level.levelId === "인간") {
      setHumanImage(
        <>
          <h1>열린인간</h1>
        </>
      );
    } else if (data && data.data.level.levelId === "고양이") {
      setHumanImage(
        <>
          <h1>열린인간</h1>
        </>
      );
      setCatImage(
        <>
          <h1>열린고양이</h1>
        </>
      );
    } else if (data && data.data.level.levelId === "호랑이") {
      setHumanImage(
        <>
          <h1>열린인간</h1>
        </>
      );
      setCatImage(
        <>
          <h1>열린고양이</h1>
        </>
      );
      setTigerImage(
        <>
          <h1>열린호랑이</h1>
        </>
      );
    } else if (data && data.data.level.levelId === "유니콘") {
      setHumanImage(
        <>
          <h1>열린인간</h1>
        </>
      );
      setCatImage(
        <>
          <h1>열린고양이</h1>
        </>
      );
      setTigerImage(
        <>
          <h1>열린호랑이</h1>
        </>
      );
      setUniconImage(
        <>
          <h1>열린유니콘</h1>
        </>
      );
    }
  }

  useEffect(() => {
    getCharacter();
  }, []);

  useEffect(() => {
    unlockMadal();
  }, []);

  return (
    <>
      <Wrapper>
        <Header />
        <SubPageTitleWrapper bgImg={`url("images/subBanner02.png")`}>
          <SubPageTitle>마이페이지</SubPageTitle>
          <SubPageTitleDesc>
            나의 정보를 조회하고 변경할 수 있습니다.
          </SubPageTitleDesc>
        </SubPageTitleWrapper>
        <Wrapper>
          <MypageNickNameTr>
            <MypageNickName>
              {data && data.data.charNickName}{" "}
              <NicknameSuffix> 님</NicknameSuffix>
            </MypageNickName>
          </MypageNickNameTr>
        </Wrapper>
        <Wrapper>
          <MypageData>level {data && data.data.level.levelId}</MypageData>
          <MypageData>userPoint {data && data.data.userPoint}</MypageData>
          {catImage}
          {uniconImage}
          {tigerImage}
          {humanImage}
        </Wrapper>

        <Footer />
      </Wrapper>
    </>
  );
}
export default MyPage;
