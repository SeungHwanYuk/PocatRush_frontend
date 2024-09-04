import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import {
  Image,
  StyledLink,
  SubPageTitle,
  SubPageTitleDesc,
  SubPageTitleWrapper,
  Wrapper,
} from "../Style/StyledComponents";
import { useEffect, useState } from "react";
import { urlGetGuidePost } from "../API/api";
import guidePosts from "../Components/GuidePostData";

function GuidePost() {
  const [imageUrl, setImageUrl] = useState(""); // 이미지 URL 상태
  const { id } = useParams();

  useEffect(() => {
    // id가 변경될 때마다 해당 게시글을 찾고 이미지 URL을 설정
    const post = guidePosts.find(post => post.id == id); 
    if (post) {
      setImageUrl(post.imageUrl || ""); // 해당 게시글의 imageUrl 상태로 설정
    }
  }, [id]);

  return (
    <>
      <Header />
      <StyledLink to={"/Guide"}>
      <SubPageTitleWrapper bgImg={`url("../images/subBanner02.png")`}>
        <SubPageTitle>가이드</SubPageTitle>
        <SubPageTitleDesc>
          포켓러쉬 월드에 대해 알아갈 수 있어요.
        </SubPageTitleDesc>
        
      </SubPageTitleWrapper>
      </StyledLink>
      {imageUrl && <Image src={imageUrl} alt="Guide Image" />} {/* imageUrl이 설정된 경우에만 렌더링 */}

      <Footer />
    </>
  );
}

export default GuidePost;
