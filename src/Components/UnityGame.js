import { useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { GameContainer } from "../Style/StyledComponents";

import { urlNPCLikeUpdate } from "../API/api";

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
  const [npcName, setNPCName] = useState("");
  const [likeNumber, setLikeNumber] = useState(0);
  // const [userId, setUserId] = useState("");
  const likeData = {
    npcName: `${npcName}`,
    liked: `${likeNumber}`,
  };

  function handleNPCLikeUpdate(npcName, likeNumber) {
    setNPCName(npcName);
    setLikeNumber(likeNumber);
  }

  async function npcLikeUpdate() {
    try {
      let response = await urlNPCLikeUpdate(likeData);
    } catch (error) {
      console.log("error : ", error);
    }
  }

  useEffect(() => {
    addEventListener("likeCount", handleNPCLikeUpdate);
    return () => {
      removeEventListener("likeCount", handleNPCLikeUpdate);
    };
  }, [addEventListener, removeEventListener, handleNPCLikeUpdate]);

  useEffect(() => {
    npcLikeUpdate();
  }, [likeNumber]);
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
