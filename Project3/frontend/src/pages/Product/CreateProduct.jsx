import React from "react";
import { motion } from "framer-motion";
import { User , ArchiveRestore, icons } from "lucide-react";

import { ChromeIcon } from "lucide-react";



const CreateProduct = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {/* Card */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8">
          {/* Icon + Title */}
          <div className="text-center">
            <div className="mx-auto h-16 w-16 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              < ArchiveRestore className="h-8 w-8 text-white" />
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
            // }}
          >
            {/* Title */}
            <div>
              <label className="block text-gray-600 font-medium">Title</label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="title"
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter product title"
                required
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-gray-600 font-medium">Price</label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="number"
                name="price"
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
                whileFocus={{ scale: 1.02 }}
                name="description"
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
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="category"
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
                whileFocus={{ scale: 1.02 }}
                type="url"
                name="image"
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
              🚀 Create Product
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { User } from "lucide-react";
// // import {
// //   Mail,
// //   Lock,
// //   User,
// //   Eye,
// //   EyeOff,
// //   ArrowRight,
// //   AlertCircle,
// //   CheckCircle,
// // } from "lucide-react";

// const CreateProduct = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-md w-full space-y-8">
//           <div className='"bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8'>
//             <div className="text-center">
//               <div className="mx-auto h-16 w-16 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
//                 <User className="h-8 w-8 text-white" />
//               </div>
//               <h2 className="text-3xl font-bold text-gray-900 mb-2">
//                 Create your Product
//               </h2>

//               <motion.div
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50"
//               >
//                 <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
//                   <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
//                     Create Your Product
//                   </h2>

//                   {/* onSubmit={handleSubmit} */}
//                   <form className="space-y-5">
//                     {/* Title */}
//                     <motion.div whileFocus={{ scale: 1.02 }}>
//                       <label className="block text-gray-600 font-medium">
//                         Title
//                       </label>
//                       <input
//                         type="text"
//                         name="title"
//                         // value={product.title}
//                         // onChange={handleChange}
//                         className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
//                         placeholder="Enter product title"
//                         // required
//                       />
//                     </motion.div>

//                     {/* Price */}
//                     <motion.div whileFocus={{ scale: 1.02 }}>
//                       <label className="block text-gray-600 font-medium">
//                         Price
//                       </label>
//                       <input
//                         type="number"
//                         name="price"
//                         // value={product.price}
//                         // onChange={handleChange}
//                         className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
//                         placeholder="Enter product price"
//                         // required
//                       />
//                     </motion.div>

//                     {/* Description */}
//                     <motion.div whileFocus={{ scale: 1.02 }}>
//                       <label className="block text-gray-600 font-medium">
//                         Description
//                       </label>
//                       <textarea
//                         name="description"
//                         // value={product.description}
//                         // onChange={handleChange}
//                         className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
//                         placeholder="Enter product description"
//                         rows="3"
//                         // required
//                       />
//                     </motion.div>

//                     {/* Category */}
//                     <motion.div whileFocus={{ scale: 1.02 }}>
//                       <label className="block text-gray-600 font-medium">
//                         Category
//                       </label>
//                       <input
//                         type="text"
//                         name="category"
//                         // value={product.category}
//                         // onChange={handleChange}
//                         className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
//                         placeholder="e.g. Men's Clothing"
//                         // required
//                       />
//                     </motion.div>

//                     {/* Image URL */}
//                     <motion.div whileFocus={{ scale: 1.02 }}>
//                       <label className="block text-gray-600 font-medium">
//                         Image URL
//                       </label>
//                       <input
//                         type="url"
//                         name="image"
//                         // value={product.image}
//                         // onChange={handleChange}
//                         className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
//                         placeholder="https://example.com/image.png"
//                         // required
//                       />
//                     </motion.div>

//                     {/* Submit Button */}
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       type="submit"
//                       className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg transition"
//                     >
//                       🚀 Create Product
//                     </motion.button>
//                   </form>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateProduct;
