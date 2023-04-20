import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='h-screen flex bg-[#1a1a1a]'>
        <div className=' m-auto sm:w-[500px] sm:h-[340px] w-[300px] bg-[#0e0e0e] log-in'>
            <div className=' m-5 text-center'>
              <h1 className='text-white sm:text-3xl text-base font-bold'>LOG IN</h1>
              <br />
              <input className='w-full sm:h-[50px] h-[40px] pl-3 bg-[#1a1a1a] sm:text-base text-sm' placeholder='username' type="text" name="" id="" />
              <br /> <br />
              <input className='w-full sm:h-[50px] h-[40px] pl-3 bg-[#1a1a1a] sm:text-base text-sm' placeholder='password' type="password" name="" id="" /> 
              <br /> <br />
              <button className='bg-[rgba(236,56,188,1)] w-full sm:h-[50px] h-[40px] text-white sm:text-base text-sm'>login</button>
              <br /> <br />

              <div className='flex justify-center'>
                <p className=' text-gray-400 mr-1'>Not register?</p>
                <Link to={'/register'}>
                  <p className=' text-[rgba(236,56,188,1)]'>Create an account</p>
                </Link>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Login
// bg-[#000]