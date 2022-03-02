import React, { Component } from 'react';
import Navbar from "./Navbar";
import Banner from "./Banner";
import Cards from "./Cards";
import Search from "./Infogram";
import SocialMedia from "./SocialMedia";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Banner/>
        <Cards />
        <Search />
        <SocialMedia/>
        <Footer/>
      </div>
    );
  }
}

export default App;
