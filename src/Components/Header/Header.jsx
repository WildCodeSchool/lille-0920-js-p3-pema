import firstImage from "../../assets/images/Header/person.png";
import logo from "../../assets/images/pemalogo.png";

import {
  Main,
  ImageContainer,
  Image,
  Container,
  Nav,
  LogoContainer,
  H1,
  Logo,
  Ul,
} from "../../styled-components/Header";
const Header = () => {
  return (
    <Main>
      <ImageContainer>
        <Image src={firstImage} alt="ok" />
      </ImageContainer>
      <Container>
        <Nav>
          <Ul>
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
          </Ul>
        </Nav>
        <LogoContainer>
          <Logo src={logo} alt="logo pète samer" />
          <H1>Un voyage inédit au coeur de votre entreprise</H1>
        </LogoContainer>
      </Container>
    </Main>
  );
};

export default Header;
