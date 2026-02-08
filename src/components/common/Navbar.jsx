import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../Hooks/UseCart'

function Navbar() {
  const {cartCount} = useCart();
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-extrabold text-indigo-600">Ecommerce</Link>
          </div>
          <div className="hidden sm:flex sm:space-x-6">
            <Link to='/' className="text-gray-700 hover:text-indigo-600">Home</Link>
            <Link to='/products' className="text-gray-700 hover:text-indigo-600">Products</Link>
            <Link to='/cart' className="text-gray-700 hover:text-indigo-600">
            Cart {cartCount}

            </Link>
              <Link to='/login' className="text-gray-700 hover:text-indigo-600">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar