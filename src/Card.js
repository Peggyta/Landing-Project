import React, { Component } from 'react';
import styles from "./Card.module.css";
import plus from "./images/plus.svg";
import minus from "./images/minus.svg";

class Card extends Component {
    render() {
        const {image, name, price} = this.props;
        const {counter} = this.state;
        return (
            <div className={styles.Container}>
                <img src={image} alt="products"/>
                <h3>{name}</h3>
                <p>{price}</p>
                <div className={styles.Counter}>
                    <img src={minus} alt="remove item"/>
                    <span>{counter}</span>
                    <img src={plus} alt="add item"/>
                </div>
            </div>
        );
    }
}

export default Card;