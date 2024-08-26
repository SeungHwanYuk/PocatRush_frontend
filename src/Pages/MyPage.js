import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import {
  SubPageTitle,
  SubPageTitleDesc,
  SubPageTitleWrapper,
  Wrapper,
} from "../Style/StyledComponents";
import { tokenCheck, urlGetCharacter } from "../API/api";
import { useEffect } from "react";

function MyPage() {
  async function getCharacter() {
    try {
      const user = tokenCheck();

      let response = await urlGetCharacter(user.userId);
      console.log("urlGetCharacter", response.data);
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
        <Footer />
      </Wrapper>
    </>
  );
}
export default MyPage;
