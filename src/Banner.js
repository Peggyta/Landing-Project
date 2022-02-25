import React from 'react';
import styles from "../src/Banner.module.css";
import banner from "./images/background.jpg";

const Banner = () => {
    return (
        <div className={styles.container}>
            <img src={banner} alt="banner"/>
            <div className={styles.textContainer}>
                <h3>Lorem ipsum dolor sit amet</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
            </div>
        </div>
    );
};

export default Banner;