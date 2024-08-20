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

function PostWrite() {
  const [inputTitle, setInputTitle] = useState("");
  const [inputText, setInputText] = useState("");
  const [userId, setUserId] = useState("");

  async function post() {
    let postData = {
      userId: userId,
      postTitle: inputTitle,
      postText: inputText,
      boardNumber: "1",
    };
    try {
      let responseToken = await tokenCheck();

      if (responseToken) {
        setUserId(responseToken.userId);
        if (inputText && inputTitle) {
          if (window.confirm("등록 하시겠습니까?")) {
            let responsePost = await urlPostWrite(postData);
            window.location.href = "/community";
          }
        } else {
          alert("제목 혹은 내용을 입력해주세요.");
        }
      } else {
        alert("로그인이 필요합니다.");
      }
    } catch (error) {
      console.log("에러발생 : ", error);
    }
  }

  useEffect(() => {}, []);
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
          <button onClick={post}>작성</button>
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
