import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

function Movie() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => console.error(error));
  }, [id]);

  return (
    <Container className="my-5">
      <Row>
        <Col md={4}>
          <Card className="border-0 shadow-sm">
            <Card.Img variant="top" src="https://via.placeholder.com/300x450" />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>{movie.body}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <Card.Title>Overview</Card.Title>
              <Card.Text>{movie.body}</Card.Text>
            </Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <strong>Release Date:</strong> 2022-05-01
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Director:</strong> John Doe
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Cast:</strong> Jane Doe, Adam Smith, Sarah Johnson
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Genres:</strong> Action, Thriller
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Movie;
