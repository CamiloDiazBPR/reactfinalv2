import styles from "./Digital.module.css"
import CartContext from '../../Context/CartContext'
import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


const Card = ({ item }) => {

const {AddItemToCart} = useContext(CartContext)
const [release, setRelease] = useState ({});

useEffect (() => {

    

    fetch('https://testapi.io/api/CamiloDiazBPR/releases')
    .then((res) => res.json())
    .then(setRelease)



},[])
  return (
    <>
      <div >
        <div className={styles.productsContainer}>
          {item.map((Val) => {

            const id = Val.id
            return (
              <div
                
              >
                <div >
                  <img className={styles.product} src={Val.img} alt={Val.title} />
                </div>
                <div className={styles.product} >
                  <div >
                  <p className={styles.ReleaseName}>
                    <Link to={`/digital/${id}`}>{Val.name}</Link> - USD ${Val.price}
                    </p>
                  </div>
                  <div className={styles.product}><button onClick={() => AddItemToCart(Val)}> Add to cart </button></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;