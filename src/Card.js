import React, { Component } from 'react';
import styles from "./Card.module.css";
import plus from "./images/plus.svg";
import minus from "./images/minus.svg";


class Card extends Component {
        constructor(){
            super()
            this.state={
                counter:0,
            }
        }
    render() {
        const {image, name, price} = this.props;
        const{counter} = this.state;
        return (
        <div className={styles.Container}>
                <img className={styles.products} src={image} alt="products"/>
                <h3>{name}</h3>
                <p>{price}</p>
            <div className={styles.counter}>
                 <img src={minus} alt="remove"/> 
                 <span>{counter}</span>  
                 <img src={plus} alt="add"/>
            </div>
        </div>
        );
    }
}

export default Card;