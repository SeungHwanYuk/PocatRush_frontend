import Footer from "../Components/Footer";
import Header from "../Components/Header";
import {
  MadelImage,
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
import { tokenCheck, urlGetCharacter, urlGetMedalList } from "../API/api";
import { useEffect, useState } from "react";

function MyPage() {
  const [characterData, setCharacterData] = useState("");
  const [medalList, setMedalList] = useState([]); // 메달 리스트
  const [defalutImage, setDefalutImage] = useState("images/no_medal.png");

  async function getCharacter() {
    try {
      const user = await tokenCheck();
      console.log(user.userId);
      let response = await urlGetCharacter(user.userId);
      console.log("urlGetCharacter", response.data);
      setCharacterData(response.data);
    } catch (error) {
      console.log("에러발생", error);
    }
  }

  //메달이미지
  async function getMedalList() {
    try {
      let medalList = await urlGetMedalList();
      setMedalList(medalList.data);
      console.log("데이터내용", medalList.data);
    } catch (error) {
      console.log("메달이미지 에러발생", error);
    }
  }

  // 레벨에 맞는 메달 이미지를 결정하는 함수
  function getMedalImages() {
    if (!characterData || !medalList.length) {
      // 데이터가 없거나 메달 리스트가 비어있는 경우
      return Array.from({ length: medalList.length }, (_, index) => (
        <img
          key={index}
          src="images/no_medal.png"
          style={{ width: "80px", height: "80px", margin: "13px" }}
          alt={`No Medal ${index}`}
        />
      ));
    } else {
      const userExp = characterData.data.charExp;
      console.log(userExp);

      return medalList.map((medal, index) => (

        <img
          key={index}
          src={
            userExp >= medal.levelUpExpLowLimit
              ? medal.medalImage
              : "images/no_medal.png"
          }
          style={{ width: "80px", height: "80px", margin: "13px" }}
          alt={`Medal ${index}`}
        />
        
      ));
    }
  }

  useEffect(() => {
    getCharacter();
    getMedalList();
  }, []);

  useEffect(() => {
    console.log("디폴트나와라 얍", defalutImage);
  }, [defalutImage]);

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
              {characterData && characterData.data.charNickName}{" "}
              <NicknameSuffix> 님</NicknameSuffix>
            </MypageNickName>
          </MypageNickNameTr>
        </Wrapper>
        <Wrapper>
          <MypageData>
            level {characterData && characterData.data.level.levelId}
          </MypageData>
          <MypageData>
            userPoint {characterData && characterData.data.userPoint}
          </MypageData>
        </Wrapper>
        <Wrapper>
          <MadelImage>{getMedalImages()}</MadelImage>
        </Wrapper>

        <Footer />
      </Wrapper>
    </>
  );
}
export default MyPage;
