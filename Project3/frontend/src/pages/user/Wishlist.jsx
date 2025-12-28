import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Trash2, Heart, ShoppingCart, ArrowLeft, Star } from "lucide-react";
import { removeFromWishlist } from "../../store/reducers/wishlistSlice";
import { addToCart } from "../../store/reducers/cartSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlistItems = useSelector((state) => state.wishlist?.items || []);
  const cartItems = useSelector((state) => state.cart?.items || []);

  const handleRemoveFromWishlist = (id) => {
    dispatch(removeFromWishlist(id));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    // Optional: Remove from wishlist after adding to cart
    // dispatch(removeFromWishlist(product.id));
  };

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center space-x-2 mb-8">
            <button
              onClick={() => navigate("/products")}
              className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Products</span>
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <Heart size={80} className="mx-auto text-gray-300 mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Wishlist is Empty</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Save your favorite products to your wishlist and they will appear here!
            </p>
            <Link
              to="/products"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 font-semibold"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">My Wishlist</h1>
            <p className="text-gray-600">You have {wishlistItems.length} item(s) in your wishlist</p>
          </div>
          <button
            onClick={() => navigate("/products")}
            className="flex items-center space-x-2 px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-gray-700 font-semibold"
          >
            <ArrowLeft size={20} />
            <span>Continue Shopping</span>
          </button>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden bg-gray-100 h-64">
                <img
                  src={product.image || "https://via.placeholder.com/300"}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <button
                    onClick={() => handleRemoveFromWishlist(product.id)}
                    className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors shadow-lg"
                    title="Remove from wishlist"
                  >
                    <Heart size={20} fill="white" />
                  </button>
                </div>

                {/* Stock Badge */}
                {product.stock === 0 && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">OUT OF STOCK</span>
                  </div>
                )}
              </div>

              {/* Product Details */}
              <div className="p-6">
                <Link
                  to={`/product-detail/${product.id}`}
                  className="text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors block mb-2 line-clamp-2"
                >
                  {product.title}
                </Link>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">(45 reviews)</span>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-blue-600">
                      ${product.price?.toFixed(2) || "0.00"}
                    </span>
                    <span className="text-lg text-gray-400 line-through">
                      ${(product.price * 1.2)?.toFixed(2) || "0.00"}
                    </span>
                  </div>
                  <p className="text-sm text-green-600 font-semibold mt-1">Save 20%</p>
                </div>

                {/* Category */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={product.stock === 0}
                    className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      product.stock === 0
                        ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                        : isInCart(product.id)
                        ? "bg-green-500 hover:bg-green-600 text-white"
                        : "bg-blue-500 hover:bg-blue-600 text-white"
                    }`}
                  >
                    <ShoppingCart size={20} />
                    <span>
                      {product.stock === 0
                        ? "Out of Stock"
                        : isInCart(product.id)
                        ? "In Cart"
                        : "Add to Cart"}
                    </span>
                  </button>
                  <Link
                    to={`/product-detail/${product.id}`}
                    className="flex-1 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg font-semibold transition-colors text-center"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Move All to Cart */}
        {wishlistItems.length > 0 && (
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Ready to shop?</p>
            <button
              onClick={() => {
                wishlistItems.forEach((item) => {
                  if (item.stock !== 0) {
                    dispatch(addToCart(item));
                  }
                });
                navigate("/cart");
              }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 font-semibold inline-flex items-center space-x-2"
            >
              <ShoppingCart size={20} />
              <span>Move All to Cart</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
