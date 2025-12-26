import React from "react";
import { motion } from "framer-motion";
import { User , ArchiveRestore, icons } from "lucide-react";
import { BiCartAdd } from "react-icons/bi";
import { ShoppingCart } from "lucide-react";
import { ChromeIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { nanoid } from "@reduxjs/toolkit";
import { asynccreateproduct } from "../../store/actions/productAction";

const CreateProduct = () => {

  const { register , reset , handleSubmit} = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const CreateproductHandler = (product) =>{
  product.id = nanoid();
  // product.isAdmin = false ;
    // dispatch(asyncregiterusers(product));
    
      // send to backend + redux

    dispatch(asynccreateproduct(product));

  console.log("✅ Product created:-",product);

  reset();
    navigate("/Products")
  }



  return (
    <div className=" w-3xh min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-200 w-full">
               {/* <div className="max-w-md w-full"> */}

        {/* Card */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8">
          {/* Icon + Title */}
          <div className="text-center">
            <div className="mx-auto h-16 w-16 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <BiCartAdd className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Create your Product
            </h2>
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
            // onSubmit={(e) => {
            //   e.preventDefault();
            //   alert("✅ Product Created!");
            onSubmit={handleSubmit(CreateproductHandler)}
            
          >
            {/* Title */}
            <div>
              <label className="block text-gray-600 font-medium">Title</label>
              
              <motion.input
                {...register("title")}
                whileFocus={{ scale: 1.02 }}
                type="text"
                // name="title"
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter product title"
                required
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-gray-600 font-medium">Price</label>
              <motion.input
              {...register("price")}
                whileFocus={{ scale: 1.02 }}
                type="number"
                 step="0.01"
                // name="price"
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter product price"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-600 font-medium">
                Description
              </label>
              <motion.textarea
              {...register("description")}
                whileFocus={{ scale: 1.02 }}
                // name="description"
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter product description"
                rows="3"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-gray-600 font-medium">Category</label>
              <motion.input
              {...register("category")}
                whileFocus={{ scale: 1.02 }}
                type="text"
                // name="category"
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="e.g. Men's Clothing"
                required
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-gray-600 font-medium">
                Image URL
              </label>
              <motion.input
              {...register("image")}
                whileFocus={{ scale: 1.02}}
                type="url"
                // name="image"
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="https://example.com/image.png"
                required
              />
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Greate Product
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
