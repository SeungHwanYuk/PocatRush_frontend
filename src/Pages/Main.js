import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import GameInformation from "../Components/GameInformation";
import Header from "../Components/Header";
import Profile from "../Components/Profile";
import SmallTable from "../Components/SmallTable";
import {
  GameStartButton,
  Image,
  SmallTableTd,
  SmallTableTr,
  SmallTableWrapper,
  StyledLink,
  Text,
  Wrapper,
} from "../Style/StyledComponents";

function Main() {
  return (
    <>
      <Header />
      <Wrapper ju={`center`} al={`flex-end`} dr={`column`}>
        <Image src="/images/testBanner.png" />
        <Wrapper dr={`column`} al={`flex-end`} isAbsolute top={`32%`}>
          <GameStartButton>GAME START</GameStartButton>
          <Profile />
        </Wrapper>
      </Wrapper>
      <SmallTable />
      <GameInformation />

      <Footer />
    </>
  );
}

export default Main;
