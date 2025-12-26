import { configureStore } from '@reduxjs/toolkit'
import userSlice from "../store/reducers/userSlice"
import productSlice from '../store/reducers/productSlice'
import cartSlice from '../store/reducers/cartSlice'
import wishlistSlice from "./reducers/wishlistSlice"

const store = configureStore({
  reducer: {                   
    user: userSlice,
    product: productSlice,
    cart: cartSlice,
    wishlist: wishlistSlice,
  },
});

export default store;