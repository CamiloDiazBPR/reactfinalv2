import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../Context/CartContext";
import styles from "./Checkout.module.css"
import ItemCart from "../itemCart";
import { useNavigate } from "react-router-dom";

const Checkout = () =>{
    
    const [productsLength, setProductsLength] = useState(0);
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();

    const navigateToFinish = () => {
        
        navigate('/finish');

    };

    useEffect(() => {
        setProductsLength(
           cartItems.reduce((previous, current) => previous + current.amount,0)
        )
   }, [cartItems])

   const total = cartItems.reduce((previous, current) => previous + current.amount * current.price, 0)

    return(

        <div>

        <h2 className={styles.title}>TU CARRITO</h2>

        {cartItems.length === 0 ? <p className={styles.title}>Tu carrito esta vacio</p> : (

            <div className={styles.productsContainer}>{cartItems.map((item, i) => (
                <ItemCart key={1} item={item} />
                
            ))}
            </div>


        )}

        <h2 className={styles.total}>Total en USD: ${total}</h2>


        <div>

            <h2 className={styles.title2}>Informacion personal</h2>

        <form className={styles.form}>
            <label>
                Name:
                <input className={styles.field} type="text" name="name" />
            </label>
            <label>
                Address:
                <input className={styles.field} type="text" name="Adress" />
            </label>
            <label>
                Zip Code:
                <input className={styles.field} type="text" name="Zip Code" />
            </label>
            <label>
                Phone:
                <input className={styles.field} type="text" name="Phone" />
            </label>
            <label>
                Mail:
                <input className={styles.field} type="text" name="Mail" />
            </label>
                
        </form>
        <button onClick={navigateToFinish} className={styles.bttn}>Enviar</button>

        </div>

        </div>

    )

}


export default Checkout;