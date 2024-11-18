import React, { useEffect, useState } from 'react'
import NavBar from './NavBar';
import Logo from '../components/layout/Comp_logo';
import NavItem from '../components/layout/Comp_NavItem';
import { FaBars } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';
import { FaBarsStaggered } from 'react-icons/fa6';

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isexpand,setExpand]=useState(false)
  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 100) {
        setIsVisible(true);
    } else {
        setIsVisible(false);
    }
};
useEffect(() => {
  window.addEventListener('scroll', toggleVisibility);
  return () => window.removeEventListener('scroll', toggleVisibility);
}, []);
const expandtoggle=()=>{
  setExpand(!isexpand)
}
  return (
    <header className={`${isVisible?"bg-white":"sm:bg-transparent bg-white"} fixed top-0 left-0 w-full px-4 sm:px-10 py-4 flex justify-between items-center z-50`}>
     <Logo/>
      <NavBar isexpand={isexpand}/>
      <div className='flex justify-end items-center w-1/3 sm:w-3/12 gap-3'>
      <button onClick={expandtoggle} className='hover:text-green-600  cursor-pointer sm:hidden block'>
      {isexpand?<FaBarsStaggered  />:<FaBars/>}
      </button>
      
      
      <NavItem className='sm:hidden block' title={<IoCall/>} link={"#contact-us"}/>
      <NavItem className='sm:block hidden' title={'Contact Us'} link={"#contact-us"}/>
      </div>

        
    </header>
  )
}
