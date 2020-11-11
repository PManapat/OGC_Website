import React from "react";
import { Nav, Row, Col } from "react-bootstrap";
import "./style.css";

export default function () {
  return (
    <div id="navbar">
      <Row>
        <Col id='siteLogo'>
          <img
            src="images/logo2.png"
            id="logo"
            alt="OCG Logo"
            className="pl-3 pt-2 d-inline-block align-top animate__animated animate__rollIn"
          />{" "}
          <h2 className="ml-3 pl-3 pt-2 mt-2">On Common Ground</h2>
          <p className="ml-3 pl-3" id="logoText">
          A holistic approach to resolving conflict
        </p>
        </Col>
      <Nav
        className="justify-content-end pt-5 pb-5 pr-5 pl-4 bg-transparent"
        activeKey="/home"
        sm
      >
        <Nav.Item>
          <Nav.Link href="#/home" className="text-dark">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#/about" className="text-dark">
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#/services" className="text-dark">
            Services
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#/contact" className="text-dark">
            Contact
          </Nav.Link>
        </Nav.Item>
      </Nav>
      </Row>
    </div>
  );
}
