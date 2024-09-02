import { useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { BackGroundImage, GameContainer } from "../Style/StyledComponents";

import {
  tokenCheck,
  tokenCheckGetUserId,
  urlCheckDevice,
  urlCheckNickNameOverLap,
  urlCreateCharacter,
  urlExpUpdate,
  urlGetCharacter,
  urlHpUpdateByNickname,
  urlKgUpdate,
  urlKmUpdate,
  urlMinUpdate,
  urlNPCLikeUpdate,
} from "../API/api";
import Header from "./Header";
import Footer from "./Footer";

export function UnityGame() {
  const { unityProvider, sendMessage, addEventListener, removeEventListener } =
    useUnityContext({
      loaderUrl: "build/PocatRush.loader.js",
      dataUrl: "build/PocatRush.data",
      frameworkUrl: "build/PocatRush.framework.js",
      codeUrl: "build/PocatRush.wasm",
    });

  // 로딩완료시 첫 실행코드 할당하기
  const [playingGame, setPlayingGame] = useState(false);
  const [worldReady, setWorldReady] = useState(false);

  // 캐릭터만들기
  const [userId, setUserId] = useState("");
  const [charNickname, setCharNickname] = useState("");
  const [inputCharNickname, setInputCharNickname] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const characterData = {
    charNickName: `${charNickname}`,
    user: `${userId}`,
    profileImage: `${profileImage}`,
  };

  // 디바이스 관리 (운동정보)
  const [deviceKm, setDeviceKm] = useState("");
  const [deviceKg, setDeviceKg] = useState("");
  const [deviceMin, setDeviceMin] = useState("");
  const [resetKm, setResetKm] = useState(0);
  const [resetKg, setResetKg] = useState(0);
  const [resetMin, setResetMin] = useState(0);

  // 캐릭터 정보 관리
  const [character, setCharacter] = useState("");
  const [characterHp, setCharacterHp] = useState("");
  const [characterLevel, setCharacterLevel] = useState("");
  const [exp, setExp] = useState(0);
  const [newHp, setNewHp] = useState("");

  async function getUserId() {
    try {
      const response = await tokenCheck();
      setUserId(response.userId);
      try {
        const responseCharData = await urlGetCharacter(response.userId);
        console.log("캐릭터가 있습니다", responseCharData.data);
        console.log("캐릭터 정보는? : ", responseCharData.data.data);
        setCharacterHp(responseCharData.data.data.charHp);
        setCharacterLevel(responseCharData.data.data.level.levelId);
        setCharNickname(responseCharData.data.data.charNickName);
        sendMessage(
          "SceneManager",
          "isUser",
          responseCharData.data.data.charNickName
        );
      } catch (error) {
        console.log("캐릭터가 없습니다", error);
      }
    } catch (error) {
      console.log("tokenCheck 에러 : ", error);
    }
  }

  async function createCharater() {
    try {
      const checkOverlapResponse = await urlCheckNickNameOverLap(
        inputCharNickname
      );
      console.log("checkOverlapResponse : ", checkOverlapResponse.data);
      if (checkOverlapResponse.data == "FOUND") {
        sendMessage("createButton", "nickNameFound");
        setInputCharNickname("");
      } else if (checkOverlapResponse.data == "NOT_FOUND") {
        try {
          setCharNickname(inputCharNickname);
          const responseCreated = await urlCreateCharacter(characterData);
          console.log("urlCreateCharacter : ", responseCreated);
          sendMessage("createButton", "Show");
          getUserId();
        } catch (error) {
          console.log("urlCreateCharacter 에러 ", error);
        }
      }
    } catch (error) {
      console.log("닉네임 중복체크 에러 : ", error);
    }
  }

  async function charExpUpdate() {
    if (!exp) {
      return;
    }
    try {
      const response = await urlExpUpdate(charNickname, exp);
      console.log("경험치 저장 완료 : ", response.data);
      sendMessage("userPanel", "GetLevel", response.data);
    } catch (error) {
      console.log("경험치 저장 에러 : ", error);
    }
  }

  async function hpUpdate() {
    try {
      const responseHpUpdate = await urlHpUpdateByNickname(charNickname, newHp);
      console.log("HP 업데이트 완료 : ", responseHpUpdate.data);
    } catch (error) {
      console.log("HP 업데이트 에러 : ", error);
    }
  }

  async function kmReset() {
    if (!userId) {
      return;
    }
    try {
      const response = await urlKmUpdate(userId, resetKm);
    } catch (error) {
      console.log("kmUpdate 에러 : ", error);
    }
  }
  async function kgReset() {
    if (!userId) {
      return;
    }
    const response = await urlKgUpdate(userId, resetKg);
    try {
    } catch (error) {
      console.log("kgUpdate 에러 : ", error);
    }
  }
  async function minReset() {
    if (!userId) {
      return;
    }
    const response = await urlMinUpdate(userId, resetMin);
    try {
    } catch (error) {
      console.log("minUpdate 에러 : ", error);
    }
  }

  async function checkDevice() {
    try {
      const response = await urlCheckDevice(userId);
      console.log("월드 진입 운동정보 갱신 : ", response.data);
      setDeviceKm(response.data.km);
      setDeviceKg(response.data.kg);
      setDeviceMin(response.data.min);
    } catch (error) {
      console.log("운동정보 갱신 실패 : ", error);
      sendMessage("GameManager", "deviceNotCreated");
    }
  }

  function handleCharacterData(nickName) {
    setCharNickname(nickName);
  }

  function handleGameReady(gameReady) {
    setPlayingGame(true);
  }

  function handleWorldReady() {
    setWorldReady(true);
  }
  function handleExpUpdateData(exp) {
    setExp(exp);
  }

  function handleKmResetData(km) {
    setResetKm(km);
  }
  function handleKgResetData(kg) {
    setResetKg(kg);
  }
  function handleMinResetData(min) {
    setResetMin(min);
  }

  function handleHpUpdateData(newHp) {
    setNewHp(newHp);
  }

  useEffect(() => {
    addEventListener("ExpUpdate", handleExpUpdateData);
    return () => {
      removeEventListener("ExpUpdate", handleExpUpdateData);
    };
  }, [addEventListener, removeEventListener, handleExpUpdateData]);

  useEffect(() => {
    addEventListener("Create", handleCharacterData);
    return () => {
      removeEventListener("Create", handleCharacterData);
    };
  }, [addEventListener, removeEventListener, handleCharacterData]);

  useEffect(() => {
    addEventListener("GameReady", handleGameReady);
    return () => {
      removeEventListener("GameReady", handleGameReady);
    };
  }, [addEventListener, removeEventListener, handleGameReady]);

  useEffect(() => {
    addEventListener("WorldReady", handleWorldReady);
    console.log("포켓월드 시작!");
    return () => {
      removeEventListener("WorldReady", handleWorldReady);
    };
  }, [addEventListener, removeEventListener, handleWorldReady]);

  useEffect(() => {
    addEventListener("kmReset", handleKmResetData);
    return () => {
      console.log("kmReset removed");
      removeEventListener("kmReset", handleKmResetData);
    };
  }, [addEventListener, removeEventListener, handleKmResetData]);

  useEffect(() => {
    addEventListener("kgReset", handleKgResetData);
    return () => {
      console.log("kgReset removed");
      removeEventListener("kgReset", handleKgResetData);
    };
  }, [addEventListener, removeEventListener, handleKgResetData]);

  useEffect(() => {
    addEventListener("minReset", handleMinResetData);
    return () => {
      console.log("minReset removed");
      removeEventListener("minReset", handleMinResetData);
    };
  }, [addEventListener, removeEventListener, handleMinResetData]);

  useEffect(() => {
    addEventListener("HpUpdate", handleHpUpdateData);
    return () => {
      console.log("HpUpdate removed");
      removeEventListener("HpUpdate", handleHpUpdateData);
    };
  }, [addEventListener, removeEventListener, handleHpUpdateData]);

  useEffect(() => {
    getUserId();
    checkDevice();
  }, [playingGame]);

  useEffect(() => {
    if (!worldReady) {
      return;
    }
    sendMessage("userPanel", "GetNickName", charNickname);
    sendMessage("userPanel", "GetHp", characterHp);
    sendMessage("userPanel", "GetLevel", characterLevel);
    sendMessage("GameManager", "kmUpdate", deviceKm);
    sendMessage("GameManager", "kgUpdate", deviceKg);
    sendMessage("GameManager", "minUpdate", deviceMin);
  }, [worldReady]);

  useEffect(() => {
    createCharater();
  }, [charNickname]);

  useEffect(() => {
    charExpUpdate();
  }, [exp]);

  useEffect(() => {
    if (!userId) {
      console.log("userId 없음");
      return;
    }
    kmReset();
  }, [resetKm]);

  useEffect(() => {
    if (!userId) {
      console.log("userId 없음");
      return;
    }
    kgReset();
  }, [resetKg]);

  useEffect(() => {
    if (!userId) {
      console.log("userId 없음");
      return;
    }
    minReset();
  }, [resetMin]);

  useEffect(() => {
    if (!charNickname) {
      console.log("charNickname 없음");
      return;
    }
    hpUpdate();
  }, [newHp]);

  return (
    <>
      <Header></Header>

      <BackGroundImage bgImg={`url("images/background_game.png")`}>
        <GameContainer>
          {
            <Unity
              unityProvider={unityProvider}
              style={{ width: "100%", height: "100%", marginTop: "70px" }}
            />
          }
        </GameContainer>
      </BackGroundImage>
      <Footer></Footer>
    </>
  );
}
