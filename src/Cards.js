import React, { Component } from 'react';
import styles from "./Cards.module.css";
import Card from "./Card";
import pen1 from "./images/gel pen.jpg";
import pen2 from "./images/mechanical pen.jpg";
import pen3 from "./images/ink pen.jpg";
import pen4 from "./images/graphic pencil.jpg";

class Cards extends Component {
    render() {
        return (
            <div className={styles.Container}>
                <Card image={pen1} name="Gel Pen" price="9.99 $"/>
                <Card image={pen2} name="Mechanical Pen" price="5.99 $"/>
                <Card image={pen3} name="Ink Pen" price="6.99 $"/>
                <Card image={pen4} name="Graphic Pencil" price="8 $" />
            </div>
        );
    }
}

export default Cards;