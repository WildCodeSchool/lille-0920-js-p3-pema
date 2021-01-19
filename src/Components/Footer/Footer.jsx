import {
  Footer,
  Column,
  Wrapper,
  Title,
  Row,
  Link,
  Logo,
  Droit,
} from "../../styled-components/Footer/Footer";
import logo from "../../assets/images/logo.png";

const FooterContainer = () => {
  return (
    <Footer>
      <Logo src={logo} alt="logo pema consulting" />
      <Wrapper>
        <Row>
          <Column>
            <Title>Navigation</Title>
            <Link href="#">Accueil</Link>
            <Link href="#">Témoignages</Link>
            <Link href="#">Politique de confidentialité</Link>
          </Column>
          <Column>
            <Title>Contact</Title>
            <Link href="#">Pema consulting</Link>
            <Link href="#">06XXXXXXX</Link>
            <Link href="#">mail@gmail.com</Link>
          </Column>
          <Column>
            <Title>Social</Title>
            <Link>
              <i className="fab fa-facebook-f" />
            </Link>
            <Link>
              <i className="fab fa-instagram" />
            </Link>
            <Link>
              <i className="fab fa-youtube" />
            </Link>
            <Link>
              <i className="fab fa-twitter" />
            </Link>
          </Column>
        </Row>
      </Wrapper>
      <Droit>
        Copyright @2021 Tous droits réservés.
        <Link href="#">Mentions légales</Link>
      </Droit>
    </Footer>
  );
};

export default FooterContainer;
