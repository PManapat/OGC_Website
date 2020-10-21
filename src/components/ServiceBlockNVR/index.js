import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

export default function () {
  return (
    <div id="NVR" className="pl-2 pr-2 mt-4 pt-4 mb-4 pb-4">
      <h2 className="mt-3 mb-3 pt-3 pb-3">
        {" "}
        <b>NEWS, VEIWS & REVIEWS</b>
      </h2>
      <h2> --- </h2>
      <Row>
        <Col className="col-4">
          <h3>
            <b>
              An ER doctor loses custody of daughter due to Corona virus fears.
            </b>
          </h3>
          <p>
            An emergency room doctor in Miami has temporarily lost custody of
            her 4-year-old daughter while she treats patients during the
            coronavirus pandemic
          </p>
          <p>https://www.msn.com/en-us/news/us/an-er-doctor-loses-custody-of-daughter-because-of-coronavirus-fears/ar-BB12zcvA</p>
        </Col>
        <Col className="col-4">
          <h3>
            <b>
              Why two divorced couples decided to live under one roof during the
              COVID-19 pandemic
            </b>
          </h3>
          <p>
            {" "}
            The coronavirus has shaken up many Americans' daily lives. With
            people being asked to school and work from home, and to stay inside,
            blended families have had to find unique solutions for co-parenting.
            Is it better for the kids shuffle back and forth between homes or
            should the parents set personal difference aside and spend time
            together?
          </p>
        </Col>
        <Col className="col-4">
          <h3>
            {" "}
            <b>Navigating child custody in the time of coronavirus</b>
          </h3>
          <p>
            It's better to mediate if possible... said notarized temporary
            modification agreements also can serve to provide answers at a time
            when most courst can and will not.
          </p>
        </Col>
      </Row>
    </div>
  );
}
