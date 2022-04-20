import axios from 'axios';
import React, { Component } from 'react';
import Post from './Post';
import styles from "./Inspiration.module.css";

class Inspiration extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts: [],
        }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then(response => this.setState({posts: response.data}))
    }
    render() {
        const {posts} = this.state;
        return (
            <div className={styles.Container}>
                <h1>Tell us your idea</h1>
                
                   {posts.length ? posts.map(post => <Post key={post.id} name={post.name} id={post.id} body={post.body} />): <h2>...Loading</h2>}
                
               
            </div>
        );
    }
}

export default Inspiration;