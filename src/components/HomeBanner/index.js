import React from 'react';
import { Jumbotron, Button, Col } from 'react-bootstrap';
import './style.css'; 

export default function (props){
    return(
          <div>
      <Jumbotron id='banner' className='bg-dark text-white'>
      <h3>A Holistic Approach to</h3>
      <h1 className='mt-3'>
RESOLVING CONFLICTS
      </h1>
      <p id="button" className='pb-5 mb-5'>
        <Button variant="warning btn-lg" href='/contact'>Get in touch</Button>
      </p>
      <Col className='col-12' id='covid'>
      <h3>COVID-19</h3>
            <p>
      Due to the current unprecedented circumstances, access to the Courts and other avenues are very difficult. We are available to help you find immediate solutions to your emergent issues through ONLINE MEDIATION.
            </p>
            </Col>
    </Jumbotron>
    </div>
    )
}