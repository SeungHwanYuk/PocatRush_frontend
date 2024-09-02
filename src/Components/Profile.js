import { Image, Text, Wrapper } from "../Style/StyledComponents";

function Profile({ nickName, level, medalImg }) {
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
    </>
  );
}

export default Profile;
