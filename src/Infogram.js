import React, { Component } from 'react';
import styles from "./Infogram.module.css";
import colors from "./images/colors.jpg";

class Search extends Component {
    render() {
        return (
            <div className={styles.Container}>
                <img src={colors} alt="pencils" />
                <div className={styles.infoContainer}>
                <h3>Did you know?</h3>
                <p>The profile of wood-cased pencils was changed from round to hexagonal/triangle because they were constantly rolling off the table.</p>
                </div>
                <div className={styles.searchContainer}>
                    <p>Search Section</p>
                    <input placeholder="search..."/>
                </div>
            </div>
        );
    }
}

export default Search;