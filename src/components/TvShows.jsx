import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";

function TvShows() {
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    const fetchTvShows = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/tv/popular?api_key=2549127d548d3a2f96bb538a296a8058&language=en-US&page=10"
        );
        setTvShows(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTvShows();
  }, []);

  const formatOverview = (overview) => {
    if (!overview) {
      return "";
    }
    const MAX_LINES = 2;
    const words = overview.split(" ");
    if (words.length <= MAX_LINES * 6) {
      return overview;
    }
    return `${words.slice(0, MAX_LINES * 6).join(" ")}...`;
  };

  return (
    <div className="container my-5">
      <h1 className="mb-5" style={{ color: "black" }}>Popular TV Shows</h1>
      <Row xs={1} md={2} lg={4} className="g-4">
        {tvShows.map((show) => (
          <Col key={show.id}>
            <Card className="h-100" style={{ height: "", }}>
              <Link to={`/movies/${show.id}`}>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`}
                  alt={show.name}
                />
              </Link>
              <Card.Body>
                <Card.Title style={{ color: "black" }}>{show.name}</Card.Title>
                <Card.Text>{formatOverview(show.overview)}</Card.Text>
                <Card.Text>
                  {show.first_air_date && (
                    <small className="text-muted">
                      {new Date(show.first_air_date).getFullYear()}
                    </small>
                  )}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default TvShows;
