import React from 'react';
import styles from "./Navbar.module.css";
import logo from "./images/logo.png";

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.listShopping}>
            <ul className={styles.firstList}>
                <li>Our Products</li>
                <li>Inspiration</li>
                <li>Company</li>
            </ul>
            </div>
            <div className={styles.logo}>
            <img className={styles.logo} src={logo} alt="faber-castell logo"/>
            </div>
            <div className={styles.listContainer}>
            <ul className={styles.secondList}>
                <li>Press</li>
                <li>Service & Help</li>
                <li>Country Selector</li>
            </ul>
            </div>

        </header>
    );
};

export default Navbar;