import React, { Component } from 'react';
import styles from "../src/Banner.module.css";
import banner from "./images/background.jpg";

class Banner extends Component{
    
    render(){
        return(
            <div className={styles.container}>
           <div className={styles.contentContainer}>
                <img src={banner} alt="banner"/>
                <p className={styles.infoContainer}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
                <div className={styles.textContainer}><h3>Lorem ipsum dolor sit amet</h3>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
                <button className={styles.infoButton}>Read more</button>
            </div>            
        </div>  
    </div>
        )
    }
}

export default Banner;

