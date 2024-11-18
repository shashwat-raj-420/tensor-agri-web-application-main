import React from 'react'
import PageLayout from './../layout/PageLayout';
import { homedata } from '../data/Data_Page';
export default function Home() {
  return (
    <PageLayout id='home'>
 <div className="relative bg-green-50 text-green-900 py-24 px-6 md:px-12 md:min-h-screen min-h-100 flex items-center justify-center">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="text-center md:text-left md:w-2/3">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight md:mb-6 mb-4">
            {homedata?.hero?.title}
          </h1>
          <p className="text-lg mb-6">
         {homedata?.hero?.content}
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href={homedata?.hero?.button?.link}
              className={`${homedata?.hero?.button?.color} py-3 px-8 rounded-full text-lg font-semibold transition-all duration-300`}
            >
              {homedata?.hero?.button?.content}
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/3 mt-12 md:mt-0 md:mb-0 mb-4">
          <img
            src={homedata?.hero?.image}
            alt="Software Solutions Illustration"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
    </PageLayout>
  )
}
