import React from 'react'
import PageLayout from '../layout/PageLayout'
import Reason from './../components/pages/Reason';
import { aboutusdata } from '../data/Data_Page';

export default function AboutUs() {
  return (
    <PageLayout id='about-us' >
 {/* Main Section with Background Image */}
 <div className="relative bg-green-50 py-20 px-6 ">
        
        <div className=" container mx-auto text-center">
          {/* Header */}
          <h2 className="text-4xl font-semibold text-green-800 mb-8">
            {aboutusdata?.title}
          </h2>
          <p className="text-xl text-green-800 mb-12 max-w-4xl mx-auto">
            {aboutusdata?.content}
          </p>
        </div>
         {/* Why Choose Us Section */}
      <div className="bg-white py-20 px-6">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">
            Why Choose Us
          </h3>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
           {aboutusdata?.why_we_us}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12">
            {aboutusdata?.reasons?.map((reason, index) => (
             <Reason {...reason} key={index}/>
            ))}
          </div>
        </div>
      </div>
 </div>

     
    </PageLayout>
  )
}
