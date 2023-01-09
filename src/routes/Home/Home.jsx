import React from 'react'
import styles from "./Home.module.css"


const Home = () =>{

  return (
    <div className={styles.Back}>
    
      <h1 className={styles.title}> Bienvenidos a nuestra web </h1>

      <p className={styles.text}> Aca podran encontrar el catálogo de lanzamientos más recientes, así como todos los artistas que pertenecen a nuestro sello </p>

    </div>
  );
};

export default Home;
