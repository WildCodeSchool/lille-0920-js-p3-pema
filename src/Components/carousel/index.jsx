import React from "react";
import Carrousel from "./carrousel";
import { Name, Wrapper, NameSecond, WrapperSecondTitle } from '../../styled-components/header/Carrousel.js';
const Carousel = () => {
  //Integrate texte over the carrousel
  return (
    <div style={{ position: "relative" }}>
      <Carrousel />
      <Name>
      <Wrapper href="https://fonts.googleapis.com/css?family=Bungee+Inline" rel="stylesheet">PEMA</Wrapper>
      </Name>
      <NameSecond> 
       <WrapperSecondTitle href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet">Un voyage inédit au coeur de votre Entreprise</WrapperSecondTitle> 
      </NameSecond>
    </div>
  );
};

export default Carousel;
