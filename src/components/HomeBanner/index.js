import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './style.css'; 

export default function (props){
    return(
          <div> 
          <Card.Header className="text-warning" id="band1" as="h3">
  HOME
</Card.Header>
      <div id='banner' className='bg-dark text-white'>
      <h2 className='animate__animated animate__fadeInRight text-center'> A Holistic Approach to</h2>
      <h1 className='mt-3 animate__animated animate__fadeInLeft text-center'>
RESOLVING CONFLICTS
      </h1>
      <p id="button" className='mb-5'>
        <Button variant="warning btn-lg" href='/contact'>Get in touch</Button>
      </p>
    </div>
    <div className='pt-3 pb-3' id='covid'>
      <h4>COVID-19</h4>
            <p className='text-center'>
      Due to the current unprecedented circumstances, access to the Courts and other avenues are very difficult. We are available to help you find immediate solutions to your emergent issues through ONLINE MEDIATION.
            </p>
            </div>
    </div>
    )
}