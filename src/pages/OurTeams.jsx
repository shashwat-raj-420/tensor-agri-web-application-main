import React from 'react'
import PageLayout from '../layout/PageLayout'
import Member from '../components/pages/Member'
import { ourTeamData } from '../data/Data_Page'

export default function OurTeams() {
  return (
   <PageLayout id='our-team' >
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">Meet Our Team</h2>
        <div className="grid  grid-cols-2 lg:grid-cols-4 gap-12">
          {ourTeamData?.teamMembers?.map((member, index) => (
            <Member {...member} key={index}/>
          ))}
        </div>
        {/* <Carousel CardComponent={Member} data={teamMembers}/> */}
      </div>
   </PageLayout>
  )
}
