import React, { useEffect, useState, Suspense } from 'react';
import { NavLink, useParams, Outlet, useLocation } from 'react-router-dom';
import Container from 'components/Container/Container';
import GeneralMovieInformation from 'components/GeneralMovieInformation/GeneralMovieInformation';
import { getMovieGeneralInformation } from '../../services/MoviesApi';
import css from './MoviesDetails.module.css';

const MoviesDetails = () => {
  const [movieInformation, setMovieInformation] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMovieGeneralInformation(movieId);
        setMovieInformation(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [movieId]);

  if (!movieInformation) {
    return (
      <Container>
        <div className={css.loadingText}>Loading page...</div>
      </Container>
    );
  }

  const { poster_path, title, vote_average, overview, genres } =
    movieInformation;

  const navLinkClassName = ({ isActive }) =>
    isActive ? css.active : css.navLink;

  return (
    <main>
      <Container>
        <GeneralMovieInformation
          posterPath={`https://image.tmdb.org/t/p/w342/${poster_path}`}
          title={title}
          popularity={vote_average}
          overview={overview}
          genres={
            genres && genres.length > 0
              ? genres.map(({ name }) => name).join(', ') + '.'
              : ''
          }
        />
        <ul className={css.navLinkList}>
          <li>
            <NavLink
              state={location.state}
              className={navLinkClassName}
              to="cast"
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              state={location.state}
              className={navLinkClassName}
              to="reviews"
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </Container>
      <Suspense
        fallback={
          <Container>
            <div className={css.loadingText}>Loading page...</div>
          </Container>
        }
      >
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MoviesDetails;
