import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import {
  DeviceJoinTitle,
  DiviceText,
  DiviceTextWrapper,
  DiviceWriteInputTitle,
  Image,
  InputField,
  PocatRushButton,
  PostWriteInputTitle,
  SubPageTitle,
  SubPageTitleDesc,
  SubPageTitleWrapper,
  TableData,
  TableRow,
  TableWrapper,
  Wrapper,
} from "../Style/StyledComponents";
import { useCallback, useEffect, useState } from "react";
import { urlCheckDevice, urlJoinDevice, urlPlusData } from "../API/api";
import ScrollToTop from "../Components/ScrollToTop";
import { IoIosCheckmark } from "react-icons/io";

export function DeviceJoin() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [deviceFound, setDeviceFound] = useState(false);
  const [deviceId, setDeviceId] = useState("");
  const [inputKm, setInputKm] = useState(0);
  const [inputKg, setInputKg] = useState(0);
  const [inputMin, setInputMin] = useState(0);

  const plusUpdate = {
    deviceId: `${deviceId}`,
    km: `${inputKm}`,
    kg: `${inputKg}`,
    min: `${inputMin}`,
  };

  async function plusDeviceData() {
    if (window.confirm("운동량이 더해집니다. 계속 하시겠습니까?")) {
      console.log(plusUpdate);
      try {
        const response = await urlPlusData(plusUpdate);
        console.log("plusUpdateData : ", response.data);
        setDeviceFound({
          km: response.data.km,
          kg: response.data.kg,
          min: response.data.min,
        });
      } catch (error) {
        console.log("에러 : ", error);
      }
    }
  }

  async function checkDevice() {
    if (!userId) {
      alert("잘못된 접근입니다.");
    }
    try {
      const response = await urlCheckDevice(userId);

      console.log("디바이스 체크 : ", response.data);
      setDeviceId(response.data.deviceId);
      setDeviceFound({
        km: response.data.km,
        kg: response.data.kg,
        min: response.data.min,
      });
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
        <SubPageTitleWrapper bgImg={`url("https://seunghwanyuk.github.io/PocatRush_frontend/images/subBanner02.png")`}>
          <SubPageTitle>기기연결</SubPageTitle>
          <SubPageTitleDesc>
            지금 바로 연동하고 즐거운 포켓러쉬의 세계에 빠져보세요.
          </SubPageTitleDesc>
        </SubPageTitleWrapper>

        <Wrapper dr={`column`} al={`center`} padding={`140px 0`}>
          {deviceFound ? (
            <>
              <DeviceJoinTitle margin="0 0  70px 0">
                연동 완료{" "}
                <IoIosCheckmark size={"50px"} ju={"center"}></IoIosCheckmark>{" "}
              </DeviceJoinTitle>
              <hr width="40%" height="50px" color="#999"></hr>
              <DeviceJoinTitle fontSize={"20px"} margin={"40px 0 40px 0"}>
                먼저 운동량을 체크 해볼까요?
              </DeviceJoinTitle>
              <Wrapper ju={`center`} margin="30px">
                <DiviceText>
                  <TableRow display={`flex`} flexDirection={`column`}>
                    <TableWrapper>
                      <tbody>
                        <TableRow>
                          <TableData>달리기</TableData>
                          <TableData>
                            :
                            <InputField
                              type="number"
                              placeholder="입력해주세요"
                              onChange={(e) => setInputKm(e.target.value)}
                            />
                            km
                          </TableData>
                        </TableRow>
                        <TableRow>
                          <TableData>무게</TableData>
                          <TableData>
                            :
                            <InputField
                              type="number"
                              placeholder="입력해주세요"
                              onChange={(e) => setInputKg(e.target.value)}
                            />
                            kg
                          </TableData>
                        </TableRow>
                        <TableRow>
                          <TableData>시간</TableData>
                          <TableData>
                            :
                            <InputField
                              type="number"
                              placeholder="입력해주세요"
                              onChange={(e) => setInputMin(e.target.value)}
                            />
                            min
                          </TableData>
                        </TableRow>
                      </tbody>
                    </TableWrapper>

                    <Wrapper ju={`flex-end`} margin={`20px 0`}>
                      <PocatRushButton
                        wid={`80px`}
                        onClick={() => plusDeviceData()}
                      >
                        적용하기
                      </PocatRushButton>
                    </Wrapper>
                  </TableRow>
                </DiviceText>

                <DiviceText>
                  <SubPageTitleWrapper
                    bgImg={`url("https://seunghwanyuk.github.io/PocatRush_frontend/images/watch.png")`}
                    width={`2500px`}
                  >
                    <DiviceText width={`50px`}>
                      <DiviceText width={`35px`} margin={`10px`}></DiviceText>
                      <SubPageTitle
                        color={`#fff`}
                        fontSize={`10px`}
                        fontWeight={`400`}
                        margin={`2px`}
                        ju={`flex-end`}
                      >
                        {deviceFound.km}
                      </SubPageTitle>
                    </DiviceText>

                    <DiviceText width={`50px`}>
                      <DiviceText width={`35px`}></DiviceText>
                      <SubPageTitle
                        color={`#fff`}
                        fontSize={`10px`}
                        fontWeight={`400`}
                        margin={`2px`}
                        ju={`flex-end`}
                      >
                        {deviceFound.kg}
                      </SubPageTitle>
                    </DiviceText>
                    <DiviceText width={`50px`}>
                      <DiviceText width={`35px`}></DiviceText>
                      <SubPageTitle
                        color={`#fff`}
                        fontSize={`10px`}
                        fontWeight={`400`}
                        margin={`2px`}
                        ju={`flex-end`}
                      >
                        {deviceFound.min}
                      </SubPageTitle>
                    </DiviceText>
                  </SubPageTitleWrapper>
                </DiviceText>
                <Wrapper margin={`50px`}></Wrapper>
              </Wrapper>
              <hr width="40%" height="50px" color="#999"></hr>
              <DeviceJoinTitle fontSize={"20px"} margin={"40px 0 5px 0"}>
                디바이스 번호는
              </DeviceJoinTitle>
              <DeviceJoinTitle>{deviceId} 입니다.</DeviceJoinTitle>
              <DeviceJoinTitle fontSize={"18px"} margin={"0 0 0 0"}>
                까먹어도 상관없음!
              </DeviceJoinTitle>
            </>
          ) : (
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
