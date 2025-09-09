import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadproducts } from "../store/actions/productAction"; // adjust path
import {
   ChevronDown, Grid3X3, List, Search, Heart, Star, ShoppingCart 
} from "lucide-react";
import { Navigate } from "react-router-dom";

// ********************************************


// import { addToCart, addToWishlist, removeFromWishlist, setSelectedProduct } from '../store/productSlice';

// ********************************************
const Products = () => {
  const dispatch = useDispatch();


  // get products from redux
  // const allproducts = useSelector((state) => state.product.products|| []);
  // const products = useSelector((state) => state.product.products || []);

  const wishlist = useSelector((state)=>state.wishlist)


  // load products on mount
  useEffect(() => {
    dispatch(asyncloadproducts());
  }, [dispatch]);


  // ********************************************


    const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
    const [sortBy, setSortBy] = useState("name"); // <-- define state


const getCartQuantity = (id) =>
  cartItems.find((item) => item.id === id)?.quantity || 0;
  // categories
  const allproducts = useSelector((state) => state.product.products || []);
  const cartItems = useSelector((state) => state.cartReducer.items || []);


  const categories = ["All", ...Array.from(new Set(allproducts.map((p) => p.category)))];


const handleProductClick = ( ) =>{

  console.log("clicke the one ",handleProductClick)
   navigator(`/ProductDetail`);

}

const handleToggleWishlist =()=>{
  console.log(handleToggleWishlist)
}

const handleAddToCart =() =>{
  console.log(handleAddToCart);
}


const isInWishlist = (id) =>  Array.isArray(wishlist) && wishlist.some((item) => item.id === id); 
// const isInWishlist = (id) =>
//   Array.isArray(wishlist) && wishlist.includes(id);

console.log("wishlist in state:", wishlist);

  // filtering

const products = allproducts.filter((p) => {
  const matchCategory = selectedCategory === "All" || p.category === selectedCategory;
  const matchSearch = p.title?.toLowerCase().includes(searchTerm.toLowerCase());
  return matchCategory && matchSearch;
});

// now safe to use

  


  // ********************************************

  return (
        <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our curated collection of premium products designed to enhance your lifestyle.
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
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 pointer-events-none" />
              </div>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
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

        {/* Products Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {products.map((p) => (
            <div
              key={p.id}
              onClick={() => handleProductClick(products)}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden ${
                viewMode === 'list' ? 'flex' : ''
              }`}
            >
              {/* Product Image */}
              <div className={`relative overflow-hidden ${
                viewMode === 'list' ? 'w-48 flex-shrink-0' : 'aspect-square'
              }`}>
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Stock Status */}
                {!p.inStock && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Out of Stock
                  </div>
                )}

                {/* Wishlist Button */}
                <button
                  onClick={(e) => handleToggleWishlist(p, e)}
                  className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-200 ${
                    isInWishlist(p.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
                  }`}
                >
                  <Heart className={`h-5 w-5 ${isInWishlist(p.id) ? 'fill-current' : ''}`} />
                </button>

                {/* Quick Add to Cart */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={(e) => handleAddToCart(p, e)}
                    // disabled={!p.inStock}
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    <span>Add to Cart</span>
                    {getCartQuantity(p.id) > 0 && (
                      <span className="bg-white text-blue-500 rounded-full px-2 py-1 text-xs font-bold">
                        {getCartQuantity(p.id)}
                      </span>
                    )}
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full">
                    {p.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{p.rating}</span>
                    <span className="text-sm text-gray-400">({p.reviews})</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {p.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {p.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-gray-900">
                    ${p.price}
                  </div>
                  
                  <button
                    // onClick={(e) => handleAddToCart(p, e)}
                    // disabled={!p.inStock}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed flex items-center space-x-2"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    <span className="hidden sm:inline">Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Products Found */}
        {products.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;

