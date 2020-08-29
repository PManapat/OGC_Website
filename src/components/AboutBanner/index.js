import React from "react";
import { Card, Row, Col, Jumbotron } from "react-bootstrap";
import './style.css';

export default function () {
  return (
    <div>
  <Card.Header as="h5">ABOUT</Card.Header>
  <Row id="blocks" className='mr-1 pb-2'>
        <Col>
        <Jumbotron id='profilePic'>
</Jumbotron>
        </Col>
        <Col className='col-8' id="bio">
        <Jumbotron className='bg-light'>
    <h2 className='mb-4'>Bio</h2>
    <p>
   <b>Mitsu Rajda </b> is a Business, Civil and Family mediator who prides in her holistic approach
to helping her clients resolve conflicts in the “least antagonistic manner”. She treats her
clients as whole human beings, not as a sum of their problems and respects the
synergy between their interactions with one another, with her and with the environment. 
Mitsu Rajda employs the “keep it simple” mediation tactics to help her clients negotiate
settlements in commercial, workplace, community and family matters. It is her belief that
any dispute can be resolved across the table once the parties show the willingness and
faith to reach the desired results. Mitsu believes that Mediation is an empowering
exercise. She strongly believes in self-determination and treats all matters
    </p>
    <b>Mitsu is a Solution-driven professional</b> skilled in collaborating across levels and
functions, and utilizing technology to enhance teamwork, communication, and
efficiency. She brings many <b>years of experience and success as a commercial,
civil, and family mediator, of managing a global law practice and running a

business.</b>
<br />
<br />
<b>She works tirelessly to stay up-to-date on relevant legal issues so she can offer
her clients innovative and cutting-edge solutions for overall success.</b>
<ul><b>Volunteer civil mediator in the superior court of several New Jersey counties.</b></ul>
<ul><b>Past Board member and Program Committee Chair, NJAPM</b></ul>
<ul><b>Current Continuing Legal Education Credits coordinator and member, NJAPM</b></ul>
<ul><b>Member, American Bar Association</b></ul>
<ul><b>Member, Bar Council of Maharashtra and Goa</b></ul>
<ul><b>Member, Mediators Beyond Borders</b></ul>
<ul><b>Member, Asian American Heritage Council</b></ul>
<ul><b>Member, National Organization for Women</b></ul>
<ul><b>Member, Toastmasters</b></ul>
<ul><b>Member, Lions Club International</b></ul>

<p>She is fluent in several SE Asian languages, basic German and is working on
Japanese proficiency along with learning Korean and Chinese languages. She actively
devotes her time for community service.</p>
</Jumbotron>
        </Col>
      </Row>
</div>
  );
}