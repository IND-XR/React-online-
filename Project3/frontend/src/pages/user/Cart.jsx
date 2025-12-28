import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Trash2, ShoppingBag, Heart, Plus, Minus, ArrowLeft } from "lucide-react";
import { removeFromCart, addToCart } from "../../store/reducers/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart?.items || []);
  const [couponCode, setCouponCode] = useState("");

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncreaseQuantity = (item) => {
    // Add same item again to increase quantity
    dispatch(addToCart(item));
  };

  const handleDecreaseQuantity = (item) => {
    // If quantity is 1, remove the item
    if (item.quantity === 1) {
      handleRemoveFromCart(item.id);
    } else {
      // Otherwise, decrease quantity by creating a new quantity update
      dispatch(removeFromCart(item.id));
      const updatedItem = { ...item, quantity: item.quantity - 1 };
      dispatch(addToCart(updatedItem));
    }
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    // You can implement checkout logic here
    alert("Proceeding to checkout with " + cartItems.length + " items!");
    // navigate("/checkout");
  };

  if (cartItems.length === 0) {
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
            <ShoppingBag size={80} className="mx-auto text-gray-300 mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Looks like you haven't added any products yet. Start shopping to fill your cart!
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
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
            <p className="text-gray-600">You have {cartItems.length} item(s) in your cart</p>
          </div>
          <button
            onClick={() => navigate("/products")}
            className="flex items-center space-x-2 px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-gray-700 font-semibold"
          >
            <ArrowLeft size={20} />
            <span>Continue Shopping</span>
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors p-6 flex gap-6"
                >
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={item.image || "https://via.placeholder.com/100"}
                      alt={item.title}
                      className="w-24 h-24 object-cover rounded-lg shadow-md"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-grow">
                    <Link
                      to={`/product-detail/${item.id}`}
                      className="text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors"
                    >
                      {item.title}
                    </Link>
                    <p className="text-gray-600 text-sm mt-1">{item.description?.substring(0, 100)}...</p>
                    <div className="mt-3 flex items-center space-x-2">
                      <span className="text-2xl font-bold text-blue-600">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                      <span className="text-gray-500 line-through">
                        ${((item.price * 1.2) * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Remove from cart"
                    >
                      <Trash2 size={20} />
                    </button>

                    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-gray-50">
                      <button
                        onClick={() => handleDecreaseQuantity(item)}
                        className="p-2 hover:bg-gray-200 transition-colors"
                      >
                        <Minus size={18} />
                      </button>
                      <span className="px-4 py-2 font-semibold text-gray-900 min-w-[50px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleIncreaseQuantity(item)}
                        className="p-2 hover:bg-gray-200 transition-colors"
                      >
                        <Plus size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>

              {/* Summary Details */}
              <div className="space-y-4 border-b border-gray-200 pb-6 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax (10%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between mb-6">
                <span className="text-xl font-bold text-gray-900">Total</span>
                <span className="text-3xl font-bold text-blue-600">${total.toFixed(2)}</span>
              </div>

              {/* Coupon Code */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Coupon Code
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter coupon"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-semibold">
                    Apply
                  </button>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 font-semibold mb-3"
              >
                Proceed to Checkout
              </button>

              {/* Continue Shopping */}
              <button
                onClick={() => navigate("/products")}
                className="w-full px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors font-semibold"
              >
                Continue Shopping
              </button>

              {/* Secure Badge */}
              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <p className="text-xs text-gray-600">
                  🔒 Secure checkout with SSL encryption
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
