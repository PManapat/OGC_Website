import React from "react";
import { Card } from "react-bootstrap";
import "./style.css";

export default function () {
  return (
    <div>
      <Card.Header className="text-warning justify-content-md-center" as="h1" id='band1'>CONTACT</Card.Header>
     <div className='col-12 pt-5 ' id='contact'>
      <h1 className='animate__animated animate__bounceInRight'>Get in Touch</h1>
      <br/>
            <p>
            Call: <a className='text-white' href="tel:+18622630211">862 263-0211</a>
            <br /> <span>Or Email: </span>
            <a className='text-white' href="mailto:mrajda@oncommonground.biz">
              mrajda@oncommonground.biz
            </a>
            <br />
            <br /><p>
            We serve most of the Counties in New Jersey and New York. If you or
            the other party is out of state or outside the US, you can avail of
            our innovative online ODR system. It can be done from the privacy of
            your office or your home wherever you are. Please send us an email
            indicating the same and we will contact you with further
            information.</p>
            <br />
            <br />
            <p>
              For those suffering from financial hardship, please contact us to
              discuss pro bono in private. Applicable to those who may qualify.
            </p>
            </p>
            </div>
    </div>
  );
}
