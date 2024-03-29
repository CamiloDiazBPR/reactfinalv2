import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../Context/CartContext";
import styles from "./Checkout.module.css"
import ItemCart from "../itemCart";
import ContactForm from "./ContactForm";

const Checkout = () =>{
    
    const [productsLength, setProductsLength] = useState(0);
    const {cartItems} = useContext(CartContext);



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

        <ContactForm />


        </div>

    )

    

}


export default Checkout;