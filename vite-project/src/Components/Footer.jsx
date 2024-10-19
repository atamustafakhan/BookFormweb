import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='  bg-gray-900 text-white rounded-2xl'>
        <div className='md:flex md:justify-between md:items-center sm:px-12 bg-[#ffffff19] py-7'>
          <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'>
            <span className='text-white '>
              @Copyright 2024
            </span>
          </h1>
            <span className='text-white '>
              Thank you for Exploring us 
            </span> 
          <div>
          </div>
        </div>
    </footer>
    
  )
}

export default Footer