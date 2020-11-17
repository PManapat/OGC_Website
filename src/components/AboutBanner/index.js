import React from "react";
import { Row, Col, Jumbotron, Image } from "react-bootstrap";
import './style.css';

export default function () {
  return (
    <div>
  <Row>
        <Col sm className='col-9' xs={3} md={3}>
        <Image src='https://njapm.org/wp-content/uploads/2020/06/mitsu-profile-2020-338x500.jpg' roundedCircle fluid className='pl-4 ml-4 mb-5 pb-5' id='profilePic'>
</Image>
        </Col>
        <Col sm className='col-4' id="bio">
        <Jumbotron className='bg-transparent'>
    <h3 className='mb-3'>Mitsu Rajda</h3>
    <h4 className='mb-3'><b>A Passionate and Experienced Conflict Mediator</b></h4>
    <br/>
    <p>
    Mitsu Rajda is a Business, Civil and Family mediator who prides in her holistic approach to helping her
clients resolve conflicts in the “least antagonistic manner”. She treats her clients as whole human
beings, not as a sum of their problems and respects the synergy between their interactions with one
another, with her and with the environment.  Mitsu Rajda employs the “keep it simple” mediation
approach to help her clients negotiate settlements in commercial, workplace, community and family
matters. It is her belief that any dispute can be resolved across the table once the parties show the
willingness and faith to reach the desired results. Mitsu believes that Mediation is an empowering
exercise. She strongly believes in self-determination and treats all matters before her with utmost
sincerity, honesty and professionalism.
She works tirelessly to stay up-to-date on divorce and family law issues, so she can offer her clients
innovative and cutting-edge solutions for the maximum benefit of all parties involved. Roseann also
handles each mediation session personally, working closely with clients to bring their cases to successful
conclusions.
Mitsu has worked in an international law firm doing corporate work. She also has experience in Products
Liability, Personal injury, Landlord-tenant law and general civil litigation. She also ran her law firm Mitsu
Rajda &amp; Associates, Advocates &amp; Notaries from 1999 till recently. She is a trained Civil and Family
Mediator.
Apart from her legal background (law degrees from Bombay University and from Syracuse University
College of Law), Mitsu is also an entrepreneur, running her own business successfully for the last
eighteen years.

Mitsu serves as a volunteer civil mediator in superior courts of several NJ counties. She is a past Board
Member of the New Jersey Association of Professional Mediators. Currently she is the member,
Continuing Legal Education coordinator and Membership Chair of NJAPM. She is also a member of the
Bar Council of Maharashtra and Goa, Mediators beyond border, Asian American Heritage Council, the
National Organization for Women, Toastmasters, and the Lions Club International.</p>
<br/>
<br />
<p>She is fluent in several SE Asian languages, basic German and is working on
Japanese proficiency along with learning Korean and Chinese languages. She actively
devotes her time for community service.</p>
</Jumbotron>
        </Col>
      </Row>
      <Row> <Col className='text-center mb-4'><img src='https://syncnet.s3.us-east-2.amazonaws.com/img/njapm/NJAPMHeaderLogo.png'></img></Col></Row>
</div>
  );
}