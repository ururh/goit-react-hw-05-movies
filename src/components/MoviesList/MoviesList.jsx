import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <div className={css.moviesList}>
      {movies.length > 0 ? (
        <ul className={css.moviesGrid}>
          {movies.map((movie) => (
            <li className={css.moviesListItem} key={movie.id}>
              <Link
                className={css.moviesListLink}
                to={`/movies/${movie.id}`}
                state={location}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                  className={css.moviePoster}
                />
                <h3 className={css.movieTitle}>{movie.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.noFoundText}>No movies found.</p>
      )}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MoviesList;
