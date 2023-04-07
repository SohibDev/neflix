import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const NotFoundPage = () => {
  return (
    <Container className="mt-5 text-white">
      <Row>
        <Col>
          <h1 className="text-center">404</h1>
          <h3 className="text-center mb-4">Page not found</h3>
          <p className="text-center">The page you are looking for does not exist.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFoundPage;
