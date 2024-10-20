import axios from "axios";
import Main from "../Pages/Main";
import { useNavigate } from "react-router-dom";

export function urlGetAllAuthority() {
  return axios.get("/api/authority/all");
}
export function urlGetAllUser() {
  return axios.get("/api/user/all");
}
export function urlUserSignUp(signUpData) {
  return axios.post("/api/user/signup", signUpData);
}
export function urlSessionCurrent(header) {
  return axios.get("/api/user/current", header);
}
export function urlJwtLogin(loginData) {
  return axios.post("/api/authenticate", loginData);
}

export function urlPostFreeBoard() {
  return axios.get("/api/post/freeboard");
}
export function urlPostWhatsNew() {
  return axios.get("/api/post/whatsnew");
}

export function urlGetPost(postId) {
  return axios.get(`/api/post/${postId}`);
}

export function urlDeletePost(postId) {
  return axios.delete(`/api/post/delete/${postId}`);
}

export function urlGetGuidePost(id) {
  return axios.get(`/api/Guide/${id}`);
}

export function urlGetPostByText(text) {
  return axios.get(`/api/post/search/${text}`);
}

export function urlPostWrite(postWrite) {
  return axios.post("/api/post/write", postWrite);
}

export function urlJoinDevice(userId) {
  return axios.post(`/api/device/join/${userId}`);
}
export function urlCheckDevice(userId) {
  return axios.get(`/api/device/check/${userId}`);
}

export function urlPlusData(plusUpdate) {
  return axios.post("/api/device/plusdata", plusUpdate);
}

//마이페이지-진경
export function urlGetCharacter(userId) {
  return axios.get(`/api/character/get/${userId}`);
}
//메달 -진경
export function urlGetMedalList() {
  return axios.get("/api/level/medallist");
}

export function urlGetRanking() {
  return axios.get("/api/character/ranklist");
}

// 유니티
export function urlCreateCharacter(characterData) {
  return axios.post("/api/character/create", characterData);
}

export function urlCheckNickNameOverLap(nickName) {
  return axios.get(`/api/character/overlap/${nickName}`);
}

export function urlExpUpdate(nickName, exp) {
  return axios.post(`/api/character/expupdate/${nickName}/${exp}`);
}

export function urlKmUpdate(userId, km) {
  return axios.post(`/api/device/updatekm/${userId}/${km}`);
}
export function urlKgUpdate(userId, kg) {
  return axios.post(`/api/device/updatekg/${userId}/${kg}`);
}
export function urlMinUpdate(userId, min) {
  return axios.post(`/api/device/updatemin/${userId}/${min}`);
}

export function urlHpUpdateByNickname(nickName, newHp) {
  return axios.post(`/api/character/hpupdate/${nickName}/${newHp}`);
}

export function urlGetItemData(charNickName) {
  return axios.get(`/api/itemhistory/getlist/${charNickName}`);
}

export function urlItemUpdate(itemData) {
  return axios.post(`/api/itemhistory/update`, itemData);
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

    window.location.href = "/PocatRush_frontend";
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
