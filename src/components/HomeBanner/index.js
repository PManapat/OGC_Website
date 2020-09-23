import React from 'react';
import { Jumbotron, Button} from 'react-bootstrap';
import './style.css'; 

export default function (props){
    return(
          <div>
      <Jumbotron id='banner' className='bg-dark text-white'>
      <h3>A Holistic Approach to</h3>
      <h1 className='mt-3'>
RESOLVING CONFLICTS
      </h1>
      <p id="button">
        <Button variant="warning btn-lg" href='/contact'>Get in touch</Button>
      </p>
      <div id='covid'>
      <h5>COVID-19</h5>
            <p>
      Due to the current unprecedented circumstances, access to the Courts and other avenues are very difficult. We are available to help you find immediate solutions to your emergent issues through ONLINE MEDIATION.
            </p>
            </div>
    </Jumbotron>
    </div>
    )
}