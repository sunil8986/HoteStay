import React from 'react'
import {roomsDummyData} from '../../../assets/assets'
import HotelCard from '../../../components/HotelCard.jsx'
import Title from '../../../components/Title.jsx'
import { useNavigate } from 'react-router-dom'





const FeaturedHotel = () => {
  const navigate = useNavigate();  
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col items-center px-6 md:px-16 lg:px-24 pt-20 pb-10">
            
        <Title heading={"Featured Hotels"} subheading={"Discover our handpicked selection of top-rated hotels, offering exceptional comfort and unforgettable experiences for your next stay."} />  
        <div className="flex flex-wrap flex-row items-center justify-center gap-8 pt-12">
            {
                roomsDummyData.slice(0, 3).map((roomdetails, index) => {
                    return (        
                    <HotelCard roomdetails={roomdetails}  key={index}  keyvalue={index} />
                    )
                }
            )
            }
        </div>
        <button 
            className='text-black px-6 py-3 border-gray-300 border my-8 rounded-full hover:bg-indigo-700 hover:text-white   
            transition-colors duration-300 mx-auto hover:cursor-pointer' 
            onClick={() => {
                navigate('/hotels'); 
                window.scrollTo(0, 0)
            }}>
            View all Hotels
        </button>
    </div>
  )
}

export default FeaturedHotel