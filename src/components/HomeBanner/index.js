import React from 'react';
import { Button } from 'react-bootstrap';
import './style.css'; 

export default function (props){
    return(
          <div>
      <div id='banner' className='bg-dark text-white'>
      <h3 className='animate__animated animate__fadeInRight'> A Holistic Approach to</h3>
      <h1 className='mt-3 animate__animated animate__fadeInLeft'>
RESOLVING CONFLICTS
      </h1>
      <p id="button" className='mb-5'>
        <Button variant="warning btn-lg" href='/contact'>Get in touch</Button>
      </p>
    </div>
    <div className='pt-3 pb-2' id='covid'>
      <h3>COVID-19</h3>
            <p>
      Due to the current unprecedented circumstances, access to the Courts and other avenues are very difficult. We are available to help you find immediate solutions to your emergent issues through ONLINE MEDIATION.
            </p>
            </div>
    </div>
    )
}