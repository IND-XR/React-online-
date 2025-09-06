import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadproducts } from "../store/actions/productAction"; // adjust path
import { ChevronDown, Grid3X3,
  List, Search } from "lucide-react";

// ********************************************

// import { addToCart, addToWishlist, removeFromWishlist, setSelectedProduct } from '../store/productSlice';

  // ********************************************
const Products = () => {
  const dispatch = useDispatch();

  // get products from redux
  const products = useSelector((state) => state.product.products);

  // load products on mount
  useEffect(() => {
    dispatch(asyncloadproducts());
  }, [dispatch]);

  // ********************************************

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];
  //   const [searchTerm, setSearchTerm] = useState('');
  // const [selectedCategory, setSelectedCategory] = useState('All');

  // const setSearchTerm =()=>{
  //   console.log("productSearch bar :- ",setSearchTerm)
  // }

  //   const setSelectedCategory =()=>{
  //   console.log("productSearch bar :- ", setSelectedCategory)
  // }

  // ********************************************

  return (
    <div className="min-h-screen bg-gray-50 pt-20"> 
    <div className="max-w-7xl mx-auto px-4 sm:px6 lg:px-8 py-8">
{/* Header */}
    <div className="text-center m-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Our Products
      </h1>
      <p className="text-x1 text-gray-600 max-w-2xl mx-auto">
        Discover our Curate collection of premium product to enchance your lifestyle.
      </p>
    </div>
    {/* Search and Filters */}
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
    <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">

{/* Search */}
    <div className="relative flex-1 max-w-md">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />

      <input 
      type="text" 
      placeholder="Serach products...."
      // value={searchTerm}
      onChange={(e)=>{
        setSearchTerm(e.target.value)
      }}
      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg foucs:ring-2 foucs:ring-blue-500 focus:border-transparent"
      />
      </div>
      {/* Filters */}
      <div className="flex flex-wrap gap-4 items-center">
      {/* Category Filter */}
      <div className="relative">
        <section 
        // value={selectedCategory}
        // onChange={(e)=>{
        //   setSelectedCategory(e.target.value)
        // }}
        className="appearance-none bg-white border border-gray-300 rounded-lg px4 py-3 pr-4 focus:ring-2 focus:ring-blue-500 foucs:border-transparent"
        >
          {categories.map(category =>(
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </section>
        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 pointer-events-none" />
      </div>
      {/* Sort */}
      <div className="relative">
        <select
        // value={sortBy}
        // onChange={(e)=>setSortBy(e.target.value)}}
        className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="name">Sort by Name</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>

        </select>
        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 pointer-events-none" />
      </div>
      {/* View Mode */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  <Grid3X3 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>


      
      </div>


   


  
  
    
    </div>
     </div>
      </div>
       </div>
         
  );
};

export default Products;



{/* <div className=" bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-8">Products</h1>

      {/* grid for product cards 
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products && products.length > 0 ? (
          products.map((p) => (
            <div
              key={p.id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center hover:shadow-xl transition"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-32 h-32 object-contain mb-4"
              />
              <h1 className="text-sm font-semibold text-gray-700 truncate bg-pink-400">
                {p.description}
              </h1>
              <h2 className="text-lg font-semibold text-gray-700 truncate">
                {p.title}
              </h2>
              <p className="text-gray-500 text-sm">${p.price}</p>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </div> 
  */}
