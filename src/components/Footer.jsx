import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt  -3">
      <Container>
        <Row>
          <Col md={3} className="mb-3">
            <h3 style={{ color: '#e50914' }}>Netflix</h3>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white-50">About Us</a></li>
              <li><a href="#" className="text-white-50">Contact Us</a></li>
              <li><a href="#" className="text-white-50">Investor Relations</a></li>
              <li><a href="#" className="text-white-50">Careers</a></li>
            </ul>
          </Col>
          <Col md={3} className="mb-3">
            <h5>Legal</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white-50">Terms of Use</a></li>
              <li><a href="#" className="text-white-50">Privacy Statement</a></li>
              <li><a href="#" className="text-white-50">Cookie Preferences</a></li>
              <li><a href="#" className="text-white-50">Corporate Information</a></li>
            </ul>
          </Col>
          <Col md={3} className="mb-3">
            <h5>Help Center</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white-50">Account</a></li>
              <li><a href="#" className="text-white-50">Billing</a></li>
              <li><a href="#" className="text-white-50">Supported Devices</a></li>
              <li><a href="#" className="text-white-50">Getting Started</a></li>
            </ul>
          </Col>
          <Col md={3} className="mb-3">
            <h5>Follow Us</h5>
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item"><a target="_blank" href="https://www.facebook.com/profile.php?id=100083034646186" style={{ color: '#3b5998' }}><FaFacebookF /></a></li>
              <li className="list-inline-item"><a target="_blank" href="https://twitter.com/SohibjonUzoqov" style={{ color: '#1da1f2' }}><FaTwitter /></a></li>
              <li className="list-inline-item"><a target="_blank" href="https://t.me/sohibjon0101" style={{ color: '' }}><FaTelegram /></a></li>
              <li className="list-inline-item"><a target="_blank" href="https://www.instagram.com/sohibjon.uzoqov/"  style={{ color: '#e1306c' }}><FaInstagram /></a></li>
            </ul>
          </Col>
        </Row>
        <hr style={{ backgroundColor: 'white' }} />
        <Row>
          <Col md={8}>
            <p style={{ color: 'white' }}>&copy; 2023 Netflix, Inc.</p>
          </Col>
          <Col md={4}>
            <ul className="list-inline text-md-right">
              <li className="list-inline-item"><a href="#" style={{ color: 'white' }}>Terms</a></li>
              <li className="list-inline-item"><a href="#" style={{ color: 'white' }}>Privacy</a></li>
              <li className="list-inline-item"><a href="#" style={{ color: 'white' }}>Help</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
