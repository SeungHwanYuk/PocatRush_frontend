import Footer from "../Components/Footer";
import Header from "../Components/Header";
import {
  SubPageTitle,
  SubPageTitleDesc,
  SubPageTitleWrapper,
  Wrapper,
} from "../Style/StyledComponents";

function MyPage() {
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
