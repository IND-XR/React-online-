import { configureStore } from '@reduxjs/toolkit'
import userSlice from "../store/reducers/userSlice"
import productSlice from '../store/reducers/productSlice'
import cartSlice from '../store/reducers/cartSlice'


// eslint-disable-next-line react-refresh/only-export-components
export default configureStore({
  reducer: {                   
    userReducer: userSlice,
    ProductReducer : productSlice,
    cartReducer: cartSlice,
  },
});