import React from "react";
import { Nav, Row } from "react-bootstrap";
import "./style.css";

export default function () {
  return (
    <div id="navbar">
      <Row>
      <img
        src="images/logo2.png"
        id="logo"
        alt="Logo"
        className="pl-3 pt-2 d-inline-block align-top animate__animated animate__rollIn"
      /> <h2>On Common Ground</h2>
      <p id='logoText'>A holistic approach to resolving conflict</p>
      <Nav className="justify-content-end pt-5 pb-5 bg-transparent" activeKey="/home" sm>

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
