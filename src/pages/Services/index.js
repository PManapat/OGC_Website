import React from "react";
import ServiceBanner from '../../components/ServiceBanner';
import ServiceBlockOne from '../../components/ServiceBlockOne';
import ServiceBlockTwo from '../../components/ServiceBlockTwo';
import ServiceBlockThree from '../../components/ServiceBlockThree';
import ServiceBlockQA from '../../components/ServiceBlockQA';

function Services() {
  return (
  <div>
    <ServiceBanner />
    <ServiceBlockOne />
    <ServiceBlockQA />
    <ServiceBlockTwo />
    <ServiceBlockThree />
  </div>
  );
}

export default Services;
