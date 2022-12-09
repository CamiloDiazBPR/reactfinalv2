import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import styles from "./ArtistId.module.css"

const ArtistId = () => {

    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect (()=> {
        fetch(`https://swapi.dev/api/people/${id}`)
        .then(res => res.json())
        .then(setCharacter);
    },[id]);

    return (
    
    <div className={styles.title}>
        
        {character?.name}

        <h1 className={styles.title2}> Principales caracteristicas </h1>

        <ul>
            <li className={styles.text}>
            Heigt: {character?.height}
            </li>
            <li className={styles.text}>
            Weight: {character?.mass}
            </li>
            <li className={styles.text}>
            Hair Color: {character?.hair_color}
            </li>
            <li className={styles.text}>
            Skin color: {character?.skin_color}
            </li>
            <li className={styles.text}>
            Eye color: {character?.eye_color}
            </li>
            <li className={styles.text}>
            Birthday: {character?.birth_year}
            </li>
            <li className={styles.text}>
            Gender: {character?.gender}
            </li>
        </ul>
    </div>


    

    );
};

export default ArtistId;