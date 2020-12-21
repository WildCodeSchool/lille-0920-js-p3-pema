import {BrowserRouter as Router}  from 'react-router-dom'
import React, { Component } from "react";
import HeaderIndex from "./Components/Header/HeaderIndex";
import Footer from './Components/Footer/Footer'
import MaquetteUn from './Components/maquetteUn';
import MaquetteDe from './Components/maquetteDeux';

class App extends Component {
  render() {
    return (
      <div className="App">
      
      <Router> 
        <HeaderIndex />
        <MaquetteDe />
        <MaquetteUn />
        <Footer/>
      </Router>
      </div>
    );
  }
}

export default App;