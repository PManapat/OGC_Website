import React from 'react';
import { Jumbotron, Button} from 'react-bootstrap';
import './style.css'; 

export default function (props){
    return(
          <div>
      <div id='covid'>
      <h5>COVID-19</h5>
            <p>
      Due to the current unprecedented circumstances, access to the Courts and other avenues are very difficult. We are available to help you find immediate solutions to your emergent issues through ONLINE MEDIATION.
            </p>
            </div>
      <Jumbotron className='bg-dark text-white'>
      <h1>On Common Ground</h1>
      <h5 className='mt-3'>
A holistic approach to resolving conflicts
      </h5>
      <p id="button">
        <Button variant="warning btn-lg" href='/contact'>Get in touch</Button>
      </p>
    </Jumbotron>
    </div>
    )
}