import React from "react";
import { Card, Row, Col, Jumbotron } from "react-bootstrap";
import "./style.css";

export default function () {
  return (
    <div>
      <div>
        <Card.Header className="text-warning" id="band" as="h1">
          SERVICES
        </Card.Header>
      </div>
      <h1 id='famDiv' className="mb-4 mt-4 pb-5 pt-5">
        FAMILY LAW
      </h1>
      <Row id="blocks" className="mr-1 pb-2">
        <Col className="col" id="divorce">
          <Jumbotron className="bg-transparent">
            <h1 className="mb-1">Divorce</h1>
            <br />
            <h2>Equitable distribution:</h2>
            <br />
            Determination and allocation of marital assets and debts. What is
            marital property? What goes into the pot for distribution. Whether
            to sell the house or not? Who gets to live in the house? What are
            the tax ramifications? All these and other issues are discussed at
            length in Mediation.
            <br />
            <br />
          </Jumbotron>
        </Col>
      </Row>
      <Row id="blocks" className="mr-1">
        <Col className="col-6 mr-3" id="childCus">
          <Jumbotron className="bg-transparent">
            <h2>Child custody</h2>
            <br />
            New Jersey courts have a policy favoring shared parental
            responsibility and frequent contact between a child and both
            parents. Beyond this, courts can divide physical and
            legal custody of a child between the parents in any way that serves
            the best interests of the child.
          </Jumbotron>
        </Col>
        <Col className="col">
          <Jumbotron id="childCusImg"></Jumbotron>
        </Col>
      </Row>
      <Row id="blocks" className="mr-1 pb-2">
        <Col className="col" id="parentTime">
          <Jumbotron className="bg-transparent">
            <h2>Parenting Time</h2>
            <br />
            The time the non-custodial parents spends with the child. Frequent
            contact of with the child is encouraged depending on the physical
            proximity and circumstances of the non- custodial parent. New Jersey
            courts actively encourage the parents to decide on Custody,
            parenting time and child support by themselves.
            <br />
            <br />
          </Jumbotron>
        </Col>
      </Row>
      <Row id="blocks" className="mr-1">
        <Col className="col">
          <Jumbotron id="childSupImg"></Jumbotron>
        </Col>
        <Col className="col-6 mr-3" id="childSup">
          <Jumbotron className="bg-transparent">
            <h2>Child Support</h2>
            <br />
            Whether they are married or not, both parents are responsible for
            supporting their children financially until the children achieve
            majority. The State offers a guideline to calculate child support.
            However the parents are free to deviate from it and determine their
            own child support amount based on their own circumstances as long as
            it does not fall below the recommended amounts in the guideline.
            <br />
            <br />
          </Jumbotron>
        </Col>
      </Row>
      <Row id="blocks" className="mr-1 pb-2">
        <Col className="col" id="SpousalSup">
          <Jumbotron className="bg-transparent">
            <h2>Spousal Support</h2>
            <br />
            It is one spouse paying support to the other after a divorce.
            It&#39;s designed to help a lower-earning spouse who may have been
            out of the workforce, raising children or earning very little, to
            get through the divorce and regain self-sufficiency.
            <br />
            <br />
          </Jumbotron>
        </Col>
      </Row>
    </div>
  );
}
