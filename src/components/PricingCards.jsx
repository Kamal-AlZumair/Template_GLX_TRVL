import React from 'react'
import { Link } from 'react-router-dom'

const PricingCards = () => {
  return (
    <div className='pricing w-[100%] py-24 px-4 bg-black'>
      <div className='card-container max-w-[1240px] mx-auto grid gap-[40px] md:grid-cols-3'>
        <div className='card border border-[#eee] text-[#eee] text-center p-4 hover:bg-[#141414]'>
          <h3 className=' text-[1.4rem] p-4'>- Basic -</h3>
          <span className='bar border-b  block border-b-[#eee] w-[10%] my-6 mx-auto'></span>
          <p className='btc text-[4rem] p-4 font-[600]'>1 BTC</p>
          <p className=' text-[#eee] py-4 text-[1.2rem]'>3 Days</p>
          <p className=' text-[#eee] py-4 text-[1.2rem]'>Views</p>
          <p className=' text-[#eee] py-4 text-[1.2rem]'>Featured</p>
          <p className=' text-[#eee] py-4 text-[1.2rem]'>Private</p>
          <Link to='/Contact' className='block btn w-[80%] my-8 mx-auto '>Book</Link>
        </div>
        
        <div className='card border border-[#eee] text-[#eee] text-center p-4 hover:bg-[#141414]'>
          <h3 className=' text-[1.4rem] p-4'>- Suite -</h3>
          <span className='bar border-b  block border-b-[#eee] w-[10%] my-6 mx-auto'></span>
          <p className='btc text-[4rem] p-4 font-[600]'>1 BTC</p>
          <p className=' text-[#eee] py-4 text-[1.2rem]'>3 Days</p>
          <p className=' text-[#eee] py-4 text-[1.2rem]'>Views</p>
          <p className=' text-[#eee] py-4 text-[1.2rem]'>Featured</p>
          <p className=' text-[#eee] py-4 text-[1.2rem]'>Private</p>
          <Link to='/Contact' className='block btn w-[80%] my-8 mx-auto '>Book</Link>
        </div>

        <div className='card border border-[#eee] text-[#eee] text-center p-4 hover:bg-[#141414]'>
          <h3 className=' text-[1.4rem] p-4'>- Executive -</h3>
          <span className='bar border-b  block border-b-[#eee] w-[10%] my-6 mx-auto'></span>
          <p className='btc text-[4rem] p-4 font-[600]'>1 BTC</p>
          <p className=' text-[#eee] py-4 text-[1.2rem]'>3 Days</p>
          <p className=' text-[#eee] py-4 text-[1.2rem]'>Views</p>
          <p className=' text-[#eee] py-4 text-[1.2rem]'>Featured</p>
          <p className=' text-[#eee] py-4 text-[1.2rem]'>Private</p>
          <Link to='/Contact' className='block btn w-[80%] my-8 mx-auto '>Book</Link>
        </div>
        
      </div>
    </div>
  )
}

export default PricingCards
