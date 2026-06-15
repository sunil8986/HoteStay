import React, { useMemo, useState } from 'react'
import { roomsDummyData } from '../../assets/assets.js'
import HotelCard from '../../components/HotelCard.jsx';
import HotelFilters from './HotelFilters.jsx';
import Title from '../../components/Title.jsx';

const priceRangeMap = [
  { id: '0-500', min: 0, max: 500 },
  { id: '500-1000', min: 500, max: 1000 },
  { id: '1000-2000', min: 1000, max: 2000 },
  { id: '2000-3000', min: 2000, max: 3000 },
]

const Hotels = () => {
  const [selectedRoomTypes, setSelectedRoomTypes] = useState([])
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([])
  const [sortBy, setSortBy] = useState('newest')

  const filteredRooms = useMemo(() => {
    let result = [...roomsDummyData]

    if (selectedRoomTypes.length) {
      result = result.filter((room) => selectedRoomTypes.includes(room.roomType))
    }

    if (selectedPriceRanges.length) {
      result = result.filter((room) =>
        selectedPriceRanges.some((rangeId) => {
          const range = priceRangeMap.find((item) => item.id === rangeId)
          return range ? room.pricePerNight >= range.min && room.pricePerNight <= range.max : true
        }),
      )
    }

    if (sortBy === 'priceAsc') {
      result = [...result].sort((a, b) => a.pricePerNight - b.pricePerNight)
    } else if (sortBy === 'priceDesc') {
      result = [...result].sort((a, b) => b.pricePerNight - a.pricePerNight)
    } else if (sortBy === 'newest') { 
      result = [...result].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    }

    return result
  }, [selectedRoomTypes, selectedPriceRanges, sortBy])

  const toggleRoomType = (roomType) => {
    setSelectedRoomTypes((prev) =>
      prev.includes(roomType) ? prev.filter((type) => type !== roomType) : [...prev, roomType],
    )
  }

  const togglePriceRange = (rangeId) => {
    setSelectedPriceRanges((prev) =>
      prev.includes(rangeId) ? prev.filter((id) => id !== rangeId) : [...prev, rangeId],
    )
  }

  const clearFilters = () => {
    setSelectedRoomTypes([])
    setSelectedPriceRanges([])
    setSortBy('newest')
  }

  return (
    <div className='w-full max-w-7xl mx-auto py-10 pt-30'>
      <Title
        heading='Our Hotels'
        subheading='Experience comfort and luxury in our well-appointed rooms, designed to provide you with a relaxing stay.'
      />

      <div className='mt-10 gap-10 flex flex-col lg:flex-row items-start justify-between'>

        <div className='grid gap-10 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 flex-1'>
          {filteredRooms.map((roomm, index) => (
            <HotelCard key={roomm._id || index} roomdetails={roomm} keyvalue={index} />
          ))}
        </div>

        <HotelFilters
          selectedRoomTypes={selectedRoomTypes}  selectedPriceRanges={selectedPriceRanges} sortBy={sortBy}  
          onToggleRoomType={toggleRoomType} onTogglePriceRange={togglePriceRange} onSelectSortBy={setSortBy}
          onClear={clearFilters}
        />
      </div>
    </div>
  )
}

export default Hotels