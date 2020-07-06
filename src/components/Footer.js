import React from "react";
import { Row, Col } from "react-bootstrap";
import green from "../assets/images/green.png";
import { mdiPlayCircleOutline } from "@mdi/js";
import Icon from "@mdi/react";

/**
 * @author
 * @function Footer
 **/

const Footer = (props) => {
  return (
    <div className="footer bg-blue p-1 ">
      <footer>
        <Row className="mt-4">
          <Col md={1}>
            <div className="mt-5">
              <img src={green} className="profiles4" />
            </div>
          </Col>
          <Col md={2}>
            <div className="bottomText">
              <h6>chandelier</h6>
              <p>by Sia</p>
            </div>
          </Col>
          <div className="vertical"></div>
          <Icon
            path={mdiPlayCircleOutline}
            title="User Profile"
            size={2}
            horizontal
            color=" yellow"
            className="playicon"
          />
        </Row>
      </footer>
    </div>
  );
};

export default Footer;
