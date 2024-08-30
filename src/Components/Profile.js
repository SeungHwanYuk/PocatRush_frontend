import { Image, Text, Wrapper } from "../Style/StyledComponents";

function Profile({nickName , level , medalImg}) {

  return (
    <>
      <Wrapper
        width={`200px`}
        height={`200px`}
        bgColor={`#181818`}
        al={`center`}
        ju={`center`}
        margin={`0px 100px 0 0`}
        radius={`0 0 6px 6px`}
      >
        <Text color={`#fff`}>{nickName || ""}</Text>
        <Text color={`#fff`}>{level || ""}</Text>
        { medalImg ?
<Image width={"100px"} height={"100px"} src={medalImg}></Image> : null
        }
        
      </Wrapper>
    </>
  );
}

export default Profile;
