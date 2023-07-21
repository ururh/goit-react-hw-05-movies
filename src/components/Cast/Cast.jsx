import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'components/Container/Container';
import { getMovieCasts } from '../../services/MoviesApi';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCastData = async () => {
      try {
        const response = await getMovieCasts(movieId);
        setCasts(response.cast);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch cast data.');
        setLoading(false);
      }
    };

    fetchCastData();
  }, [movieId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Container>
      <div className={css['casts-list']}>
        {casts.map(({ profile_path, name, character, id }) => (
          <div className={css['casts-list-item']} key={id}>
            <img
              src={`https://image.tmdb.org/t/p/original${profile_path}`}
              alt={`${name}'s profile`}
              className={css['cast-img']}
            />
            <p className={css['casts-text']}>{name}</p>
            <p className={css['casts-text']}>Character: {character}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Cast;
