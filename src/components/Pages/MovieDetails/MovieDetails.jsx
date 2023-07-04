import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { getMovieById } from 'services/api';
import styles from './MovieDetails.module.css';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const location = useLocation();

  useEffect(() => {
    const fetchMovieData = async id => {
      const fetchedMovie = await getMovieById(id);
      setMovie({ ...fetchedMovie });
    };
    fetchMovieData(movieId);
  }, [movieId]);

  const imgURL = 'https://image.tmdb.org/t/p/w500';
  return (
    <>
      <Link to={location.state?.from ?? '/'}>
        <button type="button">{'<- Go back'}</button>
      </Link>
      {movie && (
        <>
          <div className={styles['movie-details']}>
            <img
              className={styles.poster}
              src={imgURL + movie.poster_path}
              alt="Movie poster"
            />
            <div className={styles['movie-data']}>
              <h2>
                {movie.title} ({new Date(movie.release_date).getFullYear()})
              </h2>
              <p>User score: {Math.round(movie.popularity)}%</p>
              <h4>Overview:</h4>
              <p>{movie.overview}</p>
              <h5>Genres:</h5>
              <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
            </div>
          </div>
          <div className={styles['add-info']}>
            <ul>
              <li>
                <Link to="cast" state={{ from: location.state?.from ?? '/' }}>
                  Cast
                </Link>
              </li>
              <li>
                <Link
                  to="reviews"
                  state={{ from: location.state?.from ?? '/' }}
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          <Outlet />
        </>
      )}
    </>
  );
}

MovieDetails.propTypes = {};

export default MovieDetails;
