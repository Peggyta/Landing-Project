import React, { Component } from 'react';
import Navbar from "./Navbar";
import Banner from "./Banner";
import Cards from "./Cards";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Banner/>
        <Cards />
      </div>
    );
  }
}

export default App;
