import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Container from 'components/Container/Container';

import { getMovieReviews } from '../../services/MoviesApi';
import css from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviewsData = async () => {
      try {
        const response = await getMovieReviews(movieId);
        setReviews(response.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReviewsData();
  }, [movieId]);

  if (!reviews) {
    return;
  }

  return (

      <Container>
        <ul className={css['reviews-list']}>
          {reviews.length === 0 ? (
            <p className={css['no-found-text']}>
              Sorry, we have not found any review.
            </p>
          ) : (
            reviews.map(({ author, content, id }) => (
              <li className={css['reviews-list-item']} key={id}>
                <p className={css['reviews-author']}>Author: {author}</p>
                <p className={css['reviews-text']}>{content} </p>
              </li>
            ))
          )}
        </ul>
      </Container>
  );
};

export default Reviews;
