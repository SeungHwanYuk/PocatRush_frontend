import { HiSearch } from "react-icons/hi";
import Header from "../Components/Header";
import {
  MainPostTableTitleTr,
  MainPostTableTr,
  MainPostTextTableTr,
  MainTableTd,
  MainTableTr,
  MainTableWrapper,
  PostTableTd,
  PostTableTitleTd,
  SearchInput,
  SearchInputWrapper,
  SubPageTitle,
  SubPageTitleDesc,
  SubPageTitleWrapper,
  Wrapper,
} from "../Style/StyledComponents";
import Footer from "../Components/Footer";
import { useParams } from "react-router-dom";
import { urlGetPost } from "../API/api";
import { useEffect, useState } from "react";

function Post() {
  const { postId } = useParams();
  const [data, setData] = useState("");

  async function getPostByPostId() {
    try {
      let response = await urlGetPost(postId);
      console.log("urlGetPost : ", response.data);

      setData(response.data);
    } catch (error) {
      console.log("에러발생 : ", error);
    }
  }
  useEffect(() => {
    getPostByPostId();
  }, []);

  return (
    <>
      <Wrapper>
        <Header />
        <SubPageTitleWrapper bgImg={`url("images/subBanner01.png")`}>
          <SubPageTitle>커뮤니티</SubPageTitle>
          <SubPageTitleDesc>
            포켓러쉬 유저들과 자유롭게 소통할 수 있습니다.
          </SubPageTitleDesc>
        </SubPageTitleWrapper>
      </Wrapper>
      <Wrapper alContent={`center`} dr={`column`}>
        <Wrapper ju={`flex-end`} maxWidth={`1440px`}></Wrapper>
        <MainTableWrapper>
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
            </>
          )}
        </MainTableWrapper>
      </Wrapper>
      <Footer />
    </>
  );
}
export default Post;
