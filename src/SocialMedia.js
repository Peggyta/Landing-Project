import React, { Component } from 'react';
import styles from "./SocialMedia.module.css";
import facebook from "./images/facebook.svg";
import instagram from "./images/instagram.svg";
import pinterest from "./images/pinterest.svg";
import youtube from "./images/youtube.svg";

class SocialMedia extends Component {
    render() {
        return (
        <div className={styles.Container}>
                <p className={styles.socialText}>Follow us on</p>
               <p className={styles.tipsText}>Tips, tutorials and inspiration in social media</p>
            <div className={styles.socialLogos}>
                <img src={facebook} alt="facebook"/>
                <img src={instagram} alt="instagram"/>
                <img src={pinterest} alt="pinterest"/>
                <img src={youtube} alt="youtube"/>
            </div>    
        </div>
        );
    }
}

export default SocialMedia;