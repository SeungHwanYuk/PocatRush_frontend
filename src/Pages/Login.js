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
  StyledLink,
  SubPageTitle,
  SubPageTitleDesc,
  SubPageTitleWrapper,
  Text,
  Wrapper,
} from "../Style/StyledComponents";
import { sessionCurrent, urlJwtLogin } from "../API/api";
import { useNavigate } from "react-router-dom";

function Login() {
  // 0809 승환 로그인기능 추가
  const [inputId, setInputId] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const navigate = useNavigate();
  const loginData = {
    userId: `${inputId}`,
    password: `${inputPassword}`,
  };

  async function getToken() {
    let tokenData = localStorage.getItem("JWT-token");
    if (!tokenData) {
      try {
        let response = await urlJwtLogin(loginData);
        console.log("데이터 : ", response.data);
        localStorage.setItem("JWT-token", response.data.data.token);
        // 성공시 이전 페이지로 이동
        navigate(-1);
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
          <SubPageTitle>로그인</SubPageTitle>
          <SubPageTitleDesc>
            지금 바로 로그인하고 즐거운 포켓러쉬의 세계에 빠져보세요.
          </SubPageTitleDesc>
        </SubPageTitleWrapper>
        <Wrapper dr={`column`} al={`center`} padding={`140px 0`}>
          <JoinInputWrapper>
            <JoinText>아이디</JoinText>
            <JoinInput
              placeholder="아이디를 입력해주세요"
              value={inputId}
              onChange={(e) => setInputId(e.target.value)}
            />
          </JoinInputWrapper>
          <JoinInputWrapper>
            <JoinText>비밀번호</JoinText>
            <JoinInput
              placeholder="비밀번호를 입력해주세요"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              type="password"
            />
          </JoinInputWrapper>
          <Wrapper
            minWidth={`500px`}
            al={`center`}
            ju={`flex-end`}
            width={`500px`}
          >
            <StyledLink to={"/FindAccess"}>
              <Text
                decoration={`underline`}
                cursor={`pointer`}
                textAlign={`right`}
              >
                아이디 혹은 비밀번호를 잊어버리셨나요?
              </Text>
            </StyledLink>
          </Wrapper>
          <PocatRushButton
            onClick={() => {
              getToken(loginData);
            }}
            margin={`40px 0 0`}
          >
            로그인하기
          </PocatRushButton>
        </Wrapper>
        <Footer />
      </Wrapper>
    </>
  );
}

export default Login;
