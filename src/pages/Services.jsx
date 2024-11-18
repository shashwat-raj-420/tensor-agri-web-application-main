import React from 'react';
import PageLayout from '../layout/PageLayout';
import {servicedata} from '../data/Data_Page';
import ServiceCard from '../components/pages/ServiceCard';
import Carousel from '../components/core/Carosel';


export default function Services() {
  return (
    <PageLayout id='services' >
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-green-800 mb-12">Our Services</h2>
        <div className="hidden  sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {servicedata?.services?.map((service, index) => (
            <div className="w-full" key={index}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
        <Carousel CardComponent={ServiceCard} data={servicedata?.services} />
      </div>
    </PageLayout>
  );
}
