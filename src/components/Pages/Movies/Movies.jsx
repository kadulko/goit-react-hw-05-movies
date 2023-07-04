import MovieList from 'components/MovieList/MovieList';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
// import PropTypes from 'prop-types'
import { getMovies } from 'services/api';
import styles from './Movies.module.css';

function Movies() {
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  const handleSubmit = e => {
    e.preventDefault();
    if (e.target.input.value.trim() !== '')
      setSearchParams({ query: e.target.input.value.trim() });
  };

  useEffect(() => {
    const getMoviesByQuery = async () => {
      const fetchedMovies = await getMovies(query);
      setMovies([...fetchedMovies]);
    };
    if (query && query.trim() !== '') getMoviesByQuery();
  }, [query]);

  return (
    <>
      <form className={styles['input-form']} onSubmit={handleSubmit}>
        <input type="search" name="input" defaultValue={query} />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </>
  );
}

// Movies.propTypes = {};

export default Movies;
