import axios from "axios";
import Main from "../Pages/Main";

export function urlGetAllAuthority() {
  return axios.get("http://localhost:8080/api/authority/all");
}
export function urlGetAllUser() {
  return axios.get("http://localhost:8080/api/user/all");
}
export function urlUserSignUp(signUpData) {
  return axios.post("http://localhost:8080/api/user/signup", signUpData);
}
export function urlSessionCurrent(header) {
  return axios.get("http://localhost:8080/api/user/current", header);
}
export function urlJwtLogin(loginData) {
  return axios.post("http://localhost:8080/api/authenticate", loginData);
}

export function urlPostFreeBoard() {
  return axios.get("http://localhost:8080/api/post/freeboard");
}
export function urlPostWhatsNew() {
  return axios.get("http://localhost:8080/api/post/whatsnew");
}

export function urlGetPost(postId) {
  return axios.get(`http://localhost:8080/api/post/${postId}`);
}

export function urlGetPostByText(text) {
  return axios.get(`http://localhost:8080/api/post/search/${text}`);
}

export function urlPostWrite(postWrite) {
  return axios.post("http://localhost:8080/api/post/write", postWrite);
}

//마이페이지-진경
export function urlGetCharacter(userId) {
  return axios.get(`http://localhost:8080/api/character/get/${userId}`);
}
//메달 -진경
export function urlGetMedalList() {
  return axios.get("http://localhost:8080/api/level/medallist");
}

// 유니티
export function urlNPCLikeUpdate(likeData) {
  return axios.put(`http://localhost:8080/api/like/update`, likeData);
}

export function urlCreateCharacter(characterData) {
  return axios.post(
    "http://localhost:8080/api/character/create",
    characterData
  );
}

export function urlCheckNickNameOverLap(nickName) {
  return axios.get(`http://localhost:8080/api/character/overlap/${nickName}`);
}

export function urlExpUpdate(nickName, exp) {
  return axios.put(
    `http://localhost:8080/api/character/expupdate/${nickName}/${exp}`
  );
}

// 0808 승환 현재로그인상태 테스트
export async function tokenCheck() {
  let tokenData = {};
  let token = localStorage.getItem("JWT-token");
  let header = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  if (token) {
    try {
      let response = await urlSessionCurrent(header);

      console.log("urlSessionCurrent : ", response.data.data);
      tokenData = response.data.data;
    } catch (error) {
      console.log("에러 : ", error);
    }
  } else {
    return null;
  }
  return tokenData;
}

// 0809 승환 로그아웃 테스트
export async function userLogout() {
  if (window.confirm("로그아웃 하시겠습니까?")) {
    // localStorage에서 토큰 삭제
    localStorage.removeItem("JWT-token");

    window.location.href = "/";
    console.log("로그아웃 완료");
  }
  return <></>;
}
