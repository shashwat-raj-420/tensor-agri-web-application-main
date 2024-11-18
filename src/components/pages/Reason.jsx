import React from 'react'

export default function Reason({title,desc,icon}) {
  return (
    <div className="flex flex-col items-center text-center bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300">
    <div className="bg-green-600 text-white p-3 sm:p-4 rounded-full mb-4 shadow-xl text-2xl sm:text-4xl">
      {icon}
    </div>
    <h4 className="text-base sm:text-xl font-semibold text-green-800 mb-2">{title}</h4>
    <p className="hidden sm:block text-green-600">{desc}</p>
  </div>
  )
}
