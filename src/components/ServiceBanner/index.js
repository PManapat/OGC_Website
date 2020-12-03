import React from "react";
import { Nav, Card, Row, Col, Jumbotron } from "react-bootstrap";
import "./style.css";

export default function () {
  return (<div>
        <Card.Header className="text-warning" id="band1" as="h3">
          SERVICES
        </Card.Header>
        <Nav className="justify-content-center pt-3 pb-3" id="servNav">
    <Nav.Item>
      <Nav className="mr-5 pr-4" >FAMILY LAW</Nav>
    </Nav.Item>
    <Nav.Item>
      <Nav className="mr-5 pr-4">CIVIL, BUSINESS & OTHER ARES</Nav>
    </Nav.Item>
    <Nav.Item>
      <Nav className="mr-5 pr-4">QUESTIONS & ANSWERS</Nav>
    </Nav.Item>
    <Nav.Item>
    <Nav className="mr-5 pr-4" >NEWS, VEIWS & REVEIWS</Nav>
    </Nav.Item>
  </Nav>
      <Row> 
        <Col className="pb-3 pt-3 text-white" id="band"><h4>FAMILY LAW</h4></Col>
      </Row>
      <Row id="blockOneBg">
      <Col className="col">
          <Jumbotron id="equDisImg" className="ml-5"></Jumbotron>
        </Col>
        <Col className="col-9" id="equDis">
          <Jumbotron className="bg-transparent">
            <h2 className='animate__animated animate__bounceInRight text-center'>Equitable distribution</h2>
            <br /><p className='text-left'>
            Determination and allocation of marital assets and debts. What is
            marital property? What goes into the pot for distribution. Whether
            to sell the house or not? Who gets to live in the house? What are
            the tax ramifications? All these and other issues are discussed at
            length in Mediation.</p>
            <br />
            <br />
          </Jumbotron>
        </Col>
      </Row>
      <Row id="blockTwoBg">
        <Col className="col-9" id="childCus">
          <Jumbotron className="bg-transparent">
            <h4 className='animate__animated animate__bounceInLeft'>Child custody</h4>
            <br />
            <p>New Jersey courts have a policy favoring shared parental
            responsibility and frequent contact between a child and both
            parents. Beyond this, courts can divide physical and
            legal custody of a child between the parents in any way that serves
            the best interests of the child.</p>
          </Jumbotron>
        </Col>
        <Col className="col">
          <Jumbotron id="childCusImg" className="mr-5"></Jumbotron>
        </Col>
      </Row>
      <Row id="blockFiveBg">
      <Col className="col">
          <Jumbotron id="parentImg" className="ml-5"></Jumbotron>
        </Col>
        <Col className="col-9" id="parentTime">
          <Jumbotron className="bg-transparent">
            <h4 className='animate__animated animate__bounceInRight'>Parenting Time</h4>
            <br />
            <p className='text-left'>
The time the non-custodial parents spends with the child. Frequent
            contact of with the child is encouraged depending on the physical
            proximity and circumstances of the non- custodial parent. New Jersey
            courts actively encourage the parents to decide on Custody,
            parenting time and child support by themselves.</p>
            <br />
            <br />
          </Jumbotron>
        </Col>
      </Row>
      <Row id="blockThreeBg">
        <Col className="col-9" id="childSup">
          <Jumbotron className="bg-transparent">
            <h4 className='animate__animated animate__bounceInLeft text-center'>Child Support</h4>
            <br /><p className='text-left'>
            Whether they are married or not, both parents are responsible for
            supporting their children financially until the children achieve
            majority. The State offers a guideline to calculate child support.
            However the parents are free to deviate from it and determine their
            own child support amount based on their own circumstances as long as
            it does not fall below the recommended amounts in the guideline.</p>
            <br />
            <br />
          </Jumbotron>
        </Col>
        <Col className="col">
          <Jumbotron className='mr-5 mt-5' id="childSupImg"></Jumbotron>
        </Col>
      </Row>
      <Row id="blockFourBg" className="pb-2">
      <Col className="col">
          <Jumbotron id="spousalSupImg" className="ml-5 mt-5"></Jumbotron>
        </Col>
        <Col className="col-9">
          <Jumbotron className="bg-transparent">
            <h4 className='animate__animated animate__bounceInRight'>Spousal Support</h4>
            <br />
            <p className='text-left'>It is one spouse paying support to the other after a divorce.
            It&#39;s designed to help a lower-earning spouse who may have been
            out of the workforce, raising children or earning very little, to
            get through the divorce and regain self-sufficiency.
            </p><br />
            <br />
          </Jumbotron>
        </Col>
      </Row>
      </div>
  );
}
