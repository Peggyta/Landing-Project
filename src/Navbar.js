import React from 'react';
import styles from "./Navbar.module.css";
import logo from "./images/logo.png";


const Navbar = () => {
    return (
        <>
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
        <div className={styles.productsNavbar}>
                <ul className={styles.thirdList}>
                    <li>all products</li>
                    <li>Playing & Learning</li>
                    <li>Art & Graphic</li>
                    <li>Creative Studio</li>
                    <li>General Writing and Marking</li>
                    <li>Fine Writing</li>
                    <li>Gift finder</li>
                </ul>
                <div className={styles.responsiveMenu}>
                    <ul>
                        <li>Our Products</li>
                        <hr/>
                        <li>Inspiration</li>
                        <hr/>
                        <li>Company</li>
                    </ul>
                </div>
            </div>
            </>
    );
};

export default Navbar;