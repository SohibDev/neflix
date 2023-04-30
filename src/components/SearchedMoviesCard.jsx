import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function SearchedMoviesCard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedMovies, setSearchedMovies] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=2549127d548d3a2f96bb538a296a8058&query=${searchTerm}`
      );
      const data = await response.json();
      setSearchedMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <form onSubmit={handleSearch}>
            <div className="d-flex">
              <input
                type="text"
                placeholder="Search for movies..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className="form-control me-2"
              />
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
          </form>
        </Col>
      </Row>
      <Row>
        {searchedMovies.map((movie) => (
          <Col key={movie.id} md={3} className="my-3">
            <Card style={{ height: "100%" }}>
              {movie.poster_path ? (
                <Link to={`/movies/${movie.id}`}>
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                  />
                </Link>
              ) : (
                <div className="no-poster card-img-top">
                  <p>No poster available</p>
                </div>
              )}
              <Card.Body>
                <Card.Title className="mb-0">{movie.title}</Card.Title>
                <Card.Text>{movie.release_date}</Card.Text>
                <Link to={`/movies/${movie.id}`}>
                  <Button variant="primary">Go somewhere</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {searchedMovies.length === 0 && (
          <div className="col-12 text-center text-white-50 mt-3">
            <p>Write something...</p>
          </div>
        )}
      </Row>
    </Container>
  );
}

export default SearchedMoviesCard;
