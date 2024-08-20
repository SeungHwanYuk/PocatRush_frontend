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

  @media (max-width: 1440) {
  }
`;

export const PocatRushButton = styled.button`
  width: 140px;
  height: 40px;
  background-color: ${(props) => (props.isPink ? `pink` : `#242424`)};
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 800;
  margin: ${(props) => props.margin || ``};
  transition: 0.2s;

  &:hover {
    background-color: #4a4a4a;
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

  transition: 0.2s;

  &:hover {
    color: ${(props) => (props.isHeader ? `#52dcff` : ``)};
  }
  text-decoration: none;
`;

// sub pages

export const SubPageTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 300px;
  flex-wrap: wrap;
  margin: 0;
  /* margin-top: 160px; */
  transition: 0.3s;
  /* background-color: #242424; */
  color: #242424;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-image: ${(props) => props.bgImg};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const SubPageTitle = styled.h1`
  font-size: 32px;
  font-weight: 800;
  margin: 0;
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
  justify-content: space-between;
  align-items: center;
`;

export const PostWriteText = styled.p`
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
