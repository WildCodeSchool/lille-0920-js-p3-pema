import React from "react";
import {
  Main,
  Container,
  Title,
  LogoPema,
} from "../../styled-components/Header/Header";
import logo from "../../assets/images/logo.png";

const Header = ({ sidebar, setSidebar }) => {
  return (
    <Main id="accueil" sidebar={sidebar}>
      <Container>
        <LogoPema src={logo} alt="logo pema consulting" />
        <Title>Un voyage inédit au coeur de votre entreprise</Title>
      </Container>
    </Main>
  );
};

export default Header;
