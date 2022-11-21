import React,{Component} from 'react'

class HeroImage extends Component {
  render(){
    return(
      <>
      <div className=' bg-[rgba(0,0,0,.3)] relative h-[50vh] w-[100%] hero-img  bg-cover  bg-blend-overlay '>
        <div className=' ' ></div>
        <div className=' w-[100%] h-[100%] flex flex-col justify-center items-center'>
          <h1 className='text-[1.5rem] sm:text-[2.4rem] font-bold'>{this.props.heading}</h1>
          <p className=' sm:text-[1.4rem]'>{this.props.text}</p>
        </div>
      </div>
      </>
    )
  }
}


export default HeroImage
