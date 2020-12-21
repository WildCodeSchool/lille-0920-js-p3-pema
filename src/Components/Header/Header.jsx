import Sidebar from "./Sidebar";

import firstImage from "../../assets/images/Header/person.png";
import logo from "../../assets/images/pemalogo.png";

import {
  Main,
  ImageContainer,
  Image,
  Container,
  LogoContainer,
  H1,
  Logo,
} from "../../styled-components/Header";
const Header = () => {
  return (
    <Main>
      <ImageContainer>
        <Image src={firstImage} alt="ok" />
      </ImageContainer>
      <Container>
        <LogoContainer>
          <Logo src={logo} alt="logo pema consulting" />
          <H1>Un voyage inédit au coeur de votre entreprise</H1>
        </LogoContainer>
        <Sidebar />
      </Container>
    </Main>
  );
};

export default Header;
