import React, { useState } from "react";
import { Accordion, Card, Button } from "react-bootstrap";

function Contact() {
    return(
        <div>
           <Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Email
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>something@oncommonground.biz</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Phone
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>1-887-get-common</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
        </div>
    )
}
export default Contact;