// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-light py-3 mt-auto">
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; 2024 BuskingMaps. All rights reserved.</p>
            <p>Made by <a href="https://philmarshall.dev" target="_blank" rel="noopener noreferrer">Phil Marshall</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
