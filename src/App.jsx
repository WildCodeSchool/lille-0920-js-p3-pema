import React, { Component } from "react";
import "./styled-components/styles.css";
import Header from "./Components/Header/header";
import Featured from "./Components/featured/index";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Featured />
       
      </div>
    );
  }
}

export default App;