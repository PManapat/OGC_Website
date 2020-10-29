import  React, { useState } from 'react';
import { Button, Modal, Col, Row } from 'react-bootstrap';
import './style.css';

function Footer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <footer className="text-dark bg-white container-fluid text-center" sticky="bottom" id='footer'>
      <Row id='footBanner' className='pt-2 pb-2'>
      <Col sm><a className='text-white' href="tel:+18622630211">(862)263-0211</a></Col>
      <Col sm><a className='text-white' href="mailto:mrajda@oncommonground.biz">
              mrajda@oncommonground.biz
            </a></Col>
      <Col sm>By Appointment</Col>
      </Row>
      <br />
        <div className='payment mt-3'>
<h6 className='container-fluid text-center mb-3'> All Payment Types Accepted</h6>
<span className="visa mr-4">
        <img src='images/visa.png' alt="Visa"/>
        </span>
      <span className="mastercard mr-4" id='mastercard'>
      <img src='images/mastercard.png' alt="Mastercard"/>
        </span>
      <span className="amex mr-4">
      <img src='images/amex.png' alt="American Express"/>
        </span>
        <span className="paypal mr-4">
        <img src='images/venmo.png' alt="Venmo"/>
        </span>
        </div>
        <br />
        <Button variant="ml-3 mr-3 btn-sm btn-warning" onClick={handleShow}>
        Disclaimer
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Disclaimer</Modal.Title>
        </Modal.Header>
        <Modal.Body>The information provided on this website does not, and is not intended to, constitute legal advice; instead, all information, content, and materials available on this site are for general informational purposes only.</Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      
      <Button className="link ml-2 mr-2 btn-sm btn-warning" href="#/contact">
        Contact
        </Button>
      <p className="mt-1 pt-4">
        On Common Ground © 2020 | All rights reserved.
        </p>
      <br />
    </footer>
  );
}

export default Footer;