import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { AdminButton, Image, Wrapper } from "../Style/StyledComponents";

function Admin() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Wrapper padding={`100px 0px `}>
        <Image src="../images/adminCat.png" width={`400px`} />
      </Wrapper>
      <Wrapper dr={`column`}>
        <Wrapper ju={`center`}>
          <AdminButton>회원관리</AdminButton>
        </Wrapper>
        <Wrapper padding={`20px 0 200px`} ju={`center`}>
          <AdminButton onClick={()=> navigate("/Community")}>게시글관리</AdminButton>
        </Wrapper>
      </Wrapper>
      <Footer />
    </>
  );
}

export default Admin;
