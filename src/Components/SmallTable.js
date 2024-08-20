import { useEffect, useState } from "react";

import {
  SmallTablePlusButton,
  SmallTableTd,
  SmallTableTr,
  SmallTableWrapper,
  StyledLink,
  Text,
  Wrapper,
} from "../Style/StyledComponents";
import { urlPostFreeBoard, urlPostWhatsNew } from "../API/api";
import { useNavigate } from "react-router-dom";

function SmallTable() {
  const [whatsNewData, setWhatsNewData] = useState(null);
  const [freeBoardData, setFreeBoardData] = useState(null);
  const navigate = useNavigate();
  async function getSmallTableData() {
    try {
      let responseWhatsNew = await urlPostWhatsNew();
      let responseFreeBoard = await urlPostFreeBoard();
      // console.log("responseWhatsNew : ", responseWhatsNew.data);
      // console.log("responseFreeBoard : ", responseFreeBoard.data);
      setWhatsNewData(responseWhatsNew.data);
      setFreeBoardData(responseFreeBoard.data);
    } catch (error) {
      console.log("에러 : ", error);
    }
  }

  useEffect(() => {
    getSmallTableData();
  }, []);

  return (
    <Wrapper>
      <Wrapper ju={`center`}>
        <Wrapper dr={`column`} width={`650px`} margin={`20px 70px`}>
          <Wrapper dr={`column`} padding={`20px 0`}>
            <Wrapper al={`center`} margin={`0 0 10px 0`}>
              <Text fontSize={`22px`} fontWeight={`800`}>
                What's New
              </Text>
              <StyledLink to={"/WhatsNew"}>
                <SmallTablePlusButton>+</SmallTablePlusButton>
              </StyledLink>
            </Wrapper>
            <Text fontSize={`14px`}>포켓러쉬의 새 소식을 확인해보세요</Text>
          </Wrapper>
          <SmallTableWrapper>
            {whatsNewData &&
              // 결과 갯수 제한 slice(시작 , 끝 index)
              whatsNewData.slice(0, 4).map((w) => (
                <SmallTableTr
                  key={w.postId}
                  onClick={() => navigate(`/community/${w.postId}`)}
                >
                  <SmallTableTd>{w.postTitle}</SmallTableTd>
                  <SmallTableTd>{w.postDate}</SmallTableTd>
                </SmallTableTr>
              ))}
          </SmallTableWrapper>
        </Wrapper>
        <Wrapper dr={`column`} width={`650px`} margin={`20px 70px`}>
          <Wrapper dr={`column`} padding={`20px 0`}>
            <Wrapper al={`center`} margin={`0 0 10px 0`}>
              <Text fontSize={`22px`} fontWeight={`800`}>
                자유게시판
              </Text>
              <StyledLink to={"/Community"}>
                <SmallTablePlusButton>+</SmallTablePlusButton>
              </StyledLink>
            </Wrapper>
            <Text fontSize={`14px`}>
              유저들과 자유롭게 이야기를 나누어보세요!
            </Text>
          </Wrapper>
          <SmallTableWrapper>
            {freeBoardData &&
              // 결과 갯수 제한 slice(시작 , 끝 index)
              freeBoardData.slice(0, 4).map((f) => (
                <SmallTableTr
                  key={f.postId}
                  onClick={() => navigate(`/community/${f.postId}`)}
                >
                  <SmallTableTd>{f.postTitle}</SmallTableTd>
                  <SmallTableTd>{f.postDate}</SmallTableTd>
                </SmallTableTr>
              ))}
          </SmallTableWrapper>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
}

export default SmallTable;
