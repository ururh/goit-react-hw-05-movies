import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './GeneralMovieInformation.module.css';

const GeneralMovieInformation = ({
  posterPath,
  title,
  popularity,
  overview,
  genres,
}) => {
  const location = useLocation();

  return (
    <div className={styles.informationWrapper}>
      <Link to={location.state} className={styles.goBackBtn}>
        Back
      </Link>
      <div className={styles.movieInfoContainer}>
        <img src={posterPath} alt="Movie Poster" className={styles.poster} />
        <div className={styles.textWrapper}>
          <h1 className={styles.mainTitle}>{title}</h1>
          <p className={styles.rating}>User rating: {popularity} from 10</p>
          <h2 className={styles.sectionTitle}>Overview</h2>
          <p className={styles.sectionText}>{overview}</p>
          <h2 className={styles.sectionTitle}>Genres</h2>
          <p className={styles.genres}>{genres}</p>
        </div>
      </div>
    </div>
  );
};

GeneralMovieInformation.propTypes = {
  posterPath: PropTypes.string,
  title: PropTypes.string,
  popularity: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.string,
};

export default GeneralMovieInformation;
