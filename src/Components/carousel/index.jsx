import React from "react";
import Carrousel from "./carrousel";
import '../../styled-components/header/carrousel.css'
const Carousel = () => {
  //Integrate texte over the carrousel
  return (
    <div style={{ position: "relative" }}>
      <Carrousel />
      <div className="name">
      <div href="https://fonts.googleapis.com/css?family=Bungee+Inline" rel="stylesheet" className="wrapper">PEMA</div>
      </div>
      <div className="nameSecond"> 
       <div href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet"  className="wrapperSecondTitle">Un voyage inédit au coeur de votre Entreprise</div> 
      </div>
    </div>
  );
};

export default Carousel;
