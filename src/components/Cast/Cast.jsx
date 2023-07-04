import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits } from 'services/api';
import styles from './Cast.module.css';

function Cast() {
  const imgURL = 'https://image.tmdb.org/t/p/w500';
  const { movieId } = useParams();
  const [cast, setCast] = useState();

  useEffect(() => {
    const fetchCredists = async id => {
      const actors = await getCredits(movieId);
      setCast([...actors]);
    };
    fetchCredists(movieId);
  }, [movieId]);

  return (
    <>
      {cast && (
        <ul>
          {cast.map(actor => (
            <li key={actor.id} className={styles.actors}>
              {actor.profile_path && (
                <img
                  className={styles['actor-photo']}
                  src={imgURL + actor.profile_path}
                  alt={actor.name}
                />
              )}
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Cast;
