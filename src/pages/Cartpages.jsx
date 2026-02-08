import React from 'react'
import { useCart } from '../Hooks/UseCart'
import ProductCard from '../components/products/ProductsCard';

function Cartpages() {
    const {cartItems, cartCount, cartTotal} = useCart();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">Shopping Cart</h1>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <p className="text-2xl font-bold text-gray-800">
                Total Items: <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-3xl font-black">{cartCount}</span>
              </p>
              <div className="w-1 h-8 bg-gray-300 rounded-full"></div>
              <p className="text-2xl font-bold text-gray-800">
                Total Price: <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent text-3xl font-black">${cartTotal.toFixed(2)}</span>
              </p>
            </div>
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-2xl font-semibold text-gray-600 mb-6">Your cart is empty 🛒</p>
              <a href="/products" className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Continue Shopping
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {cartItems.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cartpages