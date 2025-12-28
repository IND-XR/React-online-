import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Edit2, Upload, AlertCircle, CheckCircle, ArrowLeft } from "lucide-react";
import axios from "../../api/axiosconfig";
import { asyncloadproducts } from "../../store/actions/productAction";

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  
  const products = useSelector((state) => state.product.products);
  const product = products?.find((p) => p.id === id);
  
  const [imagePreview, setImagePreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (product) {
      reset({
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        stock: product.stock || 10,
      });
      if (product.image) {
        setImagePreview(product.image);
      }
    }
  }, [product, reset]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const UpdateProductHandler = async (data) => {
    setLoading(true);
    setError("");
    try {
      const updatedProduct = {
        ...product,
        ...data,
        price: parseFloat(data.price),
        stock: parseInt(data.stock),
        image: imagePreview || product.image,
      };

      await axios.put(`/products/${id}`, updatedProduct);
      
      setSuccess(true);
      dispatch(asyncloadproducts());
      
      setTimeout(() => {
        navigate("/admin-dashboard");
      }, 2000);
    } catch (err) {
      console.error("Error updating product:", err);
      setError("Failed to update product. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-20 pb-12 px-4 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle size={48} className="mx-auto text-red-500 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h2>
          <p className="text-gray-600 mb-6">The product you're trying to edit doesn't exist.</p>
          <button
            onClick={() => navigate("/admin-dashboard")}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <button
          onClick={() => navigate("/admin-dashboard")}
          className="mb-6 flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </button>

        {/* Card */}
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="mx-auto h-16 w-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 transform hover:scale-110 transition-transform duration-300">
              <Edit2 className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Edit Product
            </h2>
            <p className="text-gray-600">Update product details and information</p>
          </div>

          {/* Success Message */}
          {success && (
            <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-2 text-green-700">
              <CheckCircle size={20} />
              <span>Product updated successfully! Redirecting...</span>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-2 text-red-700">
              <AlertCircle size={20} />
              <span>{error}</span>
            </div>
          )}

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
            onSubmit={handleSubmit(UpdateProductHandler)}
          >
            {/* Product Title */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Product Title *
              </label>
              <motion.input
                {...register("title", { required: "Title is required" })}
                whileFocus={{ scale: 1.02 }}
                type="text"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  errors.title ? "border-red-400" : "border-gray-300"
                }`}
                placeholder="e.g. Premium Cotton T-Shirt"
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
              )}
            </div>

            {/* Price & Stock Row */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Price */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Price ($) *
                </label>
                <motion.input
                  {...register("price", { 
                    required: "Price is required",
                    min: { value: 0, message: "Price must be positive" }
                  })}
                  whileFocus={{ scale: 1.02 }}
                  type="number"
                  step="0.01"
                  min="0"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                    errors.price ? "border-red-400" : "border-gray-300"
                  }`}
                  placeholder="99.99"
                />
                {errors.price && (
                  <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
                )}
              </div>

              {/* Stock */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Stock Quantity
                </label>
                <motion.input
                  {...register("stock")}
                  whileFocus={{ scale: 1.02 }}
                  type="number"
                  min="0"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="10"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Description *
              </label>
              <motion.textarea
                {...register("description", { required: "Description is required" })}
                whileFocus={{ scale: 1.02 }}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none ${
                  errors.description ? "border-red-400" : "border-gray-300"
                }`}
                placeholder="Enter detailed product description..."
                rows="4"
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
              )}
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Category *
              </label>
              <motion.select
                {...register("category", { required: "Category is required" })}
                whileFocus={{ scale: 1.02 }}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  errors.category ? "border-red-400" : "border-gray-300"
                }`}
              >
                <option value="">Select a category</option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="women's clothing">Women's Clothing</option>
                <option value="electronics">Electronics</option>
                <option value="books">Books</option>
                <option value="home & garden">Home & Garden</option>
                <option value="sports">Sports</option>
                <option value="jewelry">Jewelry</option>
              </motion.select>
              {errors.category && (
                <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
              )}
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Product Image
              </label>
              
              {/* Current Image */}
              {imagePreview && (
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Current Image:</p>
                  <img 
                    src={imagePreview} 
                    alt="Current" 
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
              )}

              {/* File Input */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="image-upload-edit"
                />
                <label htmlFor="image-upload-edit" className="cursor-pointer block">
                  <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                  <p className="text-gray-600 font-medium">Click to change image</p>
                  <p className="text-gray-400 text-sm">or drag and drop</p>
                </label>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-8">
              {/* Update Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={loading}
                className="flex-1 flex justify-center py-3 px-4 border border-transparent text-base font-semibold rounded-lg text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                {loading ? "Updating..." : "Update Product"}
              </motion.button>

              {/* Cancel Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={() => navigate("/admin-dashboard")}
                className="flex-1 py-3 px-4 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg font-semibold transition-all"
              >
                Cancel
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;