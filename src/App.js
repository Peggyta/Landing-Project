import React, { Component } from 'react';
import Navbar from "./Navbar";
import Banner from "./Banner";
import Cards from "./Cards";
import Search from "./Infogram";
import SocialMedia from "./SocialMedia";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Banner/>
        <Cards />
        <Search />
        <SocialMedia/>
      </div>
    );
  }
}

export default App;
