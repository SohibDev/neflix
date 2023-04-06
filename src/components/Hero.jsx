import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaPlay } from "react-icons/fa";
import CardCarousel from './Carousel';

const HeroSection = () => {
  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url('https://picsum.photos/1920/810')`,
        height: '810px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container className="h-100">
        <Row className="h-100 align-items-center">
          <Col md={6} className="text-starttext-md-left">
            <p className="text-white font-weight-bold display-1 d-flex flex-column mt-5">Yanimda <span className='ps-3' style={{marginTop: '-40px'}}>Kal</span></p>
            <p className='fs-4 text-white'>Türkiye’de Bugün 4 Numara</p>
            <p className="text-white fs-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at tincidunt
              nulla, eget tristique leo.
            </p>
            <div className='d-flex gap-2'>
            <Button variant="" className="mr-3 display-1 bg-white d-flex align-items-center gap-2"><FaPlay /> Play</Button>
            <Button variant="" className='bg-secondary bg-gradient p-2 text-dark bg-opacity-50'>Daha Fazla Bilgi</Button>
            </div>
          </Col>
          <div>
            <h3 className='text-white mt-5'>Netflix'te Popüler</h3>
          </div>
        </Row>
      </Container>
          {/* <CardCarousel /> */}
    </div>
  );
};

export default HeroSection;
