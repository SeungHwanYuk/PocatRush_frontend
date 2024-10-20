import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import  guidePosts  from '../Components/GuidePostData';
import {
  GuideBoardWrapper,
  GuidePost,
  GuidePostContent,
  GuidePostTitle,
  GuideWrapper,
  Image,
  StyledLink,
  SubPageTitle,
  SubPageTitleDesc,
  SubPageTitleWrapper,
  Wrapper,
} from "../Style/StyledComponents";
import BoardWrapper from "./BoardWrapper";
import Post from "./Post";
// const guidePosts = [
//   {
//     id: 1,
//     title: "귀여운 메달 공략법",
//     imageUrl: "/images/eventPage.png",
//     imageUrlPage: "/images/eventPage_page.png",
//   },
//   {
//     id: 2,
//     title: "게시글 제목 2",
//     content: "게시글 내용 2...",
//   },
//   {
//     id: 3,
//     title: "게시글 제목 3",
//     content: "게시글 내용 3...",
//   },
// ];

function Guide() {
  const navigate = useNavigate();

  return (
    <>
      
      <StyledLink to={"/Guide"}>
      <Header />
        <SubPageTitleWrapper bgImg={`url("https://seunghwanyuk.github.io/PocatRush_frontend/images/subBanner02.png")`}>
          <SubPageTitle>가이드</SubPageTitle>

          <SubPageTitleDesc>
            포켓러쉬 월드에 대해 알아갈 수 있어요.
          </SubPageTitleDesc>
        </SubPageTitleWrapper>
      </StyledLink>
      <GuideWrapper>
        <GuideBoardWrapper>
          {guidePosts.map((guidePosts) => (
            <GuidePost
              key={guidePosts.id}
              value={guidePosts}
              onClick={() => navigate(`${guidePosts.id}`)}
            >
              <GuidePostContent
                src={guidePosts.imageUrlPage}
              ></GuidePostContent>
              <GuidePostTitle >{guidePosts.title}</GuidePostTitle>
            </GuidePost>
          ))}
        </GuideBoardWrapper>
      </GuideWrapper>

      {/* <Wrapper padding={`120px 0`}>
        <Image src="/images/GameIntro.png" maxWidth={`800px`} />
      </Wrapper> */}
      <Footer />
    </>
  );
}

export default Guide;
