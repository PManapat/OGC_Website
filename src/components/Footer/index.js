import React from 'react';
import { Button } from 'react-bootstrap';
import './style.css';

function Footer() {
  return (
    <footer className="text-dark bg-white container-fluid text-center" sticky="bottom" id='footer'>
      <br />
      <br />
      <Button className="link mr-2 btn-sm btn-primary" href="#">
        Disclaimer
        </Button>
      <Button className="link mr-2 btn-sm btn-primary" href="#">
        Privacy Policy
        </Button>
      <Button className="link mr-2 btn-sm btn-primary" href="#">
        Contact
        </Button>
      <p className="mt-1 pt-4">
        On Common Ground Services © 2020 | All rights reserved.
        </p>
      <br />
    </footer>
  );
}

export default Footer;