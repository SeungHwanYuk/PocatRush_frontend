import { Unity, useUnityContext } from "react-unity-webgl";
import { BackGroundImage, GameContainer } from "../Style/StyledComponents";

export function LineRider() {
  const { unityProvider, sendMessage, addEventListener, removeEventListener } =
    useUnityContext({
      loaderUrl: "build/Build.loader.js",
      dataUrl: "build/Build.data",
      frameworkUrl: "build/Build.framework.js",
      codeUrl: "build/Build.wasm",
    });
  return (
    <>
      <GameContainer>
        {
          <Unity
            unityProvider={unityProvider}
            style={{
              width: "100%",
              height: "100%",
              marginTop: "70px",
              boxShadow: "0px 0px 20px #888",
            }}
          />
        }
      </GameContainer>
    </>
  );
}
