import React from 'react'

function FilterByRating( { setMinRate, setMaxRate}) {
    function setMin(event) {
        setMinRate(event.target.value);

    }
     function setMax(event) {
        setMaxRate(event.target.value);
    }
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-3">
          <label className="block text-lg font-semibold text-gray-800">Minimum Rating</label>
          <div className="flex items-center gap-3">
            <input
              type='number'
              min='0'
              max='5'
              onChange={setMin}
              className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 font-semibold"
            />
            <span className="text-2xl">⭐</span>
          </div>
        </div>
        
        <div className="space-y-3">
          <label className="block text-lg font-semibold text-gray-800">Maximum Rating</label>
          <div className="flex items-center gap-3">
            <input
              type='number'
              min='0'
              max='5'
              onChange={setMax}
              className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 font-semibold"
            />
            <span className="text-2xl">⭐</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterByRating