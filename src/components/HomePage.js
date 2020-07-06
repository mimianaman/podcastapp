import React from "react";
import { Row, Col, Navbar } from "react-bootstrap";
import Header from "./Navbar";
import Body from "./Body";
import Photos from "./Photos";
import BottomBody from "./BottomBody";
import Footer from "./Footer";

/**
 * @author
 * @function HomePage
 **/

const HomePage = (props) => {
  return (
    <div className="container-fluid">
      <Row>
        <Col md={12} className="first-container">
          <Header />
          <Body />
          <Photos />
          <BottomBody />
          <Footer />
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
