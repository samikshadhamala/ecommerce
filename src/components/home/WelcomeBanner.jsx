import React from 'react'

function WelcomeBanner( {user}) {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-3xl p-12 mb-12 shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-pink-300/30 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent drop-shadow-2xl animate-pulse">Welcome, {user}!</h1>
        <p className="mt-6 text-2xl text-indigo-100/95 font-semibold tracking-wide drop-shadow-lg">Explore curated products and great deals selected for you.</p>
      </div>
    </section>
  )
}

export default WelcomeBanner