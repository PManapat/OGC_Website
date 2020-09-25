import React from "react";
import { Jumbotron, Row, Col } from "react-bootstrap";
import "./style.css";

export default function () {
  return (
    <Row id="blocks" className="mt-3">
      <Col>
        <Jumbotron id="serviceImg1"></Jumbotron>
      </Col>
      <Col className="col-6" id="mediation">
        <Jumbotron className='bg-transparent'>
          <h3>
            There are many other related issues that are addressed in Mediation:
          </h3>
          <p />
          Childen with disabilities
          <p />
          Children’s college tuition
          <p />
          Custody, parenting time and holidays during COVID-19
          <p />
          Tax ramifications of equitable distribution, spousal support and child
          support
          <p />
          Dissolution of same sex relationship
          <p />
          Pet related issues
          <p />
          Extended family issues (step parents – step children – grandparents
          and other relatives)
          <p />
          Parents and adult children (living at home) agreements
          <p />
          Prenupitals
          <p />
          Post divorce issues
          <p />
          Cohabitation
          <p />
          Palimony
          <p />
          Decision making for elders
          <p />
          Estate issues
        </Jumbotron>
      </Col>
      <Col>
        <Jumbotron id="serviceImg2"></Jumbotron>
      </Col>
    </Row>
  );
}
