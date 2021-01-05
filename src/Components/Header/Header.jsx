import React, { useState } from "react";

import Sidebar from "./Sidebar";
import logo from "../../assets/images/logo.png";
import {
  Main,
  HeaderBar,
  Container,
  H1,
  Logo,
  LogoPema,
} from "../../styled-components/Header/Header";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <Main sidebar={sidebar}>
      <HeaderBar>
        <Logo src={logo} alt="logo pema consulting" />
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      </HeaderBar>
      <Container>
        <LogoPema src={logo} alt="logo pema consulting" />
        <H1>Un voyage inédit au coeur de votre entreprise</H1>
      </Container>
    </Main>
  );
};

export default Header;
