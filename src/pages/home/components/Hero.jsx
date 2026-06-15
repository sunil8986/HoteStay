import React from 'react'
import FilterForm from './FilterForm.jsx'
import { Link } from 'react-router-dom'

const Hero = () => {

  return (
   
    <section className={`flex flex-col gap-6 md:gap-10  px-4 z-1 relative herosection`}>
    
    <Link to="https://prebuiltui.com" className="flex items-center gap-2 bg-indigo-100 rounded-full p-1 pr-3 text-sm mt-23">
        <span className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
        NEW
        </span>
        <p className="flex items-center gap-2 text-indigo-600">
            <span className='text-sm'>Luxury Redefined for Modern Travelers</span>
            <svg className="mt-px" width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="m1 1 4 3.5L1 8" stroke="currentColor" strokeWidth="1.5"  strokeLinejoin="round" />
            </svg>
        </p>
    </Link>  

    <h1 className="text-center text-white text-4xl md:text-5xl/16 font-semibold max-w-3xl leading-tight bg-clip-text my-2.5 px-4">
        Find Your <span className='bg-linear-to-r from-indigo-100 to-pink-700 border-b-white border-b-2 bg-clip-text text-transparent'>Dream Stay</span> Around the World
    </h1>
    <p className="text-center text-base text-gray-100 max-w-md px-4">
        Experience premium comfort, breathtaking destinations, and unforgettable moments at handpicked luxury hotels and resorts.
    </p>
    
    <div className="flex items-center gap-4 mt-5 justify-center z-1">
        <FilterForm />
    </div>

    
    </section>


  )
}

export default Hero