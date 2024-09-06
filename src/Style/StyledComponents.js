import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const WholeWrapper = styled.div`
  max-width: 1440px;
`;
export const Wrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  min-width: ${(props) => props.minWidth};
  max-width: ${(props) => props.maxWidth};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  display: ${(props) => props.display || `flex`};
  flex-direction: ${(props) => props.dr};
  justify-content: ${(props) => props.ju};
  align-items: ${(props) => props.al};
  align-content: ${(props) => props.alContent};
  flex-wrap: ${(props) => props.wrap || `wrap`};
  background-color: ${(props) => props.bgColor};
  position: ${(props) => (props.isAbsolute ? `absolute` : ``)};
  position: ${(props) => (props.isAbsolute ? `absolute` : ``)};
  position: ${(props) => (props.isFixed ? `fixed` : ``)};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  border: ${(props) => props.border};
  border-bottom: ${(props) => props.borderBottom};
  border-radius: ${(props) => props.radius};
  box-shadow: ${(props) => props.shadow};
  margin: ${(props) => props.margin || `0`};
  padding: ${(props) => props.padding};
  overflow: ${(props) => props.overflow};
  opacity: ${(props) => props.opacity};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  transition: ${(props) => props.transition || `0.3s`};
  background-image: ${(props) => props.bgImg};
  background: ${(props) => props.background};
  overflow-x: ${(props) => props.overflow || `hidden`};
`;

export const Image = styled.img`
  width: ${(props) => props.width || `100%`};
  max-width: ${(props) => props.maxWidth || ``};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin || `0 auto`};
  border: ${(props) => props.border || ``};
`;

export const Text = styled.p`
  margin: ${(props) => props.margin || `0`};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  color: ${(props) => (props.isDark ? `#fff` : ``)};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.bgColor};
  text-align: ${(props) => props.textAlign};
  text-decoration: ${(props) => props.decoration};
  line-height: ${(props) => props.lineHeight};
  cursor: ${(props) => props.cursor};

  &span {
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight};
    color: ${(props) => props.color};
  }

  &:hover {
    color: ${(props) => props.hoverColor || ""};
  }

  @media (max-width: 1440) {
  }
`;

export const PocatRushButton = styled.button`
  width: ${(props) => props.wid || `140px`};
  height: ${(props) => props.hei || `40px`};
  background-color: ${(props) =>
    props.isPink ? `pink` : props.bc ? props.bc : `#242424`};
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 800;
  margin: ${(props) => props.margin || ``};
  transition: 0.2s;

  &:hover {
    background-color: ${(props) => props.hoverBc || `#4a4a4a`};
  }
`;

// Header.js
export const HeaderText = styled.p`
  margin: ${(props) => props.margin || `0`};
  font-size: ${(props) => (props.isSmall ? `14px` : `16px`)};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color || `#fff`};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding || `10px 32px`};
  cursor: pointer;

  @media (max-width: 1440) {
  }
`;

export const HeaderTextBin = styled.p`
  margin: ${(props) => props.margin || `0`};
  font-size: ${(props) => (props.isSmall ? `14px` : `16px`)};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color || `#fff`};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding || `10px 32px`};
`;

// -----------------------------------------------------

// SmallTable.js
export const SmallTableWrapper = styled.table`
  width: 650px;
  display: flex;
  flex-direction: column;
`;

export const SmallTableTr = styled.tr`
  display: flex;
  justify-content: space-between;
  border-bottom: ${(props) =>
    props.isHead ? `2px solid #181818` : `1px solid #ccc`};
  padding: 6px 0;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const SmallTableTh = styled.th``;

export const SmallTableTd = styled.td``;

export const SmallTablePlusButton = styled.button`
  width: 30px;
  height: 30px;
  margin-left: 10px;
  background-color: #fff;
  cursor: pointer;
  border: 1px solid #878787;
  color: #878787;
  transition: 0.2s;
  font-size: 20px;

  &:hover {
    background-color: #242424;
    color: #fff;
  }
`;

// -----------------------------------------------------

// Footer.js
export const Form = styled.form``;

export const Select = styled.select`
  background: transparent;
  width: 160px;
  height: 40px;
  color: #fff;
  text-align: center;

  &:focus {
    outline: none;
  }
`;

export const Option = styled.option`
  color: #000;
`;

// -----------------------------------------------------

// main.js
export const GameStartButton = styled.button`
  width: 200px;
  background-color: darkslateblue;
  color: #fff;
  height: 60px;
  border-radius: 6px 6px 0 0;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  border: 0;
  margin-right: 100px;
  justify-content: flex-end;
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  /* color: ${(props) => props.color || `#000`}; */
  color: ${(props) => (props.isWhite ? `#fff` : `#000`)};
  display: flex;
  flex-direction: ${(props) => props.flexDirection || `column`};
  align-items: ${(props) => props.alignItems || `center`};
  justify-content: ${(props) => props.justifyContent || `center`};
  margin: ${(props) => props.margin || ``};

  transition: 0.2s;

  &:hover {
    color: ${(props) => (props.isHeader ? `#52dcff` : ``)};
  }
  text-decoration: none;
`;

// sub pages

export const SubPageTitleWrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  display: ${(props) => props.display || `flex`};
  height: 300px;
  flex-wrap: wrap;
  margin: 0;
  transition: 0.3s;
  color: #242424;
  align-items: ${(props) => props.al || `center`};
  justify-content: ${(props) => props.ju || `center`};
  flex-direction: ${(props) => props.dir || `column`};

  background-image: ${(props) => props.bgImg};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const SubPageTitle = styled.h1`
  font-size: ${(props) => props.fontSize || `32px`};
  font-weight: ${(props) => props.fontWeight || `800`};
  margin: ${(props) => props.margin || `0`};
  color: ${(props) => props.color || ``};
`;

export const SubPageTitleDesc = styled.h3`
  font-size: 18px;
  font-weight: 400;
  margin: 0;
`;

export const SearchInputWrapper = styled.div`
  width: 200px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  transition: 0.2s;
  margin: ${(props) => props.margin || `100px 0 40px`};

  &:nth-child(2) {
    font-size: 22px;
  }

  &:focus {
    border: 1px solid #181818;
  }
`;

export const SearchInput = styled.input`
  width: 168px;
  height: 36px;
  border: none;
  background: none;

  &:focus {
    outline: none;
  }
`;

export const MainTableWrapper = styled.table`
  width: ${(props) => props.width || ``};
  max-width: 1440px;
  display: flex;
  margin: ${(props) => props.margin || `0 0 100px`};
  flex-direction: column;
`;

export const MainTableTr = styled.tr`
  display: flex;
  justify-content: space-between;
  border-bottom: ${(props) =>
    props.isHead ? `2px solid #181818` : `1px solid #ccc`};
  padding: 6px 0;
  cursor: pointer;
  transition: 0.2s;
  text-align: center;

  &:hover {
    background-color: ${(props) => (props.isHead ? `#fff` : `#f2f2f2`)};
  }
`;

export const MainTableTh = styled.th`
  width: ${(props) => props.width || ``};
`;

export const MainTableTd = styled.td`
  width: ${(props) => props.width || ``};
`;

// join.js

export const JoinInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 500px;
  justify-content: space-between;
  align-items: center;
`;

export const JoinText = styled.p`
  text-align: left;
  font-weight: 800;
  padding-right: 8px;
`;

export const JoinInput = styled.input`
  width: ${(props) => props.width || `400px`};
  height: 40px;
  border: 1px solid #000;
  border-radius: 40px;
  padding: 0 8px;

  &:focus {
    outline: none;
  }
`;

export const JoinSelect = styled.select`
  width: ${(props) => props.width || `418px`};
  height: 42px;
  border: 1px solid #000;
  border-radius: 40px;
  padding: 0 8px;

  &:focus {
    outline: none;
  }
`;

// 관리자

export const AdminButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #242424;
  color: #fff;
  border-radius: 8px;
  border: none;
`;

//글쓰기 - 진경
export const PostWriteWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 500px;
  justify-content: ${(props) => props.justifyContent || `space-between`};
  align-items: center;
`;

export const PostWriteText = styled.p`
  margin: ${(props) => props.margin || ``};
  text-align: left;
  font-weight: 800;
  padding-right: 8px;
`;

export const PostWriteInputTitle = styled.input`
  width: ${(props) => props.width || `400px`};

  height: 40px;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 0 8px;

  &:focus {
    outline: none;
  }
`;

export const PostWriteInputText = styled.input`
  width: ${(props) => props.width || `400px`};
  height: 400px;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 0 8px;

  &:focus {
    outline: none;
  }
`;

//게시글 - 진경
export const MainPostTableTr = styled.tr`
  display: flex;
  justify-content: space-between;
  border-bottom: ${(props) =>
    props.isHead ? `2px solid #929292` : `1px solid #ccc`};
  padding: 6px 0;
  cursor: pointer;
  transition: 0.2s;
  text-align: center;
`;
export const MainPostTableTitleTr = styled.tr`
  display: flex;
  justify-content: space-between;
  border-bottom: ${(props) =>
    props.isHead ? `2px solid #929292` : `1px solid #ccc`};
  border-top: ${(props) =>
    props.isHead ? `2px solid #181818` : `2px solid #4b4b4b`};
  padding: 20px 0;
  cursor: pointer;
  transition: 0.2s;
  text-align: left;
  background-color: #e4e7f0;
  /* margin: 30px 0 0; */
`;

export const PostTableTd = styled.td`
  width: ${(props) => props.width || ``};
  justify-content: space-between;
  text-align: left;
  padding: 0 40px;
`;
export const PostTableTitleTd = styled.tr`
  width: ${(props) => props.width || ``};
  font-size: 30px;
  font-weight: 500;
  margin: 0 40px;
`;

export const MainPostTextTableTr = styled.td`
  display: flex;
  justify-content: space-between;
  border-bottom: ${(props) =>
    props.isHead ? `2px solid #929292` : `1px solid #ccc`};
  padding: 20px 0;
  transition: 0.2s;
  text-align: left;
`;

//글쓰기 버튼 -진경
export const PostWriteButton = styled.button`
  background-color: #c4ddf3;
  border-style: none;
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 10px 10px auto; /* 오른쪽 마진을 auto로 설정 */
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.isHead ? `#fff` : `#56a3ee`)};
    color: #fff;
  }
`;

export const GameContainer = styled.div`
  width: 1344px;
  height: 756px;
  margin: auto;
  border: none;
`;

//마이페이지 -진경
// 닉네임 래퍼
export const NicknameSuffix = styled.span`
  font-size: 20px;
  color: #666;
  margin-left: 10px;
`;
export const MypageNickNameTr = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 50%;
  margin: 20px 0;
`;
export const MypagelevelTr = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  width: 47%;
  /* margin: 20px 0; */
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: nowrap;
`;

// 닉네임
export const MypageNickName = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #333;
`;

// 데이터 항목
export const MypageData = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  background: #fff;
  /* padding: 20px;
  margin: 10px; */
  /* width: 30%; */
  /* text-align: center; */
  font-weight: bold;
  color: #333;
  font-size: 18px;
  padding: 3px;
`;
export const WrapperMypageData = styled.div`
  display: flex;
  justify-content: center; /* 자식 요소를 수평으로 중앙 정렬 */
  align-items: center; /* 자식 요소를 수직으로 중앙 정렬 */
  /* margin: 10px; 위아래 여백 조정 */
  width: 100%; /* 부모 요소의 너비를 기준으로 중앙 정렬을 적용 */
`;

// 기타
export const MypageNickNameSide = styled.div`
  font-size: 1.5em;
  color: #666;
  padding: 10px;
`;

//이미지
export const MadelImage = styled.div`
  display: flex;
  margin: 10px auto;
  margin-bottom: 100px;
`;
//메달 글씨
export const MedalListDiv = styled.div`
  text-align: center;
  margin: 13px;
  font-weight: bold;
  // margin: 0 0 15px 0;
  font-size: 15px;
`;
//메달 이미지
export const MedalListImage = styled.img`
  width: 80px;
  height: 80px;
  // margin: 30px 15px 0 15px;
`;

export const Medalcustomhr = styled.img`
  border: ${(props) => props.border || `0`};
  height: ${(props) => props.height || `1px`};
  background: ${(props) => props.background || `#ccc`};
  margin: ${(props) => props.margin || `auto`};
  width: ${(props) => props.width || `60%`};
  min-width: ${(props) => props.minWidth || `400px`};
`;

// 레벨, 포인트 래퍼
export const MypageDataSuffix = styled.span`
  font-size: 16px;
  color: #666;
  margin-right: 10px;
`;

export const BackGroundImage = styled.div`
  background-size: cover;
  background-image: ${(props) => props.bgImg};
  width: auto;
  height: 1000px;
`;

// 디바이스 타이틀
export const DeviceJoinTitle = styled.h1`
  display: flex;
  align-items: center;
  color: ${(props) => props.fontColor || "#333"};
  font-size: ${(props) => props.fontSize || "32px"};
  font-weight: ${(props) => props.fontWeight || "800"};
  margin: ${(props) => props.margin || "0px 0px 70px 0px"};
`;

//가이드 게시판
export const GuideBoardWrapper = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  justify-content: center;
`;
export const GuideWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px 0;
`;

export const GuidePost = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;

export const GuidePostTitle = styled.h2`
  margin: 10px 0 10px;
  font-size: 18px;
`;

export const GuidePostContent = styled.img`
  width: 200px;
  height: auto;
  margin: 0;
`;

//디바이스 운동기록 등록

export const DiviceText = styled.div`
  display: ${(props) => props.display || `flex`};
  justify-content: ${(props) => props.ju || `center`};
  align-items: ${(props) => props.al || `center`};
  width: ${(props) => props.width || `300px`};
`;
export const DiviceTextWrapper = styled.div`
  display: ${(props) => props.display || `flex`};
  flex-direction: ${(props) => props.dr || `column`};
  justify-content: ${(props) => props.ju};
  align-items: ${(props) => props.al};
  align-content: ${(props) => props.alContent};
`;

export const DiviceWriteInputTitle = styled.input`
  width: ${(props) => props.width || `100px`};
  height: ${(props) => props.height || `30px`};
  border: ${(props) => props.border || `none`};
  border-bottom: ${(props) => props.borderBottom || `1px solid #000`};
  padding: ${(props) => props.padding || `0 8px`};
  margin: ${(props) => props.margin || `0 10px`};
  text-align: ${(props) => props.margin || `center`};
`;

export const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse; /* 테두리 겹침 방지 */
  display: ${(props) => props.display || `flex`};
  flex-direction: ${(props) => props.dr || `column`};
  justify-content: ${(props) => props.ju};
`;

export const TableRow = styled.tr`
  justify-content: ${(props) => props.ju};
`;

export const TableData = styled.td`
  padding: 5px;
  vertical-align: middle; /* 세로 정렬 */
  justify-content: ${(props) => props.ju};
`;

export const InputField = styled.input`
  width: 100px;
  height: 30px;
  border: none;
  border-bottom: 1px solid #dddddd;
  padding: 0 8px;
  margin: 0 10px;
  text-align: center;
`;
