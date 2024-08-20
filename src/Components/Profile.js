import { Text, Wrapper } from "../Style/StyledComponents";

function Profile() {
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
        <Text color={`#fff`}>user infonmaton</Text>
      </Wrapper>
    </>
  );
}

export default Profile;
