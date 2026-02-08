import React from 'react'

function CategoryTab({ categoryName, setSelectedCategory, isSelected }) {
    function handleClick(){
        setSelectedCategory(categoryName);
    }
  return (
    <button
      onClick={handleClick}
      className={`px-12 py-6 rounded-3xl font-black text-2xl transition-all duration-700 transform hover:scale-110 hover:-translate-y-4 hover:rotate-2 capitalize relative overflow-hidden shadow-2xl ${
        isSelected
          ? "bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white shadow-purple-500/50 animate-pulse" 
          : "bg-gradient-to-r from-gray-50 to-white text-gray-800 hover:from-purple-50 hover:to-pink-50 hover:shadow-2xl border-2 border-gray-200 hover:border-purple-300"
      }`}
    >
      <span className="relative z-10 flex items-center gap-3">
        {categoryName === "all" && <span className="text-3xl">🌟</span>}
        {categoryName === "men's clothing" && <span className="text-3xl">👔</span>}
        {categoryName === "women's clothing" && <span className="text-3xl">👗</span>}
        {categoryName === "electronics" && <span className="text-3xl">📱</span>}
        {categoryName === "jewelery" && <span className="text-3xl">💎</span>}
        {categoryName === "all" ? "All Products" : categoryName}
      </span>
      {isSelected && (
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
      )}
    </button>
  );
}

export default CategoryTab;