import { Link, Navigate } from "react-router-dom";
import {
  PocatRushButton,
  StyledLink,
  Text,
  Wrapper,
} from "../Style/StyledComponents";

function GameInformation() {
  return (
    <>
      <Wrapper dr={`row`} ju={`space-around`} margin={`40px 0`}>
        <Wrapper
          dr={`column`}
          width={`20%`}
          padding={`40px`}
          ju={`space-around`}
        >
          <Wrapper>
            <Text fontSize={`22px`} fontWeight={`800`} margin={`0 0 10px 0`}>
              게임정보
            </Text>
            <Text>
              게임 공략법을 알아보고 랭킹 1위에 도전하세요. 랭킹 1위에 달성하면
              푸짐한 포인트 선물을 드립니다!
            </Text>
          </Wrapper>
          <PocatRushButton>
            <StyledLink to={"/GameIntro"} isWhite>
              게임정보 바로가기
            </StyledLink>
          </PocatRushButton>
        </Wrapper>
        <Wrapper width={`auto`}>
          <Wrapper dr={`column`} width={`auto`} margin={`0 20px`} al={`center`}>
            <Wrapper
              width={`200px`}
              height={`250px`}
              bgColor={`#ccc`}
              radius={`4px`}
            ></Wrapper>
            <Text margin={`10px 0 0`}>랭킹 공략</Text>
          </Wrapper>
          <Wrapper dr={`column`} width={`auto`} margin={`0 20px`} al={`center`}>
            <Wrapper
              width={`200px`}
              height={`250px`}
              bgColor={`#ccc`}
              radius={`4px`}
            ></Wrapper>
            <Text margin={`10px 0 0`}>랭킹 공략</Text>
          </Wrapper>
          <Wrapper dr={`column`} width={`auto`} margin={`0 20px`} al={`center`}>
            <Wrapper
              width={`200px`}
              height={`250px`}
              bgColor={`#ccc`}
              radius={`4px`}
            ></Wrapper>
            <Text margin={`10px 0 0`}>랭킹 공략</Text>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </>
  );
}

export default GameInformation;
