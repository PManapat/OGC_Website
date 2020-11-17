import React from "react";
import { Jumbotron, Row, Col } from "react-bootstrap";
import "./style.css";

export default function () {
  return (
    <Row className="pt-4">
      <Col className="col-1"/>
      <Col className="col-4">
        <Jumbotron id="otherAreas" className='bg-transparent'>
          <h4 className="mb-4 text-center pr-5">Other areas include:</h4>
          <Row><Col><p>Partnerships (formation, dissolution)</p>
<p>Professional liability claims</p>
<p>Breach of contract</p>
<p>Breach of fiduciary duties </p>
<p>Closely held business disputes </p></Col>
<Col>
<p>Construction disputes </p>
<p>Neighbor disputes </p>
<p>Family business disputes </p>
<p>Family estate transitions </p>
<p>Consumer disputes </p></Col></Row>
        </Jumbotron>
      </Col>
      <Col className="col mr-4">
        <Jumbotron id="serviceImg3"></Jumbotron>
      </Col>
    </Row>
  );
}
