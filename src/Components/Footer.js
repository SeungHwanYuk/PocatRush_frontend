import { useEffect, useState } from "react";
import {
  Form,
  Option,
  Select,
  StyledLink,
  Text,
  Wrapper,
} from "../Style/StyledComponents";
import { NavLink } from "react-router-dom";
import Main from "../Pages/Main";

function Footer() {
  const selectList = [
    "About Us",
    "Yuk SeungHwan",
    "Yoon Byeol",
    "Song JinKyung",
  ];
  const [Selected, setSelected] = useState("");

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  useEffect(() => {
    console.log("Selected : ", Selected);

    if (Selected != "") {
      window.open(Selected);
    }
  }, [Selected]);

  return (
    <>
      <Wrapper
        height={`300px`}
        bgColor={`#242424`}
        al={`center`}
        ju={`center`}
        dr={`column`}
      >
        <Form>
          <Select
            onChange={(e) => {
              setSelected(e.target.value);
            }}
          >
            <Option value={""}>About Us</Option>
            <Option value={"https://github.com/SeungHwanYuk"}>
              Yuk SeungHwan
            </Option>
            <Option value={"https://github.com/star0717"}>Yoon Byeol</Option>
            <Option value={"https://github.com/bobo459"}>Song JinKyung</Option>
          </Select>
        </Form>
        <Text color={`#fff`} margin={`10px 0 0 `}>
          ⓒ 2024. Team TBeaver all rights reserved.
        </Text>
      </Wrapper>
    </>
  );
}

export default Footer;
