import React from 'react'
import WelcomeBanner from '../components/home/WelcomeBanner'
import { products } from '../data/ProductData'
import ProductsCard from '../components/products/ProductsCard'
import PracticeState from '../components/common/PracticeState'

function Homepages() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-64 -right-64 w-[32rem] h-[32rem] bg-gradient-to-br from-cyan-400/30 to-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-64 -left-64 w-[32rem] h-[32rem] bg-gradient-to-br from-pink-400/30 to-rose-400/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-yellow-400/25 to-orange-400/25 rounded-full blur-xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-violet-400/15 to-fuchsia-400/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-4 h-4 bg-cyan-400/60 rotate-45 animate-bounce" style={{animationDelay: '0.2s'}}></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-pink-400/60 rounded-full animate-bounce" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-yellow-400/60 rotate-12 animate-bounce" style={{animationDelay: '1.2s'}}></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-emerald-400/60 rounded-full animate-bounce" style={{animationDelay: '1.6s'}}></div>
      </div>
      
      <div className="container mx-auto px-8 py-12 relative z-10">
        <WelcomeBanner user='Samiksha' />
        
        {/* Enhanced products section with unique design */}
        <div className="relative">
          {/* Decorative elements around the products section */}
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full animate-ping opacity-60"></div>
          <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full animate-ping opacity-60" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full animate-ping opacity-60" style={{animationDelay: '1s'}}></div>
          <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full animate-ping opacity-60" style={{animationDelay: '1.5s'}}></div>
          
          <div className="bg-white/10 backdrop-blur-3xl rounded-[3rem] p-16 shadow-2xl border border-white/20 relative overflow-hidden">
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-[3rem]"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-16">
                <div className="inline-block relative">
                  <h1 className="text-7xl font-black bg-gradient-to-r from-cyan-300 via-pink-300 to-yellow-300 bg-clip-text text-transparent drop-shadow-2xl animate-pulse mb-4">
                    Highlighted Products
                  </h1>
                  <div className="h-2 w-full bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400 rounded-full shadow-xl animate-pulse"></div>
                </div>
                <p className="text-white/80 text-2xl font-semibold mt-6 tracking-wide">✨ Curated Excellence Just for You ✨</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
                {products.map((product, index) =>(
                  <div 
                    key={product.id}
                    className="group relative transform transition-all duration-700 hover:scale-110 hover:-translate-y-6 hover:rotate-2"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    {/* Unique glow effect for each card */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 via-pink-500/20 to-yellow-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="relative">
                      <ProductsCard
                        product={product}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 relative">
          {/* Decorative frame for PracticeState */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 rounded-3xl blur-xl"></div>
          <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <PracticeState />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepages