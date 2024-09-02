import Footer from "../Components/Footer";
import Header from "../Components/Header";
import {
  MadelImage,
  MainPostTextTableTr,
  Medalcustomhr,
  MedalImage,
  MedalListDiv,
  MedalListImage,
  MypageData,
  MypageDataSuffix,
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
  WrapperMypageData,
} from "../Style/StyledComponents";
import { tokenCheck, urlGetCharacter, urlGetMedalList } from "../API/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MyPage() {
  const navigate = useNavigate();
  const [characterData, setCharacterData] = useState("");
  const [characterNickName, setCharacterNickname] = useState("");
  const [characterLevel, setCharacterLevel] = useState("");
  const [characterPoint, setCharacterPoint] = useState("");
  const [characterExp, setCharacterExp] = useState("");
  const [medalList, setMedalList] = useState([]); // 메달 리스트
  const [defalutImage, setDefalutImage] = useState("images/no_medal.png");

  async function getCharacter() {
    try {
      const user = await tokenCheck();
      console.log(user.userId);
      try {
        let response = await urlGetCharacter(user.userId);
        console.log("urlGetCharacter", response.data);
        setCharacterData(response.data);
        setCharacterNickname(response.data.data.charNickName);
        setCharacterLevel(response.data.data.level.levelId);
        setCharacterPoint(response.data.data.userPoint);
        setCharacterExp(response.data.data.charExp);
      } catch (error) {
        console.log("캐릭터 정보 없음 : ", error);
      }
    } catch (error) {
      console.log("토큰 없음 :", error);
      alert("로그인이 필요합니다");
      navigate(-1);
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
        <MedalListDiv key={index}>
          <MedalListImage
            key={index}
            src="images/no_medal.png"
            alt={`No Medal ${index}`}
          />
        </MedalListDiv>
      ));
    } else {
      const userExp = characterExp || -1;
      console.log(userExp);

      return medalList.map((medal, index) => (
        <MedalListDiv
          key={index}
          style={{
            color: userExp >= medal.levelUpExpLowLimit ? "#333" : "#7e7e7e",
          }}
        >
          <MedalListImage
            key={index}
            src={
              userExp >= medal.levelUpExpLowLimit
                ? medal.medalImage
                : "images/no_medal.png"
            }
            alt={`Medal ${index}`}
          />
          <div>{medal.levelId}</div> {/* 메달명 표시 */}
        </MedalListDiv>
      ));
    }
  }

  function getMedalForLevel(levelId) {
    const medal = medalList.find((m) => m.levelId === levelId);
    return medal ? medal.medalImage : defalutImage;
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
              {characterNickName && characterNickName ? (
                <>
                  <>{characterNickName}</>
                  <NicknameSuffix> 님</NicknameSuffix>
                </>
              ) : (
                <NicknameSuffix>캐릭터를 만들어주세요</NicknameSuffix>
              )}
              
            </MypageNickName>
          </MypageNickNameTr>
        </Wrapper>
        <Wrapper>
          <Medalcustomhr />
          {/*밑줄 */}
        </Wrapper>
        <Wrapper>
          <WrapperMypageData>
            <MypageData>
              <MypageDataSuffix>level </MypageDataSuffix>

              {characterLevel && characterLevel ? characterLevel : "없음"}
            </MypageData>
            <MypageData>
              <MypageDataSuffix> userPoint </MypageDataSuffix>
              {characterPoint && characterPoint ? characterPoint : "없음"}
            </MypageData>
          </WrapperMypageData>
          <Wrapper>
            <Medalcustomhr />
            {/*밑줄 */}
          </Wrapper>
        </Wrapper>
        <Wrapper>
          {/* 메달이미지 */}
          <MadelImage>{getMedalImages()}</MadelImage>
        </Wrapper>

        <Footer />
      </Wrapper>
    </>
  );
}
export default MyPage;
