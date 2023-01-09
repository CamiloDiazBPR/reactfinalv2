import React, { useState, useEffect } from "react";
import { ProductsData } from "../Digital/ProductData";
import styles from "./DigitalId.module.css"



const DigitalId = () => {

    const [release, setRelease] = useState({});

    useEffect(() => {
        const promesa = new Promise((resolve) => (
            setTimeout(() => resolve([ProductsData]),1000)
        )).then(res => setRelease(res))
    },[release])

    return (
    
        <div className={styles.title}>
            
            {release?.img}
    
            <h1 className={styles.title2}> Metadata </h1>
    
            <ul>
                <li className={styles.text}>
                Nombre: {release?.name}
                </li>
                <li className={styles.text}>
                Artist: {release?.Artist}
                </li>
                <li className={styles.text}>
                Tracks: {release?.Tracks}
                </li>
                <li className={styles.text}>
                Release Date: {release?.ReleaseDate}
                </li>
                <li className={styles.text}>
                Copyright: {release?.Copyright}
                </li>
            </ul>
        </div>
    
    
        
    
        );


};

export default DigitalId;