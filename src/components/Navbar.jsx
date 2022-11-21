import React, { useState } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav,setNav] = useState(false);
  const handleClick =()=> setNav(!nav);

  const [color,setColor] = useState(false);

  const changeColor = ()=>{
    if(window.scrollY >= 100){
      setColor(true);
    }else{
      setColor(false);
    }
  }

  window.addEventListener('scroll',changeColor)

  return (
    <nav className={color ? 'fixed w-full h-[90px]  z-[10] bg-[rgba(0,0,0,.85)] transition duration-500' :' fixed w-full h-[90px]  z-[10]'}>
      <div className='flex justify-between items-center p-4'>
          <Link to={'/'}><h1 className=' font-bold text-lg sm:text-[2rem] '>GLX TRVL.</h1></Link>
          <ul className='hidden flex-col md:flex md:flex-row'>
            <li className=' px-4 text-[1.2rem] font-[500]'><Link to={'/'}><h1>Home</h1></Link></li>
            <li className=' px-4 text-[1.2rem] font-[500]'><Link to={'/Pricing'}><h1>Pricing</h1></Link></li>
            <li className=' px-4 text-[1.2rem] font-[500]'><Link to={'/Training'}><h1>Training</h1></Link></li>
            <li className=' px-4 text-[1.2rem] font-[500]'><Link to={'/Contact'}><h1>Contact</h1></Link></li>
          </ul>
        
          <div className=' md:hidden z-[10]' onClick={handleClick}>
            {!nav ? <FaBars size={20}/>:<FaTimes size={20}/> }
          </div>
      </div>
      <nav onClick={handleClick}
      className={!nav ? ' absolute z-[-1]  w-full h-screen top-0 left-[-100%] transition-all duration-300 ease-in bg-[rgba(0,0,0,.9)] flex flex-col items-center  text-center justify-center md:hidden':' absolute  w-full h-screen top-0 left-[0] transition-all duration-300 ease-in bg-[rgba(0,0,0,.9)] flex flex-col items-center text-center justify-center md:hidden'}>
      <ul className=''>
            <li className=' py-4 text-[2rem] font-[500]'><Link to={'/'}><h1>Home</h1></Link></li>
            <li className=' py-4 text-[2rem] font-[500]'><Link to={'/Pricing'}><h1>Pricing</h1></Link></li>
            <li className=' py-4 text-[2rem] font-[500]'><Link to={'/Training'}><h1>Training</h1></Link></li>
            <li className=' py-4 text-[2rem] font-[500]'><Link to={'/Contact'}><h1>Contact</h1></Link></li>
          </ul>
      </nav>
    </nav>
  )
}

export default Navbar
