import React from 'react';
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.Container}>
            <hr/>
            <p>Copyright 2022 Faber-Castell. All Rights reserved.</p>
        </div>
    );
};

export default Footer;