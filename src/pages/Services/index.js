import React from "react";
import ServiceBanner from '../../components/ServiceBanner';
import ServiceBlockOne from '../../components/ServiceBlockOne';
import ServiceBlockTwo from '../../components/ServiceBlockTwo';
import ServiceBlockThree from '../../components/ServiceBlockThree';

function Services() {
  return (
  <div>
    <ServiceBanner />
    <ServiceBlockOne />
    <ServiceBlockTwo />
    <ServiceBlockThree />
  </div>
  );
}

export default Services;
