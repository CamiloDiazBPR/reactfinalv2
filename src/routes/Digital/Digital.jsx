import React, { useContext } from 'react'
import CartContext from '../../Context/CartContext'
import styles from "./Digital.module.css"
import { ProductsData } from './ProductData'
import { Link } from 'react-router-dom';


export const Digital = () => {

  const {AddItemToCart} = useContext(CartContext)
  
  

  return (

    <div className={styles.productsContainer}>  

      {ProductsData.map((product, i) =>(


        <div key={1} className={styles.product}>

          
          
          <img src={product.img} alt={product.name}/>

          <div>          

            <p className={styles.ReleaseName}>
            <Link to={`../DigitalId/${product.id}`}>{product.name}</Link> - ${product.price}
            </p>

          </div>

          <button onClick={() => AddItemToCart(product)}> Add to cart </button>
          
          </div>

      ))}
    </div>
  )
}

export default Digital