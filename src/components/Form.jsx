import React from 'react'

const Form = () => {
  return (
    <div className='form'>
      <form className=' flex flex-col p-4 m-auto max-w-[600px]'>
        <label className=' mb-2'>Your Name</label>
        <input className='mb-4 py-[10px] px-[18px] bg-[rgba(255,255,255,.1)] text-[#f4f4f4]' type="text" />
        <label className=' mb-2'>Your Email</label>
        <input className='mb-4 py-[10px] px-[18px] bg-[rgba(255,255,255,.1)] text-[#f4f4f4]' type="email" />
        <label className=' mb-2'>Subject</label>
        <input className='mb-4 py-[10px] px-[18px] bg-[rgba(255,255,255,.1)] text-[#f4f4f4]' type="text" />
        <label className=' mb-2'>Details</label>
        <textarea className='mb-4 py-[10px] px-[18px] bg-[rgba(255,255,255,.1)] text-[#f4f4f4]'  rows="6"placeholder='Type a short message here' ></textarea>
        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default Form
