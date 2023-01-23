import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import styles from "./DigitalId.module.css"


const DigitalId = () => {

    const { id } = useParams();
    const [release, setRelease] = useState({});

    useEffect (()=> {
        fetch(`https://dev-78cc592i8z7ds2d.api.raw-labs.com/releases?id=${id}`)
        .then(res => res.json())
        .then(setRelease);
    },[id]);

    return (
    
    <div className={styles.title}>

        
        {release.name}

        <h1 className={styles.title2}> Release Info </h1>

        <ul>
            <li className={styles.text}>
            Name: {release.name}
            </li>
            <li className={styles.text}>
            Artist: {release.Artist}
            </li>
            <li className={styles.text}>
            Tracks: {release.Tracks}
            </li>
            <li className={styles.text}>
            Release Date: {release.ReleaseDate}
            </li>
            <li className={styles.text}>
            Category: {release.Cat}
            </li>
        </ul>
    </div>


    

    );
};

export default DigitalId;