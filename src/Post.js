import React, { Component } from 'react';
import styles from "./Post.module.css";

class Post extends Component {
    render() {
        const {name, id, body} = this.props;
        return (
            <div className={styles.Container}>
                 <p className={styles.postNum}>Post #{id}</p>
                <h3>{name}</h3>
                <br/>
                <p>{body}</p>
            </div>
        );
    }
}

export default Post;