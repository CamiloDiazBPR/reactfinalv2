import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./NavBar.module.css";
import Cart from "../../routes/Cart/CartWidget"



const NavBar = () =>{

    return (
        <div className={styles.NavBar}>
        <b> <Link to="/" className={styles.ElementoNombre}> Bullet Proof Records </Link> </b>
            <ul className={styles.lista}>
                <li>
                    <span><Link to="/" className={styles.Elemento}>HOME</Link></span>
                </li>
                <li>
                    <Link to="/Artist" className={styles.Elemento} >ARTIST</Link>
                </li>
                <li>
                    <Link to="/Digital" className={styles.Elemento} >DIGITAL</Link>
                </li>
                <li>
                    <Link to="/Vinyl" className={styles.Elemento} >VINYL</Link>
                </li>
                <li>
                    <Link to="/Contact" className={styles.Elemento}>CONTACT</Link>
                </li>

            </ul>


            <Cart />

        
        </div>
    );
};

export default NavBar;