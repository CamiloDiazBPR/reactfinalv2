import React, { useContext, useEffect, useState  } from 'react'
import CartContext from '../../Context/CartContext'
import styles from "./Digital.module.css"
import { ProductsData } from './ProductData'
import { Link } from 'react-router-dom';
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

    

    fetch('https://testapi.io/api/CamiloDiazBPR/releases')
    .then((res) => res.json())
    .then(setRelease)



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