import { useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { GameContainer } from "../Style/StyledComponents";

import {
  tokenCheck,
  tokenCheckGetUserId,
  urlCheckNickNameOverLap,
  urlCreateCharacter,
  urlGetCharacter,
  urlNPCLikeUpdate,
} from "../API/api";

export function UnityGame() {
  const { unityProvider, sendMessage, addEventListener, removeEventListener } =
    useUnityContext({
      loaderUrl: "build/PocatRush.loader.js",
      dataUrl: "build/PocatRush.data",
      frameworkUrl: "build/PocatRush.framework.js",
      codeUrl: "build/PocatRush.wasm",
    });

  const [playingGame, setPlayingGame] = useState(false);
  const [worldReady, setWorldReady] = useState(false);

  // 캐릭터만들기
  const [userId, setUserId] = useState("");
  const [charNickname, setCharNickname] = useState("");
  const [profileImage, setProfileImage] = useState("");

  const characterData = {
    charNickName: `${charNickname}`,
    user: `${userId}`,
    profileImage: `${profileImage}`,
  };

  // 캐릭터 정보 관리
  const [character, setCharacter] = useState("");
  const [characterHp, setCharacterHp] = useState("");
  const [characterLevel, setCharacterLevel] = useState("");

  // function handleNPCLikeUpdate(npcName, likeNumber) {
  //   setNPCName(npcName);
  //   setLikeNumber(likeNumber);
  // }

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

  function handleCharacterData(nickName) {
    setCharNickname(nickName);
  }

  function handleGameReady(gameReady) {
    setPlayingGame(true);
  }

  function handleWorldReady() {
    setWorldReady(true);
  }

  async function createCharater() {
    try {
      const checkOverlapResponse = await urlCheckNickNameOverLap(charNickname);
      console.log("checkOverlapResponse : ", checkOverlapResponse.data);
      if (checkOverlapResponse.data == "FOUND") {
        sendMessage("createButton", "nickNameFound");
      } else if (checkOverlapResponse.data == "NOT_FOUND") {
        try {
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

  // async function npcLikeUpdate() {
  //   try {
  //     if (!likeNumber) {
  //       return;
  //     }
  //     let response = await urlNPCLikeUpdate(likeData);
  //   } catch (error) {
  //     console.log("error : ", error);
  //   }
  // }
  // useEffect(() => {
  //   addEventListener("likeCount", handleNPCLikeUpdate);
  //   return () => {
  //     removeEventListener("likeCount", handleNPCLikeUpdate);
  //   };
  // }, [addEventListener, removeEventListener, handleNPCLikeUpdate]);

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
    getUserId();
  }, [playingGame]);

  useEffect(() => {
    sendMessage("userPanel", "GetNickName", charNickname);
    sendMessage("userPanel", "GetHp", characterHp);
    sendMessage("userPanel", "GetLevel", characterLevel);
  }, [worldReady]);

  useEffect(() => {
    createCharater();
  }, [charNickname]);

  return (
    <>
      <h1>PocatRush Test</h1>
      <GameContainer>
        {
          <Unity
            unityProvider={unityProvider}
            style={{ width: "100%", height: "100%" }}
          />
        }
      </GameContainer>
    </>
  );
}
