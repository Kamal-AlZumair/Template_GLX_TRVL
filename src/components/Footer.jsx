import React from 'react'
import { FaFacebook,FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='w-[100%] py-4 pb-12 bg-[rgba(0,0,0,0.8)] relative'>
      {/* container */}
      <div className=' max-w-[1240px] mx-auto grid gap-10 sm:grid-cols-2'>
        {/* left */}
        <div className='left h-[100%] max-w-[100%] flex flex-col p-4'>
          <div className='location flex items-center'>
            <FaSearchLocation size={20} className='mr-4'/>
            <div className=' flex items-center '>
              <p className='mr-2'>Ta'izz,</p>
              <h4 className=' text-[1.5rem] font-bold py-4'>Yemen</h4>
            </div>
          </div>
          <div className='phone '>
            <h4 className='flex items-center text-[1.5rem] font-bold py-4'><FaPhone size={20} className='mr-4'/>+967-770600218</h4>
          </div>
          <div className='mail flex'>
            <h4 className='flex items-center text-[1.5rem] font-bold py-4'><FaMailBulk size={20} className='mr-4'/>kamalzumair@gmail.com</h4>
          </div>
        </div>
        {/* right */}
        <div className='right h-[100%] max-w-[100%] flex flex-col p-4 m-auto'>
          <h4 className='  text-[1.5rem] font-bold pt-4'>About the company</h4>
          <p className=' py-4'>
            Lorem ipsum dolor sit amet, consectetur 
            adipisicing elit.Sed unde similique eum 
            sapiente tempora numquam illo libero 
            ipsam fuga quidem asperiores natus.
          </p>
          <div className='social flex'>
            <FaFacebook size={30} className='mr-4'/>
            <FaLinkedin size={30} className='mr-4'/>
            <FaTwitter size={30} className='mr-4'/>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
