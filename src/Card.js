import React, { Component } from 'react';
import styles from "./Card.module.css";
import plus from "./images/plus.svg";
import minus from "./images/minus.svg";


class Card extends Component {
        constructor(){
            super()
            this.state={
                counter: 0,
            }
        }
      downHandler = () => {
          if(this.state.counter>=1){
              this.setState(prevState=>({
                  counter: prevState.counter-1,
              }))
          }
      }

      upHandler = () => {
          this.setState(prevState=>({
              counter: prevState.counter+1,
          }))
      }

    render() {
        const {image, name,price} = this.props;
        const{counter} = this.state;
        return (
        <div className={styles.Container}>
                <img className={styles.products} src={image} alt="products"/>
                <h3>{name}</h3>
                <p>{price} {counter ? `* ${counter} = ${counter*Number(price.split("$")[0])} $`:"" }</p>
            <div className={styles.counterSection}>
                 <img className={this.state.counter ? " " : styles.deactive} src={minus} alt="remove" onClick={this.downHandler}/> 
                 <span>{counter}</span>  
                 <img src={plus} alt="add" onClick={this.upHandler}/>
            </div>
        </div>
        );
    }
}

export default Card;