import React, { Component } from 'react';
import styles from "./Cards.module.css";
import Card from "./Card";
import pen1 from "./images/gel pen.jpg";
import pen2 from "./images/mechanical pen.jpg";
import pen3 from "./images/ink pen.jpg";
import pen4 from "./images/graphic pencil.jpg";

class Cards extends Component {
    constructor(props){
        super(props);
        this.state = {
            pencilData : [
                {id:1, image: pen1, name: "gel pen", price: "9 $"},
                {id:2, image: pen2, name: "mechanical pen", price: "5 $"},
                {id:3, image: pen3, name: "ink pen", price: "6 $"},
                {id:4, image: pen4, name: "graphic pencil", price:"8 $"},
            ]
        }
    }
    render() {
        return (
            <div className={styles.Container}>
                {this.state.pencilData.map(pencil => <Card key = {pencil.id} image = {pencil.image} name = {pencil.name} price = {pencil.price} />)}
            </div>
        );
    }
}

export default Cards;