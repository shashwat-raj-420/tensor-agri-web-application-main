import React, { useEffect, useState } from 'react'

export default function NavItem({title,link,className=""}) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActiveSection(sectionId);

            // Update the URL hash without refreshing the page
            
            window.history.replaceState(null, '', `#${sectionId}`);
          }
        });
      },
      { threshold: 0.8 } // Trigger when 60% of the section is visible
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []); 
  return (
    <li className={`sm:py-2 py-1 px-4 font-semibold sm:font-bold sm:text-lg text-sm  relative ${className}`}>
<a className={`hover:text-green-600 after:content-[""] after:rounded-xl after:absolute after:left-0 after:bottom-0 after:h-0.5 sm:after:h-1 after:w-0 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-3/4 ${activeSection===link.substring(1)?"after:w-full text-green-600":""}`} href={link}>{title}</a>

    </li>
  )
}
