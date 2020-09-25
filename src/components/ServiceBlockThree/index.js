import React from "react";
import { Jumbotron, Row, Col } from "react-bootstrap";
import "./style.css";

export default function () {
  return (
    <Row className=" pt-4">
      <Col className="col-8">
        <Jumbotron id="otherAreas" className='bg-transparent'>
          <h2 className="mb-4">Other areas include:</h2>
          <p>Partnerships (formation and/or dissolution)</p>
<p>Professional liability claims</p>
<p>Breach of contract</p>
<p>Breach of fiduciary duties </p>
<p>Closely held business disputes </p>
<p>Construction disputes </p>
<p>Neighbor disputes </p>
<p>Family business disputes </p>
<p>Family estate transitions </p>
<p>Consumer disputes </p>
        </Jumbotron>
      </Col>
      <Col>
        <Jumbotron id="serviceImg3"></Jumbotron>
      </Col>
    </Row>
  );
}
