import React from "react";

import {
  Bloc1,
  Bloc2,
  Blocs,
  BlocAgro,
  BlocService,
  Logo,
  LogoP,
  Main,
  Title,
  CategoryTitle,
} from "./partnersStyled";

const Partners = () => {
  return (
    <Main>
      <Title>Nos partenaires et nos clients</Title>
      <Bloc1>
        <Logo src="./images/partners/quaternaire.png" />
        <Logo src="./images/partners/dupont.png" />
        <Logo src="./images/partners/schneider-consulting.png" />
      </Bloc1>
      <Bloc2>
        <Logo src="./images/partners/imma.jpg" />
        <Logo src="./images/partners/x-pm.png" />
      </Bloc2>

      <CategoryTitle>Pharmacie</CategoryTitle>
      <Blocs>
        <LogoP src="./images/partners/sophartex.jpeg" />
        <LogoP src="./images/partners/unither.png" />
      </Blocs>

      <CategoryTitle>Construction</CategoryTitle>
      <BlocService>
        <LogoP src="./images/partners/legendre.png" />
        <LogoP src="./images/partners/alimakek.png" />
        <LogoP src="./images/partners/locapal.gif" />
      </BlocService>

      <CategoryTitle>Agro-alimentaire</CategoryTitle>
      <BlocAgro>
        <Logo src="./images/partners/elivia.png" />
      </BlocAgro>

      <CategoryTitle>Services</CategoryTitle>
      <BlocService>
        <LogoP src="./images/partners/dekra.png" />
        <LogoP src="./images/partners/nes.png" />
        <LogoP src="./images/partners/cif.png" />
        <LogoP src="./images/partners/lagglo.jpeg" />
      </BlocService>

      <CategoryTitle>IT</CategoryTitle>
      <Blocs>
        <LogoP src="./images/partners/cs-group.png" />
        <LogoP src="./images/partners/cacom.png" />
      </Blocs>

      <CategoryTitle>Industries</CategoryTitle>
      <BlocService>
        <LogoP src="./images/partners/elvia.bmp" />
        <LogoP src="./images/partners/peg.jpeg" />
        <LogoP src="./images/partners/gault-fremont.png" />
        <LogoP src="./images/partners/clariant.png" />
      </BlocService>
    </Main>
  );
};

export default Partners;
