import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";

function NewPopular() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=2549127d548d3a2f96bb538a296a8058&language=en-US&page=3"
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <Container>
      <h1 className="mt-4 mb-4">New and Popular</h1>
      <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
        {movies &&
          movies.map((movie) => (
            <Col key={movie.id}>
              <Card>
                <Link to={`/movies/${movie.id}`}>
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  />
                </Link>
                <Card.Body>
                  <Card.Title className="mb-1 text-truncate">{movie.title}</Card.Title>
                  <Card.Text>
                    {movie.release_date && (
                      <small className="text-muted">
                        {new Date(movie.release_date).getFullYear()}
                      </small>
                    )}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default NewPopular;
