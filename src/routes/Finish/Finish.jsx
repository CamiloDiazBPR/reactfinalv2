import React from 'react'
import styles from "./Finish.module.css"
import { useNavigate } from "react-router-dom";

function deleteItems() {
  localStorage.clear();
  sessionStorage.clear();
}

function Finish() {

    const navigate = useNavigate();

    const navigateToFinish = () => {
        navigate('/');
    };

  return (
    <div>
    
    <h1 className={styles.title}> Gracias por tu compra vuelve pronto </h1> 

    <button onClick={navigateToFinish} onclick={deleteItems()} className={styles.bttn}>Home</button>

    
    </div>

    
  )
}

export default Finish