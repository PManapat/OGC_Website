import React from "react";
import { Card, Row, Col, Jumbotron, Nav } from "react-bootstrap";
import "./style.css";

export default function () {
  return (
    <div>
      <Card.Header as="h2">CONTACT</Card.Header>
      <Row id="blocks" className="mr-1 pb-2">
        <Col className='contact' id="contact">
          <Jumbotron className='bg-transparent'>
            Call: <a href="tel:877=744=3944">(877) 744-3944</a>
            <br /> <span>Or Email: </span>
            <a href="mailto:mrajda@oncommonground.biz">
              mrjda@oncommonground.biz
            </a>
            <br />
            <br />
            We serve most of the Counties in New Jersey and New York. If you or
            the other party is out of state or outside the US, you can avail of
            our innovative online ODR system. It can be done from the privacy of
            your office or your home wherever you are. Please send us an email
            indicating the same and we will contact you with further
            information.
            <br />
            <br />
            <p>
              For those suffering from financial hardship, please contact us to discuss pro bono publico. Applicable to those who may qualify,
            </p>
          </Jumbotron>
        </Col>
      </Row>
    </div>
  );
}
