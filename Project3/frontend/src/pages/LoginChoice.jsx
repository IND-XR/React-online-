import React from "react";
import { Link } from "react-router-dom";
import { Shield, Users } from "lucide-react";

const LoginChoice = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to AuthApp
          </h1>
          <p className="text-gray-600 text-lg">
            Choose your login type to continue
          </p>
        </div>

        {/* Login Options */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Admin Login */}
          <Link
            to="/admin-login"
            className="group"
          >
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-2xl">
                  <Shield className="w-12 h-12 text-white" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">
                Admin Login
              </h2>
              <p className="text-center text-gray-600 mb-6">
                Manage products, add new items, and control your inventory
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span> Add Products
                </p>
                <p className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span> Update Products
                </p>
                <p className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span> Delete Products
                </p>
                <p className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span> Manage Inventory
                </p>
              </div>
              <button className="w-full mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200">
                Login as Admin
              </button>
            </div>
          </Link>

          {/* User Login */}
          <Link
            to="/user-login"
            className="group"
          >
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-4 rounded-2xl">
                  <Users className="w-12 h-12 text-white" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">
                Customer Login
              </h2>
              <p className="text-center text-gray-600 mb-6">
                Browse products, view details, and make purchases
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p className="flex items-center">
                  <span className="text-purple-600 mr-2">✓</span> Browse Products
                </p>
                <p className="flex items-center">
                  <span className="text-purple-600 mr-2">✓</span> View Details
                </p>
                <p className="flex items-center">
                  <span className="text-purple-600 mr-2">✓</span> Add to Cart
                </p>
                <p className="flex items-center">
                  <span className="text-purple-600 mr-2">✓</span> Make Purchases
                </p>
              </div>
              <button className="w-full mt-8 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-200">
                Login as Customer
              </button>
            </div>
          </Link>
        </div>

        {/* Demo Credentials */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <p className="text-sm text-gray-600 mb-4">
            <span className="font-semibold">Demo Credentials:</span>
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold text-gray-900">Admin</p>
              <p className="text-gray-600">Email: admin@shop.com</p>
              <p className="text-gray-600">Password: admin123</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Customer</p>
              <p className="text-gray-600">Email: john@shop.com</p>
              <p className="text-gray-600">Password: user123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginChoice;
