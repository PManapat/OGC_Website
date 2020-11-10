import React from "react";
import { Jumbotron, Row, Col } from "react-bootstrap";
import "./style.css"

export default function () {
  return (
      <Row id="blocks">
        <Col>
        <Jumbotron id='img'>
</Jumbotron>
        </Col>
        <Col className='col-8' id="mediation">
        <div className='mt-4 pt-4'>
    <h2>What is Mediation?</h2>
    <br/>
    <br/>
    <p>
      Mediation is a dispute resolution process in which an impartial third party - the Mediator - facilitates negotiations among the parties to help them reach a mutually acceptable settlement. Mediation is the most potent alternative to litigation. It is time saving, private and most cost-effective.
    </p>
    <br />
    <p>
      Holistic mediation is an active and empowering appriach. Mediation is all about self-determination. We strive to empower the parties by giving them the tools to march towards self-determined outcomes. We believe that almost all disputes can be resolved out the court if the parties are determined to do so.
    </p>
    <br />
    <p> Let us help you meet on common ground.</p>
</div>
        </Col>
        <Jumbotron className='col-12 pt-5 pb-5 mb-5' id='niche'>
      <h1 className='animate__animated animate__fadeInRight'>Our Niche</h1>
      <br/>
            <p>
      Multicultural, multi-religious, multi-language, global understanding and resolution of issues in a non-judgmental setting.
            </p>
            </Jumbotron>
      </Row>
  );
}
