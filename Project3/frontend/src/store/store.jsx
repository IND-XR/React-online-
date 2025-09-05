import { configureStore } from '@reduxjs/toolkit'
import userSlice from "../store/reducers/userSlice"
import productSlice from '../store/reducers/productSlice'
import cartSlice from '../store/reducers/cartSlice'
import productReducer from "./reducers/productSlice";

// export default configureStore({
// eslint-disable-next-line react-refresh/only-export-components
const store = configureStore({
  reducer: {                   
    userReducer: userSlice,
    ProductReducer : productSlice,
    cartReducer: cartSlice,
    product: productReducer,
  },
});

export default store;