import React from 'react'
import styles from "./Home.module.css"


const Home = () =>{

  return (
    <div className={styles.Back}>
    
      <h1 className={styles.title}> Bienvenidos a nuestra web </h1>

      <p className={styles.text}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi veritatis quaerat doloribus repellendus ut, rerum adipisci quidem commodi aliquid mollitia laborum omnis aut. Quisquam dicta, voluptas porro facilis beatae delectus.</p>

    </div>
  );
};

export default Home;
