import { useEffect, useState } from "react";
import { urlGetRanking } from "../API/api";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import {
  Card,
  CardContainer,
  CardContent,
  CardImage,
  CardText,
  CardTitle,
  RankingWrapper,
  StyledLink,
  SubPageTitle,
  SubPageTitleDesc,
  SubPageTitleWrapper,
  Title,
  Wrapper,
} from "../Style/StyledComponents";
import { FaTrophy } from "react-icons/fa";
import styled from "styled-components";

function Ranking() {
  const [ranking, setRanking] = useState("");

  async function getRankList() {
    try {
      const response = await urlGetRanking();
      console.log("랭크 리스트 : ", response.data);
      setRanking(response.data);
    } catch (error) {
      console.log("랭킹 불러오기 에러 : ", error);
    }
  }

  const getMedalColor = (rank) => {
    switch (rank) {
      case 1:
        return "#ffd700";
      case 2:
        return "#c0c0c0";
      case 3:
        return "#cd7f32";
      default:
        return "#4a5568";
    }
  };

  useEffect(() => {
    getRankList();
  }, []);

  return (
    <>
      <Wrapper>
        <Header />
        <SubPageTitleWrapper bgImg={`url("../images/subBanner01.png")`}>
          <StyledLink to={"/ranking"}>
            <SubPageTitle>랭킹</SubPageTitle>
            <SubPageTitleDesc>
              매일 바뀌는 나의 실시간 랭킹을 확인해보세요!
            </SubPageTitleDesc>
          </StyledLink>
        </SubPageTitleWrapper>
        <Wrapper alContent={`center`} ju={`center`} al={`center`}>
          <RankingWrapper>
            <CardContainer>
              {ranking &&
                ranking.map((character) => (
                  <Card key={character.rank} $top3={character.rank <= 3}>
                    <div style={{ position: "relative" }}>
                      <CardImage
                        src={character.levelImage}
                        alt={character.charNickName}
                        $top3={character.rank <= 3}
                      />
                      {character.rank <= 3 && (
                        <FaTrophy
                          style={{
                            position: "absolute",
                            top: "0.5rem",
                            right: "0.5rem",
                            fontSize: "2.5rem",
                            color: getMedalColor(character.rank),
                          }}
                        />
                      )}
                    </div>
                    <CardContent>
                      <CardTitle $top3={character.rank <= 3}>
                        {character.charNickName}
                      </CardTitle>
                      <CardText
                        $top3={character.rank <= 3}
                        style={{
                          color: getMedalColor(character.rank),
                          fontWeight: "bold",
                        }}
                      >
                        {character.rank === 1
                          ? "1위"
                          : character.rank === 2
                          ? "2위"
                          : character.rank === 3
                          ? "3위"
                          : `${character.rank}위`}
                      </CardText>
                      <CardText $top3={character.rank <= 3}>
                        EXP: {character.exp}
                      </CardText>
                    </CardContent>
                  </Card>
                ))}
            </CardContainer>
          </RankingWrapper>
        </Wrapper>
        <Footer />
      </Wrapper>
    </>
  );
}
export default Ranking;
