import { useNavigate } from "react-router-dom";
import { Image, Medalcustomhr, Text, Wrapper } from "../Style/StyledComponents";
import { userLogout } from "../API/api";

function Profile({ nickName, level, medalImg }) {
  const navigate = useNavigate();
  return (
    <>
      <Wrapper
        width={`200px`}
        height={`200px`}
        bgColor={`#181818`}
        al={`center`}
        ju={`space-evenly`}
        margin={`0px 100px 0 0`}
        radius={`0 0 6px 6px`}
        dr={`column`}
        wrap={`nowrap`}
      >
        <Wrapper
          al={`center`}
          ju={`space-evenly`}
          radius={`0 0 6px 6px`}
          dr={`row`}
          wrap={`nowrap`}
        >
          {nickName && nickName != "noCharacter" ? (
            <>
              <Wrapper ju={`center`} al={`center`} margin={`0 10px 0 20px`}>
                {medalImg ? (
                  <Image width={"80px"} height={"80px"} src={medalImg}></Image>
                ) : null}
              </Wrapper>
              <Wrapper
                display={`flex`}
                dr={`column`}
                al={`flex-start`} // 텍스트를 중앙에 배치
                au={`center`} // 텍스트를 수직으로 중앙 정렬
                margin={`0 0 0 10px`}
              >
                <Text color={`#fff`} margin={`0 0 10px 0`}>
                  {nickName}
                </Text>
                <Text color={`#fff`}>{level || ""}</Text>
              </Wrapper>
            </>
          ) : nickName == "noCharacter" ? (
            <Text color={`#fff`}>캐릭터를 생성해주세요.</Text>
          ) : (
            <Text color={`#fff`}>로그인이 필요합니다.</Text>
          )}
        </Wrapper>
        {nickName ? (
          <Wrapper al={`center`} ju={`space-evenly`} fontSize={`13px`}>
            <Medalcustomhr
              background={`#414141`}
              margin={` 0 10px 15px`}
              width={`100%`}
              minWidth={`3px`}
            />

            <Text
              color={`#656565`}
              hoverColor={`#fff`}
              cursor={`pointer`}
              onClick={() => navigate("/mypage")}
            >
              마이페이지
            </Text>
            <Text
              color={`#656565`}
              hoverColor={`#fff`}
              cursor={`pointer`}
              onClick={() => userLogout()}
            >
              로그아웃
            </Text>
          </Wrapper>
        ) : null}
      </Wrapper>
    </>
  );
}

export default Profile;
