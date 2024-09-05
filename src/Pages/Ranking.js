import Footer from "../Components/Footer";
import Header from "../Components/Header";
import {
  StyledLink,
  SubPageTitle,
  SubPageTitleDesc,
  SubPageTitleWrapper,
  Wrapper,
} from "../Style/StyledComponents";

function Ranking() {
  return (
    <>
      <Wrapper>
        <Header />
        <SubPageTitleWrapper bgImg={`url("../images/subBanner01.png")`}>
          <StyledLink to={"/ranking"}>
            <SubPageTitle>랭킹</SubPageTitle>
            <SubPageTitleDesc>
              매일 바뀌는 나의 실시간 랭킹을 확인해보세요!
            </SubPageTitleDesc>
          </StyledLink>
        </SubPageTitleWrapper>
        <Footer />
      </Wrapper>
    </>
  );
}
export default Ranking;
