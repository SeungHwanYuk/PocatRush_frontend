import Footer from "../Components/Footer";
import Header from "../Components/Header";
import {
  Image,
  SubPageTitle,
  SubPageTitleDesc,
  SubPageTitleWrapper,
  Wrapper,
} from "../Style/StyledComponents";

function GameIntro() {
  return (
    <>
      <Header />
      <SubPageTitleWrapper bgImg={`url("images/subBanner02.png")`}>
        <SubPageTitle>게임소개</SubPageTitle>
        <SubPageTitleDesc>포캣러쉬를 소개합니다!</SubPageTitleDesc>
      </SubPageTitleWrapper>
      <Wrapper padding={`120px 0`}>
        <Image src="/images/GameIntro.png" maxWidth={`800px`} />
      </Wrapper>
      <Footer />
    </>
  );
}

export default GameIntro;
