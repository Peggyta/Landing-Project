import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from "./Navbar";
import Landing from './Landing';
import Products from './Products';
import Inspiration from './Inspiration';
import Footer from "./Footer";

class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <Routes>
            <Route path = "/products" element={<Products />} />
            <Route path = "/inspiration" element={<Inspiration />} />
            <Route path ="/" exact={true} element={<Landing />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
