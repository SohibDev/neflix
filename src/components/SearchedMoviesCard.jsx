import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function SearchedMoviesCard(props) {
  const { title, releaseDate, posterPath, id } = props;

  return (
    <Link to={`/movie/${id}`}>
      <Card className="bg-dark text-white mb-4">
        <Card.Img src={`https://image.tmdb.org/t/p/w500/${posterPath}`} alt={`${title} Poster`} />
        <Card.ImgOverlay>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            Released: {releaseDate}
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </Link>
  );
}

export default SearchedMoviesCard;
