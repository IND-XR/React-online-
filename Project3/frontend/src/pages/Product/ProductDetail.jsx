import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'

import { wishlist, setSelectedProduct } from "../../store/reducers/productSlice";

import { 
  ShoppingCart, 
  Heart, 
  Star, 
  ArrowLeft,
  Plus,
  Minus,
  Check,
  Truck,
  Shield,
  RotateCcw,
  Award
} from 'lucide-react';

const ProductDetail = () => {

   const { id } = useParams(); // ✅ get id from URL
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 🟢 Local states
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1); 
  const [activeTab, setActiveTab] = useState("description");

  // 🟢 Redux selectors 
  // Wrong ❌


//   const products = useSelector((state) => state.ProductReducer.products);
// const selectedProduct = useSelector((state) => state.ProductReducer.selectedProduct);
 const wishlistItems = useSelector((state) => state.ProductReducer.wishlist);
  // const wishlistItems = useSelector((state) => state.products.wishlist);
  const cart = useSelector((state) => state.cartReducer.items);

  const products = useSelector((state) => state.ProductReducer.products);
const selectedProduct = useSelector((state) => state.ProductReducer.selectedProduct);

  
const p =
  selectedProduct || (products && products.find((item) => String(item.id) === String(id)));


  // 🟢 Get product

  useEffect(() => {
    if (!p && id) {
      const foundProduct = products.find((p) => String(p.id) === String(id));
      if (foundProduct) {
        dispatch(setSelectedProduct(foundProduct));
      }
    }
  }, [id, p, products, dispatch]);

  if (!p) {
    return <div className="pt-20 text-center">Loading product...</div>;
  }

  // 🟢 Derived values
  const isInWishlist = wishlistItems.some((item) => item.id === p.id);
  const cartQuantity =
    cart.find((item) => item.id === p.id)?.quantity || 0;

  // 🟢 Handlers
  const handleAddToCart = () => {
    dispatch({ type: "cart/addToCart", payload: { ...p, quantity } });
  };

  // const handleToggleWishlist = () => {
  //   // dispatch(wishlist(p));
  //   console.log(handleToggleWishlist);
  // };
  const handleToggleWishlist = () => {
  const serializableProduct = {
    id: p.id,
    name: p.name,
    price: p.price,
    image: p.image, // assuming this is an array of URLs, not React elements
    inStock: p.inStock,
    category: p.category
  };
  console.log(handleToggleWishlist);
  dispatch(wishlist(serializableProduct));
};

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/products')}
          className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Products</span>
        </button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src={p.image[selectedImage]}
                alt={p.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-4">
              {p.image.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-blue-500' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${p.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Category and Rating */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">
                {p.category}
              </span>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(p.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {p.rating} ({p.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Title and Price */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{p.name}</h1>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                ${p.price.toFixed(2)}
              </div>
              <div className={`text-sm font-medium ${p.inStock ? 'text-green-600' : 'text-red-600'}`}>
                {p.inStock ? 'In Stock' : 'Out of Stock'}
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">{p.description}</p>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
              <ul className="space-y-2">
                {p.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-700">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-50 transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-50 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                {cartQuantity > 0 && (
                  <span className="text-sm text-gray-600">
                    ({cartQuantity} in cart)
                  </span>
                )}
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  disabled={!p.inStock}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed flex items-center justify-center space-x-2 font-medium"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>

                <button
                  onClick={handleToggleWishlist}
                  className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                    isInWishlist
                      ? 'border-red-500 bg-red-500 text-white'
                      : 'border-gray-300 text-gray-600 hover:border-red-500 hover:text-red-500'
                  }`}
                >
                  <Heart className={`h-5 w-5 ${isInWishlist ? 'fill-current' : ''}`} />
                </button>
              </div>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-3">
                <Truck className="h-6 w-6 text-blue-500" />
                <div>
                  <div className="font-medium text-gray-900">Free Shipping</div>
                  <div className="text-sm text-gray-600">On orders over $50</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-6 w-6 text-green-500" />
                <div>
                  <div className="font-medium text-gray-900">Secure Payment</div>
                  <div className="text-sm text-gray-600">100% protected</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <RotateCcw className="h-6 w-6 text-purple-500" />
                <div>
                  <div className="font-medium text-gray-900">Easy Returns</div>
                  <div className="text-sm text-gray-600">30-day policy</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-6 w-6 text-yellow-500" />
                <div>
                  <div className="font-medium text-gray-900">Quality Guarantee</div>
                  <div className="text-sm text-gray-600">Premium products</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {['description', 'specifications', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm capitalize transition-colors ${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {p.description}
                </p>
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Features & Benefits</h4>
                  <ul className="space-y-2">
                    {p.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(p.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">{key}:</span>
                    <span className="text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Customer Reviews</h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(p.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-lg font-medium text-gray-900">{p.rating}</span>
                    <span className="text-gray-600">({p.reviews} reviews)</span>
                  </div>
                </div>

                {/* Mock Reviews */}
                <div className="space-y-6">
                  {[1, 2, 3].map((review) => (
                    <div key={review} className="border-b border-gray-200 pb-6">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                          <div>
                            <div className="font-medium text-gray-900">Customer {review}</div>
                            <div className="text-sm text-gray-600">Verified Purchase</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700">
                        Great product! Exactly as described and arrived quickly. Would definitely recommend to others.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
