import React from 'react'
import { Link } from 'react-router-dom'
import bgVideo from '../assets/video.mp4'

const Video = () => {
  return (
    <section className=' h-[100vh] w-[100%] object-contain'>
        <video className=' fixed w-[100%] h-[100%] object-cover z[-1] ' src={bgVideo} autoPlay loop muted/>
      <div className=' text-center absolute m-auto w-[100%] h-[100%] top-[40vh]'>
        <h1 className='text-4xl sm:text-7xl'>Galaxy Travel</h1>
        <p className=' text-[10px] py-4 sm:text-lg uppercase mb-4'>World's first civilian space travel.</p>
        <div className=' my-4'>
          <Link to='/training' className='btn mx-3'>Training</Link>
          <Link to='/contact' className='btn btn-light'>Lunch</Link>
        </div>
      </div>
    </section>
  )
}

export default Video
