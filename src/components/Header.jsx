// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { FaBars } from "react-icons/fa";


const Header = () => {

  const [position,setPosition] = useState('absolute');
  const [activeBtn, setActiveBtn] = useState('home');

  const [onOpen, setOnOpen] = useState(false);

  const NavTransition = () => {
    if(window.scrollY>60){
      setPosition('fixed')
    }

    else{
      setPosition('absolute');
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll",NavTransition)
      return () => window.removeEventListener("scroll",NavTransition)
    }
  },[])

  useEffect(() => {
    if(onOpen){ 
      setOnOpen(false);
    }
  },[activeBtn])

    const buttons = ["Home", "About", "Education", "Experience", "Skills", "Projects","Contact"];
  return (
    <div className={`flex md:flex-row ${position} flex-col md:justify-center w-full mx-auto px-4 py-3 z-50 ${position == 'fixed' ? 'bg-[#151414]' : ''} ` }>

        <FaBars onClick={() => setOnOpen(e => !e)} color="white" className='right-0 self-end top-0 mx-10 md:hidden cursor-pointer bg-transparent' /> 
 

      <div className={`${onOpen ? 'flex flex-col md:hidden' : 'hidden'} md:flex`}>

        {buttons.map((item,index) => (
          <a key={index} href={'#'+item.toLowerCase()} className={`${activeBtn == item.toLowerCase() ? 'border-b-0 w-fit border-blue-500  transition transform duration-300' : 'text-gray-100'} `} onClick={() => setActiveBtn(item.toLowerCase())}>
            <button className={`${activeBtn == item.toLowerCase() ? 'text-orange-400' : 'text-gray-500'} hover:text-yellow-400 px-5 py-2 md:flex self-start`}>{item}</button>
          </a>
            
            ))}
        </div>
    </div>
  )
}

export default Header
