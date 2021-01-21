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
            <Title>Notre Agence</Title>
            <Link href="#">Accueil</Link>
            <Link href="#">Témoignages</Link>
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
        Copyright 2021 Pema Consulting Tous Droits Réservés.
      </Droit>
    </Footer>
  );
};

export default FooterContainer;
