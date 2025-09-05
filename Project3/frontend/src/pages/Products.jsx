import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadproducts } from "../store/actions/productAction"; // adjust path

const Products = () => {
  const dispatch = useDispatch();

  // get products from redux
  const products = useSelector((state) => state.product.products);

  // load products on mount
  useEffect(() => {
    dispatch(asyncloadproducts());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-8">Products</h1>

      {/* grid for product cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products && products.length > 0 ? (
          products.map((p) => (
            <div
              key={p.id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center hover:shadow-xl transition"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-32 h-32 object-contain mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-700 truncate">
                {p.title}
              </h2>
              <p className="text-gray-500 text-sm">${p.price}</p>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Products;
