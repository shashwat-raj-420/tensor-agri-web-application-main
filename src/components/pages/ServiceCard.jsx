import React from 'react';

export default function ServiceCard({image,title,technologies,description }) {
  return (
    <div className="bg-white w-full sm:w-auto sm:flex-shrink-1 flex-shrink-0 shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:scale-105">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies?.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-green-200 text-gray-800 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
