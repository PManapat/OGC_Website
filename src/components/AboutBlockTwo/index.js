import React from "react";
import { Jumbotron } from "react-bootstrap";
import "./style.css";

export default function () {
  return (
    <div>
      <Jumbotron id="medRole" className="bg-transparent">
        <h1 className='animate__animated animate__bounceInRight'>A Mediator's Role</h1>
        <br />
        <p>
          The Mediator provides facilitation tools to the participants in
          communication, in getting over an impasse, in being proactive and  in
          being empowered for self- determination. The Mediator, thus assists
          the parties in fashioning creative, out of the box solutions. The
          Mediator will provide information that is needed to further dialogue.
        </p>
        <br />
        <p>
          The mediator helps the parties to explore areas of possible compromise
          and to develop a solution that meets everybody's interests. Sometimes
          the Mediator may meet with the parties separately for a private
          discussion that might help move the parties toward a resolution. In
          short, the Mediator helps the parties in identifying and discussing
          the issues, in comprehending and dealing with the underlying feelings,
          problem solving, brainstorming alternatives, exploring options for
          resolution, developing better communication skills to address the
          other party, role-playing from a trunk full of other facilitation
          tools available
        </p>
      </Jumbotron>
    </div>
  );
}
