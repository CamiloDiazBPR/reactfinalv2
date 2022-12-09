import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./Cart.module.css"

const Cart = () =>{
    return (
        <div className={styles.text}> <FaShoppingCart /> 3 </div>
    );
};

export default Cart;