import React from "react";
import { Jumbotron, Row, Col } from "react-bootstrap";
import './style.css';

export default function () {
  return (
    <Row id="blocks" className="mr-1 pb-2">
      <Col className="col" id="civilBus">
        <Jumbotron className='bg-transparent'>
          <h2 className="mb-4">CIVIL / BUSINESS</h2>
          <br />
          <p>
            Mediation is used effectively in disputes regarding labor-management
            relations, community disputes, employer-employee disputes, contract
            disputes and partnership formations and dissolutions.
          </p>
          <p>
            Mediation aids in facilitating agreements which often develop in
            cases surrounding business and transactional matters. Almost all
            (95%) matters which are filed in the courts of law are resolved
            through negotiated settlement. The mediation process is designed to
            facilitate an early settlement and to significantly reduce the cost
            to the parties.
          </p>
          <p>
            In many business dissolutions, partners have long standing
            relationships and many economic and non-economic ties. The mediation
            process helps partners move forward without engaging in a bitter
            adversarial process. It helps partners develop plans that are fair
            to all parties.
          </p>
          <p>
            Real estate : residential and commercial leases, commercial property
            development, landlord-tenant conflicts, boundary disputes,
            nuisance/noise issues, easements, eminent domain.{" "}
          </p>
          <br />
          <h5>Employment law related issues: </h5>
          <p>
            Employment Law regulates the relationship between workers, managers,
            and owners ot ensure everyone is treated fairly and respectfully.
          </p>
          <p>
            It includes Sexual Harassment, Workplace Harassment, Hostile Work
            Environment,
            Discrimination (race, sex, pregnancy, age, religion, disability)
            Unpaid Overtime (wage and hour lawsuits), Off-The-Clock
            Overtime (Forced to work Off-the-Clock), Retaliation and
            Whistleblower Violations, Family and Medical Leave Act, Severance
            Agreements, NJ Employment Agreements and NJ Non-Compete Agreements
          </p>
        </Jumbotron>
      </Col>
    </Row>
  );
}
