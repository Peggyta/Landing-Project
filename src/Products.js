import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';
import styles from "./Products.module.css";

class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        axios.get("https://fakestoreapi.com/products")
        .then(response => this.setState ({
            products: response.data,
        }))
    }

    render() {
        const {products} = this.state;
        return (
            <div>
                <h1 className={styles.productTitle}>Our Products</h1>
                <div className={styles.Container}>
                    
                    {products.length ? products.map(pencil => <Card key = {pencil.id} image = {pencil.image} name = {pencil.name} price = {`${pencil.price} $`} />) : <div className={styles.loaderIcon}></div>}
                   
                </div>
            </div>
            
        );
    }
}

export default Products;