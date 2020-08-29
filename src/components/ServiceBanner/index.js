import React from "react";
import { Card, Row, Col, Jumbotron, Nav } from "react-bootstrap";
import "./style.css";

export default function () {
  return (
    <div>
      <Card.Header as="h5">SERVICES</Card.Header>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="#familyLaw">Family</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#civilBus">Civil/Business</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#otherAreas">Other Areas</Nav.Link>
        </Nav.Item>
      </Nav>
      <Row id="blocks" className="mr-1 pb-2">
        <Col className="col" id="familyLaw">
          <Jumbotron className='bg-light'>
            <h1 className="mb-4">Family Law & Divorce</h1>
            <br />
            <h5>Equitable distribution:</h5>
            Determination and allocation of marital assets and debts. What is
            marital property? What goes into the pot for distribution. Whether
            to sell the house or not? Who gets to live in the house? What are
            the tax ramifications? All these and other issues are discussed at
            length in Mediation.
            <br />
            <br />
            <h5>Child custody</h5>
            New Jersey courts have a policy favoring shared parental
            responsibility and frequent contact between a child and both
            parents. Beyond this, courts can divide physical and
            legal custody of a child between the parents in any way that serves
            the best interests of the child.
            <br />
            <br />
            <h5>Parenting Time</h5>
            The time the non-custodial parents spends with the child. Frequent
            contact of with the child is encouraged depending on the physical
            proximity and circumstances of the non- custodial parent. New Jersey
            courts actively encourage the parents to decide on Custody,
            parenting time and child support by themselves.
            <br />
            <br />
            <h5>Child Support</h5>
            Whether they are married or not, both parents are responsible for
            supporting their children financially until the children achieve
            majority. The State offers a guideline to calculate child support.
            However the parents are free to deviate from it and determine their
            own child support amount based on their own circumstances as long as
            it does not fall below the recommended amounts in the guideline.
            <br />
            <br />
            <h5>Spousal Support</h5>
            It is one spouse paying support to the other after a divorce.
            It&#39;s designed to help a lower-earning spouse who may have been
            out of the workforce, raising children or earning very little, to
            get through the divorce and regain self-sufficiency.
          </Jumbotron>
        </Col>
      </Row>
    </div>
  );
}
