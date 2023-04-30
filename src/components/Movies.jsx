import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=2549127d548d3a2f96bb538a296a8058&language=en-US&page=1"
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, []);

  const shortenOverview = (overview) => {
    const words = overview.split(' ');
    if (words.length > 20) {
      return words.slice(0, 20).join(' ') + '...';
    } else {
      return overview;
    }
  };

  return (
    <div className="container my-5">
      <h1 className="mb-5 text-white-50">Popular Movies</h1>
      <Row xs={1} md={2} lg={4} className="g-4">
        {movies.map((movie) => (
          <Col key={movie.id}>
            <Card className="h-100">
              <Link to={`/movies/${movie.id}`}>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  className="h-100"
                />
              </Link>
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text className="text-truncate">{shortenOverview(movie.overview)}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Movies;
