import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import {
  MainPostTextTableTr,
  MypageData,
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

  async function getCharacter() {
    try {
      const user = await tokenCheck();
      console.log(user.userId);
      let response = await urlGetCharacter(user.userId);
      console.log("urlGetCharacter", response.data);

      //  console.log(data.data.userPoint);

      setData(response.data);
    } catch (error) {
      console.log("에러발생", error);
    }
  }
  useEffect(() => {
    getCharacter();
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
          <MypageData>level  {data.data.level.levelId}</MypageData>
          <MypageData>userPoint  {data.data.userPoint}</MypageData>
        </Wrapper>

        <Footer />
      </Wrapper>
    </>
  );
}
export default MyPage;
