import React, { use } from 'react'
import {useState} from "react"

function PracticeState() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Samiksha")

    function increment () {
        setCount(count + 1);
    }
    function decrement () {
        setCount(count - 1);
    }
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-8 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-bold text-gray-800">Counter Demo</h3>
      <p className="text-5xl font-black text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">{count}</p>
      <p className="text-xl font-semibold text-gray-700">User: {name}</p>
      <div className="flex gap-4">
        <button
          onClick={increment}
          className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-110 shadow-md text-2xl"
        >
          +
        </button>
        <button
          onClick={decrement}
          className="px-8 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-110 shadow-md text-2xl"
        >
          −
        </button>
      </div>
    </div>
  )
}

export default PracticeState