import React from 'react'
import Title from '../../../components/Title.jsx'
import {exclusiveOffers} from '../../../assets/assets.js'

const ExclusiveOffers = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 pt-10 pb-10">
            
        <Title heading={"Exclusive Offers"} subheading={"Check out our limited-time offers and special deals on selected hotels."} />  

        <div className="flex flex-wrap flex-row items-center justify-center gap-8 pt-12">
            {
                exclusiveOffers.slice(0, 4).map((offer, index) => {
                    return (        
                    <div key={index} className="relative w-1/4 h-48 rounded-lg overflow-hidden group cursor-pointer">
                        <img src={offer.image} alt={offer.title} className="relative w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div className="absolute  bg-opacity-50 flex flex-col justify-end p-4  left-0 bottom-0">
                            <h3 className="text-white text-lg font-semibold">{offer.title}</h3>
                            <p className="text-gray-300 text-sm">{offer.description}</p>
                            <button className="text-white py-2 rounded-full transition-colors duration-300 flex items-center"  >
                                View Offer <img src="https://img.icons8.com/ios-filled/12/ffffff/arrow.png" alt="arrow" className="inline-block ml-1" />
                            </button>
                        </div>
                    </div>
                    )
                }
            )
            }
        </div>
        <button 
            className='text-black px-6 py-3 border-gray-300 border my-8 rounded-full hover:bg-indigo-700 hover:text-white   
            transition-colors duration-300 mx-auto hover:cursor-pointer' 
            >
            View all Offers
        </button>
    </div>
  )
}

export default ExclusiveOffers