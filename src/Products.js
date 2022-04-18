import axios from 'axios';
import React, { Component } from 'react';
import Card from './Card';

class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        axios.get("https://www.fakeshop-api.com/products")
        .then(response => this.setState ({
            products: response.data,
        }))
    }

    render() {
        return (
            <div>
                <h1>Products</h1>
            </div>
        );
    }
}

export default Products;