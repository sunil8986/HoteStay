import React from 'react'

const popularFilters = ['Single Bed', 'Double Bed', 'Luxury Room', 'Family Suite']
const priceRanges = [
  { id: '0-500', label: '$0 to 500', min: 0, max: 500 },
  { id: '500-1000', label: '$500 to 1000', min: 500, max: 1000 },
  { id: '1000-2000', label: '$1000 to 2000', min: 1000, max: 2000 },
  { id: '2000-3000', label: '$2000 to 3000', min: 2000, max: 3000 },
]
const sortOptions = [
  { id: 'priceAsc', label: 'Price Low to High' },
  { id: 'priceDesc', label: 'Price High to Low' },
  { id: 'newest', label: 'Newest First' },
]

const HotelFilters = ({
  selectedRoomTypes,
  selectedPriceRanges,
  sortBy,
  onToggleRoomType,
  onTogglePriceRange,
  onSelectSortBy,
  onClear,
}) => {
  return (
    <aside className='w-full lg:w-96'>
      <div className='bg-white border border-gray-200 rounded-3xl p-6 shadow-sm'>
        <div className='flex items-center justify-between mb-6'>
          <h2 className='text-lg font-semibold text-gray-900'>FILTERS</h2>
          <button
            type='button'
            onClick={onClear}
            className='text-sm font-semibold text-indigo-600 hover:text-indigo-800'
          >
            CLEAR
          </button>
        </div>

        <div className='space-y-6'>
          <div>
            <h3 className='text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4'>Popular filters</h3>
            <div className='space-y-3'>
              {popularFilters.map((filter) => (
                <label key={filter} className='flex items-center text-sm text-gray-700 gap-3'>
                  <input
                    type='checkbox'
                    checked={selectedRoomTypes.includes(filter)}
                    onChange={() => onToggleRoomType(filter)}
                    className='h-4 w-4 text-indigo-600 border-gray-300 rounded'
                  />
                  <span>{filter}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className='text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4'>Price Range</h3>
            <div className='space-y-3'>
              {priceRanges.map((range) => (
                <label key={range.id} className='flex items-center text-sm text-gray-700 gap-3'>
                  <input
                    type='checkbox'
                    checked={selectedPriceRanges.includes(range.id)}
                    onChange={() => onTogglePriceRange(range.id)}
                    className='h-4 w-4 text-indigo-600 border-gray-300 rounded'
                  />
                  <span>{range.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className='text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4'>Sort By</h3>
            <div className='space-y-3'>
              {sortOptions.map((option) => (
                <label key={option.id} className='flex items-center text-sm text-gray-700 gap-3'>
                  <input
                    type='radio'
                    name='hotel-sort'
                    value={option.id}
                    checked={sortBy === option.id}
                    onChange={() => onSelectSortBy(option.id)}
                    className='h-4 w-4 text-indigo-600 border-gray-300'
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default HotelFilters
