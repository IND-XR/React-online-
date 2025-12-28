import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Plus, Edit2, Trash2, Eye, Grid3x3, List, Search } from "lucide-react";
import axios from "../../api/axiosconfig";
import { asyncloadproducts } from "../../store/actions/productAction";

const AdminDashboard = () => {
  const user = useSelector((state) => state.user.user);
  const products = useSelector((state) => state.product.products);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteLoading, setDeleteLoading] = useState(null);

  // Check if user is admin
  if (!user || !user.isAdmin) {
    navigate("/login-choice");
    return null;
  }

  // Filter products by search
  const filteredProducts = products.filter((p) =>
    p.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Delete product handler
  const handleDeleteProduct = async (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        setDeleteLoading(productId);
        await axios.delete(`/products/${productId}`);
        dispatch(asyncloadproducts());
        alert("Product deleted successfully!");
      } catch (error) {
        console.error("Error deleting product:", error);
        alert("Failed to delete product");
      } finally {
        setDeleteLoading(null);
      }
    }
  };

  const totalPrice = products.reduce((sum, p) => sum + (parseFloat(p.price) || 0), 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20 pb-12">
      {/* Header */}
      <div className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600 mt-1">Welcome back, {user.name}! 👋</p>
            </div>
            <Link
              to="/admin/CreateProduct"
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 flex items-center space-x-2 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Plus size={20} />
              <span>Add New Product</span>
            </Link>
          </div>

          {/* Search Bar and View Options */}
          <div className="flex gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search products by name or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2 bg-gray-200 p-1 rounded-lg">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded transition-all ${
                  viewMode === "grid"
                    ? "bg-white text-blue-600 shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Grid3x3 size={18} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded transition-all ${
                  viewMode === "list"
                    ? "bg-white text-blue-600 shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
            <p className="text-gray-600 text-sm font-medium">Total Products</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">{products?.length || 0}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow">
            <p className="text-gray-600 text-sm font-medium">Total Inventory Value</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">${totalPrice.toFixed(2)}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow">
            <p className="text-gray-600 text-sm font-medium">Admin Name</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">{user.name}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500 hover:shadow-lg transition-shadow">
            <p className="text-gray-600 text-sm font-medium">Status</p>
            <p className="text-2xl font-bold text-green-600 mt-2">Active</p>
          </div>
        </div>

        {/* Products Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">Manage Products ({filteredProducts.length})</h2>
          </div>

          {filteredProducts && filteredProducts.length > 0 ? (
            <>
              {/* Grid View */}
              {viewMode === "grid" && (
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
                    >
                      {/* Product Image */}
                      <div className="relative h-48 bg-gray-100 overflow-hidden">
                        {product.image && (
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                          />
                        )}
                        <div className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Stock: {product.stock || 0}
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="p-4 flex-1 flex flex-col">
                        <h3 className="font-bold text-gray-900 text-sm line-clamp-2 mb-2">
                          {product.title}
                        </h3>
                        <p className="text-gray-600 text-xs line-clamp-2 mb-2">
                          {product.description}
                        </p>
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-lg font-bold text-gray-900">
                            ${parseFloat(product.price).toFixed(2)}
                          </span>
                          <span className="text-xs bg-gray-200 px-2 py-1 rounded text-gray-700">
                            {product.category}
                          </span>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2 mt-auto">
                          <Link
                            to={`/product-detail/${product.id}`}
                            className="flex-1 flex items-center justify-center gap-1 p-2 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-xs font-semibold"
                          >
                            <Eye size={14} />
                            View
                          </Link>
                          <Link
                            to={`/admin/UpdateProduct/${product.id}`}
                            className="flex-1 flex items-center justify-center gap-1 p-2 text-green-600 bg-green-50 hover:bg-green-100 rounded-lg transition-colors text-xs font-semibold"
                          >
                            <Edit2 size={14} />
                            Edit
                          </Link>
                          <button
                            onClick={() => handleDeleteProduct(product.id)}
                            disabled={deleteLoading === product.id}
                            className="flex-1 flex items-center justify-center gap-1 p-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors text-xs font-semibold disabled:opacity-50"
                          >
                            <Trash2 size={14} />
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* List View */}
              {viewMode === "list" && (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Image</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Product Name</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Category</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Price</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Stock</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredProducts.map((product) => (
                        <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4">
                            {product.image && (
                              <img
                                src={product.image}
                                alt={product.title}
                                className="w-12 h-12 object-cover rounded"
                              />
                            )}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900 font-medium line-clamp-1">
                            {product.title}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">{product.category}</td>
                          <td className="px-6 py-4 text-sm font-bold text-gray-900">
                            ${parseFloat(product.price).toFixed(2)}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              product.stock > 0
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}>
                              {product.stock || 0}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm space-x-2 flex">
                            <Link
                              to={`/product-detail/${product.id}`}
                              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                              title="View"
                            >
                              <Eye size={16} />
                            </Link>
                            <Link
                              to={`/admin/UpdateProduct/${product.id}`}
                              className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                              title="Edit"
                            >
                              <Edit2 size={16} />
                            </Link>
                            <button
                              onClick={() => handleDeleteProduct(product.id)}
                              disabled={deleteLoading === product.id}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                              title="Delete"
                            >
                              <Trash2 size={16} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          ) : (
            <div className="p-12 text-center">
              <p className="text-gray-600 mb-4 text-lg">
                {searchTerm ? "No products found matching your search" : "No products added yet"}
              </p>
              <Link
                to="/admin/CreateProduct"
                className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all font-semibold"
              >
                Create First Product
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
