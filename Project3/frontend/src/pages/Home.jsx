import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AuthApp</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A complete e-commerce solution with separate admin and customer portals
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Link
              to="/admin-login"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
            >
              <span>Admin Portal</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/user-login"
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
            >
              <span>Customer Portal</span>
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-lg p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Features</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div>
                <p className="font-semibold text-gray-900">Admin Features:</p>
                <ul className="text-sm text-gray-600 space-y-1 mt-2">
                  <li>✓ Add Products</li>
                  <li>✓ Update Products</li>
                  <li>✓ Delete Products</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Customer Features:</p>
                <ul className="text-sm text-gray-600 space-y-1 mt-2">
                  <li>✓ Browse Products</li>
                  <li>✓ View Details</li>
                  <li>✓ Shopping Cart</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;