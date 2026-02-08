import React from 'react'
import { Link } from 'react-router'

function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 flex items-center justify-center px-4">
      <div className="text-center space-y-8">
        <h1 className="text-9xl md:text-10xl font-black text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text drop-shadow-2xl animate-pulse">404</h1>
        <p className="text-4xl md:text-5xl font-bold text-white mb-6">Page Not Found</p>
        <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto">Sorry, the page you're looking for doesn't exist or has been moved.</p>
        <Link
          to='/'
          className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
        >
          🏠 Go Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound