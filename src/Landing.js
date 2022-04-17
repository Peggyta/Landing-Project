import React, { Component } from 'react';
import Banner from "./Banner";
import Cards from "./Cards";
import Search from "./Infogram";
import SocialMedia from "./SocialMedia";

class Landing extends Component {
    render() {
        return (
            <div>
            <Banner />
            <Cards />
            <Search />
            <SocialMedia/>  
            </div>
        );
    }
}

export default Landing;