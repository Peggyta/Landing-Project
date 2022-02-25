import React from 'react';
import styles from "../src/Banner.module.css";
import banner from "./images/background.jpg";

const Banner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img src={banner} alt="banner"/>
            </div>
    
            <div className={styles.textContainer}>
                <div className={styles.infoContainer}>
                <h3>Lorem ipsum dolor sit amet</h3>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;