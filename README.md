# README.md 2024-08-06 윤별 작성

## 추후 계속 업데이트 될 예정입니다.

## 쓰시는 분들은 작성 날짜와 이름을 남겨주세용 ~

### 1.폴더 구조

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
