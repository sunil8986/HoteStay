import React from 'react'
import { Link } from 'react-router-dom'

export default function HotelCard({ roomdetails,keyvalue }) {
  return (
    <div key={keyvalue} className="relative max-w-72 hover:-translate-y-0.5 transition duration-300 border rounded-xl shadow-lg overflow-hidden border-gray-200">
        
        {
            keyvalue % 2 === 0 && <div className='absolute top-2 left-2 bg-indigo-700 text-white text-xs px-2 py-1 rounded-full z-10'>Best Deal</div>
        }
        <img src={roomdetails.images[0]} alt={roomdetails.roomType} className='w-full h-48 object-cover rounded-xl rounded-b-none' />
        <div className='p-4'>
            <h3 className='text-lg font-semibold mb-2'>{roomdetails.hotel.name[keyvalue % roomdetails.hotel.name.length]}</h3>
            <p className='text-gray-600 mb-2'>{roomdetails.roomType}</p>
            <div className='flex items-center justify-between align-center'>
                <p className='text-gray-800 font-bold'>${roomdetails.pricePerNight} / <span className='text-sm font-normal text-gray-600'>night</span> </p>
                <Link to={`/rooms/${roomdetails._id}`} state={{ hotelName: roomdetails.hotel.name[ keyvalue % roomdetails.hotel.name.length]}} className=' text-black border-gray-300 border px-4 py-1 rounded-full hover:bg-indigo-700 transition-colors duration-300 hover:text-white'>  
                    View Details
                </Link>
            </div>
            
        </div>
    </div>
  )
}   