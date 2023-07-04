import axios from 'axios';

const API_KEY = '8f1902936e413b4882515a6f0fcd6c97';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function getTrending() {
  try {
    const response = await axios.get('/trending/movie/day', {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovies(query) {
  try {
    const response = await axios.get('/search/movie', {
      params: {
        query: query,
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieById(id) {
  try {
    const response = await axios.get(`/movie/${id}`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getCredits(id) {
  try {
    const response = await axios.get(`/movie/${id}/credits`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.cast;
  } catch (error) {
    console.error(error);
  }
}

export async function getReviews(id) {
  try {
    const response = await axios.get(`/movie/${id}/reviews`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}
