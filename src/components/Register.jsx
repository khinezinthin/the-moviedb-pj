import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='h-screen flex bg-[#1a1a1a]'>
        <div className=' m-auto sm:w-[500px] sm:h-[530px] w-[300px] bg-[#0e0e0e] log-in'>
            <div className=' m-5 text-center'>
              <h1 className='text-white sm:text-3xl text-base font-bold'>Register</h1>
              <br />
              <input className='w-full sm:h-[50px] h-[40px] pl-3 bg-[#1a1a1a] sm:text-base text-sm' placeholder='Full Name' type="text" name="" id="" />
              <br /> <br />
              <input className='w-full sm:h-[50px] h-[40px] pl-3 bg-[#1a1a1a] sm:text-base text-sm' placeholder='Username' type="text" name="" id="" />
              <br /> <br />
              <input className='w-full sm:h-[50px] h-[40px] pl-3 bg-[#1a1a1a] sm:text-base text-sm' placeholder='Email' type="email" name="" id="" />
              <br /> <br />
              <input className='w-full sm:h-[50px] h-[40px] pl-3 bg-[#1a1a1a] sm:text-base text-sm' placeholder='Password' type="password" name="" id="" /> 
              <br /> <br />
              <input className='w-full sm:h-[50px] h-[40px] pl-3 bg-[#1a1a1a] sm:text-base text-sm' placeholder='Confirm password' type="password" name="" id="" />
              <br /> <br />
              <button className='bg-[rgba(236,56,188,1)] w-full sm:h-[50px] h-[40px] text-white sm:text-base text-sm'>Submit</button>
              <br /> <br />
            </div>
        </div>
    </div>
  )
}

export default Register