import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import {
  JoinInput,
  JoinInputWrapper,
  JoinSelect,
  JoinText,
  Option,
  PocatRushButton,
  SubPageTitle,
  SubPageTitleDesc,
  SubPageTitleWrapper,
  Wrapper,
} from "../Style/StyledComponents";
import { urlUserSignUp } from "../API/api";

function Join() {
  // 0808 승환 회원가입기능 추가
  const [inputSignUpId, setInputSignUpId] = useState("");
  const [inputSignUpPassword, setInputSignUpPassword] = useState("");
  const [inputSignName, setInputSignUpName] = useState("");
  const [inputSignUpEmail, setInputSignUpEmail] = useState("");
  const [inputSignUpSelectEmail, setInputSignUpSelectEmail] = useState("");
  const [inputSignUpGender, setInputSignUpGender] = useState("");

  const signUpData = {
    userId: `${inputSignUpId}`,
    password: `${inputSignUpPassword}`,
    userName: `${inputSignName}`,
    userEmail: `${inputSignUpEmail}` + "@" + `${inputSignUpSelectEmail}`,
    gender: `${inputSignUpGender}`,
  };

  async function signUp(signUpData) {
    if (window.confirm("회원가입 하시겠습니까?")) {
      try {
        let response = await urlUserSignUp(signUpData);
        console.log("데이터 : ", response.data);
        // 이동 코드
        window.location.href = "http://localhost:3000/";
      } catch (error) {
        console.log("에러 : ", error.response.data.data);
      }
    }
  }
  useEffect(() => {}, []);

  return (
    <>
      <Wrapper>
        <Header />
        <SubPageTitleWrapper bgImg={`url("images/subBanner02.png")`}>
          <SubPageTitle>회원가입</SubPageTitle>
          <SubPageTitleDesc>
            지금 바로 회원가입하고 즐거운 포켓러쉬의 세계에 빠져보세요.
          </SubPageTitleDesc>
        </SubPageTitleWrapper>
        <Wrapper dr={`column`} al={`center`} padding={`140px 0`}>
          <JoinInputWrapper>
            <JoinText>아이디</JoinText>
            <JoinInput
              placeholder="아이디를 입력해주세요"
              value={inputSignUpId}
              onChange={(e) => setInputSignUpId(e.target.value)}
            />
          </JoinInputWrapper>
          <JoinInputWrapper>
            <JoinText>비밀번호</JoinText>
            <JoinInput
              placeholder="비밀번호를 입력해주세요"
              value={inputSignUpPassword}
              onChange={(e) => setInputSignUpPassword(e.target.value)}
            />
          </JoinInputWrapper>
          <JoinInputWrapper>
            <JoinText>이름</JoinText>
            <JoinInput
              placeholder="이름을 입력해주세요"
              value={inputSignName}
              onChange={(e) => setInputSignUpName(e.target.value)}
            />
          </JoinInputWrapper>
          <JoinInputWrapper>
            <JoinText>성별</JoinText>
            <JoinSelect onChange={(e) => setInputSignUpGender(e.target.value)}>
              <Option value={null}>선택안함</Option>
              <Option>여성</Option>
              <Option>남성</Option>
            </JoinSelect>
          </JoinInputWrapper>
          <JoinInputWrapper>
            <JoinText>이메일</JoinText>
            <Wrapper ju={`space-between`} width={`auto`} minWidth={`418px`}>
              <JoinInput
                placeholder="이메일을 입력해주세요"
                width={`188px`}
                value={inputSignUpEmail}
                onChange={(e) => setInputSignUpEmail(e.target.value)}
              />
              <JoinSelect
                width={`198px`}
                value={inputSignUpSelectEmail}
                onChange={(e) => setInputSignUpSelectEmail(e.target.value)}
              >
                <Option value={null}>선택안함</Option>
                <Option>gmail.com</Option>
                <Option>naver.com</Option>
                <Option>nate.com</Option>
                <Option>hanmail.net</Option>
                <Option>hotmail.com</Option>
              </JoinSelect>
            </Wrapper>
          </JoinInputWrapper>
          <PocatRushButton
            onClick={() => signUp(signUpData)}
            margin={`40px 0 0`}
          >
            다음
          </PocatRushButton>
        </Wrapper>
        <Footer />
      </Wrapper>
    </>
  );
}

export default Join;
