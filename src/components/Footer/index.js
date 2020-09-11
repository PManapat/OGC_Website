import  React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './style.css';

function Footer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <footer className="text-dark bg-white container-fluid text-center" sticky="bottom" id='footer'>
      <br />
        <div className='payment mt-3'>
<h6 className='container-fluid text-center mb-3'> All Payment Types Accepted</h6>
<span className="visa mr-4">
        Visa
        </span>
      <span className="mastercard link mr-4">
        Master Card
        </span>
      <span className="amex mr-4">
        American Express
        </span>
        <span className="paypal mr-4">
        Paypal
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
        <Modal.Body>Disclaimer details</Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Button variant="ml-3 mr-3 btn-sm btn-warning" onClick={handleShow}>
        Privacy Policy
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Privacy Policy</Modal.Title>
        </Modal.Header>
        <Modal.Body>Privacy Policy details</Modal.Body>
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