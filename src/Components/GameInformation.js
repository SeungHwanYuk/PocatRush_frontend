import { Link, Navigate } from "react-router-dom";
import {
  Image,
  PocatRushButton,
  StyledLink,
  Text,
  Wrapper,
} from "../Style/StyledComponents";
import guidePosts from "./GuidePostData";
import ScrollToTop from "./ScrollToTop";

function GameInformation() {
  const guidePost = guidePosts;
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
          <PocatRushButton margin={`20px 0`}>
            <StyledLink to={"/GameIntro"} isWhite>
              게임정보 바로가기
            </StyledLink>
          </PocatRushButton>
        </Wrapper>
        <Wrapper width={`auto`}>
          {guidePost.map((g) => (
            <Wrapper
              dr={`column`}
              width={`auto`}
              margin={`0 20px`}
              al={`center`}
              ju={`center`}
            >
              <StyledLink to={`/Guide/${g.id}`}>
                <Image
                  width={`200px`}
                  height={`auto`}
                  bgColor={`#ccc`}
                  radius={`4px`}
                  src={g.imageUrlPage}
                  alt="Guide Image"
                />
                <Text margin={`10px 0 0`} textAlign={`center`}>
                  {g.title}
                </Text>
              </StyledLink>
            </Wrapper>
          ))}
        </Wrapper>
      </Wrapper>
    </>
  );
}

export default GameInformation;
