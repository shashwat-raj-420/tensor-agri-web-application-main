import React from 'react'

export default function Contact({icon,text,link,content,title}) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 text-center hover:shadow-xl transition-shadow duration-300">
           <div className='inline-flex text-4xl text-green-600 mb-4 mx-auto'>{icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{content}</p>
            <a
              href={link}
                target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 font-semibold hover:underline"
            >
              {text}
            </a>
          </div>
  )
}
