import React from 'react'

function ProductRange({ setMinValue, setMaxValue }) {
    function setMin(event){
        setMinValue(event.target.value);


    }
    function setMax(event){
        setMaxValue(event.target.value);

    }
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-3">
          <label className="block text-lg font-semibold text-gray-800">Minimum Price</label>
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-gray-600">$</span>
            <input
              type='number'
              min='0'
              onChange={setMin}
              className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 font-semibold"
            />
          </div>
        </div>
        
        <div className="space-y-3">
          <label className="block text-lg font-semibold text-gray-800">Maximum Price</label>
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-gray-600">$</span>
            <input
              type='number'
              min='0'
              onChange={setMax}
              className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 font-semibold"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductRange