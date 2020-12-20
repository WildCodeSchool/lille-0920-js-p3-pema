import {BrowserRouter as Router,Switch,Route}  from 'react-router-dom'
import React, { Component } from "react";
import "./styled-components/header/styles.css";
import Header from "./Components/Header/Navbar";
import Carousel from "./Components/carousel/index";
import Footer from './Components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
      
      <Router> 
        <Header />
        <Carousel />
        <Footer></Footer>
        </Router>
      </div>
    );
  }
}

export default App;