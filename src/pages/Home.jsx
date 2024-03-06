import { useState, useEffect } from 'react';
import Container from 'components/Container/Container';
import MoviesList from 'components/MoviesList/MoviesList';
import { getTrendingMovies } from 'services/MoviesApi';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTrendingMovies();
        setTrendingMovies(response.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
     <script src="https://event.webinarjam.com/register/7y8y6sm/embed-bar?buttonText=Register&buttonBgColor=%23FFFFFF&buttonBgOpacity=1&barBgColor=%2329b6f6&barBgOpacity=0.95&formTemplate=4&formColor=1"></script>
        <Container>
          <h1>Trending today</h1>
          <MoviesList movies={trendingMovies} />
        </Container>

    </main>
  );
};

export default Home;
