import Sidebar from "./Sidebar";

import logo from "../../assets/images/pemalogo.png";

import {
  Main,
  HeaderBar,
  Container,
  H1,
  Logo,
  LogoPema,
} from "../../styled-components/Header/Header";
const Header = () => {
  return (
    <Main>
      <HeaderBar>
        <Logo src={logo} alt="logo pema consulting" />
        <Sidebar />
      </HeaderBar>
      <Container>
        <LogoPema src={logo} alt="logo pema consulting" />
        <H1>Un voyage inédit au coeur de votre entreprise</H1>
      </Container>
    </Main>
  );
};

export default Header;
