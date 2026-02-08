import React, { useState } from 'react'
import { useCart } from '../../Hooks/UseCart';
import { Link } from "react-router-dom";


function ProductCard({ product }) {
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart, isInCart, removeFromCart } = useCart();
  const iscart = isInCart(product.id);

  const handleAddCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <Link to={ `/products/${product.id}`} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full flex flex-col">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-100 h-56">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
          New
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {product.name}
        </h3>

        <div className="flex items-center gap-1 mb-3">
          <span className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</span>
          <span className="text-xs text-gray-500">(128)</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <p className="text-2xl font-bold text-blue-600">${product.price}</p>
          <p className="text-sm text-gray-400 line-through">${Math.round(product.price * 1.2)}</p>
        </div>

        {/* Button */}
        <button
          onClick={() => iscart ? removeFromCart(product.id) : addToCart(product)}
          className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors duration-200 ${
            iscart
              ? 'bg-red-500 text-white hover:bg-red-600'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {iscart ? 'Remove From Cart' : 'Add to Cart'}
        </button>
      </div>
    </Link>
  );
}

export default ProductCard