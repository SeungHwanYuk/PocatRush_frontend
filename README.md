**Pocat Rush**

> 나의 운동기록으로 게임속 캐릭터를 성장시키는 메타버스 에듀테크 웹게임 페이지

<br>


- README.md 2024-08-06 start

- 추후 계속 업데이트 될 예정입니다.

- 쓰시는 분들은 작성 날짜와 이름을 남겨주세용 ~
<br>



# 프로젝트 소개
<br>

> [!NOTE]
> Pocat Rush는 메타버스(가상현실)과 에듀테크(교육기술)를 포함한 웹 게임입니다. <br>
가상현실과 현실세계의 연결고리를 운동으로 하여금 자연스럽게 연결시키고, <br>
캐릭터의 성장재미와 더불어 유저의 운동욕구를 촉진시킬 수 있습니다.

<br>

**개발기간**
 - 2024-08-06 ~ 2024-09-23
<br>

**팀원 구성**

|육승환|송진경|
| --- | --- |
|![profile02](https://github.com/user-attachments/assets/87382ce5-5370-4381-b783-f35f75ebf31d)|![profile03](https://github.com/user-attachments/assets/01187408-d9a4-4ce5-a676-544cc8a682d7)|
|ysh54244902@gmail.com | rudwlsthd123@naver.com | 
|[github.com/SeungHwanYuk](https://github.com/SeungHwanYuk)|[github.com/bobo459](https://github.com/bobo459)|


<br>
<br>

## 기술 스택
<br>

**언어**
- java, c#
  
**back-end**
- 프레임워크 : SpringBoot
- 라이브러리 : LomBok, TomCat(WAS), JWT
- ORM : JPA Hibernate


**front-end**
- HTML, CSS, JSX, javaScript
- 라이브러리 : react-icons, react-router-dom, react-unity-webgl, axios, WebGL
- 게임엔진 : Unity
- 런타임환경 : node.js



**DB**
- MariaDB
- 관리툴 : DBeaver



**Server**
- NginX (WS)


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

📂public
 ┣ 📂build
 ┣ 📂images
📂src
 ┣ 📂API
 ┣ 📂Components
 ┣ 📂Pages
 ┗ 📂Style

```
---

<details>
 <br>
    <summary>자세히 보기</summary>
    <br>

```
📂public
 ┣ 📂build
 ┃ ┣ backup
 ┃ ┣ Build.data
 ┃ ┣ Build.framework.js
 ┃ ┣ Build.loader.js
 ┃ ┣ Build.wasm
 ┃ ┣ PocatRush.data
 ┃ ┣ PocatRush.framework.js
 ┃ ┣ PocatRush.loader.js
 ┃ ┗ PocatRush.wasm
 ┣ 📂images
 ┃ ┗ .
 ┃   .
 ┃   . 
 ┣ favicon.ico
 ┣ index.html
 ┣ manifest.json
 ┗ robots.txt

📂src
 ┣ 📂API
 ┃ ┗ api.js
 ┣ 📂Components
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
 ┣ 📂Pages
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
 ┣ 📂Style
 ┃ ┗ StyledComponents.js
 ┣ App.css
 ┣ App.js
 ┣ index.css
 ┗ index.js
```
</details>


---

<br>

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

<br>

*데이터 정제 및 정규화*

*ERD 제작*

*전체 게임 설계 및 제작*

*전체 퍼블리싱, 리팩토링*

<br>

#### 백엔드 [ java ]
- ERD기반 엔티티 구조 설계
- Dto 구조 설계
- RestAPI 설계 및 관리
- DB 서버구축, 데이터 저장 및 관리
  - 유저 회원가입 및 JWT로그인 구현
  - 커뮤니티 게시글 관리 및 삭제 (관리자 권한 부여)
  - 랭킹 시스템 구현
  - 디바이스(스마트기기) 생성 및 정보 저장, 관리
  - 게임 저장

<br>

#### 프론트엔드 [ javaScript, css, html, JSX ]
- 기능 구현
  - 헤더
  - 아이디, 캐릭터 유효성 검사
  - 캐릭터 랭킹, 레벨 표시
  - 회원가입, 로그인, 로그아웃
  - 관리자 기능 구현 (게시글 관리, 회원 관리)
  - 디바이스 운동량 추가
  - Routes 구조 설계

- 페이지 제작
  - 게임 플레이
  - 랭킹
  - 기기 관리
  - 메인페이지 유저정보창
  - 관리자 페이지
  
<br>

#### 웹 게임 [ c# ]
  - 캐릭터 생성 및 플레이 정보 저장
  - 경험치 획득 및 레벨업
  - 아이템 획득 및 기능 구현
  - NPC 대화 다이얼로그
  - UI 및 플레이 시점(3인칭, 마우스 회전, 이동) 설계
  - 애니메이션 기능 구현
  - 이벤트 구현
  - 최적화 (조명 및 그림자, 텍스쳐)

---

<br>

### 송진경

<br>

#### 백엔드 [ java ]
  - 마이페이지 메달 정보
  - 커뮤니티 게시판 데이터 관리 및 작성

<br>

#### 프론트엔드 [ javaScript, css, html, JSX ]
- 기능 구현
  - 마이페이지
  - 커뮤니티
  - 디바이스 운동량 틀

- 페이지 제작
  - 랭킹 배치
  - 디바이스
  - 가이드 및 가이드 내용 디자인
  - 게시판
  - 마이페이지

  <br>

#### 웹 게임 [ c# ]
  - 전체 3D 총괄
    - 배경 구조 디자인
    - 건물 재배치 및 수정
    - NPC 캐릭터 디자인 및 제작
  - NPC 캐릭터 애니메이션
  - 게임 UI

---

<br>


# 페이지 소개

<br>

**[회원가입]** 
> */join*


![sinup](https://github.com/user-attachments/assets/6d19151f-9320-4ff6-aad8-6ab69be3aad2)

- 기본정보 입력 후 회원가입을 합니다.

<br>
<br>
<br>

**[가이드]**
>*/guide*

![guide](https://github.com/user-attachments/assets/bbe6e7f0-daed-4b08-a1eb-4018cb484157)


- 게임 내용 소개 및 공략 페이지입니다.

<br>
<br>
<br>

**[커뮤니티]**
>*/community* <br>
>*/whatsnew*

![what](https://github.com/user-attachments/assets/ce065d3c-8f42-4974-a28d-028380b70713)

- 게시판은 유저 모두가 이용할 수 있습니다.
- What`s New는 공지사항을 작성할 수 있으며, 관리자 권한으로만 작성 및 삭제가 가능합니다.

<br>
<br>
<br>


**[디바이스 등록]** 
> */login* <br>
> */devicejoin/{userId}*

![Device](https://github.com/user-attachments/assets/cefe8bae-0a78-4276-a546-c55776c6830f)

- 로그인 후 스마트워치와 연동 여부를 체크합니다.
- 기기가 없다면 자동으로 생성함으로 연동을 완료합니다.
- 운동량 직접 입력 할 수 있습니다. (실제 운동량을 채웠다는 가정)

<br>
<br>
<br>



**[게임 실행]**
> */playgame*



https://github.com/user-attachments/assets/325e2561-2962-4019-ac77-0c6b84dd75da



- 마이페이지 메달(도전과제) 현황과 캐릭터 생성시 닉네임을 체크합니다.

<br>
<br>
<br>

**[플레이 - NPC 상호작용]**


https://github.com/user-attachments/assets/798bb8f7-2bc4-4a2f-be31-86029a4fc645

- `Main NPC`와 대화할 수 있습니다.
- 여러번 대화시 짜증을 내며, 아이템을 지급하는 이벤트를 구현했습니다.

<br>


https://github.com/user-attachments/assets/0257d0ac-7670-42a6-9cf5-d2c72bd46533

- `Fitness NPC`는 UI를 직접 클릭하는 방식이고, 대화 선택지를 구현했습니다.
- 컨텐츠 이용방법과 간단한 튜토리얼을 제공합니다.

<br>
<br>
<br>

**[플레이 - HP부족]**

https://github.com/user-attachments/assets/597af20b-44e0-4382-9b6f-45a36b406a54

- 과도한 운동시 캐릭터가 지치며 이동속도가 느려집니다.
- 좌측 상단의 아이템 버튼을 누르면 체력을 회복합니다.

<br>
<br>
<br>

**[윙키]**

https://github.com/user-attachments/assets/6e09d3a7-6e4d-48f9-8ff3-b7dc4c0da5ec




<br>





# Pocat Rush 실행 방법

<br>

### 1. 실행에 필요한 프로그램
---
<br>

NginX

<br>

인터넷 브라우저 (크롬 추천)

<br>


### 2. 프록시 연결
---

<br>

2-1. nginx.conf 파일을 수정해주세요.

>서버블록의 root를 \GitHub\PocatRush_frontend\build 가 있는 위치로 수정

<br>
<br>

2-2. 터미널을 켜고 nginx를 실행시켜주세요.

>\GitHub\PocatRush_frontend\nginx-1.26.2 폴더에서 우클릭 - 터미널에서 열기 후 아래의 코드 입력
>- start nginx

<br>
<br>

2-3. 백엔드 jar 파일을 실행시켜주세요.

>https://github.com/SeungHwanYuk/PocatRush_backend
>
>target 폴더에서 우클릭 - 터미널에서 열기 후 아래의 코드 입력
>
>- java -jar PocatRush-0.0.1-SNAPSHOT.jar

<br>
<br>

### 3. 실행
---

>- 브라우저 실행 후 주소창에 본인IP + :81 입력후 엔터
>
>- 실행완료 !

<br>

### etc. *수정사항 빌드법 (개발자용)*

<br>

> [!NOTE]
>젠킨스를 이용한 포워딩 필요!

- 리액트 빌드
- NginX 재시작
- 백엔드 코드 빌드
- jar파일을 java로 실행

<br>

## 로컬 실행법 (개발자용)

### 1. 실행에 필요한 프로그램
---
<br>

IDE (IntelliJ, Eclipse, VSCode 등)
<br>

node.js (npm)
<br>

MariaDB
<br>

DB툴 (DBeaver 추천)
<br>

인터넷 브라우저 (크롬 추천)
<br>

### 2. DB 생성, 로컬 서버 생성
---
<br>

2-1. MariaDB를 설치해주세요.

<br>
<br>

2-2. DB를 생성 해주세요.
<br>
<br>

>[!TIP]
>utf8mb4로 설정해야 sql 등록시 한글이 깨지지 않음

>DB툴을 실행하고 New DataBase Connetion - MariaDB 선택 - Authentication 박스 안의 Username과 Password 설정
><br>
>
>만들어진 localhost 게이트에 Create New DataBase 클릭 <br>
>- DataBase Name : pocat_rushdb <br>
>- Charset : utf8mb4 <br>
>- Colliation : utf8mb4_general_ci <br>


<br>
<br>

2-3. 백엔드 java파일을 받아주세요.

> [!TIP]
>백엔드와 프론트엔드의 독립성을 위하여 따로 관리함

>- https://github.com/SeungHwanYuk/PocatRush_backend


<br>
<br>

2-4. application.properties를 수정 해주세요.
<br>

>IDE에서 PocatRush_backend 폴더를 열고, <br>
>PocatRush_backend/src/main/resources 안에 있는 application.properties를
>- jdbc:mariadb://*localhost:[3306]* <- 2-2번 단계의 localhost번호로 수정
>- spring.datasource.*username=root* <- 2-2번 단계의 Username,
>- spring.datasource.*password=root*  <- 2-2번 단계의 Password를 각각 수정 후 저장

<br>
<br>

2-5. 호스트 서버를 열고 엔티티를 생성 해주세요.
<br>

> IDE에서 PocatRush_backend 폴더의 PocatRushApplication 실행

<br>
<br>

2-6. 생성된 엔티티에 dump파일을 restore 해주세요.

> [!TIP]
> 새로고침(F5)으로 엔티티와 데이터가 정상적으로 등록 되었는지 확인.

>PocatRush_backend/dumpDB 폴더내부에 최신날짜 dump-PocatRush.sql 파일을 <br>
> DB툴에서 2-2번에서 생성한 pocat_rushdb를 찾아 [우클릭 - Tools - Restore database를 선택 후 input 박스의 sql파일에 등록] 후 Start 클릭.<br>
>


<br>

### 3. 웹 서버 생성
---
<br>

3-1. node.js를 설치 해주세요.
<br>
<br>

3-2. npm을 설치 해주세요.
<br>

>VS code에서 PocatRush_frontend 폴더를 열고 터미널 열기 *( ctrl + ` )*
>
>터미널에 입력 후 설치
>- npm install <br>
>- npm install react-icons --save <br>
<br>

### 4. 실행
---
<br>

>터미널에 입력
>- npm start
>
>브라우저가 열리며 페이지 이용가능 !
<br>

---





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
