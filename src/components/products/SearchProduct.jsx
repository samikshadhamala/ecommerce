import React from 'react'

function SearchProduct({ setSearch }) {
    function onType(event) {
        setSearch(event.target.value);
    }
    function onSumbit(e) {
        e .preventDefault();
    }
  return (
    <form onSubmit={onSumbit} className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          type='text'
          placeholder='Search for products...'
          onChange={onType}
          className="w-full px-6 py-4 border-2 border-gray-300 rounded-full focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 shadow-md text-lg"
        />
        <button
          type='submit'
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
        >
          🔍
        </button>
      </div>
    </form> 
  )

}

export default SearchProduct