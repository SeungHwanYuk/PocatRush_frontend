import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import {
  DeviceJoinTitle,
  PocatRushButton,
  SubPageTitle,
  SubPageTitleDesc,
  SubPageTitleWrapper,
  Wrapper,
} from "../Style/StyledComponents";
import { useEffect, useState } from "react";
import { urlCheckDevice, urlJoinDevice } from "../API/api";
import ScrollToTop from "../Components/ScrollToTop";

export function DeviceJoin() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [deviceFound, setDeviceFound] = useState("");
  const [deviceId, setDeviceId] = useState("");

  async function checkDevice() {
    if (!userId) {
      alert("잘못된 접근입니다.");
    }
    try {
      const response = await urlCheckDevice(userId);
      console.log("디바이스 체크 : ", response.data);
      setDeviceFound(
        <>
          <DeviceJoinTitle> 연동 완료 ! </DeviceJoinTitle>
          <DeviceJoinTitle fontSize={"20px"} margin={"0 0 5px 0"}>
            디바이스 번호는
          </DeviceJoinTitle>
          <DeviceJoinTitle>{response.data.deviceId} 입니다.</DeviceJoinTitle>
          <DeviceJoinTitle fontSize={"18px"} margin={"0 0 0 0"}>
            까먹어도 상관없음!
          </DeviceJoinTitle>
        </>
      );
    } catch (error) {}
  }

  async function joinDevice() {
    try {
      const response = await urlJoinDevice(userId);
      console.log("연동 완료 : ", response.data);
      setDeviceId(response.data.deviceId);
      checkDevice();
    } catch (error) {
      console.log("연동 실패 : ", error);
    }
  }
  useEffect(() => {
    checkDevice();
  }, []);
  return (
    <>
      <Wrapper>
        <Header />
        {/* 페이지 이동시 이미지 주소가 기존 주소에 + (더해져서 찾는) 현상을 보완하기위해 ../ 로 자동으로 찾기 수정 매우중요! */}
        <SubPageTitleWrapper bgImg={`url("../images/subBanner02.png")`}>
          <SubPageTitle>회원가입</SubPageTitle>
          <SubPageTitleDesc>
            지금 바로 회원가입하고 즐거운 포켓러쉬의 세계에 빠져보세요.
          </SubPageTitleDesc>
        </SubPageTitleWrapper>
        <Wrapper dr={`column`} al={`center`} padding={`140px 0`}>
          {deviceFound || (
            <>
              <DeviceJoinTitle>스마트 워치와 연결하세요!</DeviceJoinTitle>
              <Wrapper dr={`row`} al={`center`} padding={`0`} ju={`center`}>
                <PocatRushButton
                  hei="140px"
                  margin={`40px 10px 0`}
                  isPink
                  onClick={() => joinDevice()}
                  hoverBc={`#FA78D6`}
                >
                  없으세요?<br></br> 만들어줄게요!
                </PocatRushButton>
                <PocatRushButton
                  hei="140px"
                  margin={`40px 10px 0`}
                  onClick={() => navigate(`/`)}
                >
                  다음에 하기
                </PocatRushButton>
              </Wrapper>
            </>
          )}
        </Wrapper>
        <Footer />
      </Wrapper>
    </>
  );
}
export default DeviceJoin;
