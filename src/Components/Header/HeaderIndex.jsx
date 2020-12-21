import React from "react";

import  Header from './Navbar';
import  Carrousel from '../carousel/index';
import '../../styled-components/header/HeaderIndex.css'
const HeaderIndex = () => {
    //Group header components
    return (
     <div> 
        <Header/> 
        <Carrousel />
        </div>
       

    );
  };

export default HeaderIndex;