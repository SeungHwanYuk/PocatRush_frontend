import { useEffect, useState } from "react";
import { adminCheck, urlGetPostByText, urlPostWhatsNew } from "../API/api";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import {
  MainTableTd,
  MainTableTr,
  MainTableWrapper,
  PostWriteButton,
  SearchInput,
  SearchInputWrapper,
  StyledLink,
  SubPageTitle,
  SubPageTitleDesc,
  SubPageTitleWrapper,
  Wrapper,
} from "../Style/StyledComponents";
import { HiSearch } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop";

function WhatsNew() {
  const [data, setData] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [admin, setAdmin] = useState("");
  const navigate = useNavigate();

  // 공지사항 등록 게시판번호
  const boardNumber = "2";

  async function whatsNews() {
    try {
      let response = await urlPostWhatsNew();
      console.log("데이터 : ", response.data);
      setData(response.data);
      setAdmin(adminCheck);
    } catch (error) {
      console.log("에러 : ", error);
    }
  }

  async function getWhatsNewByText() {
    // 검색란이 비어있을 경우 기본게시판으로 돌아감
    if (!searchText) {
      whatsNews();
      return;
    }
    try {
      const whatsNewId = "2";
      let response = await urlGetPostByText(searchText);
      console.log("데이터 : ", response.data);
      setData(response.data.filter((r) => r.board.boardId == whatsNewId));
    } catch (error) {
      console.log("에러 : ", error);
    }
  }
  useEffect(() => {
    whatsNews();
  }, []);

  return (
    <>
      <Wrapper>
        <Header />
        <ScrollToTop />
        <SubPageTitleWrapper bgImg={`url("https://seunghwanyuk.github.io/PocatRush_frontend/images/subBanner01.png")`}>
          <StyledLink to={"/whatsnew"}>
            <SubPageTitle color={`#242424`}>What's New</SubPageTitle>
            <SubPageTitleDesc>
              포켓러쉬의 새로운 소식을 확인할 수 있습니다.
            </SubPageTitleDesc>
          </StyledLink>
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
            <HiSearch onClick={getWhatsNewByText} />
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
                onClick={() => navigate(`/community/${data.postId}`)}
              >
                <MainTableTd width={`15%`}>{data.postId}</MainTableTd>
                <MainTableTd width={`50%`}>{data.postTitle}</MainTableTd>
                <MainTableTd width={`15%`}>{data.user.userId}</MainTableTd>
                <MainTableTd width={`20%`}>{data.postDate}</MainTableTd>
              </MainTableTr>
            ))}
          {admin ? (
            <PostWriteButton
              key={boardNumber}
              onClick={() => navigate(`/postwrite/${boardNumber}`)}
            >
              글쓰기
            </PostWriteButton>
          ) : null}
        </MainTableWrapper>
      </Wrapper>
      <Footer />
    </>
  );
}
export default WhatsNew;
