import React, { useContext, useEffect, useState  } from 'react'
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import CartContext from '../../Context/CartContext'
import styles from "./Digital.module.css"
import { ProductsData } from './ProductData'
import Buttons from "./Buttons";
import Card from "./Card";


export const Digital = ({}) => {


  const {AddItemToCart} = useContext(CartContext)
  const [release, setRelease] = useState ({});
  const [item, setItem] = useState(ProductsData);
  const menuItems = [...new Set(ProductsData.map((Val) => Val.Cat))];

  const filterItem = (curcat) => {
    const newItem = ProductsData.filter((newVal) => {
      return newVal.Cat === curcat;
    });
    setItem(newItem);
  };

  useEffect (() => {

    const db = getFirestore();
    const  itemsCollection = collection(db, 'Releases');
    getDocs(itemsCollection).then((snapshot) => {
      console.log('snapshot', 
      setRelease(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))))
    })


  },[])

  
  return (
      <>
      <div className={styles.productsContainer}>

        <div>

          <h1 className={styles.title}> Filter </h1>

          <Buttons
              filterItem={filterItem}
              setItem={setItem}
              menuItems={menuItems}
            />
            <Card item={item} />

        </div>
      </div>
      </>
      )
      

    }


export default Digital