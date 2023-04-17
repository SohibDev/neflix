import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function MovieCard({ movie }) {
  const releaseYear = movie.release_date && movie.release_date.substring(0, 4);

  return (
    <Card>
      <Link to={`/movies/${movie.id}`}>
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
      </Link>
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{releaseYear}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
