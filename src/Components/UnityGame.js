import { useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { GameContainer } from "../Style/StyledComponents";

import { tokenCheck, urlCreateCharacter, urlNPCLikeUpdate } from "../API/api";

export function UnityGame() {
  // 리액트 -> 유니티
  const [playingGame, setPlayingGame] = useState(false);
  const { unityProvider, sendMessage, addEventListener, removeEventListener } =
    useUnityContext({
      loaderUrl: "build/PocatRush.loader.js",
      dataUrl: "build/PocatRush.data",
      frameworkUrl: "build/PocatRush.framework.js",
      codeUrl: "build/PocatRush.wasm",
    });

  // 유니티 -> 리액트
  // test
  const [npcName, setNPCName] = useState("");
  const [likeNumber, setLikeNumber] = useState(0);

  // 캐릭터만들기
  const [userId, setUserId] = useState("");
  const [charNickname, setCharNickname] = useState("");
  const [profileImage, setProfileImage] = useState("");

  const likeData = {
    npcName: `${npcName}`,
    liked: `${likeNumber}`,
  };

  const characterData = {
    charNickName: `${charNickname}`,
    user: `${userId}`,
    profileImage: `${profileImage}`,
  };

  function handleNPCLikeUpdate(npcName, likeNumber) {
    setNPCName(npcName);
    setLikeNumber(likeNumber);
  }

  function handleCharacterData(nickName) {
    setCharNickname(nickName);
  }

  async function npcLikeUpdate() {
    try {
      if (!likeNumber) {
        return;
      }
      let response = await urlNPCLikeUpdate(likeData);
    } catch (error) {
      console.log("error : ", error);
    }
  }

  async function createCharater() {
    try {
      const response = await tokenCheck();
      setUserId(response.userId);
      try {
        const responseCreated = await urlCreateCharacter(characterData);
        console.log("urlCreateCharacter : ", responseCreated);
      } catch (error) {
        console.log("urlCreateCharacter 에러 ", error);
      }
    } catch (error) {
      console.log("tokenCheck 에러 : ", error);
    }
  }

  useEffect(() => {
    addEventListener("likeCount", handleNPCLikeUpdate);
    return () => {
      removeEventListener("likeCount", handleNPCLikeUpdate);
    };
  }, [addEventListener, removeEventListener, handleNPCLikeUpdate]);

  useEffect(() => {
    addEventListener("Create", handleCharacterData);
    return () => {
      removeEventListener("Create", handleCharacterData);
    };
  }, [addEventListener, removeEventListener, handleNPCLikeUpdate]);

  useEffect(() => {
    npcLikeUpdate();
  }, [likeNumber]);

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
      {likeNumber && <p>{`♡ : ${likeNumber}...!`}</p>}
    </>
  );
}
