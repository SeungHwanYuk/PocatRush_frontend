**Pocat Rush**

> 나의 운동기록으로 게임속 캐릭터를 성장시키는 메타버스 에듀테크 웹게임 페이지

<br>


- README.md 2024-08-06 start

- 추후 계속 업데이트 될 예정입니다.

- 쓰시는 분들은 작성 날짜와 이름을 남겨주세용 ~
<br>



# 프로젝트 소개
<br>

> Pocat Rush는 메타버스(가상현실)과 에듀테크(교육기술)를 포함한 웹 게임으로써
가상현실과 현실세계의 연결고리를 운동으로 하여금 자연스럽게 연결시키고
캐릭터의 성장재미와 더불어 유저의 운동욕구를 촉진시킬 수 있습니다.

<br>

1. 개발기간
 - 2024-08-06 ~ 2024-09-23
<br>

2. 팀원 구성

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
<br>

1. **언어**
- java, c#

**back-end**
- 프레임워크 : SpringBoot
- 라이브러리 : LomBok, TomCat, JWT
- ORM : JPA Hibernate

**front-end**
- HTML, CSS, JSX, javaScript
- 라이브러리 : react-icons, react-router-dom, react-unity-webgl, axios
- 게임엔진 : Unity, WebGL

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


### 프로젝트 구조

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

**폴더 구조**

1. API

백엔드의 API모음

수많은 axios를 손쉽게 수정하고 import 할 수 있도록 설계함

2. Components

페이지 안에 들어가는 구조물

반복되는 컨텐츠를 재사용하는데 용이하기 위함

3.Pages

컨텐츠를 감싸고 있으며 실제 사용자에게 보이는 화면

4.Style

버튼, 타이틀과 같이 재사용 되는 요소의 모음, 전역 스타일링과 컴포넌트 스타일링으로 나뉨

5. build

유니티 빌드파일 구역. 정적인 public에서 직접 로드하며 UnityContext로 컴포넌트 및 스타일링 가능

빌드파일의 React.jslib를 이용하여 SendMessage로 게임 내의 함수 호출이 가능함




#### ERD
<br>
![DW2차프로젝트 (1)](https://github.com/user-attachments/assets/16dfb95a-1744-4174-a20d-e41d679c09bd)





===============================================================================

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
