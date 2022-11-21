import React from 'react'
import { Link } from 'react-router-dom'
import pod from '../assets/pod.jpg'
import moon from '../assets/moon.jpg'

const TrainingCard = () => {
  return (
    <div className='training w-[100%] my-12 grid md:grid-cols-2 h-[100%]'>
      <div className='left text-center m-auto py-4 px-16 max-w-[600px]'>
        <h1 className=' font-bold text-[2rem]'>Training</h1>
        <p className='m-[1.2rem]'>Through training is a necessity when traveling to space. We offer all inclusive training for pre-flight and in-flight</p>
        <Link to='/contact'><button className='btn'>Contact</button></Link>
      </div>
      <div className='right mx-auto px-4 w-[100%]'>
        <div className='img-container grid grid-cols-2 relative text-center items-center '>
          <div className='image-stack top grid-rows-1 col-span-1 pt-[20%] z-[6]'>
            <img src={pod} alt="" className='img  border border-[#333]'/>
          </div>
          <div className='image-stack bottom  z-[5] grid-rows-1 col-span-1 '>
            <img src={moon} alt="" className='img img  border border-[#333]'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrainingCard
