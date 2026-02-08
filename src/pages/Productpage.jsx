import React, { useEffect, useState } from 'react'
import ProductCard from '../components/products/ProductsCard';
import { useCart } from '../Hooks/UseCart';
import CategoryData from'../data/Categories';
import CategoryTab from '../components/products/Categorytab';
import SearchProduct from '../components/products/SearchProduct';
import ProductRange from '../components/products/ProductRange';
import FilterByRating from '../components/products/FilterByRating';


export default function Productpage() {
  const { items, loading } = useCart();


  const [selectedCategory, setSelectedCategory] = useState("all");

  const [search, setSearch] = useState("");
  console.log("search", search);
  
  const [minValue, setMinValue] = useState(0);
const[maxValue, setMaxValue] = useState(1000);
 const [mainRating, setMinRating] = useState(0);
 const [maxRating, setMaxRating] = useState(5);

console.log("minRating,", mainRating)
console.log("maxRating", maxRating)
  
  let filterItems = items.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  function filterBySearch(items){
    if(!search){
      return items;
    }
    return items.filter(( product) => {
      return product.title.toLowerCase().includes(search.toLowerCase())
    });

  }
 
    filterItems= filterBySearch(filterItems);

    function productRangeFilter(items){
      return items.filter((item) =>{
        return item.price >= minValue && item.price <= maxValue;
      });
    }
    function productRatingFilter(items){
      return items.filter((item) =>{
        return item.rating.rate >= mainRating && item.rating.rate <= maxRating;
      });
    }
    
    filterItems = productRatingFilter(filterItems);
    filterItems = productRangeFilter(filterItems);







  if (loading) return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
      <div className="relative">
        <div className="animate-spin rounded-full h-24 w-24 border-4 border-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-border shadow-2xl"></div>
        <div className="absolute inset-3 bg-gradient-to-br from-slate-900 to-indigo-900 rounded-full"></div>
      </div>
      <div className="mt-10 text-3xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
        Loading Products...
      </div>
      <div className="mt-6 flex space-x-3">
        <div className="w-4 h-4 bg-pink-500 rounded-full animate-bounce shadow-lg"></div>
        <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce shadow-lg" style={{animationDelay: '0.1s'}}></div>
        <div className="w-4 h-4 bg-cyan-500 rounded-full animate-bounce shadow-lg" style={{animationDelay: '0.2s'}}></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-48 -right-48 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-gradient-to-br from-cyan-400/30 to-indigo-400/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-br from-violet-300/20 to-fuchsia-300/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.8s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block relative">
              <h2 className="text-8xl font-black bg-gradient-to-r from-slate-700 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 animate-pulse drop-shadow-2xl">
                Our Products
              </h2>
              <div className="h-2 w-full bg-gradient-to-r from-slate-500 via-purple-500 to-pink-500 rounded-full mb-6 shadow-xl"></div>
            </div>
            <p className="text-gray-800 text-3xl font-bold tracking-wide">✨ Discover Premium Collections ✨</p>
          </div>
          
          <div className="mb-16 space-y-6">
            <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/70">
              <SearchProduct setSearch={setSearch} />
            </div>
            <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/70">
              <ProductRange
               setMaxValue={setMaxValue} 
              setMinValue={setMinValue}

               />
               <FilterByRating
               setMaxRate={setMaxRating}
               setMinRate={setMinRating}
               />

  
              
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-20 p-12 bg-white/95 backdrop-blur-2xl rounded-[3rem] shadow-2xl border border-white/70 relative">
            {/* Decorative elements */}
            <div className="absolute -top-3 -left-3 w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-ping shadow-lg"></div>
            <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-br from-pink-500 to-cyan-500 rounded-full animate-ping shadow-lg" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-gradient-to-br from-cyan-500 to-indigo-500 rounded-full animate-ping shadow-lg" style={{animationDelay: '1s'}}></div>
            <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full animate-ping shadow-lg" style={{animationDelay: '1.5s'}}></div>
            
            <CategoryTab
              categoryName="all"
              setSelectedCategory={setSelectedCategory}
              isSelected={selectedCategory === "all"}
            />
            {CategoryData.map((category, index) => (
              <CategoryTab
                key={category}
                categoryName={category}
                setSelectedCategory={setSelectedCategory}
                isSelected={selectedCategory === category}
              />
            ))}
          </div>
          {filterItems.length === 0 ? (
            <div className="text-center py-40">
              <div className="relative inline-block">
                <div className="text-[12rem] mb-12 animate-bounce filter drop-shadow-2xl">🛒</div>
                <div className="absolute -top-8 -right-8 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-ping shadow-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-br from-cyan-500 to-indigo-500 rounded-full animate-ping shadow-xl" style={{animationDelay: '0.5s'}}></div>
              </div>
              <h3 className="text-6xl font-black bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-8">
                No products found
              </h3>
              <p className="text-gray-600 text-2xl font-bold">✨ Try selecting a different category ✨</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-16">
                <div className="inline-block p-8 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/70">
                  <p className="text-3xl font-black text-gray-800">
                    Showing <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-4xl">{filterItems.length}</span> products
                    {selectedCategory !== "all" && (
                      <span className="ml-6 px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-2xl text-2xl font-black capitalize border-3 border-purple-300 shadow-lg">
                        {selectedCategory}
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
                {filterItems.map((product, index) => (
                  <div 
                    key={product.id} 
                    className="transform transition-all duration-700 hover:scale-110 hover:-translate-y-4 hover:rotate-1 hover:shadow-2xl"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
} 

                  
                  
                

