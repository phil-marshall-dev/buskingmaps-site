import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Outlet } from "react-router-dom";
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Container>
        <Navbar />
        <Row className="justify-content-md-center mt-4 mb-4">
          <Col xs={12} md={6}>
            <Outlet />
          </Col>
        </Row>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
