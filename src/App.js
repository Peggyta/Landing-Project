import React, { Component } from 'react';
import Navbar from "./Navbar";
import Banner from "./Banner";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Banner/>
      </div>
    );
  }
}

export default App;
