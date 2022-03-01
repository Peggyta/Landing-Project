import React, { Component } from 'react';
import Navbar from "./Navbar";
import Banner from "./Banner";
import Cards from "./Cards";
import Search from "./Infogram";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Banner/>
        <Cards />
        <Search />
      </div>
    );
  }
}

export default App;
