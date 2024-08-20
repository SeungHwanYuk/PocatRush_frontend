import { HiSearch } from "react-icons/hi";
import Header from "../Components/Header";
import {
  MainTableTd,
  MainTableTr,
  MainTableWrapper,
  PostWriteButton,
  SearchInput,
  SearchInputWrapper,
  SubPageTitle,
  SubPageTitleDesc,
  SubPageTitleWrapper,
  Wrapper,
} from "../Style/StyledComponents";
import Footer from "../Components/Footer";
import { urlGetPostByText, urlPostFreeBoard } from "../API/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

function Community() {
  const [data, setData] = useState(null);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  async function freeBoard() {
    try {
      let response = await urlPostFreeBoard();
      console.log("데이터 : ", response.data);

      setData(response.data);
    } catch (error) {
      console.log("에러 : ", error);
    }
  }

  async function getPostByText() {
    // 검색란이 비어있을 경우 기본게시판으로 돌아감
    if (!searchText) {
      freeBoard();
      return;
    }
    try {
      const freeBoardId = "1";
      let response = await urlGetPostByText(searchText);
      console.log("데이터 : ", response.data);
      setData(response.data.filter((r) => r.board.boardId == freeBoardId));
    } catch (error) {
      console.log("에러 : ", error);
    }
  }
  useEffect(() => {
    freeBoard();
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
        <Wrapper ju={`flex-end`} maxWidth={`1440px`}>
          <SearchInputWrapper>
            <SearchInput
              placeholder="검색어를 입력해주세요."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <HiSearch onClick={getPostByText} />
          </SearchInputWrapper>
        </Wrapper>
        <MainTableWrapper>
          <MainTableTr isHead>
            <MainTableTd width={`15%`}>NO</MainTableTd>
            <MainTableTd width={`50%`}>제목</MainTableTd>
            <MainTableTd width={`15%`}>작성자</MainTableTd>
            <MainTableTd width={`20%`}>작성일</MainTableTd>
          </MainTableTr>
          {data &&
            data.map((data) => (
              <MainTableTr
                key={data.postId}
                onClick={() => navigate(`${data.postId}`)}
              >
                <MainTableTd width={`15%`}>{data.postId}</MainTableTd>
                <MainTableTd width={`50%`}>{data.postTitle}</MainTableTd>
                <MainTableTd width={`15%`}>{data.user.userId}</MainTableTd>
                <MainTableTd width={`20%`}>{data.postDate}</MainTableTd>
              </MainTableTr>
            ))}
          <PostWriteButton onClick={() => navigate(`/postwrite`)}>
            글쓰기
          </PostWriteButton>
        </MainTableWrapper>
      </Wrapper>
      <Footer />
    </>
  );
}
export default Community;
