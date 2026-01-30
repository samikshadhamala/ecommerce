import React from 'react'

function WelcomeBanner( {user}) {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-lg p-8 mb-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold">Welcome, {user}!</h1>
        <p className="mt-2 text-indigo-100/90">Explore curated products and great deals selected for you.</p>
      </div>
    </section>
  )
}

export default WelcomeBanner