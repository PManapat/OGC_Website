import React from "react";
import { Jumbotron, Row, Col } from "react-bootstrap";
import './style.css';

export default function () {
  return (
      <Row>
        <Col className='col-7' id="advMediations">
        <Jumbotron className='bg-transparent'>
    <h4>Advantages of Mediation</h4>
    <br/>
    <br/>
<p />The result may benefit both or all sides and thus present a win/win solution.
<p />The outcome can be tailored to meet the unique needs of the case and the parties.
<p />It is extremely cost effective.
<p />The parties are always in control.
<p />It is time saving. Disputes are resolved in less time and more efficently.
<p />It preserves the intergrity of relationships and helps people in moving on.
<p />It helps maintain privacy and dignity of individuals and entities.
<p />The best part is that Mediation is absolutely confidential. 
<p />That is what transpires in Mediation is private and the records of the Mediator cannot be used in or subpoenard for litigation without the parties, consent**.
</Jumbotron>
        </Col>

        <Col>
        <Jumbotron className='mr-5 pr-5'id='img2'>
</Jumbotron>
        </Col>
      </Row>
  );
}
