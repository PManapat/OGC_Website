import React from 'react';
import { Nav } from 'react-bootstrap';
import './style.css';

export default function(){
    return(
      <div id='navbar'>
        <img
        src="images/logo.jpg"
        id="logo"
        alt="Logo"
        className="d-inline-block align-top"
      />
      <Nav className="justify-content-end pt-4 pb-4" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/services">Services</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
    )
}