import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'


export default function Member({image,name,title,description,linkedin,twitter,github}) {

  
  return (
    <div
    className="flex flex-col bg-white sm:p-0 p-4 sm:w-auto w-full shadow-xl rounded-lg overflow-hidden transform cursor-grabbing transition-transform duration-700 hover:scale-105 hover:shadow-2xl"
  >
   <div className='flex sm:flex-col flex-row items-center justify-between sm:gap-0 gap-5'>
   <div className="w-1/3 sm:w-full sm:h-52 h-28 relative overflow-hidden">
  <img
    src={image}
    alt={name}
    className="sm:w-full w-20 h-20  sm:h-52 object-cover sm:rounded-none rounded-xl object-center absolute inset-0"
  />
</div>
<div className="sm:w-full w-2/3 sm:px-6 p-2">
<h3 className="sm:text-2xl text-lg font-semibold text-gray-800">{name}</h3>
<p className="text-sm text-gray-500">{title}</p>
</div>
</div>
<p className="text-gray-600 sm:px-6 sm:text-justify text-center">{description}</p>
    <div className="flex space-x-4 mt-4 items-center sm:justify-start justify-center px-6 py-4">
        {/* React Icons for Social Media */}
        {[{
          icon: <FaLinkedin className="text-xl text-gray-600 hover:text-green-800" />,
          link:linkedin
        },{
          icon: <FaTwitter className="text-xl text-gray-600 hover:text-green-800" />,
          link:twitter
        },{
          icon: <FaGithub className="text-xl text-gray-600 hover:text-green-800" />,
          link:github
        }
        
        ].map(({icon,link},index)=>( <a href={link} target="_blank" rel="noopener noreferrer">
         {icon}
        </a>))}

      </div>
  </div>
  )
}
