import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

export default function () {
  return (
    <Container className='mb-4 pb-4'>
      <h4 className='mt-4 pt-4 mb-4 pb-4'>
        There are many other related issues that are addressed in Mediation:
      </h4>
      <Row className="mt-3">
        <Col className="col-4 text-left" id="mediation">
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
          Childen with disabilities
          <p />
          Children’s college tuition
          <p />
          Custody, parenting time and holidays during COVID-19
          <p />
          Tax ramifications of equitable distribution, spousal support and child
          support
          
        </Col>
        <Col />
        <Col className="col-4 text-left">
        <p />
          Dissolution of same sex relationship
        <p />
          Pet related issues
          <p /> Extended family issues (step parents, step-children,
          grandparents and other relatives)
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
        </Col>
      </Row>
    </Container>
  );
}
