import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function SingleProductPage() {
    const params = useParams();
    const [items,setItem] =useState({});
    const [Loading,setLoading] = useState(true);
    console.log (params); 

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${params.id}`,
            );
    
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            setItem(data);
          } catch (error) {
            console.error('Error fetching products:', error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchProducts();
      }, []);
      console.log("item", items);
      console.log("loading", Loading);
      if (Loading){
        return (
          <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
            <div className="relative">
              <div className="animate-spin rounded-full h-20 w-20 border-4 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-border shadow-2xl"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-indigo-50 to-pink-50 rounded-full"></div>
            </div>
            <div className="mt-8 text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              Loading Product...
            </div>
          </div>
        );
      }
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12">
      <div className="max-w-6xl mx-auto p-8 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50">
        <h1 className="text-5xl font-black text-center mb-8 bg-gradient-to-r from-slate-800 via-purple-700 to-pink-700 bg-clip-text text-transparent drop-shadow-lg">{items.title}</h1>
        <p className="text-xl font-semibold text-gray-700 mb-6 capitalize text-center bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-3 rounded-2xl inline-block shadow-lg">Category: {items.category}</p>

        <div className="flex justify-center mb-8">
          <div className="relative group">
            <img src={items.image}
              className="rounded-2xl shadow-2xl object-contain transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1 border-4 border-white/80"
              height={400}
              width={400}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
        
        <div className="text-center mb-6">
          <p className="text-4xl font-black text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text drop-shadow-lg">Price: ${items.price}</p>
        </div>
        
        <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl shadow-xl border border-gray-200 mb-6">
          <p className="text-lg text-gray-800 leading-relaxed font-medium">{items.description}</p>
        </div>
        
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-yellow-100 to-orange-100 px-8 py-4 rounded-2xl shadow-lg border border-yellow-200">
            <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text">
              ⭐ {items.rating?.rate} ({items.rating?.count} reviews)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default SingleProductPage