- README.md 2024-08-06 start

- 추후 계속 업데이트 될 예정입니다.

- 쓰시는 분들은 작성 날짜와 이름을 남겨주세용 ~


Pocat Rush

나의 운동기록으로 게임속 캐릭터를 성장시키는 메타버스 에듀테크 웹게임 페이지

# 프로젝트 소개

Pocat Rush는 메타버스(가상현실)과 에듀테크(교육기술)를 포함한 웹 게임으로써
가상현실과 현실세계의 연결고리를 운동으로 하여금 자연스럽게 연결시키고
캐릭터의 성장재미와 더불어 유저의 운동욕구를 촉진시킬 수 있습니다.

1-1 개발기간
 2024-08-06 ~ 2024-09-23

1-2 팀원 구성

육승환 
ysh54244902@gmail.com 
github.com/SeungHwanYuk

송진경
rudwlsthd123@naver.com
github.com/bobo459

## 기술 스택

언어 
- java, c#

back-end
- 프레임워크 : SpringBoot
- 라이브러리 : LomBok, TomCat, JWT
- ORM : JPA Hibernate

front-end
- HTML, CSS, JSX, javaScript
- 라이브러리 : react-icons, react-router-dom, react-unity-webgl, axios
- 게임엔진 : Unity, WebGL

DB
- MariaDB, MySQL
- 관리툴 : DBeaver

Server
- node.js

버전 관리
-Git, GitHub, Unity Hub

디자인
- Figma, Ps, Adobe Illustrator, Maya

개발 환경
- Windows, IntelliJ, VsCode, PostMan, Maven
- react, styled-component, prettier

├── README.md
├── .eslintrc.js
├── .gitignore
├── .prettierrc.json
├── package-lock.json
├── package.json
│
├── public
│    └── index.html
└── src
     ├── App.jsx
     ├── index.jsx
     ├── api
     │     └── mandarinAPI.js
     ├── asset
     │     ├── fonts
     │     ├── css_sprites.png
     │     ├── logo-404.svg
     │     └── logo-home.svg
     │          .
     │          .
     │          .
     ├── atoms
     │     ├── LoginData.js
     │     └── LoginState.js
     ├── common
     │     ├── alert
     │     │     ├── Alert.jsx
     │     │     └── Alert.Style.jsx
     │     ├── button
     │     ├── comment
     │     ├── inputBox
     │     ├── post
     │     ├── postModal
     │     ├── product
     │     ├── tabMenu
     │     ├── topBanner
     │     └── userBanner
     ├── pages
     │     ├── addProduct
     │     │     ├── AddProduct.jsx
     │     │     └── AddProduct.Style.jsx
     │     ├── chatList
     │     ├── chatRoom
     │     ├── emailLogin
     │     ├── followerList
     │     ├── followingList
     │     ├── home
     │     ├── join
     │     ├── page404
     │     ├── postDetail
     │     ├── postEdit
     │     ├── postUpload
     │     ├── productEdit
     │     ├── profile
     │     ├── profileEdit
     │     ├── profileSetting
     │     ├── search
     │     ├── snsLogin
     │     └── splash
     ├── routes
     │     ├── privateRoutes.jsx
     │     └── privateRoutesRev.jsx  
     └── styles
           └── Globalstyled.jsx








A.폴더 구조

1.Components

페이지 안에 들어가는 구조물

반복되는 컨텐츠를 재사용하는데 용이하기 위함

2.Pages

컨텐츠를 감싸고 있으며 실제 사용자에게 보이는 화면

3.Style

버튼, 타이틀과 같이 재사용 되는 요소의 모음, 전역 스타일링과 컴포넌트 스타일링으로 나뉨

4.Test

각 작업자들의 테스트를 위한 페이지

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
