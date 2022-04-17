import React from 'react';
import styles from "./Navbar.module.css";
import { Link } from 'react-router-dom';
import logo from "./images/logo.png";


const Navbar = () => {
    return (
        <>
        <header className={styles.header}>
            <div className={styles.listShopping}>
                <ul className={styles.firstList}>
                    <li><Link to="/">Home Page</Link></li>
                    <li><Link to="/products">Our Products</Link></li>
                    <li><Link to="/inspiration">Inspiration</Link></li>
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
                        <li><Link to ="/">Home Page</Link></li>
                        <hr/>
                        <li><Link to ="/products">Our Products</Link></li>
                        <hr/>
                        <li><Link to ="inspiration">Inspiration</Link></li>
                    </ul>
                </div>
            </div>
            </>
    );
};

export default Navbar;