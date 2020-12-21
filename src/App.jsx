import {BrowserRouter as Router,Switch,Route}  from 'react-router-dom'
import React, { Component } from "react";
import "./AppStyles.css";
import Header from "./Components/Header/Navbar";
import Carousel from "./Components/carousel/index";
import Footer from './Components/Footer/Footer'
import './AppStyles.css'
import MaquetteUn from './Components/maquetteUn';
import MaquetteDe from './Components/maquetteDeux';

class App extends Component {
  render() {
    return (
      <div className="App">
      
      <Router> 
        <Header />
        <Carousel />
        <MaquetteDe />
        <MaquetteUn />
        <Footer/>
        </Router>
      </div>
    );
  }
}

export default App;