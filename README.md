**Pocat Rush**

> 나의 운동기록으로 게임속 캐릭터를 성장시키는 메타버스 에듀테크 웹게임 페이지

<br>


- README.md 2024-08-06 start

- 추후 계속 업데이트 될 예정입니다.

- 쓰시는 분들은 작성 날짜와 이름을 남겨주세용 ~
<br>



# 프로젝트 소개
<br>

> Pocat Rush는 메타버스(가상현실)과 에듀테크(교육기술)를 포함한 웹 게임입니다. <br>
가상현실과 현실세계의 연결고리를 운동으로 하여금 자연스럽게 연결시키고, <br>
캐릭터의 성장재미와 더불어 유저의 운동욕구를 촉진시킬 수 있습니다.

<br>

개발기간
 - 2024-08-06 ~ 2024-09-23
<br>

팀원 구성

육승환 
ysh54244902@gmail.com 
github.com/SeungHwanYuk
<br>

송진경
rudwlsthd123@naver.com
github.com/bobo459
<br>
<br>

## 기술 스택
<br>

**언어**
- java, c#
  
**back-end**
- 프레임워크 : SpringBoot
- 라이브러리 : LomBok, TomCat, JWT
- ORM : JPA Hibernate


**front-end**
- HTML, CSS, JSX, javaScript
- 라이브러리 : react-icons, react-router-dom, react-unity-webgl, axios, WebGL
- 게임엔진 : Unity



**DB**
- MariaDB, MySQL
- 관리툴 : DBeaver



**Server**
- node.js


**버전 관리**
- Git, GitHub, Unity Hub


**디자인**
- Figma, Ps, Adobe Illustrator, Maya


**개발 환경**
- Windows, IntelliJ, VsCode, PostMan, Maven
- react, styled-component, prettier

<br>

## 프로젝트 구조

```
public
 ┣ build
 ┃ ┣ backup
 ┃ ┣ Build.data
 ┃ ┣ Build.framework.js
 ┃ ┣ Build.loader.js
 ┃ ┣ Build.wasm
 ┃ ┣ PocatRush.data
 ┃ ┣ PocatRush.framework.js
 ┃ ┣ PocatRush.loader.js
 ┃ ┗ PocatRush.wasm
 ┣ images
 ┃ ┗ .
 ┃   .
 ┃   . 
 ┣ favicon.ico
 ┣ index.html
 ┣ manifest.json
 ┗ robots.txt

src
 ┣ API
 ┃ ┗ api.js
 ┣ Components
 ┃ ┣ Footer.js
 ┃ ┣ GameInformation.js
 ┃ ┣ GuidePostData.js
 ┃ ┣ Header.js
 ┃ ┣ LineRider.js
 ┃ ┣ Popup.js
 ┃ ┣ Profile.js
 ┃ ┣ ScrollToTop.js
 ┃ ┣ SmallTable.js
 ┃ ┗ UnityGame.js
 ┣ Pages
 ┃ ┣ Admin.js
 ┃ ┣ BoardWrapper.js
 ┃ ┣ Community.js
 ┃ ┣ DeviceJoin.js
 ┃ ┣ DeviceWrapper.js
 ┃ ┣ FindAccess.js
 ┃ ┣ FirstTest.js
 ┃ ┣ GameIntro.js
 ┃ ┣ Guide.js
 ┃ ┣ GuidePost.js
 ┃ ┣ GuideWrapper.js
 ┃ ┣ Join.js
 ┃ ┣ Login.js
 ┃ ┣ Main.js
 ┃ ┣ MyPage.js
 ┃ ┣ Post.js
 ┃ ┣ PostWrite.js
 ┃ ┣ Ranking.js
 ┃ ┗ WhatsNew.js
 ┣ Style
 ┃ ┗ StyledComponents.js
 ┣ App.css
 ┣ App.js
 ┣ index.css
 ┗ index.js
```

## 폴더 구조
<br>

**1. API**

>백엔드의 API모음
><br>
>수많은 axios를 손쉽게 수정하고 import 할 수 있도록 설계함

<br>

**2. Components**

>페이지 안에 들어가는 구조물
><br>
>반복되는 컨텐츠를 재사용하는데 용이하기 위함

<br>

**3. Pages**

>컨텐츠를 감싸고 있으며 실제 사용자에게 보이는 화면

<br>

**4. Style**

>버튼, 타이틀과 같이 재사용 되는 요소의 모음, 전역 스타일링과 컴포넌트 스타일링으로 나뉨

<br>

**5. Build**

>유니티 빌드파일 구역. 정적인 public에서 직접 로드하며 UnityContext로 컴포넌트 및 스타일링 가능
><br>
>빌드파일의 React.jslib를 이용하여 SendMessage로 게임 내의 함수 호출이 가능함
<br>



## ERD
<br>

![DW2차프로젝트 (2)](https://github.com/user-attachments/assets/27bdcc98-31c0-4df2-a534-bf6f73c7478f)

<br>

# 역할 분담
<br>

### 육승환

데이터 정제 및 정규화

ERD 제작

전체 게임 설계 및 c# 코드구현

전체 퍼블리싱, 리팩토링

백엔드
- ERD기반 엔티티 구조 설계
- RestAPI 설계 및 관리
- DB 서버구축, 데이터 저장 및 관리
  - 유저 회원가입 및 JWT로그인 구현
  - 커뮤니티 게시글 관리 및 삭제 (관리자 권한 부여)
  - 랭킹 시스템 구현
  - 디바이스(스마트기기) 생성 및 정보 저장, 관리
  - 캐릭터 정보 저장
  - 레벨 기능 구현
  - 아이템 기능 구현

<br>

프론트엔드
- 기능 구현
  - 헤더
  - 아이디, 캐릭터 유효성 검사
  - 캐릭터 랭킹
  - 회원가입, 로그인, 로그아웃
  - 게시글 삭제
  - 디바이스 운동량 추가
    
<br>

- 페이지 제작
  - 게임
  - 랭킹
  - 기기 관리
  - 메인페이지 유저정보창
  
<br>

### 송진경









===============================================================================

# Pocat Rush 실행 가이드북
><br>

### 1. 실행에 필요한 프로그램
><br>

IDE (IntelliJ, Eclipse, VSCode 등)
<br>
node.js (npm)
<br>
MariaDB
<br>
DB툴 (DBeaver 추천)
<br>

<br>

### 2. DB세팅


<br>

2-1. MariaDB를 설치해주세요.

<br>

2-2. DB를 생성 해주세요.
<br>

>DB툴을 실행하고 New DataBase Connetion > MariaDB 선택 > Authentication 탭의 Username과 Password를 새로 적어주세요.

<br>

2-3. IDE에서 PocatRush_backend 폴더를 열고 application.properties를 수정 해주세요.
<br>

>jdbc:mariadb://*localhost:[????]* <- 2번항목의 localhost번호로 수정
><br>
>spring.datasource.*username=root* <- 2번 항목의 Username
><br>
>spring.datasource.*password=root*  <- 2번 항목의 Password를 각각 수정
<br>

2-4. 백엔드 java파일을 받아주세요.

>https://github.com/SeungHwanYuk/PocatRush_backend
>백엔드와 프론트엔드의 독립성을 위하여 따로 관리합니다.


> PocatRushApplication 실행

20240807 React Icon 설치

npm install react-icons --save => 터미널에 입력 후 설치 뒤 사용

사용예시)

import { FaBeer } from 'react-icons/fa';

class Question extends React.Component {
render() {
return <FaBeer />
}
}

참고 자료

https://react-icons.github.io/react-icons/

따로 svg, 이미지 작업 필요 없이 바로 사용 가능
