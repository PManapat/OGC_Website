import React from "react";
import { Accordion, Card } from "react-bootstrap";
import './style.css';

export default function() { 
    return (<div id='QA'>
      <div className="pb-3 pt-3 mb-3 text-white" id="band"><h3>QUESTIONS & ANSWERS</h3></div>
    <div>
<Accordion className='mb-2 pr-5 pl-5 mr-5 ml-5 text-white'>
  <Card className='mb-1'>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      Will I still need an attorney?
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body id='accordionBody'>At the end of the mediation, the mediator will draft a Memorandum of Understanding, which you will take to your respective attorneys for review. One of the attorneys will draft a Property Settlement Agreement based on the Memorandum of Understanding. This will be review by the other party’s attorney. The property Settlement Agreement forms the basis upon which the divorce will ultimately be filed and granted.
<br />
Even when the mediator is a lawyer, he/she cannot give either party legal advice. During divorce mediation, we may provide legal information, but we will not give you legal advice. We encourage both parties to seek legal counsel during the process whenever they think it is warranted.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card className='mb-1'>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      How long does Mediation take?
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body id='accordionBody'>Our sessions run in the increments of an hour and a half (90 minutes). We generally do not accept more than two cases on the same day to allow for flexibility of time to our clients.
<br />
The number of sessions required for divorce mediation varies widely and depends on the complexity of the issues to be resolved and the parties’ willingness to settle. Unlike litigated cases, the parties have more leeway and control over the length of time within which to settle. It is much shorter than a litigated case.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card className='mb-1'>
    <Accordion.Toggle as={Card.Header} eventKey="2">
      How does virtual (online) mediation work?
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
      <Card.Body id='accordionBody'>We meet over Skype or Zoom. In case of Zoom, the parties do not need to download it. They will receive a link from the mediator. They will log on from their current location. Separate virtual rooms will be available if the parties need to talk to the mediator privately regarding certain issues. All the documents will be kept in a database to which all the parties will have all time access. A status report will be emailed to the parties at the end of each session. At the conclusion, the mediator will draft the MOU which the parties will go over in the last session and make revisions or approve the same.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card className='mb-1'>
    <Accordion.Toggle as={Card.Header} eventKey="3">
      What if we need an interim agreement. Is this possible?
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="3">
      <Card.Body id='accordionBody'>Yes, we can help you draw up interim agreements to cover immediate issues while you work towards full settlement. For example, temporary/changed parenting plan, child custody or nesting arrangement during COVID.

</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card className='mb-1'>
    <Accordion.Toggle as={Card.Header} eventKey="4">
      Can ALL kinds of issues be resolved in mediation?
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="4">
      <Card.Body id='accordionBody'>Yes, that is the beauty of Mediation. Any issue that falls within the legal realm can be resolved in mediation and you have the power to negotiate, to barter, to create and explore options in your interest.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card className='mb-1'>
    <Accordion.Toggle as={Card.Header} eventKey="5">
      Is full financial disclosure neccessary?
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="5">
      <Card.Body id='accordionBody'>Yes. We encourage full financial disclosure. The more forthcoming you are, the smoother and expedient the process will be. For a fair outcome and in the interest of all parties, especially the children, full financial disclosure is highly recommended. In certain cases, the parties themselves mutually decide the contents of the cumulative assets to be divided. It’s their prerogative.</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
</div>
</div>
    )
}