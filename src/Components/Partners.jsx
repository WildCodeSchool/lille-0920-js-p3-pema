import React from "react";

import quaternaire from "../assets/images/partners/quaternaire.png";
import schneider from "../assets/images/partners/schneider-consulting.png";
import dupont from "../assets/images/partners/dupont.png";
import imma from "../assets/images/partners/imma.jpg";
import xpm from "../assets/images/partners/x-pm.png";
import sophartex from "../assets/images/partners/sophartex.jpeg";
import unither from "../assets/images/partners/unither.png";
import legendre from "../assets/images/partners/legendre.png";
import alimakek from "../assets/images/partners/alimakek.png";
import locapal from "../assets/images/partners/locapal.gif";
import elivia from "../assets/images/partners/elivia.png";
import dekra from "../assets/images/partners/dekra.png";
import nes from "../assets/images/partners/nes.png";
import cif from "../assets/images/partners/cif.png";
import lagglo from "../assets/images/partners/lagglo.jpeg";
import csgroup from "../assets/images/partners/cs-group.png";
import cacom from "../assets/images/partners/cacom.png";
import elvia from "../assets/images/partners/elvia.bmp";
import peg from "../assets/images/partners/peg.jpeg";
import gaultfremont from "../assets/images/partners/gault-fremont.png";
import clariant from "../assets/images/partners/clariant.png";
import {
  Bloc1,
  Bloc2,
  BlocSize60,
  BlocAgro,
  BlocSize70,
  Logo,
  LogoXpm,
  Logo20,
  Logo15,
  Main,
  Title,
  CategoryTitle,
} from "../styled-components/Partners";

const Partners = () => {
  return (
    <Main>
      <Title>Nos partenaires et nos clients</Title>
      <Bloc1>
        <Logo src={quaternaire} />
        <Logo src={dupont} />
        <Logo src={schneider} />
      </Bloc1>
      <Bloc2>
        <Logo src={imma} />
        <LogoXpm src={xpm} />
      </Bloc2>

      <CategoryTitle>Pharmacie</CategoryTitle>
      <BlocSize60>
        <Logo20 src={sophartex} />
        <Logo20 src={unither} />
      </BlocSize60>

      <CategoryTitle>Construction</CategoryTitle>
      <BlocSize70>
        <Logo20 src={legendre} />
        <Logo20 src={alimakek} />
        <Logo20 src={locapal} />
      </BlocSize70>

      <CategoryTitle>IT</CategoryTitle>
      <BlocSize60>
        <Logo20 src={csgroup} />
        <Logo20 src={cacom} />
      </BlocSize60>

      <CategoryTitle>Services</CategoryTitle>
      <BlocSize70>
        <Logo15 src={dekra} />
        <Logo15 src={nes} />
        <Logo15 src={cif} />
        <Logo15 src={lagglo} />
      </BlocSize70>

      <CategoryTitle>Industries</CategoryTitle>
      <BlocSize70>
        <Logo15 src={elvia} />
        <Logo15 src={peg} />
        <Logo15 src={gaultfremont} />
        <Logo15 src={clariant} />
      </BlocSize70>

      <CategoryTitle>Agro-alimentaire</CategoryTitle>
      <BlocAgro>
        <Logo src={elivia} />
      </BlocAgro>
    </Main>
  );
};

export default Partners;
