import { HiSearch } from "react-icons/hi";
import Header from "../Components/Header";
import {
  MainPostTableTitleTr,
  MainPostTableTr,
  MainPostTextTableTr,
  MainTableTd,
  MainTableTr,
  MainTableWrapper,
  PocatRushButton,
  PostTableTd,
  PostTableTitleTd,
  SearchInput,
  SearchInputWrapper,
  StyledLink,
  SubPageTitle,
  SubPageTitleDesc,
  SubPageTitleWrapper,
  Wrapper,
} from "../Style/StyledComponents";
import Footer from "../Components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { adminCheck, urlDeletePost, urlGetPost } from "../API/api";
import { useEffect, useState } from "react";
import ScrollToTop from "../Components/ScrollToTop";

function Post() {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [data, setData] = useState("");
  const [admin, setAdmin] = useState("");

  async function getPostByPostId() {
    try {
      let response = await urlGetPost(postId);
      console.log("urlGetPost : ", response.data);

      setData(response.data);
      setAdmin(adminCheck);
    } catch (error) {
      console.log("에러발생 : ", error);
    }
  }

  function deletePost() {
    if (window.confirm("삭제하시겠습니까?")) {
      try {
        const response = urlDeletePost(postId);
        console.log(`${postId} 삭제완료 :`, response);
        window.location.href = "/community";
      } catch (error) {
        console.log("삭제 에러 : ", error);
      }
    }
  }

  useEffect(() => {
    getPostByPostId();
  }, []);

  return (
    <>
      <Wrapper>
        <Header />
        <ScrollToTop />
        <SubPageTitleWrapper bgImg={`url("../images/subBanner01.png")`}>
          <StyledLink
            to={data && data.board.boardId == 1 ? "/community" : "/whatsnew"}
          >
            <SubPageTitle>
              {data && data.board.boardId == 1 ? "커뮤니티" : "What's New"}
            </SubPageTitle>
            <SubPageTitleDesc>
              {data && data.board.boardId == 1
                ? "포켓러쉬 유저들과 자유롭게 소통할 수 있습니다."
                : "포켓러쉬의 새로운 소식을 확인할 수 있습니다."}
            </SubPageTitleDesc>
          </StyledLink>
        </SubPageTitleWrapper>
      </Wrapper>
      <Wrapper alContent={`center`} dr={`column`}>
        <Wrapper ju={`flex-end`} maxWidth={`1440px`}></Wrapper>
        <MainTableWrapper margin={`100px 0`}>
          {data && (
            <>
              <MainPostTableTitleTr>
                {/* <PostTableTitleTd width={`15%`}></PostTableTitleTd> */}
                <PostTableTitleTd width={`60%`}>
                  {data.postTitle}
                </PostTableTitleTd>
              </MainPostTableTitleTr>
              <MainPostTableTr>
                <PostTableTd width={`16%`}>작성자</PostTableTd>
                <PostTableTd width={`15%`}>{data.user.userId}</PostTableTd>
                <PostTableTd width={`50%`}></PostTableTd>
                <PostTableTd width={`16%`}>작성일</PostTableTd>
                <PostTableTd width={`30%`}>{data.postDate}</PostTableTd>
              </MainPostTableTr>
              {/* <MainPostTableTr>
                <PostTableTd width={`15%`}>내용</PostTableTd>
              </MainPostTableTr> */}
              <MainPostTextTableTr>
                <PostTableTd width={`80%`}>{data.postText}</PostTableTd>
              </MainPostTextTableTr>
              {admin ? (
                <PocatRushButton
                  margin={`20px 0 0 auto`}
                  onClick={() => deletePost()}
                >
                  삭제
                </PocatRushButton>
              ) : null}
            </>
          )}
        </MainTableWrapper>
      </Wrapper>
      <Footer />
    </>
  );
}
export default Post;
