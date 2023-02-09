import React from 'react'
import { Link } from 'react-router-dom'
import { menu } from '../utils/navigationmenu'
import {AiOutlineShoppingCart} from "react-icons/ai"
import {GiHamburgerMenu} from "react-icons/gi"

import { useState } from 'react'
import MobileNavbar from './MobileNavbar'
import { useGlobalCartContext } from '../contextApi/cartContext'

const Navbar = () => {

  const [showMobileNav,setShowMobileNav] = useState(false)

  const {total_item}  = useGlobalCartContext();

  return (
    <header className='h-16 w-full px-6 md:px-24 py-2 shadow-lg flex flex-col justify-center '>
      <nav className='flex justify-between items-center'>
        <div className='py-1'>
          <Link to="/"><span className='text-3xl font-black text-[#233e28]'>Niladri.</span></Link>
        </div>
        <div className='hidden md:flex'>
          {
            menu.map((m,index)=>(
              <Link key={index} to={m.link} className="px-4  text-lg text-[#47664c] hover:text[#233e28] font-semibold duration-200">{m.name}</Link>
            ))
          }
        </div>
        <div className='hidden md:flex gap-2 items-center '>
          <button className='px-2 py-1 rounded-sm bg-[#233e28] text-white font-medium'>Login</button>
         <Link to="/cart"> <AiOutlineShoppingCart size={26} className="text-[#233e28] font-bold " /></Link>
          <div className="absolute top-3 right-20 w-5 h-5 bg-[#233e28] text-white rounded-full text-sm flex items-center justify-center">{total_item}</div>
        </div>
        <div className='md:hidden'>
          <GiHamburgerMenu size={24} onClick={()=>setShowMobileNav(!showMobileNav)} className="duration-300 absolute right-8 top-5" />
        </div>
      </nav>
      {showMobileNav && <MobileNavbar showMobileNav={showMobileNav} setShowMobileNav={setShowMobileNav}/>}
    </header>
  )
}

export default Navbar