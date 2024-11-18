import React from 'react';
import navitems from './../data/Data_NavItems';
import NavItem from '../components/layout/Comp_NavItem';

export default function NavBar({ isexpand }) {
  return (
    <nav
      className={
        `
        ${isexpand ? "opacity-100" : "opacity-0"} 
      sm:opacity-100
      overflow-hidden transition-all duration-500 ease-in-out w-full sm:block justify-center 
      sm:bg-transparent bg-white sm:w-6/12 sm:relative absolute sm:top-0 left-0 
      sm:left-50 top-[60px] sm:pb-0 pb-2`}
    >
      <ul className="flex items-center justify-between">
        {navitems.map((navitem, index) => (
          <NavItem {...navitem} key={index} />
        ))}
      </ul>
    </nav>
  );
}
