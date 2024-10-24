import React from "react";
import { Container, Row, Col, Navbar, Image } from "react-bootstrap";
import "../css/Body.css"; // Import external CSS
import Lemo from "../images/Lemo.jpg"
const Sportify = () => {
  return (
    <div className="sportify-background">
      <Container fluid>
        <Row>
          {/* Left Div */}
          <Col md={6} className="left-section">
            <Navbar className="navbar-section">
              <Navbar.Brand href="#home" className="navbar-brand">
                <img
                  src="/path/to/logo.png" // Replace with actual path to the logo
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="Sportify logo"
                />{" "}
                Sportify
              </Navbar.Brand>
            </Navbar>
            <div className="content-section">
              <h2 className="main-heading">Fully Customizable</h2>
              <h2 className="sub-heading">App UI Kit</h2>
              <p className="created-by">Created by</p>
              <p className="visiata">VISIATA</p>
            </div>
          </Col>

          {/* Right Div */}
          <Col md={6} className="right-section">
            <Image
              src= {Lemo} // Replace with actual path to the image
              className="right-image"
              alt="App UI Kit Preview"
              fluid
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Sportify;
