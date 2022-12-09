import React, { useEffect, useState } from 'react'
import styles from "./Artist.module.css"
import { Link } from 'react-router-dom';



const Artist = () =>{
  const [artist, setArtist] = useState ({});

  useEffect (() => {

    fetch('https://swapi.dev/api/people')
    .then((res) => res.json())
    .then(setArtist)


  },[])

  return (

    <div className={styles.Back}>
    
      <h1 className={styles.title}>Estos son nuestros artistas </h1>

      {artist.results?.map((character) => {

        const id = character.url.split('/')[5];
        
        return (
        <div className={styles.artist}>
          <Link to={`/artist/${id}`} className={styles.artist}>{character.name}</Link>
        </div>
      )})}

    </div>
  );
};

export default Artist;