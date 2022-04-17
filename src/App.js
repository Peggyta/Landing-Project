import React, { Component } from 'react';
import Navbar from "./Navbar";
import Landing from './Landing';
import Footer from "./Footer";

class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <Landing />
        <Footer />
      </div>
    );
  }
}

export default App;
