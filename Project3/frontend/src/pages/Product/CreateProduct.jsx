import React, { useState } from "react";
import { motion } from "framer-motion";
import { BiCartAdd } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { nanoid } from "@reduxjs/toolkit";
import { asynccreateproduct } from "../../store/actions/productAction";
import { Upload, AlertCircle, CheckCircle } from "lucide-react";

const CreateProduct = () => {
  const { register, reset, handleSubmit, formState: { errors } } = useForm();
  const [imagePreview, setImagePreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const CreateproductHandler = async (product) => {
    setLoading(true);
    try {
      product.id = nanoid();
      product.stock = parseInt(product.stock) || 10;
      product.price = parseFloat(product.price);
      
      if (!product.image && imagePreview) {
        product.image = imagePreview;
      }

      await dispatch(asynccreateproduct(product));
      
      setSuccess(true);
      reset();
      setImagePreview("");
      
      setTimeout(() => {
        navigate("/admin-dashboard");
      }, 2000);
    } catch (error) {
      console.error("Error creating product:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Card */}
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="mx-auto h-16 w-16 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <BiCartAdd className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Add New Product
            </h2>
            <p className="text-gray-600">Fill in the details below to create a new product</p>
          </div>

          {/* Success Message */}
          {success && (
            <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-2 text-green-700">
              <CheckCircle size={20} />
              <span>Product created successfully! Redirecting...</span>
            </div>
          )}

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
            onSubmit={handleSubmit(CreateproductHandler)}
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
                  defaultValue="10"
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
              
              {/* File Input with drag-drop */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                <motion.input
                  {...register("image")}
                  whileFocus={{ scale: 1.02 }}
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="cursor-pointer">
                  <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                  <p className="text-gray-600 font-medium">Click to upload image</p>
                  <p className="text-gray-400 text-sm">or paste image URL below</p>
                </label>
              </div>

              {/* Image Preview */}
              {imagePreview && (
                <div className="mt-4 relative">
                  <img 
                    src={imagePreview} 
                    alt="Preview" 
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                  <p className="text-sm text-green-600 mt-2">✓ Image selected</p>
                </div>
              )}

              {/* Or Image URL */}
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">Or enter image URL:</p>
                <motion.input
                  {...register("imageUrl")}
                  whileFocus={{ scale: 1.02 }}
                  type="url"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="https://example.com/image.png"
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-3 px-4 border border-transparent text-base font-semibold rounded-lg text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              {loading ? "Creating Product..." : "Create Product"}
            </motion.button>

            {/* Cancel Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={() => navigate("/admin-dashboard")}
              className="w-full py-3 px-4 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg font-semibold transition-all"
            >
              Cancel
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
