import MovieList from 'components/MovieList/MovieList';
import React, { useState, useEffect } from 'react';
import { getTrending } from 'services/api';
// import PropTypes from 'prop-types';

function Home() {
  const [trending, setTrending] = useState([]);

  const fetchTrending = async () => {
    const trendingMovies = await getTrending();
    setTrending([...trendingMovies]);
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <>
      <h2>Trending today:</h2>
      <MovieList movies={trending} />
    </>
  );
}

Home.propTypes = {};

export default Home;
