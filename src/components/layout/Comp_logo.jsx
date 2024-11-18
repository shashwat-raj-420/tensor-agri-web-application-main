import React from 'react'
import logo from '../../asserts/images/util/logo.jpg'
export default function Header_Logo() {
  return (
    
    <div className="inline-flex flex-col h-100 items-center  sm:w-3/12 cursor-grab">
    <img src={logo} alt="logo" className="sm:h-[30px] sm:w-[30px] w-[20px] h-[20px] cursor-poiner object-cover rounded-full"/>
    <h4 className="font-bold text-xs sm:text-lg cursor-poiner text-green-800">Tensor Agri</h4>
        </div>
  )
}
