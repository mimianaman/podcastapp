import React from "react";
import { Row, Col } from "react-bootstrap";
import { mdiDotsVertical } from "@mdi/js";
import Icon from "@mdi/react";
import profile1 from "../assets/images/profile1.png";
import beard from "../assets/images/beard-new.png";
import replace1 from "../assets/images/replace1.png";
import green from "../assets/images/green.png";

/**
 * @author
 * @function BottomBody
 **/

const BottomBody = (props) => {
  return (
    <div>
      <Icon
        path={mdiDotsVertical}
        title="User Profile"
        size={2}
        horizontal
        color=" #e63f36"
        className="doticon"
      />
      <Row className="topBorder mx-auto"></Row>
      <Row className="ml-1">
        <Col md={6}>
          <h4>podcast playlist</h4>
        </Col>
        <Col md={6}>
          <h4>podcast playlist</h4>
        </Col>
      </Row>
      <Row className="imageRow">
        <Col md={1}>
          <div>
            <img src={replace1} className="profiles1" />
          </div>
        </Col>
        <Col md={2}>
          <div className="bottomText">
            <h6>someone like you</h6>
            <p>adel</p>
          </div>
        </Col>
        <Col md={1}>
          <div>
            <img src={beard} className="profiles2 mr-5" />
          </div>
        </Col>
        <Col md={2}>
          <div className="bottomText">
            <h6>managing your time</h6>
            <p> Derick Gybson</p>
          </div>
        </Col>
        <Col md={1}>
          <div>
            <img src={profile1} className="profiles3" />
          </div>
        </Col>
        <Col md={2}>
          <div className="bottomText">
            <h6>how to be a good person</h6>
            <p>by Saha James</p>
          </div>
        </Col>
        <Col md={1}>
          <div>
            <img src={green} className="profiles4" />
          </div>
        </Col>
        <Col md={2}>
          <div className="bottomText">
            <h6>chandelier</h6>
            <p>by Sia</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BottomBody;
