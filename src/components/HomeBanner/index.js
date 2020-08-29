import React from 'react';
import { Jumbotron, Button} from 'react-bootstrap';
import './style.css'; 

export default function (props){
    return(
      <Jumbotron className='bg-dark text-white'>
      <h2>On Common Ground</h2>
      <h6>
A holistic approach to resolving conflicts
      </h6>
      <br />
      <br />
<h5>COVID-19</h5>
      <p>
Due to the current unprecedented circumstances, access to the Courts and other avenues are very difficult. We are available to help you find immediate solutions to your emergent issues through ONLINE MEDIATION.
      </p>
      <p id="button">
        <Button variant="primary btn-sm">Get in touch</Button>
      </p>
    </Jumbotron>
    )
}