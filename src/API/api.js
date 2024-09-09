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

export function urlDeletePost(postId) {
  return axios.delete(`http://localhost:8080/api/post/delete/${postId}`);
}

export function urlGetGuidePost(id) {
  return axios.get(`http://localhost:8080/api/Guide/${id}`);
}

export function urlGetPostByText(text) {
  return axios.get(`http://localhost:8080/api/post/search/${text}`);
}

export function urlPostWrite(postWrite) {
  return axios.post("http://localhost:8080/api/post/write", postWrite);
}

export function urlJoinDevice(userId) {
  return axios.post(`http://localhost:8080/api/device/join/${userId}`);
}
export function urlCheckDevice(userId) {
  return axios.get(`http://localhost:8080/api/device/check/${userId}`);
}

export function urlPlusData(plusUpdate) {
  return axios.post("http://localhost:8080/api/device/plusdata", plusUpdate);
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

export function urlKmUpdate(userId, km) {
  return axios.post(
    `http://localhost:8080/api/device/updatekm/${userId}/${km}`
  );
}
export function urlKgUpdate(userId, kg) {
  return axios.post(
    `http://localhost:8080/api/device/updatekg/${userId}/${kg}`
  );
}
export function urlMinUpdate(userId, min) {
  return axios.post(
    `http://localhost:8080/api/device/updatemin/${userId}/${min}`
  );
}

export function urlHpUpdateByNickname(nickName) {
  return axios.put(`http://localhost:8080/api/character/hpupdate/${nickName}`);
}

export function urlItemUpdate(itemData) {
  return axios.post(`http://localhost:8080/api/itemhistory/update`, itemData);
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
    localStorage.removeItem("isAdmin");

    window.location.href = "/";
    console.log("로그아웃 완료");
  }
  return <></>;
}

// 0906 관리자인지 체크 불리언 리턴
// 사용시 useState로 이용바람
export function adminCheck() {
  const checkAdmin = localStorage.getItem("isAdmin");
  if (checkAdmin) {
    console.log("관리자 확인");
    return true;
  } else {
    console.log("관리자가 아님");
    return false;
  }
}
