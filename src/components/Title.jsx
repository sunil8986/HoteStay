import React from 'react'
import {useLocation} from 'react-router-dom'

const Title = ({ heading, subheading }) => {
  const location = useLocation()
  const isHotelPage = location.pathname.includes("hotels") 
  || location.pathname.includes("mybooking") 
  || location.pathname.includes("contact");

  return (
    <div className={`${isHotelPage ? 'text-left max-w-7xl mx-auto' : 'text-center max-w-7xl'}`}>
      <h1 className="text-3xl font-semibold  mx-auto">{heading}</h1>
      <p
        className={`${isHotelPage ? 'text-left max-w-11 mx-0 align-left' : 'text-center mx-auto'
        } text-sm text-slate-500 mt-2 max-w-lg`}
      >
        {subheading}
      </p>
    </div>
  )
}

export default Title