import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className=' bg-[#0a0117] py-5 px-20 text-center'>

            <h1 className='footer tracking-widest sm:text-3xl text-xl font-extrabold mb-5'>MOVIE K</h1>
            <p className='text-white sm:text-sm text-[10px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fugiat numquam quasi tempore quae, beatae odio ad velit quas corrupti amet saepe enim, dolorem ex illum eveniet est dignissimos sequi!
            </p>
            <div className='flex pt-5 justify-center md:text-base text-[10px]'>
                <input className=' bg-[#0a0125] px-5' type="text" placeholder='Your Email Address'/>
                <button className='py-2 px-4 bg-[rgba(236,56,188,1)] text-white'>SUBSCRIBE</button>
            </div>

         </div>

        <div className='bg-black text-center text-[10px] sm:text-[13px] py-2'>
            <p className=' text-[rgba(236,56,188,1)]'>Copyright 2023 | kzt</p>
        </div>
    </div>
  )
}

export default Footer