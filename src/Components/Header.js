import { useEffect, useState } from "react";
import { urlSessionCurrent, userLogout } from "../API/api";
import {
  Wrapper,
  Text,
  HeaderText,
  StyledLink,
  Image,
} from "../Style/StyledComponents";

import { IoIosLogOut } from "react-icons/io";

function Header() {
  const [adminData, setAdminData] = useState(null);
  let token = localStorage.getItem("JWT-token");
  let header = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  async function currentCheck() {
    if (token) {
      try {
        let response = await urlSessionCurrent(header);
        if (response.data.data.authority[0].authority == "ROLE_ADMIN") {
          console.log(
            "현재 로그인 계정 : ",
            response.data.data.authority[0].authority
          );
          setAdminData(
            <HeaderText padding={`14px 74px`}>
              <StyledLink isWhite to={"/Admin"} isHeader>
                관리자가깅
              </StyledLink>
            </HeaderText>
          );
        } else {
          console.log("현재 로그인 계정 : ", response.data.data);
        }
      } catch (error) {
        console.log("에러 : ", error);
      }
    }
  }

  useEffect(() => {
    currentCheck();
  }, []);
  return (
    <>
      <Wrapper
        // isAbsolute
        // zIndex={`100`}
        ju={`center`}
        // bgColor={` rgb(255,255,255,0.6);`}
        bgColor={`#fff`}
      >
        <StyledLink to={"/"}>
          <Image
            src="/images/pocatLogo.png"
            width={`180px`}
            padding={`14px 0 0`}
          />
        </StyledLink>
        <Wrapper ju={`flex-end`} padding={`0px 74px 10px`}>
          {/* 0809 승환 로그아웃 추가 (로그인이 되어있다면 hidden속성 추가 요망) */}
          {!token ? (
            <>
              <HeaderText padding={`0px 32px`} isSmall>
                <StyledLink to={"/Login"}>로그인</StyledLink>
              </HeaderText>
              <HeaderText padding={`0px 32px`} isSmall></HeaderText>
              <HeaderText padding={`0px 32px`} isSmall>
                <StyledLink to={"/Join"}>회원가입</StyledLink>
              </HeaderText>
            </>
          ) : (
            <StyledLink
              onClick={() => {
                userLogout();
              }}
            >
              로그아웃
              <IoIosLogOut />
            </StyledLink>
          )}
        </Wrapper>
        <Wrapper ju={`center`} bgColor={`#242424`}>
          <HeaderText padding={`14px 74px`}>
            <StyledLink isWhite to={"/WhatsNew"} isHeader>
              What's New
            </StyledLink>
          </HeaderText>
          <HeaderText padding={`14px 74px`}>
            <StyledLink isWhite to={"/Ranking"} isHeader>
              랭킹
            </StyledLink>
          </HeaderText>
          <HeaderText padding={`14px 74px`}>
            <StyledLink isWhite to={"/Community"} isHeader>
              커뮤니티
            </StyledLink>
          </HeaderText>
          <HeaderText padding={`14px 74px`}>
            <StyledLink isWhite to={"/MyPage"} isHeader>
              마이페이지
            </StyledLink>
          </HeaderText>
          {adminData}
        </Wrapper>
      </Wrapper>
    </>
  );
}

export default Header;
