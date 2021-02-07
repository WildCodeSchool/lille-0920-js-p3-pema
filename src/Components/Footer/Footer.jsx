import {
  Main,
  FirstContainer,
  Logo,
  Phone,
  Droit,
} from "../../styled-components/Footer/Footer";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <Main>
      <FirstContainer>
        <Logo src={logo} alt="logo pema consulting" />
        <Phone>Tél: 06 08 34 07 40</Phone>
      </FirstContainer>
      <>
        <Droit>Copyright 2021 Pema Consulting Tous Droits Réservés.</Droit>
      </>
    </Main>
  );
};

export default Footer;
