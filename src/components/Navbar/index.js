import React from "react";
import { Nav } from "react-bootstrap";
import "./style.css";

export default function () {
  return (
    <div id="navbar">
      <img
        src="images/logo.jpg"
        id="logo"
        alt="Logo"
        className="d-inline-block align-top"
      />
      <Nav className="justify-content-end pt-5 pb-5 bg-white" activeKey="/home" sm>
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
    </div>
  );
}
