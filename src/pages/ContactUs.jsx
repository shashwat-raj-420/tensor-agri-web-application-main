import React from 'react'
import PageLayout from '../layout/PageLayout'
import { contactusData } from '../data/Data_Page'
import Contact from '../components/pages/Contact'

export default function ContactUs() {
  return (
    <PageLayout id='contact-us'>
 <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">{contactusData?.title}</h2>
        <p className="text-gray-600 mb-12">
         {contactusData?.content}
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-8">
       
          {contactusData?.contactDetails?.map((contact,index)=>(<Contact {...contact} key={index}/>))}
        </div>
      </div>
    </PageLayout>
  )
}
