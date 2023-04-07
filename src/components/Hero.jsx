import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";

const HeroSection = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=2549127d548d3a2f96bb538a296a8058&language=en-US&page=${
          Math.floor(Math.random() * 500) + 1
        }
      `
      )
      .then((response) => {
        setMovie(response.data.results[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`,
        height: "810px",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container className="h-100">
        <Row className="h-100 align-items-center">
          <Col md={6} className="text-starttext-md-left">
            <p className="text-white font-weight-bold display-1 d-flex flex-column mt-5">
              {movie.title}
            </p>
            <p className="fs-4 text-white">Popularity: {movie.popularity}</p>
            <p className="text-white fs-5">{movie.overview}</p>
            <div className="d-flex gap-2">
              <Button
                variant=""
                className="mr-3 display-1 bg-white d-flex align-items-center gap-2"
              >
                <FaPlay /> Play
              </Button>
              <Button
                variant=""
                className="bg-secondary bg-gradient p-2 text-dark bg-opacity-50"
              >
                Daha Fazla Bilgi
              </Button>
            </div>
          </Col>
          <div>
            <h3 className="text-white mt-5">Netflix'te Popüler</h3>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
