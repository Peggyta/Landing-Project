import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from "./Navbar";
import Landing from './Landing';
import Footer from "./Footer";

class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <Routes>
            <Route path="/" exact={true} element={<Landing />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
