import Header from "../Components/Header";
import {
  MainTableWrapper,
  PostWriteInputText,
  PostWriteInputTitle,
  PostWriteText,
  PostWriteWrapper,
  SubPageTitle,
  SubPageTitleDesc,
  SubPageTitleWrapper,
  Wrapper,
} from "../Style/StyledComponents";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import { tokenCheck, urlPostWrite } from "../API/api";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop";

function PostWrite() {
  const navigate = useNavigate();
  const [inputTitle, setInputTitle] = useState("");
  const [inputText, setInputText] = useState("");
  const [userId, setUserId] = useState("");

  const postData = {
    userId: `${userId}`,
    postTitle: `${inputTitle}`,
    postText: `${inputText}`,
    postImage: "",
    boardNumber: "1",
  };
  async function postCheckUserId() {
    try {
      const responseToken = await tokenCheck();
      console.log(responseToken.userId);
      if (responseToken) {
        setUserId(responseToken.userId);
      }
    } catch (error) {
      console.log("토큰 에러 : ", error);
    }
  }

  async function postWrite() {
    if (!userId) {
      alert("로그인이 필요합니다.");
      return;
    }
    if (inputText && inputTitle) {
      if (window.confirm("등록 하시겠습니까?")) {
        try {
          let responsePost = await urlPostWrite(postData);
          navigate("/community");
        } catch (error) {
          console.log("글쓰기 에러 : ", error);
        }
      }
    } else {
      alert("제목 혹은 내용을 입력해주세요.");
    }
  }

  useEffect(() => {
    postCheckUserId();
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

        <Wrapper dr={`column`} al={`center`} padding={`140px 0`}>
          <PostWriteWrapper>
            <PostWriteText>제목</PostWriteText>
            <PostWriteInputTitle
              placeholder="글 제목을 입력해주세요"
              value={inputTitle}
              onChange={(e) => setInputTitle(e.target.value)}
            />
          </PostWriteWrapper>
          <PostWriteWrapper>
            <PostWriteText>내용</PostWriteText>
            <PostWriteInputText
              placeholder="내용을 입력해주세요"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </PostWriteWrapper>
          <button onClick={() => postWrite()}>작성</button>
        </Wrapper>
      </Wrapper>
      <Wrapper alContent={`center`} dr={`column`}>
        <Wrapper ju={`flex-end`} maxWidth={`1440px`}></Wrapper>
        <MainTableWrapper></MainTableWrapper>
      </Wrapper>
      <Footer />
    </>
  );
}
export default PostWrite;
