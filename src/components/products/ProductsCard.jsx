import React from 'react'

function ProductsCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img className="w-full h-48 object-cover" src={product.image} alt={product.name} />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="mt-2 text-indigo-600 font-bold">{product.price}</p>
        <div className="mt-4">
          <button className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductsCard