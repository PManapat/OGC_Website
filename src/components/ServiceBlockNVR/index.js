import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "./style.css";

export default function () {
  return (
    <div>
     <Card.Header className="text-warning pt-3 mt-3 mb-3 pb-3" id="band" as="h1">
          NEWS, VEIWS & REVIEWS
        </Card.Header>
      <Row>
     
        <Col className="col-4" id="artlink">
          <p>
            <b>
              An ER doctor loses custody of daughter due to Corona virus fears.
            </b>
          </p>
        <p>
            An emergency room doctor in Miami has temporarily lost custody of
            her 4-year-old daughter while she treats patients during the
            coronavirus pandemic.
        
          <a id="artlink" href="https://www.msn.com/en-us/news/us/an-er-doctor-loses-custody-of-daughter-because-of-coronavirus-fears/ar-BB12zcvA"> See Article </a>
          </p>
        </Col>
        <Col className="col-4" id="artlink">
          <p>
            <b>
              Why two divorced couples decided to live under one roof during the
              COVID-19 pandemic
            </b>
          </p>
          <p>
            The coronavirus has shaken up many Americans' daily lives. With
            people being asked to school and work from home, and to stay inside,
            blended families have had to find unique solutions for co-parenting.
            Is it better for the kids shuffle back and forth between homes or
            should the parents set personal difference aside and spend time
            together?
          
          <a id="artlink" href="https://abcnews.go.com/US/divorced-couples-decided-live-roof-covid-19-pandemic/story?id=69875535"> See Article </a>
          </p></Col>
        <Col className="col-4" id="artlink">
          <p>
            <b>Navigating child custody in the time of coronavirus</b>
          </p>
          <p>
            It's better to mediate if possible... said notarized temporary
            modification agreements also can serve to provide answers at a time
            when most courst can and will not.
          
          <a  href="https://www.cnn.com/2020/04/01/health/child-custody-wellness-coronavirus/index.html"> See Article </a>
          </p></Col>
      </Row>
    </div>
  );
}
