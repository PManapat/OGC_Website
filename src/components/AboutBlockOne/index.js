import React from "react";
import { Jumbotron, Col } from "react-bootstrap";
import './style.css';

export default function () {
  return (
   <div>
     <div className='col-12 pt-5 pb-5 mb-5' id='holistic'>
      <h1>Holistic Mediation</h1>
      <br/>
            <h4>
      Active and empowering approch. Mediaition is all about self-determination. We strive to empower the parties by giving them the tools to march towards selt-determined outcomes. We believe that almost all disputes can be resolved outside the court if the parties are determined to do so. <br/>
      Your determination a dn our holistic approach is bound to result in a win-win situation for all.
            </h4>
            </div>
       <Col className='col' id="whyUs">
        <Jumbotron className='bg-transparent'>
    <h2 className='mb-4'>Why Us</h2>
    
    <p>
    Ideally, mediation should be considered before approaching the court. However, it can
be used during any stage of the trial, on the day of the trial or post trial. It is a proven
fact that mediated settlements are less prone to returning to the judicial annals.
<br />
The best alternative to litigation is through out-of-court negotiations. We provide you the
tools, the options, the common ground. Use our system, our expertise and our process
to create a mutually satisfactory outcome.
    </p>
    <br />
    <p>Our holistic, client-centric approach is an integration of all approaches achieved by
harvesting the synergy of all efforts related to conflict management.
<br />
<br />
People are not just a bundle of problems to us. We believe that the whole is more than
just the sum of the parts. This synergistic approach affords everybody the ability and
motivation to do more with what little is available because this synergy simply creates
more for all. Most of all, we strive to maintain the dignity and integrity of human
relationships.
<br />
<br />
Holistic mediation is also an active and empowering approach. Mediation is all about
self-determination. We strive to empower the parties by giving them the tools to march
towards self-determined outcomes. We believe that almost all disputes can be resolved
outside the court if the parties are determined to do so.</p>
</Jumbotron>
        </Col>
   </div>
  );
}
