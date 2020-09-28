import React from "react";
import { Card, Row, Col, Jumbotron } from "react-bootstrap";
import './style.css';

export default function () {
  return (
    <div>
  <Card.Header className="text-warning" as="h1" id='band'>ABOUT</Card.Header>
  <Row className='pb-2'>
        <Col sm={false} md={false} lg={false}>
        <Jumbotron id='profilePic'>
</Jumbotron>
        </Col>
        <Col className='col-10' id="bio">
        <Jumbotron className='bg-transparent'>
    <h2 className='mb-4'>Mitsu Rajda</h2>
    <h2 className='mb-4'><b>A Passionate and Experienced Conflict Mediator</b></h2>
    <br/>
    <br/>
    <p>
    <b>Mitsu Rajda</b> employs the “keep it simple” mediation tactics to help her clients negotiate settlements in commercial, workplace, community, and family matters. It is her belief that any dispute can be resolved across the table once the parties show the willingness and faith to reach the desired results. Mitsu believes that Mediation is an empowering exercise. She strongly believes in self-determination and treats all matters before her with utmost sincerity, honesty, and professionalism.</p>
<br/>
<br/>
<ul><b>New Jersey Association of Professional Mediators</b></ul>
<ul><b>Association of Family and Conciliation Courts</b></ul>
<ul><b>Bar Council of Maharashtra and Goa, Phi Alpha Delta</b></ul>
<ul><b>Member, American Bar Association</b></ul>
<ul><b>Member, Bar Council of Maharashtra and Goa</b></ul>
<ul><b>Member, Mediators Beyond Borders</b></ul>
<ul><b>Member, Asian American Heritage Council</b></ul>
<ul><b>Member, National Organization for Women</b></ul>
<ul><b>Member, Toastmasters</b></ul>
<ul><b>Member, Lions Club International</b></ul>
<ul><b>Member, Morris County Chamber of Commerce</b></ul>
<ul><b>Member, New Jersey Association of Women Business Owners</b></ul>   

<br />
<p>She is fluent in several SE Asian languages, basic German and is working on
Japanese proficiency along with learning Korean and Chinese languages. She actively
devotes her time for community service.</p>
</Jumbotron>
        </Col>
      </Row>
</div>
  );
}