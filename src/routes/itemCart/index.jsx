import React from 'react'
import { useContext } from 'react'
import CartContext from '../../Context/CartContext'
import styles from "./style.module.css"

const ItemCart = ({item}) => {
  const {deleteItemToCart, AddItemToCart} = useContext(CartContext);

  const { id } = item;


  return (
    <div className={styles.cartItem}>
      <img src={item.img} alt={item.name} />
      <div className={styles.dataContainer}>
        <div className={styles.left}>
          <p className={styles.itemName}>{item.name}</p>
          <div className={styles.buttons}>
            <button className={styles.button} onClick={() => AddItemToCart(item)}>Add</button>
            <button className={styles.button} onClick={() => deleteItemToCart(id)}>Delete</button>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.amount}>{item.amount} </div>
            <p>total: ${item.amount * item.price}</p>
          </div>
        </div>
      </div>
  )
}

export default ItemCart
