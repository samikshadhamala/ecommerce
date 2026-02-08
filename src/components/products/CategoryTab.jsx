import React from 'react'

function CategoryTab( { CategoryName, setSelectedCategory}) {
    function handleClick(){
        setSelectedCategory(CategoryName);

    }
  return (
    <button
      onClick={handleClick}
      className="px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-110 bg-gradient-to-r from-gray-200 to-gray-100 text-gray-800 hover:from-purple-500 hover:to-pink-500 hover:text-white shadow-md hover:shadow-xl border-2 border-gray-300 hover:border-purple-400"
    >
      {CategoryName}
    </button>
  );

  
}

export default CategoryTab;