import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Container from 'components/Container/Container';
import SearchBar from 'components/SearchBar/SearchBar';
import MoviesList from 'components/MoviesList/MoviesList';
import { getSearchMovies } from '../services/MoviesApi';

const Movies = () => {

  const [searchMovies, setSearchMovies] = useState(null);
  const [searchParams] = useSearchParams();

  const httpGetParamMovieName = searchParams.get('name') ?? '';

  useEffect(() => {
    if (!httpGetParamMovieName) {
      return;
    }

    const fetchData = async () => {
      try {
        const response = await getSearchMovies(httpGetParamMovieName);
        setSearchMovies(response.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [httpGetParamMovieName]);

  return (
    <main>
        <Container>
          <SearchBar></SearchBar>
          {searchMovies && searchMovies.length > 0 ? (
            <MoviesList movies={searchMovies} />
          ) : searchMovies && searchMovies.length === 0 ? (
            <p>Sorry, we have not found any movies.</p>
          ) : (
            ''
          )}
        </Container>

    </main>
  );
};

export default Movies;
