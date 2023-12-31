import axios from 'axios';

const API_KEY = '31485161ddb1cc8ec3e928b1ac6d8f71';
const BASE_URL = 'https://api.themoviedb.org/3';

async function getTrendingMovies() {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getSearchMovies(searchQuery) {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?query=${searchQuery}&api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getMovieGeneralInformation(movieId) {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getMovieCasts(movieId) {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getMovieReviews(movieId) {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export {
  getTrendingMovies,
  getSearchMovies,
  getMovieGeneralInformation,
  getMovieCasts,
  getMovieReviews,
};
