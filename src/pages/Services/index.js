import React from "react";
import ServiceBanner from '../../components/ServiceBanner';
import ServiceBlockOne from '../../components/ServiceBlockOne';
import ServiceBlockTwo from '../../components/ServiceBlockTwo';
import ServiceBlockThree from '../../components/ServiceBlockThree';
import ServiceBlockQA from '../../components/ServiceBlockQA';
import ServiceBlockNVR from "../../components/ServiceBlockNVR";

function Services() {
  return (
  <div>
    <ServiceBanner />
    <ServiceBlockOne />
    <ServiceBlockTwo />
    <ServiceBlockThree/>
    <ServiceBlockQA />
    <ServiceBlockNVR />
  </div>
  );
}

export default Services;
